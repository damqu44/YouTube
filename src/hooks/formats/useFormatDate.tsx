export default function useFormatDate(date: string): string {
    const currentDate = new Date();
    const targetDate = new Date(date);

    const timeDifference = currentDate.getTime() - targetDate.getTime();
    const secondsAgo = Math.floor(timeDifference / 1000);

    if (secondsAgo < 60) {
        return `${secondsAgo} ${formatPolishSecondsAgo(secondsAgo)} temu`;
    } else {
        const minutesAgo = Math.floor(secondsAgo / 60);
        if (minutesAgo < 60) {
            return `${minutesAgo} ${formatPolishMinutesAgo(minutesAgo)} temu`;
        } else {
            const hoursAgo = Math.floor(minutesAgo / 60);
            if (hoursAgo < 24) {
                return `${hoursAgo} ${formatPolishHoursAgo(hoursAgo)} temu`;
            } else {
                const daysAgo = Math.floor(hoursAgo / 24);
                if (daysAgo === 1) {
                    return "Wczoraj";
                } else if (daysAgo < 28) {
                    return `${daysAgo} ${formatPolishDaysAgo(daysAgo)} temu`;
                } else if (daysAgo < 365) {
                    const monthsAgo = Math.floor(daysAgo / 30);
                    return `${monthsAgo} ${formatPolishMonthsAgo(monthsAgo)} temu`;
                } else {
                    const yearsAgo = Math.floor(daysAgo / 365);
                    return `${yearsAgo} ${formatPolishYearsAgo(yearsAgo)} temu`;
                }
            }
        }
    }
}

function formatPolishSecondsAgo(seconds: number): string {
    return seconds === 1 ? 'sekundę' : seconds < 5 ? 'sekundy' : 'sekund';
}

function formatPolishMinutesAgo(minutes: number): string {
    return minutes === 1 ? 'minutę' : minutes < 5 ? 'minuty' : 'minut';
}

function formatPolishHoursAgo(hours: number): string {
    return hours === 1 ? 'godzinę' : hours < 5 ? 'godziny' : 'godzin';
}

function formatPolishDaysAgo(days: number): string {
    return days === 1 ? 'dzień' : 'dni';
}

function formatPolishMonthsAgo(months: number): string {
    return months === 1 ? 'miesiąc' : months < 5 ? 'miesiące' : 'miesięcy';
}

function formatPolishYearsAgo(years: number): string {
    return years === 1 ? 'rok' : years < 5 ? 'lata' : 'lat';
}