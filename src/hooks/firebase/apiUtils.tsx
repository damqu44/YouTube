export const fetchVideosAndChannels = async () => {
    try {
        const [videosResponse, channelsResponse] = await Promise.all([
            fetch('https://fir-4b238-default-rtdb.europe-west1.firebasedatabase.app/Videos.json'),
            fetch('https://fir-4b238-default-rtdb.europe-west1.firebasedatabase.app/Channels.json'),
        ]);

        if (!videosResponse.ok || !channelsResponse.ok) {
            throw new Error('Error fetching data!');
        }

        const videosData = await videosResponse.json();
        const channelsData = await channelsResponse.json();

        return { videosData, channelsData };
    } catch (error: unknown) {
        if (error instanceof Error) {
            throw new Error(error.message);
        } else {
            throw new Error('An unknown error occurred.');
        }
    }
};