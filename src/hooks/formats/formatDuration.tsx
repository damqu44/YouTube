const formatDuration = (duration: string): string => {
    const [hours, minutes, seconds] = duration.split(':').map(part => parseInt(part, 10));

    let formattedDuration = '';

    if (hours > 0) {
        formattedDuration += hours.toString() + ':';
    }

    formattedDuration += (hours > 0 && minutes < 10 ? '0' : '') + minutes.toString() + ':';
    formattedDuration += (seconds < 10 ? '0' : '') + seconds.toString();

    return formattedDuration;
};

export default formatDuration