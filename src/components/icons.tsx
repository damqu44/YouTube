import {AvatarIcon, ImageIcon} from "@radix-ui/react-icons"
import React from "react";

type IconProps = React.HTMLAttributes<SVGElement>

export const Icons = {
    logo: (props: IconProps) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <circle cx="7" cy="15" r="2"/>
            <circle cx="17" cy="15" r="2"/>
            <path d="M3 9a2 1 0 0 0 2 1h14a2 1 0 0 0 2 -1"/>
        </svg>
    ),
    nextjs: (props: IconProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <path
                fill="currentColor"
                d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z"
            />
        </svg>
    ),
    gitHub: (props: IconProps) => (
        <svg viewBox="0 0 438.549 438.549" {...props}>
            <path
                fill="currentColor"
                d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
            ></path>
        </svg>
    ),
    google: ({...props}: IconProps) => (
        <svg role="img" viewBox="0 0 24 24" {...props}>
            <path
                fill="currentColor"
                d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
            />
        </svg>
    ),
    twitter: (props: IconProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <path
                fill="currentColor"
                d="M21.543 7.104c.015.211.015.423.015.636 0 6.507-4.954 14.01-14.01 14.01v-.003A13.94 13.94 0 0 1 0 19.539a9.88 9.88 0 0 0 7.287-2.041 4.93 4.93 0 0 1-4.6-3.42 4.916 4.916 0 0 0 2.223-.084A4.926 4.926 0 0 1 .96 9.167v-.062a4.887 4.887 0 0 0 2.235.616A4.928 4.928 0 0 1 1.67 3.148a13.98 13.98 0 0 0 10.15 5.144 4.929 4.929 0 0 1 8.39-4.49 9.868 9.868 0 0 0 3.128-1.196 4.941 4.941 0 0 1-2.165 2.724A9.828 9.828 0 0 0 24 4.555a10.019 10.019 0 0 1-2.457 2.549z"
            />
        </svg>
    ),
    facebook: ({...props}: IconProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
            <path
                fill="currentColor"
                d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
            />
        </svg>
    ),
    discord: ({...props}: IconProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
            <path
                fill="currentColor"
                d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"
            />
        </svg>
    ),
    spinner: (props: IconProps) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
        >
            <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
        </svg>
    ),
    cart: (props: IconProps) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
        >
            <circle cx="8" cy="21" r="1"/>
            <circle cx="19" cy="21" r="1"/>
            <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>
        </svg>
    ),
    product: (props: IconProps) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
        >
            <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/>
            <path d="M3 6h18"/>
            <path d="M16 10a4 4 0 0 1-8 0"/>
        </svg>
    ),
    store: (props: IconProps) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
        >
            <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"/>
            <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/>
            <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"/>
            <path d="M2 7h20"/>
            <path
                d="M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7"/>
        </svg>
    ),
    credit: (props: IconProps) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
        >
            <rect width="20" height="14" x="2" y="5" rx="2"/>
            <line x1="2" x2="22" y1="10" y2="10"/>
        </svg>
    ),
    dollarSign: (props: IconProps) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
        >
            <line x1="12" x2="12" y1="2" y2="22"/>
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
        </svg>
    ),
    bot: (props: IconProps) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
        >
            <path d="M12 8V4H8"/>
            <rect width="16" height="12" x="4" y="8" rx="2"/>
            <path d="M2 14h2"/>
            <path d="M20 14h2"/>
            <path d="M15 13v2"/>
            <path d="M9 13v2"/>
        </svg>
    ),
    shirt: (props: IconProps) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
        >
            <path
                d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"/>
        </svg>
    ),
    footprints: (props: IconProps) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
        >
            <path
                d="M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z"/>
            <path
                d="M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z"/>
            <path d="M16 17h4"/>
            <path d="M4 13h4"/>
        </svg>
    ),
    robot: (props: IconProps) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
        >
            <rect width="18" height="10" x="3" y="11" rx="2"/>
            <circle cx="12" cy="5" r="2"/>
            <path d="M12 7v4"/>
            <line x1="8" x2="8" y1="16" y2="16"/>
            <line x1="16" x2="16" y1="16" y2="16"/>
        </svg>
    ),
    signout: (props: IconProps) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            focusable="false"
            {...props}
        >
            <path d="M20 3v18H8v-1h11V4H8V3h12zm-8.9 12.1.7.7 4.4-4.4L11.8 7l-.7.7 3.1 3.1H3v1h11.3l-3.2 3.3z"/>
        </svg>
    ),
    switchacc: (props: IconProps) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            focusable="false"
            {...props}
        >
            <path
                d="M4 20h14v1H3V6h1v14zM6 3v15h15V3H6zm2.02 14c.36-2.13 1.93-4.1 5.48-4.1s5.12 1.97 5.48 4.1H8.02zM11 8.5a2.5 2.5 0 015 0 2.5 2.5 0 01-5 0zm3.21 3.43A3.507 3.507 0 0017 8.5C17 6.57 15.43 5 13.5 5S10 6.57 10 8.5c0 1.69 1.2 3.1 2.79 3.43-3.48.26-5.4 2.42-5.78 5.07H7V4h13v13h-.01c-.38-2.65-2.31-4.81-5.78-5.07z"/>
        </svg>
    ),
    youtube_studio: (props: IconProps) => (
        <svg xmlns="http://www.w3.org/2000/svg"

             viewBox="0 0 24 24"
             focusable="false"
             {...props}
        >
            <path
                d="M10 9.35 15 12l-5 2.65ZM12 3a.73.73 0 00-.31.06L4.3 7.28a.79.79 0 00-.3.52v8.4a.79.79 0 00.3.52l7.39 4.22a.83.83 0 00.62 0l7.39-4.22a.79.79 0 00.3-.52V7.8a.79.79 0 00-.3-.52l-7.39-4.22A.73.73 0 0012 3m0-1a1.6 1.6 0 01.8.19l7.4 4.22A1.77 1.77 0 0121 7.8v8.4a1.77 1.77 0 01-.8 1.39l-7.4 4.22a1.78 1.78 0 01-1.6 0l-7.4-4.22A1.77 1.77 0 013 16.2V7.8a1.77 1.77 0 01.8-1.39l7.4-4.22A1.6 1.6 0 0112 2Zm0 4a.42.42 0 00-.17 0l-4.7 2.8a.59.59 0 00-.13.39v5.61a.65.65 0 00.13.37l4.7 2.8A.42.42 0 0012 18a.34.34 0 00.17 0l4.7-2.81a.56.56 0 00.13-.39V9.19a.62.62 0 00-.13-.37L12.17 6A.34.34 0 0012 6m0-1a1.44 1.44 0 01.69.17L17.39 8A1.46 1.46 0 0118 9.19v5.61a1.46 1.46 0 01-.61 1.2l-4.7 2.81A1.44 1.44 0 0112 19a1.4 1.4 0 01-.68-.17L6.62 16A1.47 1.47 0 016 14.8V9.19A1.47 1.47 0 016.62 8l4.7-2.8A1.4 1.4 0 0112 5Z"/>
        </svg>
    ),
    youtube_premium: (props: IconProps) => (
        <svg xmlns="http://www.w3.org/2000/svg"
             viewBox="-2 -2 24 24"
             version="1.1" focusable="false"
             {...props}
        >
            <path
                d="M 0 1.4375 C 0 0.644531 0.644531 0 1.4375 0 L 18.5625 0 C 19.355469 0 20 0.644531 20 1.4375 L 20 18.5625 C 20 19.355469 19.355469 20 18.5625 20 L 1.4375 20 C 0.644531 20 0 19.355469 0 18.5625 Z M 0 1.4375 "
                fill="#CC0000"/>
            <path
                d="M 7.886719 11.421875 L 7.886719 15.714844 L 5.375 15.714844 L 5.375 3.527344 L 10.128906 3.527344 C 11.042969 3.527344 11.847656 3.695312 12.542969 4.027344 C 13.238281 4.363281 13.769531 4.839844 14.144531 5.457031 C 14.519531 6.074219 14.707031 6.773438 14.707031 7.5625 C 14.707031 8.753906 14.296875 9.695312 13.480469 10.386719 C 12.664062 11.074219 11.53125 11.421875 10.085938 11.421875 Z M 7.886719 9.386719 L 10.128906 9.386719 C 10.792969 9.386719 11.300781 9.230469 11.648438 8.917969 C 11.996094 8.605469 12.171875 8.160156 12.171875 7.578125 C 12.171875 6.980469 11.996094 6.5 11.644531 6.128906 C 11.292969 5.761719 10.804688 5.574219 10.1875 5.5625 L 7.886719 5.5625 Z M 7.886719 9.386719 "
                fill="#FFF" fill-rule="nonzero"/>
        </svg>
    ),
    youtube_music: (props: IconProps) => (
        <svg xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 24 24"
             focusable="false"
             {...props}
        >
            <circle fill="#FF0000" cx="12" cy="12" r="10"/>
            <polygon fill="#FFFFFF" points="10,14.65 10,9.35 15,12 "/>
            <path fill="#FFFFFF"
                  d="M12,7c2.76,0,5,2.24,5,5s-2.24,5-5,5s-5-2.24-5-5S9.24,7,12,7 M12,6c-3.31,0-6,2.69-6,6s2.69,6,6,6s6-2.69,6-6 S15.31,6,12,6L12,6z"/>
        </svg>
    ),
    youtube_music_white: (props: IconProps) => (
        <svg xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 24 24"
             focusable="false"
             {...props}
        >
            <path
                d="M10 9.35 15 12l-5 2.65zM12 7a5 5 0 105 5 5 5 0 00-5-5m0-1a6 6 0 11-6 6 6 6 0 016-6zm0-3a9 9 0 109 9 9 9 0 00-9-9m0-1A10 10 0 112 12 10 10 0 0112 2z"/>
        </svg>
    ),
    youtube_kids: (props: IconProps) => (
        <svg xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 24 24"
             focusable="false"
             {...props}
        >
            <path fill="#FF0000"
                  d="M21.39,13.19c0-0.08,0-0.15,0-0.22c-0.01-0.86-0.5-5-0.78-5.74c-0.32-0.85-0.76-1.5-1.31-1.91 c-0.9-0.67-1.66-0.82-2.6-0.84l-0.02,0c-0.4,0-3.01,0.32-5.2,0.62C9.28,5.4,6.53,5.8,5.88,6.04c-0.9,0.33-1.62,0.77-2.19,1.33 c-1.05,1.04-1.18,2.11-1.04,3.51c0.1,1.09,0.69,5.37,1.02,6.35c0.45,1.32,1.33,2.12,2.47,2.24c0.28,0.03,0.55,0.05,0.82,0.05 c1,0,1.8-0.21,2.72-0.46c1.45-0.39,3.25-0.87,6.97-0.87l0.09,0h0.02c0.91,0,3.14-0.2,4.16-2.07C21.44,15.12,21.41,13.91,21.39,13.19 z"/>
            <path fill="#000"
                  d="M21.99,13.26c0-0.08,0-0.16-0.01-0.24c-0.01-0.92-0.54-5.32-0.83-6.11c-0.34-0.91-0.81-1.59-1.4-2.03 C18.81,4.17,17.99,4.02,17,4l-0.02,0c-0.43,0-3.21,0.34-5.54,0.66c-2.33,0.32-5.25,0.75-5.95,1C4.53,6.01,3.76,6.48,3.16,7.08 c-1.12,1.1-1.25,2.25-1.11,3.74c0.11,1.16,0.73,5.71,1.08,6.75c0.48,1.41,1.41,2.25,2.63,2.38C6.06,19.98,6.34,20,6.63,20 c1.07,0,1.91-0.23,2.89-0.49c1.54-0.41,3.46-0.93,7.41-0.93l0.1,0h0.02c0.97,0,3.34-0.21,4.42-2.2 C22.04,15.32,22.01,14.03,21.99,13.26z M20.59,15.91c-0.82,1.51-2.75,1.68-3.56,1.68l-0.1,0c-4.09,0-6.07,0.53-7.67,0.96 C8.31,18.8,7.56,19,6.63,19c-0.25,0-0.5-0.01-0.76-0.04c-1.04-0.11-1.54-0.99-1.79-1.71c-0.3-0.88-0.91-5.21-1.04-6.53 C2.9,9.25,3.1,8.54,3.86,7.79c0.5-0.5,1.15-0.89,1.97-1.19c0.17-0.06,1.1-0.32,5.74-0.95C14.2,5.29,16.64,5.01,16.99,5 c0.83,0.02,1.43,0.13,2.17,0.69c0.43,0.32,0.79,0.86,1.06,1.58c0.22,0.58,0.76,4.78,0.77,5.77l0.01,0.25 C21.01,13.96,21.04,15.08,20.59,15.91z"/>
            <path fill="#000"
                  d="M11.59,14.76c-0.48,0.36-0.8,0.45-1.01,0.45c-0.16,0-0.25-0.05-0.3-0.08c-0.34-0.18-0.42-0.61-0.5-1.2l-0.01-0.1 c-0.04-0.31-0.26-2.1-0.38-3.16L9.3,9.94C9.26,9.66,9.2,9.19,9.54,8.94c0.32-0.23,0.75-0.09,0.96-0.03c0.53,0.17,3.6,1.23,4.59,1.73 c0.21,0.09,0.67,0.28,0.68,0.83c0.01,0.5-0.38,0.74-0.53,0.82L11.59,14.76z"/>
            <path fill="#FFF"
                  d="M10.3,9.89c0,0,0.5,4.08,0.51,4.19c0.06-0.04,3.79-2.58,3.79-2.58C13.71,11.07,11.07,10.14,10.3,9.89z"/>
        </svg>
    ),
    youtube_logo: (props: IconProps) => (
        <svg xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 376 263"
             {...props}
        >
            <image id="Warstwa_1" data-name="Warstwa 1" width="376" height="263"
                   href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXgAAAEHCAYAAACk6V2yAAAYNUlEQVR4nO3dWXNcx3nG8afPgLJFYuMmUrIpipQdL5HlpVKV5CJX+Sr5AKlUJbaUqpRjlUVtFClZlrhZiq0liZNKla9ylavc5CI3KUrihmUAcMFGEsAAoERiTqe6+xwS4oqlz8ycM/+fzZJturgMgGdevOftt81N7RO6mu32F6DiTLe/AN2sp9tfgA5H+GKzWvU5xBtJByLg4yOU0Y1ift7zZhEJAX8vAhpor81+DfIGkalywBPUQHfayNd+Jd8UqhDwBDmAzXpYjpQ2/MsY8AQ6gFa6O3NKE/hlCHgCHUAnWZ1JHR32nRzwBDuATtfRYd9pAU+oAyirPL86Jug7JeAJdgBV0TFBn7T7D0C4A6go2+58a2cFT7AD6AZtq+jbUcG3/V0NANqg5bnX6oAn2AF0s5YWuK0KeKp2ALijJXnYioAn2AHgXoVnY9EBT7gDwIMVmpFFBjzhDgCPVlgLu6iAJ9wBYH2i52YRAU+4A8DGRM3P2AFPuAPA5kTL0ZgBT7gDQBxR8jRWwBPuABDXpnM1RsAT7gDQgTYb8IQ7ABRnUxm7mYAn3AGgeBvO2k7YBw8AeLgNhfxGA57qHQA63EYCnnAHgNZbd/bSogGA8lhXyK834KneAaAk1hPwhDsAtN+as5gWDQCUz5pCfq0BT/UOACVDBQ8A5fTIwnstAU/1DgAlRAUPAOX10AL8UQFP9Q4AJUUFDwDl9sBC/GEBT/UOACVGBQ8AFUXAA0D53bfj8qCApz0DACVHBQ8AFUXAA0A13NN5IeABoKLuF/D03wGgAqjgAaCiCHgAqI6vdGAIeACoqLsDnv47AFQEFTwAVBQBDwAVRcADQLXcbrUT8ABQUQQ8AFQUAQ8AFbU64BmRBIAKoYIHgIoi4AGgogh4AKgoAh4AKoqAB4CKIuABoKIIeACoKAIeACqKgAeAiiLgAaCiCHgAqCgCHgCqx+8WI+ABoKIIeACoKAIeACqKgEdBjJQkkjG8wECb9PDCIzqTSNsel+ndJnvzprS4JK00JZuG34mrZYCWoIJHfO6zavdOJX/zVzJ//icyf/SszI5BqWdLqOip6oGWoIJHfC7A+7fJ/OA76vnLv1B68bLSD/5VZqguXZqWnW9ItskLDxSMgEcBTCjSBwelbz8js/8p1Q7ul4brar79vszpc7LzC1nbxoYfAKIj4FGA0IYxPYn09cdktn1N6tsm7d6h2o5eNQ+fkrkwLk1flV2Yl1ZSgh4oQB7wfGUhHmP9J5RNEhlXyic90mPWB7x57DnVDr0gjU0offcTaXhMdmpaWmhIzbyi52MBxEAFj0IkSe2uh6kmPHzt75Pp2yrt2aNk/35pdFzN4x9KQ+Mh6OcWpbRJNQ9EQMCjGImRcSF9d8jXXGlfk7b3hqB/apd6DuxTOlKXffOU0tNnpa/05/n4ABtFwCOuPM+NkVUic7+E9qFvpC2J1N8vbetVsnenbH+/7OvvSaMTspMz0lwjVPMpKQ9sBAGPuLIsduHuWzKPymYX9j01H/TmB99V7bW/l0bG1HzvI9n6hMxlN1a5GPrzlPPAuhDwiC/JKne7jkNNrmc/0OdPv2rvbvUceEbpsGvbnJQ+Oy87NyfdSsNpWEPWA2tBwCM+v5HAJXAzhPxa+P9bVs0P9Eu9vUqe3Cm7vV/NV96TGZmQZqdlry+GQ1LNlJAHHoGAR1y+uraytiZjahsrtVe3bZ4LbRs7Vpd990NpeFx2+qq0sCitrNCfBx6CgEdcLm9rRjZJteleittG2dcr8+1tMk/tlj3wTBir/PXv/D/l+vMLeX8ewN0IeMSVVfCJNVkLfpP77BITfvS5/vxW35+vHXha1h2QOnxc9vS5cEjqFmsPgLuxTRJxZT131zkxLpiVxvnlk+xErGvbPLtf5s9+ouQXfyvzpz+RvnVAZueAVOvx3z0ACKjgEZnNDq02fXMmatzmv1hPTWZwQHr+u+p54wWloxeVvvuhzMi4NDkr28j785HeXICSIuARnzVKZZTo7pOssWRrD1zL5tmDSvbsldn/tDRSV/PYxzIjY6E/38jXHvAxRnci4BGfv7nJhXst9GqKagS6/r77DB7sldm2VXpyV+jPD40qfesDya09cPPzK/lIJUmPrmIJeMTnHq66h6w2lUla8ZjHrT3IDkpt2yqzZ6c02C97+ITs0Jg0PSM7vyQ1GatEdyHgEZ8L98RvDQ7PWFv1KN9X9Im0vV/J89+TPfRTPzefnvgkzM/7tcRLoaKP9fAX6GAEPCIz2SZJt6zAtv76Vb/HLDsktW2btGevkgP7ZUfHZY9/LOuuDZx0/fklHsKi8gh4RGZXrSrI5iVrrX6Ns4ewpkfa0S/Tv0166gmZg/tkXSV/5KTs6fPSQraWWKwlRjUR8IjPpH7ZmPEnndr4+ub7bbb0yAyG/TZmz26lA70yb5yShkdkr8xIS0vZ/nm2mKFaCHjElYWqNasOOUUfiN8A97D3MRP68z/8vsyrrj8/ofTY72SHJ2RnZqTFJelmMzw8IOdRAQQ84ro7GJM2V/FfkZ2GdRW878/vVnLgm7Kjl5Qe+1B2uC5dyYLest8G5UfAIz67auy8yDn4jfBvNjVpi5UGB2X6+6Qn96p24BuyI3Wlb74v++k5abEhfZlfMkI5j3Ii4FEc19Pu2GzM7odNajLb+6T+rTJP7Jb5x3413zgpuWVm7tpAP23D/DzKiYBHXNl1q75Qdidakw4PRpPdOuVaSTsGZZ7/nmqv/EwaGVd6/BNZt/ZgMrs20LL2AOVCwCOu/AYnH5plSkMTNlEO9sv0ubHK3UoOPi0N1dV8632ZT8+EkOeSEZQIAY/IbHbQyYYjrGu9sq8T+D9qdhp2cECmt1fas0u1wT41j/xGcmsPrkxLfonZitQk6NHZCHjE5Sr31J9hDasKysqtPdhiQtD/6Dn1HHrBH5JqnvjIb6308/OuP+9uk+JELDoUAY/IbPZvK+sq+VK/vPndsL3S1selJ3er9uw3s7UHH/n5eVfR2/kGa4nRkQh4xGVXPbisSuL5S8B7ZAb6Jb+WeI/Mwf3SBdefPyVz+pzs9XmpmVLNo6P0MOSL6GzYR2PK1H9/lNW3SQ30haB/Yqdq2wfVfP09GT9WORv68/ltUmw+QJtRwSOyUL0bZQecqnZFar4es8fdDzsg8/x3VHv1Rf8Atnn8Q2lkQnZyOuvPr3DRCNqKgEdkd67p8z34qmab+yu6aZvePplvbQ3TNs+G26TsiX/2D2Q1OSW70GDaBm1DwCMuv2MsDTWr28ve8oXwLZaE07AaCGuJzd5dsgefkYbrSo+eCmuJ5+ezbZUEPVqLgEdc2eoWNwdvkzZc+NEuiQlfTm6ssq9X2rtDyeBfyx4+5R/GamomXDLi+vPsn0eLEPCIL7HhPlZXwXdbkrl3tFotLDJ7/o/V8/JPZd3agxMfyw6P+aD3++dvrrB/HoUj4FEIo0TGmAo+ZV2DPOTdTVKPH5R58gklB55WUh9X8/jHvn1jr8xKrj9vqeZRHAIeceV57lo0/r92YcDnXG/+MUlb3Frirf7awNqB/NrA3yj97Iw01wiXgFvWEiM+Ah5x5Tllm+HS7W7PrPybmGSLNBD68+7aQDvQKx05JXu+Ljs7G4LenYZNqegRDwGP+JIspGpJtlGyi6v427L987WesJb4h99X8vLf+bn5Zr72wO+fX8zm5+nPY/MIeMTXTMIueGXrg8n3r3ITN/19Mu407J49qj2zTxq9GBaZuROxbpHZwmKo6IFNIOBRCGOSsKqgk67r6xjZBSNuY+X2AZmB0J/vOfi0vxd2xa0mdtcGzs2HtcS057FBBDwKYP1DQ5dfokPzYCZffbDFj1Wqt9cflKr19yn1++fr4TapRiObnyfosT4EPOIyoS0Tis4kXPzRNaedNijJXp8tPf5GqeTH35M59FPfrnHz83JTN1NT0vwia4mxLgQ84rLZVX0+2FPK9/W4PT/fL7PV3Sblrg3cF/bbvP2BrFtLPL8Q1h6wlhhrQMAjPp/pZtUkCCG/Li7o/W1SvWG/zZ5dfsRy5cgJGV/NX5UWFqRbTebn8VAEPOKzq3KdbN+gJBurlLR9UPrR91U79KLsSF3piU+k0QnZ6Rlpzu23uUVFj/si4BGZvXObk2VMMgp3nmAgH6vc5ccq3V6b9Lf/Ll1wF424scp5Wje4BwGP+G6vC6ZFE41v2/TI7OiX+txa4t0y+76h9NyI7Ef/IX16Rrp6XfryZtg/bwl6EPAoxOreDIPwUbnZU9ef3+HGKrcp2b3T9+ntJ3+QPT8sXZqSnZuTvlwJIc8O+q5GwKMA/taP7Jelgo8u29JpvvaYtGeH9OPnZHZsl84NKf3P/5I+G5aduCQtLhPwXY6AR3w2WxdMuBQnn1Tq6ZHZtV3a+rjsDnerVL/M//6fmh/8XlpcquhfHmvF98+Iz1i/SdImiVgnWSD3QNX9WFmRXVqUvTYns9hQ+t//I924kY2poptRwSMu1z4wbgu8DeFDxsTn3jPdg9RbX4ZLvS9Oy46OKf34D9KFEenSZKjeedDa9Qh4xOXbMtkUjR+VZEwyKh/uqTS/IDs5KXuhrvT9f/NLytzemrBuOA175dH1CHhElp1gza/rc0FTI+E3LX+ecWvFb5lMPzun9M3fSCMjYb1wYzl8x8QVgFiFgEdk/gmrXxccBmgI901zoe22SbplY1MzSusTSl/+lfT5sGxjKawUXj24BGQIeMTnKnh7p4jHBrkeuruvtTEvO3lVGr+s5uGT0ui4ND0ru3Qjm3VnHQ3uj4BHXPnpVaM77QJCfn3c65ZaWbd+4MqsVJ9Q8+hJaeSS7PSsdGNZWqFkx6MR8IjLrtoyZlkXvD42TMe4lsv8kuyn55Ue+pU0NCY7fVVavpHtmqFcx9oQ8IjLhDl44+ff3TGLFT7NHsUX4mmYfllYlJ2alcYuKv3Fm7Kfj0hLS3ceoALrwFce4spz3RhZF/SWs3SPtuLX/tpJ1465qJUjx6SRi77PruUlOjHYMAIe8dkku+uD6/oeLPTZ/Ypfd0vTmQtKX3pbdmQiBPuNL6Vms1P/8CgJAh5xmTD94bPddxR4ynpHPqOeSrfcdMxSuLTDTcf8w+vSmRHZpWxBGO0YREDAIy5/yCkJOS9LAX+be4CqcGn2woK/ds9evKz00K+l+qXQd7/xBQ9QERUBj8jyyyasW2grpSZcO9fN0mwxmH+AOi07dkn21eOyY+PS7DXZRRfstGMQHwGPuPI1tspOsiZdXsK7Pru7HNsdVjozrPTnR/1iMM1clV3+giv2UCgCHnGFu/pCIe+3BafhFqJu40+hWqnRkJ2ZkcauqPnia7LnR8I8u2UhGIpHwKMAYR+8sab7rhxws+zNldCOmbnmb1ZqvvKOzPAl2WvXJKp2tBABjwJYmcSEkPcN6C4J+TQsBPPz7OOX1HztPak+LrmgX/4y9NnJdrQQAY9i2HynSsXzPR9pdDPrcwuynw+p+cu3Q5996pq0xHoBtA8Bj/jMnXn4yob77Xn2lWyefVYavaTmS0f8w1R/o1KTYEd7EfAojHEjklU8sOMqclexu3aMO6hUv6T0rVNKhyakqWnpiy+ycAfaqyevtfg4ICZrTHbfR4XGJG12UMn32Sf9vpj0nX+SHR4PFfzicvh5oENQwSO+/CYnq3xfQflle2OsO4X66Vmlrx+TLoxLU7Oyy8vhxiVO7aLDEPCIL7v0w0/QpEm5T7L6eXZXtTf8egG37bH5y6PS2SHfe/f72/M2FN8Ho8MQ8CjA6gs/SrpszIZeu6vYNZn12d84Llu/KM24dswX2d8P6FwEPApglbjxmabK+ZDVtWNcL/16w6/xXXnpiDTq1vhelRZvZH8nynV0PgIeBXCXfaSySsuzTTK/Vcm1YxbddMx16eJlNX92SHLrBZZcxd4k11EqBDwK4PrvSaiEO72Czw8quQeojWWZ2atK3Rrfnx+R3NbHq9elGzcIdpQSAY/ITHjIarIbizq9gncPSd1kzPSs7MSUmi8d9cGuq27b481QtQMlRcAjPmtDwZt0aqs6e/Nxh5HmGkrPXJD9+ZtK3XqBWbcQ7Cbz7KgEAh4FMP4xa1iH22EJ74LbnUSdc9seZ6WJy0pffFX2fF1y1+W5n2OeHRVBwCOycBmrz0g/atgJabnqguuF/B7Ui/6wkh29GE6hLq+6Lo9+OyqCgEchbH51X7tPsmbz7K4VY69MSeNXlB495bc9+oNLbtsj0zGoKAIecZlVqwrUzjNO2arilRXZuYb06Vk13zguDY/JXnYLwZazeXeSHdVFwCOuLC+Nv9EpDff2tVoz2/a40PDtGN+GOfRr2TMX/MqBUoxvAhEQ8IjPhjND7kGrD/lWLaO5vcZ3QZq6qnR0XOl7H0oXxmSvuD57g4odXYWARyGs672vbtUUyf0+/gRqw7df7OhECPaRuqzbI9NY5lYldCUCHvH5KRr3r6IfXmY9dBfe1xeUfnZW6eETfo2vnZyW3BpfdwG25coDdCVDwCM+Pzxj/aUfpogpmvy+15VbfuxR07NKR8ZkX3nXLwezC9l1ebe3PRLu6E4EPOJLjB9/T6Kv083n2dNsvcBV2ZFxpe/8VqqPy16Z8YvC6LMDAQGP+FIr40O2Fg46xVoJ76py/wB1VunQmNJjrs8+IV2ekl1aChU7K9qB2wh4xGeyKz/8sf/8sNMmEj4/hTo3L3v6rJpvnZSGs4q9sZi1Y6jagbsR8IjPDdAkRjZJsljfYLi7Nwj3w82uT07JDmfrBc6ck+aXwl4Za2mxAw9AwCM+93BVea5vZAY+77MvSlfcQaVRpcc+Vjo07oNei9lDVAAPRcAjsqxatyZcum2a2d7gtVTx+RrflbDt8fRZpUdPKh2qS5dmJNdnT2nHAGtFwCOysE3SXdfnxyStWUO4r5qOaTTC4aThMaWvHw/rBRYa4ee45BpYFwIekZlwsChZw6rgfJ493xszNRPGHt/9yP/TXLkiu/hFCHaqdmDdCHhEZrM7Wc2DH4Ba3bnSb96t8Z2WHarLnnDBfjGcQl1ckvWXcxDswEYR8IjPGNnU3G7X3JH95zTcrGSvzfs1vulbp2TdA1QX9I2szx62lQHYBAIe8dlsnaRWtWFM9j+t3JTmlvx1eXZ4TM3DJ2Q+Oyfrxh793hhSHYglD3i2MSGuZhpyPclOst68Jc0vyk7Nyo7WZU/9i2/L6PKkbINblYAiUMEjLnNnL7upGenWSjhtOjkd1gu8/3tpZCysF1jITqHSZwcKQcAjLp/VLthvhUetjYbSM0Oyb78ve2E8VOzuoNIt2jFA0Qh4xJda2flFmclp2dk5pa+8I/v5kG/RqHmLYAdaxNzUvvx34qsOkRjp61+TdgzKbKnJzi1It6djALSIIeBRjDvLaLLPLD69gBbjRicUhFAH2i7hQwAA1UTAA0BFEfAAUFEEPABUFAEPANXjR9gIeACoKAIeACqKgAeAiiLgAaCiCHgAqCgCHgAqioAHgIoi4AGgogh4AKgoAh4AKmp1wBs+yABQHVTwAFBRBDwAVBQBDwAVRcADQEUR8ABQLbcHZgh4AKgoAh4AKurugGcWHgAqggoeACqKgAeA6vhKF4aAB4CKul/A04cHgAqgggeAiiLgAaAa7um+EPAAUFEPCnj68ABQclTwAFB+9y3KHxbwVPEAUGJU8ABQUQQ8AJTbA7stjwp42jQAUFJU8ABQXg8twtcS8FTxAFBCVPAAUE6PLL7XGvBU8QBQMlTwAFA+ayq61xPwVPEA0H5rzuL1VvCEPACUBC0aACiPdRXZGwl4qngAaL11Z+9GK3hCHgA6HC0aAOh8GyqqNxPwVPEAULwNZ+1mK3hCHgCKs6mMjdGiIeQBoAPF6sET8gAQ16ZzNeZDVkIeAOKIkqexp2gIeQDYnGg5WsSYJCEPABsTNT+LmoMn5AFgfaLnZpEHnQh5AHg0U1ReFn2SlZAHgAcrNCNbsaqAkAeAexWeja3aRVPYtyAAUEItycNWLxsj5AF0s5YWu+3YJkk1D6AbtTz3etr4Iud/WdvGPwMAFK1tBW0n7IOnmgdQRW3vVrSzgl+Nah5AVXRM0dopAZ9b/cIQ9gDKpOO6EZ0W8KtR1QPodB3dYu7kgM9R1QPoJKV5bliGgF/t7heWwAdQtNIOgpQt4O/2sBee8AewVpWc5it7wD/Mej9gvCEA1dL1I9hVDvj14g0B6FxdH9YbQcBv3GY+4XhzQDcipFuMgG+PWJ/ovFGgFQjmkiLgy63oLzzeQMqBAMa9JP0/Uz53UM/yAAIAAAAASUVORK5CYII="/>
        </svg>

    ),
    dolar: (props: IconProps) => (
        <svg xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 24 24"
             focusable="false"
             {...props}
        >
            <path
                d="M12 3c4.96 0 9 4.04 9 9s-4.04 9-9 9-9-4.04-9-9 4.04-9 9-9m0-1C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4 7V7h-3V5h-2v2h-1c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h4v2H8v2h3v2h2v-2h1c1.1 0 2-.9 2-2v-2c0-1.1-.9-2-2-2h-4V9h6z"/>
        </svg>
    ),
    your_data: (props: IconProps) => (
        <svg xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 24 24"
             focusable="false"
             {...props}
        >
            <path
                d="m12 3.06 7 3.21v4.84c0 1.3-.25 2.6-.75 3.86-.15.37-.33.76-.55 1.17-.15.27-.31.54-.48.81-1.32 2.01-3.17 3.42-5.23 3.98-2.06-.56-3.91-1.97-5.23-3.98-.17-.27-.33-.54-.48-.81-.22-.41-.4-.79-.55-1.17-.48-1.26-.73-2.56-.73-3.86V6.27l7-3.21m0-1.1L4 5.63v5.49c0 1.47.3 2.9.81 4.22.17.44.37.86.6 1.28.16.3.34.6.52.88 1.42 2.17 3.52 3.82 5.95 4.44l.12.02.12-.03c2.43-.61 4.53-2.26 5.95-4.43.19-.29.36-.58.52-.88.22-.41.43-.84.6-1.28.51-1.33.81-2.76.81-4.23V5.63l-8-3.67zm1.08 10.15c-.32-.06-.64-.11-.96-.12A2.997 2.997 0 0012 6a2.996 2.996 0 00-.12 5.99c-.32.01-.64.06-.96.12C8.64 12.58 7 14.62 7 17h10c0-2.38-1.64-4.42-3.92-4.89zM10 9c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm1.12 4.09c.37-.08.64-.11.88-.11s.51.03.88.11c1.48.3 2.63 1.46 3 2.91H8.12c.37-1.45 1.52-2.61 3-2.91z"/>
        </svg>
    ),
    appearance: (props: IconProps) => (
        <svg xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 24 24"
             focusable="false"
             {...props}
        >
            <path
                d="M12 22C10.93 22 9.86998 21.83 8.83998 21.48L7.41998 21.01L8.83998 20.54C12.53 19.31 15 15.88 15 12C15 8.12 12.53 4.69 8.83998 3.47L7.41998 2.99L8.83998 2.52C9.86998 2.17 10.93 2 12 2C17.51 2 22 6.49 22 12C22 17.51 17.51 22 12 22ZM10.58 20.89C11.05 20.96 11.53 21 12 21C16.96 21 21 16.96 21 12C21 7.04 16.96 3 12 3C11.53 3 11.05 3.04 10.58 3.11C13.88 4.81 16 8.21 16 12C16 15.79 13.88 19.19 10.58 20.89Z"/>
        </svg>
    ),
    language: (props: IconProps) => (
        <svg xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 24 24"
             focusable="false"
             {...props}
        >
            <path
                d="M13.33 6c-1 2.42-2.22 4.65-3.57 6.52l2.98 2.94-.7.71-2.88-2.84c-.53.67-1.06 1.28-1.61 1.83l-3.19 3.19-.71-.71 3.19-3.19c.55-.55 1.08-1.16 1.6-1.83l-.16-.15c-1.11-1.09-1.97-2.44-2.49-3.9l.94-.34c.47 1.32 1.25 2.54 2.25 3.53l.05.05c1.2-1.68 2.29-3.66 3.2-5.81H2V5h6V3h1v2h7v1h-2.67zM22 21h-1l-1.49-4h-5.02L13 21h-1l4-11h2l4 11zm-2.86-5-1.86-5h-.56l-1.86 5h4.28z"/>
        </svg>
    ),
    restricted_mode: (props: IconProps) => (
        <svg xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 24 24"
             focusable="false"
             {...props}
        >
            <path
                d="M12 20.95Q8.975 20.075 6.987 17.312Q5 14.55 5 11.1V5.7L12 3.075L19 5.7V11.35Q18.775 11.275 18.5 11.2Q18.225 11.125 18 11.075V6.375L12 4.15L6 6.375V11.1Q6 12.575 6.438 13.938Q6.875 15.3 7.625 16.438Q8.375 17.575 9.413 18.425Q10.45 19.275 11.625 19.725L11.675 19.7Q11.8 20 11.975 20.288Q12.15 20.575 12.375 20.825Q12.275 20.85 12.188 20.888Q12.1 20.925 12 20.95ZM17 17Q17.625 17 18.062 16.562Q18.5 16.125 18.5 15.5Q18.5 14.875 18.062 14.438Q17.625 14 17 14Q16.375 14 15.938 14.438Q15.5 14.875 15.5 15.5Q15.5 16.125 15.938 16.562Q16.375 17 17 17ZM17 20Q17.8 20 18.438 19.65Q19.075 19.3 19.5 18.7Q18.925 18.35 18.3 18.175Q17.675 18 17 18Q16.325 18 15.7 18.175Q15.075 18.35 14.5 18.7Q14.925 19.3 15.562 19.65Q16.2 20 17 20ZM17 21Q15.325 21 14.163 19.837Q13 18.675 13 17Q13 15.325 14.163 14.162Q15.325 13 17 13Q18.675 13 19.837 14.162Q21 15.325 21 17Q21 18.675 19.837 19.837Q18.675 21 17 21ZM12 11.95Q12 11.95 12 11.95Q12 11.95 12 11.95Q12 11.95 12 11.95Q12 11.95 12 11.95Q12 11.95 12 11.95Q12 11.95 12 11.95Q12 11.95 12 11.95Q12 11.95 12 11.95Q12 11.95 12 11.95Q12 11.95 12 11.95Z"/>
        </svg>
    ),
    location: (props: IconProps) => (
        <svg xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 24 24"
             focusable="false"
             {...props}
        >
            <path
                d="M11.99,1.98C6.46,1.98,1.98,6.47,1.98,12s4.48,10.02,10.01,10.02c5.54,0,10.03-4.49,10.03-10.02S17.53,1.98,11.99,1.98z M8.86,14.5c-0.16-0.82-0.25-1.65-0.25-2.5c0-0.87,0.09-1.72,0.26-2.55h6.27c0.17,0.83,0.26,1.68,0.26,2.55 c0,0.85-0.09,1.68-0.25,2.5H8.86z M14.89,15.5c-0.54,1.89-1.52,3.64-2.89,5.15c-1.37-1.5-2.35-3.25-2.89-5.15H14.89z M9.12,8.45 c0.54-1.87,1.52-3.61,2.88-5.1c1.36,1.49,2.34,3.22,2.88,5.1H9.12z M16.15,9.45h4.5c0.24,0.81,0.37,1.66,0.37,2.55 c0,0.87-0.13,1.71-0.36,2.5h-4.51c0.15-0.82,0.24-1.65,0.24-2.5C16.39,11.13,16.3,10.28,16.15,9.45z M20.29,8.45h-4.38 c-0.53-1.97-1.47-3.81-2.83-5.4C16.33,3.45,19.04,5.56,20.29,8.45z M10.92,3.05c-1.35,1.59-2.3,3.43-2.83,5.4H3.71 C4.95,5.55,7.67,3.44,10.92,3.05z M3.35,9.45h4.5C7.7,10.28,7.61,11.13,7.61,12c0,0.85,0.09,1.68,0.24,2.5H3.34 c-0.23-0.79-0.36-1.63-0.36-2.5C2.98,11.11,3.11,10.26,3.35,9.45z M3.69,15.5h4.39c0.52,1.99,1.48,3.85,2.84,5.45 C7.65,20.56,4.92,18.42,3.69,15.5z M13.09,20.95c1.36-1.6,2.32-3.46,2.84-5.45h4.39C19.08,18.42,16.35,20.55,13.09,20.95z"/>
        </svg>
    ),
    keyboard: (props: IconProps) => (
        <svg xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 24 24"
             focusable="false"
             {...props}
        >
            <path
                d="M16 16H8v-2h8v2zm0-5h-2v2h2v-2zm3 0h-2v2h2v-2zm-6 0h-2v2h2v-2zm-3 0H8v2h2v-2zm-3 0H5v2h2v-2zm9-3h-2v2h2V8zm3 0h-2v2h2V8zm-6 0h-2v2h2V8zm-3 0H8v2h2V8zM7 8H5v2h2V8zm15-3v14H2V5h20zm-1 1H3v12h18V6z"/>
        </svg>
    ),
    settings: (props: IconProps) => (
        <svg xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 24 24"
             focusable="false"
             {...props}
        >
            <path
                d="M12 9.5c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5m0-1c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5 3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5zM13.22 3l.55 2.2.13.51.5.18c.61.23 1.19.56 1.72.98l.4.32.5-.14 2.17-.62 1.22 2.11-1.63 1.59-.37.36.08.51c.05.32.08.64.08.98s-.03.66-.08.98l-.08.51.37.36 1.63 1.59-1.22 2.11-2.17-.62-.5-.14-.4.32c-.53.43-1.11.76-1.72.98l-.5.18-.13.51-.55 2.24h-2.44l-.55-2.2-.13-.51-.5-.18c-.6-.23-1.18-.56-1.72-.99l-.4-.32-.5.14-2.17.62-1.21-2.12 1.63-1.59.37-.36-.08-.51c-.05-.32-.08-.65-.08-.98s.03-.66.08-.98l.08-.51-.37-.36L3.6 8.56l1.22-2.11 2.17.62.5.14.4-.32c.53-.44 1.11-.77 1.72-.99l.5-.18.13-.51.54-2.21h2.44M14 2h-4l-.74 2.96c-.73.27-1.4.66-2 1.14l-2.92-.83-2 3.46 2.19 2.13c-.06.37-.09.75-.09 1.14s.03.77.09 1.14l-2.19 2.13 2 3.46 2.92-.83c.6.48 1.27.87 2 1.14L10 22h4l.74-2.96c.73-.27 1.4-.66 2-1.14l2.92.83 2-3.46-2.19-2.13c.06-.37.09-.75.09-1.14s-.03-.77-.09-1.14l2.19-2.13-2-3.46-2.92.83c-.6-.48-1.27-.87-2-1.14L14 2z"/>
        </svg>
    ),
    help: (props: IconProps) => (
        <svg xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 24 24"
             focusable="false"
             {...props}

        >
            <path
                d="M15.36 9.96c0 1.09-.67 1.67-1.31 2.24-.53.47-1.03.9-1.16 1.6l-.04.2H11.1l.03-.28c.14-1.17.8-1.76 1.47-2.27.52-.4 1.01-.77 1.01-1.49 0-.51-.23-.97-.63-1.29-.4-.31-.92-.42-1.42-.29-.59.15-1.05.67-1.19 1.34l-.05.28H8.57l.06-.42c.2-1.4 1.15-2.53 2.42-2.87 1.05-.29 2.14-.08 2.98.57.85.64 1.33 1.62 1.33 2.68zM12 18c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0-15c-4.96 0-9 4.04-9 9s4.04 9 9 9 9-4.04 9-9-4.04-9-9-9m0-1c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2z"/>
        </svg>
    ),
    feedback: (props: IconProps) => (
        <svg xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 24 24"
             focusable="false"
             {...props}
        >
            <path d="M13 14h-2v-2h2v2zm0-9h-2v6h2V5zm6-2H5v16.59l3.29-3.29.3-.3H19V3m1-1v15H9l-5 5V2h16z"/>
        </svg>
    ),
    raport_flag: (props: IconProps) => (
        <svg xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 24 24"
             focusable="false"
             {...props}
        >
            <path d="m13.18 4 .24 1.2.16.8H19v7h-5.18l-.24-1.2-.16-.8H6V4h7.18M14 3H5v18h1v-9h6.6l.4 2h7V5h-5.6L14 3z"/>
        </svg>
    ),
    notifications: (props: IconProps) => (
        <svg xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 24 24"
             focusable="false"
             {...props}
        >
            <path
                d="M10 20h4c0 1.1-.9 2-2 2s-2-.9-2-2zm10-2.65V19H4v-1.65l2-1.88v-5.15C6 7.4 7.56 5.1 10 4.34v-.38c0-1.42 1.49-2.5 2.99-1.76.65.32 1.01 1.03 1.01 1.76v.39c2.44.75 4 3.06 4 5.98v5.15l2 1.87zm-1 .42-2-1.88v-5.47c0-2.47-1.19-4.36-3.13-5.1-1.26-.53-2.64-.5-3.84.03C8.15 6.11 7 7.99 7 10.42v5.47l-2 1.88V18h14v-.23z"/>
        </svg>
    ),
    create: (props: IconProps) => (
        <svg xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 24 24"
             focusable="false"
             {...props}
        >
            <path
                d="M14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2zm3-7H3v12h14v-6.39l4 1.83V8.56l-4 1.83V6m1-1v3.83L22 7v8l-4-1.83V19H2V5h16z"/>
        </svg>
    ),
    right_arrow: (props: IconProps) => (
        <svg xmlns="http://www.w3.org/2000/svg"
             version="1.1"
             viewBox="0 0 32 32"
             {...props}
        >

            <path d="m 12.59,20.34 4.58,-4.59 -4.58,-4.59 1.41,-1.41 6,6 -6,6 z" fill="currentColor"/>
        </svg>
    ),
    right_arrow_light: (props: IconProps) => (
        <svg xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 16 16"
             focusable="false"
             {...props}
        >
            <path d="M4.97 12.65 9.62 8 4.97 3.35l.71-.71L11.03 8l-5.35 5.35-.71-.7z"/>
        </svg>
    ),
    history: (props: IconProps) => (
        <svg xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 24 24"
             focusable="false"
             {...props}
        >
            <g>
                <path
                    d="M14.97 16.95 10 13.87V7h2v5.76l4.03 2.49-1.06 1.7zM22 12c0 5.51-4.49 10-10 10S2 17.51 2 12h1c0 4.96 4.04 9 9 9s9-4.04 9-9-4.04-9-9-9C8.81 3 5.92 4.64 4.28 7.38c-.11.18-.22.37-.31.56L3.94 8H8v1H1.96V3h1v4.74c.04-.09.07-.17.11-.25.11-.22.23-.42.35-.63C5.22 3.86 8.51 2 12 2c5.51 0 10 4.49 10 10z"/>
            </g>
        </svg>
    ),
    home: (props: IconProps) => (
        <svg xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 24 24"
             focusable="false"
             {...props}
        >
            <g>
                <path d="M4 21V10.08l8-6.96 8 6.96V21h-6v-6h-4v6H4z"/>
            </g>
        </svg>
    ),
    your_lib: (props: IconProps) => (
        <svg xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 24 24"
             focusable="false"
             {...props}
        >
            <path d="m11 7 6 3.5-6 3.5V7zm7 13H4V6H3v15h15v-1zm3-2H6V3h15v15zM7 17h13V4H7v13z"/>
        </svg>
    ),
    shorts: (props: IconProps) => (
        <svg xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 24 24"
             focusable="false"
             {...props}
        >
            <path
                d="M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.33-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94c-1.29.68-2.07 2.04-2 3.49.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93c-1.83.97-2.53 3.24-1.56 5.07.97 1.83 3.24 2.53 5.07 1.56l8.5-4.5c1.29-.68 2.06-2.04 1.99-3.49-.07-1.42-.94-2.68-2.23-3.25zm-.23 5.86-8.5 4.5c-1.34.71-3.01.2-3.72-1.14-.71-1.34-.2-3.01 1.14-3.72l2.04-1.08v-1.21l-.69-.28-1.11-.46c-.99-.41-1.65-1.35-1.7-2.41-.05-1.06.52-2.06 1.46-2.56l8.5-4.5c1.34-.71 3.01-.2 3.72 1.14.71 1.34.2 3.01-1.14 3.72L15.5 9.26v1.21l1.8.74c.99.41 1.65 1.35 1.7 2.41.05 1.06-.52 2.06-1.46 2.56z"/>
        </svg>
    ),
    subs: (props: IconProps) => (
        <svg xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 24 24"
             focusable="false"
             {...props}
        >
            <path d="M10 18v-6l5 3-5 3zm7-15H7v1h10V3zm3 3H4v1h16V6zm2 3H2v12h20V9zM3 10h18v10H3V10z"/>
        </svg>
    ),
    support: (props: IconProps) => (
        <svg xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 24 24"
             focusable="false"
             {...props}
        >
            <path
                d="M11 17h2v-1h1c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1h-3v-1h4V8h-2V7h-2v1h-1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h3v1H9v2h2v1zm5.5-15c-1.74 0-3.41.88-4.5 2.28C10.91 2.88 9.24 2 7.5 2 4.42 2 2 4.64 2 7.99c0 4.12 3.4 7.48 8.55 12.58L12 22l1.45-1.44C18.6 15.47 22 12.11 22 7.99 22 4.64 19.58 2 16.5 2zm-3.75 17.85-.75.74-.74-.73-.04-.04C6.27 14.92 3 11.69 3 7.99 3 5.19 4.98 3 7.5 3c1.4 0 2.79.71 3.71 1.89L12 5.9l.79-1.01C13.71 3.71 15.1 3 16.5 3 19.02 3 21 5.19 21 7.99c0 3.7-3.28 6.94-8.25 11.86z"/>
        </svg>
    ),
    magnifier: (props: IconProps) => (
        <svg xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 24 24"
             focusable="false"
             {...props}
        >
            <path
                d="m20.87 20.17-5.59-5.59C16.35 13.35 17 11.75 17 10c0-3.87-3.13-7-7-7s-7 3.13-7 7 3.13 7 7 7c1.75 0 3.35-.65 4.58-1.71l5.59 5.59.7-.71zM10 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"/>
        </svg>
    ),
    hot: (props: IconProps) => (
        <svg xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 24 24"
             focusable="false"
             {...props}
        >
            <path
                d="M19 3.87v9.77C19 17.7 15.86 21 12 21s-7-3.3-7-7.37v-.13c0-1.06.22-2.13.62-3.09.5-1.19 1.29-2.21 2.27-2.97.85-.66 1.83-1.14 2.87-1.65.39-.19.77-.38 1.15-.58.36-.19.72-.38 1.08-.56v3.22l1.55-1.04L19 3.87M20 2l-6 4V3c-.85.44-1.7.88-2.55 1.33-1.41.74-2.9 1.34-4.17 2.32-1.13.87-2.02 2.05-2.58 3.37-.46 1.09-.7 2.29-.7 3.48v.14C4 18.26 7.58 22 12 22s8-3.74 8-8.36V2zM9.45 12.89 14 10v5.7c0 1.82-1.34 3.3-3 3.3s-3-1.47-3-3.3c0-1.19.58-2.23 1.45-2.81z"/>
        </svg>
    ),
    music: (props: IconProps) => (
        <svg xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 24 24"
             focusable="false"
             {...props}
        >
            <path
                d="M12 4v9.38c-.73-.84-1.8-1.38-3-1.38-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V8h6V4h-7zM9 19c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm9-12h-5V5h5v2z"/>
        </svg>
    ),
    movies: (props: IconProps) => (
        <svg xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 24 24"
             focusable="false"
             {...props}
        >
            <path
                d="m22.01 4.91-.5-2.96L1.64 5.19 2 8v13h20V8H3.06l18.95-3.09zM5 9l1 3h3L8 9h2l1 3h3l-1-3h2l1 3h3l-1-3h3v11H3V9h2z"/>
        </svg>
    ),
    live: (props: IconProps) => (
        <svg xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 24 24"
             focusable="false"
             {...props}
        >
            <g>
                <path
                    d="M14 12c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zM8.48 8.45l-.71-.7C6.68 8.83 6 10.34 6 12s.68 3.17 1.77 4.25l.71-.71C7.57 14.64 7 13.39 7 12s.57-2.64 1.48-3.55zm7.75-.7-.71.71c.91.9 1.48 2.15 1.48 3.54s-.57 2.64-1.48 3.55l.71.71C17.32 15.17 18 13.66 18 12s-.68-3.17-1.77-4.25zM5.65 5.63l-.7-.71C3.13 6.73 2 9.24 2 12s1.13 5.27 2.95 7.08l.71-.71C4.02 16.74 3 14.49 3 12s1.02-4.74 2.65-6.37zm13.4-.71-.71.71C19.98 7.26 21 9.51 21 12s-1.02 4.74-2.65 6.37l.71.71C20.87 17.27 22 14.76 22 12s-1.13-5.27-2.95-7.08z"/>
            </g>
        </svg>
    ),
    news: (props: IconProps) => (
        <svg xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 24 24"
             focusable="false"
             {...props}
        >
            <path
                d="M11 11v6H7v-6h4m1-1H6v8h6v-8zM3 3.03V21h14l4-4V3.03M20 4v11.99l-.01.01H16v3.99l-.01.01H4V4h16zm-2 4H6V6h12v2zm0 7h-5v-2h5v2zm0-3h-5v-2h5v2z"/>
        </svg>
    ),
    games: (props: IconProps) => (
        <svg xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 24 24"
             focusable="false"
             {...props}
        >
            <path
                d="M10 12H8v2H6v-2H4v-2h2V8h2v2h2v2zm7 .5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5.67 1.5 1.5 1.5 1.5-.67 1.5-1.5zm3-3c0-.83-.67-1.5-1.5-1.5S17 8.67 17 9.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5zm-3.03-4.35-4.5 2.53-.49.27-.49-.27-4.5-2.53L3 7.39v6.43l8.98 5.04 8.98-5.04V7.39l-3.99-2.24m0-1.15 4.99 2.8v7.6L11.98 20 2 14.4V6.8L6.99 4l4.99 2.8L16.97 4z"/>
        </svg>
    ),
    sport: (props: IconProps) => (
        <svg xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 24 24"
             focusable="false"
             {...props}
        >
            <path
                d="M18 5V2H6v3H3v6l3.23 1.61c.7 2.5 2.97 4.34 5.69 4.38L8 19v3h8v-3l-3.92-2.01c2.72-.04 4.99-1.88 5.69-4.38L21 11V5h-3zM6 11.38l-2-1V6h2v5.38zM15 21H9v-1.39l3-1.54 3 1.54V21zm2-10c0 2.76-2.24 5-5 5s-5-2.24-5-5V3h10v8zm3-.62-2 1V6h2v4.38z"/>
        </svg>
    ),
    podcasts: (props: IconProps) => (
        <svg xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 24 24"
             focusable="false"
             {...props}
        >
            <path
                d="M6 12c0-3.31 2.69-6 6-6s6 2.69 6 6c0 1.66-.67 3.16-1.77 4.25l-.71-.71C16.44 14.63 17 13.38 17 12c0-2.76-2.24-5-5-5s-5 2.24-5 5c0 1.38.56 2.63 1.47 3.54l-.71.71C6.67 15.16 6 13.66 6 12zm8 0c0-1.1-.9-2-2-2s-2 .9-2 2c0 .74.4 1.38 1 1.72V22h2v-8.28c.6-.34 1-.98 1-1.72zm-9.06 7.08.71-.71C4.01 16.74 3 14.49 3 12c0-4.96 4.04-9 9-9s9 4.04 9 9c0 2.49-1.01 4.74-2.65 6.37l.71.71C20.88 17.27 22 14.77 22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 2.77 1.12 5.27 2.94 7.08z"/>
        </svg>
    ),
    profile: (props: IconProps) => (
        <svg xmlns="http://www.w3.org/2000/svg"
             width="361"
             height="360"
             viewBox="0 0 361 360"
             {...props}
        >
            <image id="Warstwa_1" data-name="Warstwa 1" x="2" width="359" height="359"
                   href="data:img/png;base64,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"/>
        </svg>
    ),
    your_profile: (props: IconProps) => (
        <svg xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 24 24"
             focusable="false"
             {...props}
        >
            <path
                d="M3,3v18h18V3H3z M4.99,20c0.39-2.62,2.38-5.1,7.01-5.1s6.62,2.48,7.01,5.1H4.99z M9,10c0-1.65,1.35-3,3-3s3,1.35,3,3 c0,1.65-1.35,3-3,3S9,11.65,9,10z M12.72,13.93C14.58,13.59,16,11.96,16,10c0-2.21-1.79-4-4-4c-2.21,0-4,1.79-4,4 c0,1.96,1.42,3.59,3.28,3.93c-4.42,0.25-6.84,2.8-7.28,6V4h16v15.93C19.56,16.73,17.14,14.18,12.72,13.93z"/>
        </svg>
    ),
    your_vid: (props: IconProps) => (
        <svg xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 24 24"
             focusable="false"
             {...props}
        >
            <path d="m10 8 6 4-6 4V8zm11-5v18H3V3h18zm-1 1H4v16h16V4z"/>
        </svg>
    ),
    to_watch: (props: IconProps) => (
        <svg xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 24 24"
             focusable="false"
             {...props}
        >
            <path
                d="M14.97 16.95 10 13.87V7h2v5.76l4.03 2.49-1.06 1.7zM12 3c-4.96 0-9 4.04-9 9s4.04 9 9 9 9-4.04 9-9-4.04-9-9-9m0-1c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2z"/>
        </svg>
    ),
    download: (props: IconProps) => (
        <svg xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 24 24"
             focusable="false"
             {...props}
        >
            <path d="M17 18v1H6v-1h11zm-.5-6.6-.7-.7-3.8 3.7V4h-1v10.4l-3.8-3.8-.7.7 5 5 5-4.9z"/>
        </svg>
    ),
    save: (props: IconProps) => (
        <svg xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 24 24"
             focusable="false"
             {...props}
        >
            <path d="M22 13h-4v4h-2v-4h-4v-2h4V7h2v4h4v2zm-8-6H2v1h12V7zM2 12h8v-1H2v1zm0 4h8v-1H2v1z"/>
        </svg>
    ),
    share: (props: IconProps) => (
        <svg xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 24 24"
             focusable="false"
             {...props}
        >
            <path
                d="M15 5.63 20.66 12 15 18.37V14h-1c-3.96 0-7.14 1-9.75 3.09 1.84-4.07 5.11-6.4 9.89-7.1l.86-.13V5.63M14 3v6C6.22 10.13 3.11 15.33 2 21c2.78-3.97 6.44-6 12-6v6l8-9-8-9z"/>
        </svg>
    ),
    down_arrow: (props: IconProps) => (
        <svg xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 24 24"
             focusable="false"
             {...props}
        >
            <path d="m18 9.28-6.35 6.35-6.37-6.35.72-.71 5.64 5.65 5.65-5.65z"/>
        </svg>
    ),
    up_arrow: (props: IconProps) => (
        <svg xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 24 24"
             focusable="false"
             {...props}
        >
            <path d="M18.4 14.6 12 8.3l-6.4 6.3.8.8L12 9.7l5.6 5.7z"/>
        </svg>
    ),
    like: (props: IconProps) => (
        <svg xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 24 24"
             focusable="false"
             {...props}
        >
            <path
                d="M18.77,11h-4.23l1.52-4.94C16.38,5.03,15.54,4,14.38,4c-0.58,0-1.14,0.24-1.52,0.65L7,11H3v10h4h1h9.43 c1.06,0,1.98-0.67,2.19-1.61l1.34-6C21.23,12.15,20.18,11,18.77,11z M7,20H4v-8h3V20z M19.98,13.17l-1.34,6 C18.54,19.65,18.03,20,17.43,20H8v-8.61l5.6-6.06C13.79,5.12,14.08,5,14.38,5c0.26,0,0.5,0.11,0.63,0.3 c0.07,0.1,0.15,0.26,0.09,0.47l-1.52,4.94L13.18,12h1.35h4.23c0.41,0,0.8,0.17,1.03,0.46C19.92,12.61,20.05,12.86,19.98,13.17z"/>
        </svg>
    ),
    dislike: (props: IconProps) => (
        <svg xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 24 24"
             focusable="false"
             {...props}
        >
            <path
                d="M17,4h-1H6.57C5.5,4,4.59,4.67,4.38,5.61l-1.34,6C2.77,12.85,3.82,14,5.23,14h4.23l-1.52,4.94C7.62,19.97,8.46,21,9.62,21 c0.58,0,1.14-0.24,1.52-0.65L17,14h4V4H17z M10.4,19.67C10.21,19.88,9.92,20,9.62,20c-0.26,0-0.5-0.11-0.63-0.3 c-0.07-0.1-0.15-0.26-0.09-0.47l1.52-4.94l0.4-1.29H9.46H5.23c-0.41,0-0.8-0.17-1.03-0.46c-0.12-0.15-0.25-0.4-0.18-0.72l1.34-6 C5.46,5.35,5.97,5,6.57,5H16v8.61L10.4,19.67z M20,13h-3V5h3V13z"/>
        </svg>
    ),
    search_channels: (props: IconProps) => (
        <svg xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 75 75"
             {...props}
        >
            <image id="Warstwa_1" data-name="Warstwa 1" width="75" height="75"
                   href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAYAAAA4TnrqAAAEQklEQVR4nO1c7XHbMAxFdflfbVBtEG0QbVCPkBHcDdwJ3A3cTuB0AtsTyJlA7gROJ3BPOfAqUwBFSiShj7w7Xi6xzJBPwCNIgvwEcsixZADwCABpoyUF/jw2/nYBgD8AcMZyEWx7cNTErAHgAAA3D+UKAHsAeEbCJ48MCao8EWQqByQunRpptRXtIhBEldriNiGszbdmZUhSYfGsQq1LbwDwir+/oSaBVs8TWk3uUPcPAPiOdY4GdSe2lm9+j67p0mkdBVpPaWlp67EQtcIGmRpcBtSTDInr0sVy4AsajC5r2kVu4KpjtL3iS4uKtMMFDsLDedFhabtYDckNblc5intorA1tLUOHGSaidiONcTKDFwQjjCNKRAd6gNNX74SZiBIdYRzxHJqwlCGqmhhRCs9Mf/Y+Kqf8vZriHKyBgrGw7ZBKKT+fmutx4Fxy1acyjv05EKWwZozByWtSJqibwqjnCmp1xEm/NqEEcITgDMMquM58mObEQElOZdMFyizn6H46nPtNWdVBpOnxQcWTRuui2B3TxDg0KK0mrYtiVsKqdoLub80BFaT1CtAGgBLa2KAC8dba3L7PaDBDsijdvlvDT4kHNgINHQNZQCxNl80PKReUWBYeC1kkHwl++KQ9fJl7LkEHjsTHhSJLDw9eRJsqj0tjo1fhUZGlu9xpIaSYoJOVJ0zQqT+4ROgG8+6GlJAvWa8UWhxQZFHitkS0vCtZOiMGtDJvHjBFsQmfLphizPLV4XkdtvPTunO/AeBnv6aydd61SY9WfUbuEgltPuezd9yEdkOJWUCwDZXQZEmMqsH+5wPxty8e6/+GP20tjEqDdBmdT541q9VufXVQchl5LBNphVtMzZoVEsLHl7TmbkKLB4osmMuJhYFocZAwk+Y55TP0hR6snxOMUnXr0hcDlwjdDc9K4PXheem6RYUwJ0WWvnaTL1y3qCnTkbMs7gtLgT7xb+1J6OmQH/uG/8t7+mQzKP1FfGmJ2kWlDOjckButEglspf5GI0PPdSi5f0+tP0lttkrEetTmKpuc8pGf5ajb1BG0JWiXdW5WE5R1Tf2QQBdyps9WoHKUJMQ2FqhTJNZxJndeZ46BKmUYzjq9IiqZy1EUBWr0u/aNAKhQIvgJ0EigdMpK1DlwZ6GnThh3fnLw2Wmu4qkSFrw/nMmWE1vKKQwHTb2+eO583nUiQSt1XC7ooMURdhPKbrZBSqStRxvdOVO+jeEKEw2mq1+iSUjecSPHVlj8s45rVg6x22cyb2XiQe6xMsDm3i5RuTBdYdKMX0JNlVTCXNf1eKO5+qXL7JvWpogb4gYZEmSybO+y4PtmtgIbZivyatdEbcVRu0xqD+9z4wZK246/YNrTqLOvbdwiZHG9Sm8UUILbpWk+SiUwoATDConzeQ1niQRFie2kbsCt377Snzots/5dFQp1po+6ZfIvalvcww0A8A/RyEDKflhcrAAAAABJRU5ErkJggg=="/>
        </svg>
    ),
    sort_lines: (props: IconProps) => (
        <svg xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 24 24"
             focusable="false"
             {...props}
        >
            <path d="M21 6H3V5h18v1zm-6 5H3v1h12v-1zm-6 6H3v1h6v-1z"/>
        </svg>
    ),
    three_dots: (props: IconProps) => (
        <svg xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 24 24"
             focusable="false"
             {...props}
        >
            <path
                d="M7.5 12c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5zm4.5-1.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm6 0c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"/>
        </svg>
    ),
    scissors: (props: IconProps) => (
        <svg xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 24 24"
             focusable="false"
             {...props}
        >
            <path
                d="M8 7c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1zm-1 9c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm3.79-7.77L21 18.44V20h-3.27l-5.76-5.76-1.27 1.27c.19.46.3.96.3 1.49 0 2.21-1.79 4-4 4s-4-1.79-4-4 1.79-4 4-4c.42 0 .81.08 1.19.2l1.37-1.37-1.11-1.11C8 10.89 7.51 11 7 11c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4c0 .43-.09.84-.21 1.23zm-.71.71-.43-.44.19-.58c.11-.34.16-.64.16-.92 0-1.65-1.35-3-3-3S4 5.35 4 7s1.35 3 3 3c.36 0 .73-.07 1.09-.21l.61-.24.46.46 1.11 1.11.71.71-.71.71-1.37 1.37-.43.43-.58-.18C7.55 14.05 7.27 14 7 14c-1.65 0-3 1.35-3 3s1.35 3 3 3 3-1.35 3-3c0-.38-.07-.75-.22-1.12l-.25-.61.47-.47 1.27-1.27.71-.71.71.71L18.15 19H20v-.15l-9.92-9.91zM17.73 4H21v1.56l-5.52 5.52-2.41-2.41L17.73 4zm.42 1-3.67 3.67 1 1L20 5.15V5h-1.85z"/>
        </svg>
    ),
    microphone: (props: IconProps) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            focusable="false"
            {...props}
        >
            <path
                d="M12 3c-1.66 0-3 1.37-3 3.07v5.86c0 1.7 1.34 3.07 3 3.07s3-1.37 3-3.07V6.07C15 4.37 13.66 3 12 3zm6.5 9h-1c0 3.03-2.47 5.5-5.5 5.5S6.5 15.03 6.5 12h-1c0 3.24 2.39 5.93 5.5 6.41V21h2v-2.59c3.11-.48 5.5-3.17 5.5-6.41z"/>
        </svg>
    ),
    alert: (props: IconProps) => (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >

            <path
                d="M2.20164 18.4695L10.1643 4.00506C10.9021 2.66498 13.0979 2.66498 13.8357 4.00506L21.7984 18.4695C22.4443 19.6428 21.4598 21 19.9627 21H4.0373C2.54022 21 1.55571 19.6428 2.20164 18.4695Z"
                stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 9V13" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 17.0195V17" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    ),
    not_found: (props: IconProps) => (
        <svg
            viewBox="0 0 24 24"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M5.84301215,4.55890685 C9.24342264,1.15849636 14.7565774,1.15849636 18.1569879,4.55890685 C21.4893901,7.89130914 21.5560382,13.252791 18.356932,16.6663564 L18.1569879,16.8728826 C17.2419979,17.7878725 15.7116094,19.2826735 13.5641649,21.3589636 C12.6919186,22.2023085 11.3080914,22.2022001 10.4359799,21.3587188 L6.5863078,17.6101042 C6.30208268,17.3299283 6.0543257,17.0841961 5.84301215,16.8728826 C2.44260165,13.4724721 2.44260165,7.95931735 5.84301215,4.55890685 Z M17.0963277,5.61956702 C14.2817036,2.80494297 9.71829638,2.80494297 6.90367232,5.61956702 C4.08904826,8.43419108 4.08904826,12.9975983 6.90367232,15.8122224 L8.59986042,17.4841867 C9.38268933,18.2492508 10.3424212,19.181446 11.478793,20.2805069 C11.7694967,20.5616672 12.2307719,20.5617033 12.5215209,20.2805882 L15.4959128,17.3910853 C16.1544227,16.746944 16.6879447,16.2206054 17.0963277,15.8122224 C19.9109517,12.9975983 19.9109517,8.43419108 17.0963277,5.61956702 Z M14.9462117,7.61294647 L15.0303301,7.68556462 C15.2965966,7.95183118 15.3208027,8.36849486 15.1029482,8.66210636 L15.0303301,8.74622479 L13.061,10.7158947 L15.0303301,12.6855646 C15.2965966,12.9518312 15.3208027,13.3684949 15.1029482,13.6621064 L15.0303301,13.7462248 C14.7640635,14.0124914 14.3473998,14.0366974 14.0537883,13.8188429 L13.9696699,13.7462248 L12,11.7768947 L10.0303301,13.7462248 C9.76406352,14.0124914 9.34739984,14.0366974 9.05378835,13.8188429 L8.96966991,13.7462248 C8.70340335,13.4799582 8.6791973,13.0632945 8.89705176,12.7696831 L8.96966991,12.6855646 L10.939,10.7158947 L8.96966991,8.74622479 C8.70340335,8.47995823 8.6791973,8.06329455 8.89705176,7.76968305 L8.96966991,7.68556462 C9.23593648,7.41929806 9.65260016,7.395092 9.94621165,7.61294647 L10.0303301,7.68556462 L12,9.6548947 L13.9696699,7.68556462 C14.2359365,7.41929806 14.6526002,7.395092 14.9462117,7.61294647 Z">
            </path>
        </svg>
    ),
    avatar: AvatarIcon,
    placeholder: ImageIcon,
}