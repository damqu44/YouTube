export default function formatTimeElapsed(date: string): string {
    const currentDate = new Date();
    const targetDate = new Date(date);

    const timeDifference = currentDate.getTime() - targetDate.getTime();
    const daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    if (daysAgo < 1) {
        return "Dziś";
    } else if (daysAgo === 1) {
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

function formatPolishDaysAgo(days: number): string {
    return days === 1 ? 'dzień' : days < 5 ? 'dni' : 'dni';
}

function formatPolishMonthsAgo(months: number): string {
    return months === 1 ? 'miesiąc' : months < 5 ? 'miesiące' : 'miesięcy';
}

function formatPolishYearsAgo(years: number): string {
    return years === 1 ? 'rok' : years < 5 ? 'lata' : 'lat';
}