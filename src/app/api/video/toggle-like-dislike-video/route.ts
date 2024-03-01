import getVideo from "@/lib/firebase/utils/getVideo";
import {doc, updateDoc} from "@firebase/firestore";
import {db} from "@/lib/firebase/firebase";

export async function POST(req: Request) {
    const body = await req.json()
    const {user, videoId, action} = body
    const videoRef = doc(db, 'videos', videoId)
    const userEmail = user.userData.email

    try {
        if (userEmail) {
            const video = await getVideo(videoId)

            if (video) {
                let updatedLikes = video.likes
                let updatedDislikes = video.disLikes

                if (action === 'like') {
                    const isUserLikedVideo = video.likes.includes(userEmail)

                    if (!isUserLikedVideo) {
                        updatedLikes.push(userEmail)
                    } else {
                        updatedLikes = updatedLikes.filter(email => email !== userEmail);
                    }
                    updatedDislikes = updatedDislikes.filter(email => email !== userEmail);

                } else if (action === 'dislike') {
                    const isUserDisLikedVideo = video.disLikes.includes(userEmail)

                    if (!isUserDisLikedVideo) {
                        updatedDislikes.push(userEmail);
                    } else {
                        updatedDislikes = updatedDislikes.filter(email => email !== userEmail);
                    }
                    updatedLikes = updatedLikes.filter(email => email !== userEmail);
                } else return

                const videoToFetch = {
                    ...video,
                    likes: updatedLikes,
                    disLikes: updatedDislikes,
                }

                await updateDoc(videoRef, videoToFetch)
                const updatedVideo = await getVideo(videoId)

                return new Response(JSON.stringify({updatedVideo}), {
                    status: 200,
                    headers: {'Content-Type': 'application/json'}
                })
            } else {
                return new Response(JSON.stringify({error: 'Not Found Video'}), {
                    status: 404,
                    headers: {'Content-Type': 'application/json'}
                })
            }
        } else {
            return new Response(JSON.stringify({error: 'Unauthorized'}), {
                status: 401,
                headers: {'Content-Type': 'application/json'}
            })
        }
    } catch (error) {
        return new Response(JSON.stringify({error: error}), {
            status: 500,
            headers: {'Content-Type': 'application/json'}
        })
    }
}