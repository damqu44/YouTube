const convertDurationToSeconds = <T extends string>(duration: T): number => {
    const [hours, minutes, seconds] = duration.split(":").map(Number);
    return hours * 3600 + minutes * 60 + seconds;
};

export default convertDurationToSeconds;