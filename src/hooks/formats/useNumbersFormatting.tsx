export const useNumbersFormatting = () => {
    const formatSubscribers = (subscribers: string): string => {
        const numericSubscribers = parseInt(subscribers, 10);

        if (isNaN(numericSubscribers) || numericSubscribers < 0) {
            return 'Invalid subscriber movies';
        }

        if (numericSubscribers === 1) {
            return '1 subskrybent';
        } else if (numericSubscribers >= 1000000) {
            const millionSubscribers = Math.round(numericSubscribers / 1000000);
            return `${millionSubscribers} mln. subskrybentów`;
        } else if (numericSubscribers >= 1000) {
            const thousandSubscribers = Math.round(numericSubscribers / 1000);
            return `${thousandSubscribers} tys. subskrybentów`;
        } else {
            return `${numericSubscribers} subskrybentów`;
        }
    };


    const formatViews = (views: string): string => {
        const numericViews = parseInt(views, 10);

        if (isNaN(numericViews) || numericViews < 0) {
            return 'Invalid view movies';
        }

        if (numericViews === 0) {
            return '0 wyświetleń';
        } else if (numericViews === 1) {
            return '1 wyświetlenie';
        } else if (numericViews >= 1000000) {
            const millionViews = numericViews / 1000000;
            return `${(millionViews >= 10 ? Math.round(millionViews) : millionViews.toFixed(millionViews % 1 === 0 ? 0 : 1))} mln. wyświetleń`;
        } else if (numericViews >= 1000) {
            const thousandViews = numericViews / 1000;
            return `${(thousandViews >= 10 ? Math.round(thousandViews) : thousandViews.toFixed(thousandViews % 1 === 0 ? 0 : 1))} tys. wyświetleń`;
        } else if ((numericViews % 100 >= 12 && numericViews % 100 <= 14) || (numericViews % 10 === 0) || (numericViews % 10 >= 5 && numericViews % 10 <= 9)) {
            return `${numericViews} wyświetleń`;
        } else if (numericViews === 2 || (numericViews % 100 >= 22 && numericViews % 100 <= 24) || (numericViews % 10 === 2 && numericViews % 100 !== 12)) {
            return `${numericViews} wyświetlenia`;
        } else {
            return `${numericViews} wyświetlenia`;
        }
    }

    const formatMovies = (movies: string): string => {
        const numericMovies = parseInt(movies, 10);

        if (isNaN(numericMovies) || numericMovies < 0) {
            return 'Invalid movie count';
        }

        if (numericMovies === 0) {
            return '0 filmów';
        } else if (numericMovies === 1) {
            return '1 film';
        } else if (numericMovies >= 1000000) {
            const millionMovies = numericMovies / 1000000;
            return `${Number.isInteger(millionMovies) ? millionMovies.toFixed(0) : millionMovies.toFixed(1)} mln. filmów`;
        } else if (numericMovies >= 1000) {
            const thousandMovies = numericMovies / 1000;
            return `${Number.isInteger(thousandMovies) ? thousandMovies.toFixed(0) : thousandMovies.toFixed(1)} tys. filmów`;
        } else if ((numericMovies % 100 >= 12 && numericMovies % 100 <= 14) || (numericMovies % 10 === 0) || (numericMovies % 10 >= 5 && numericMovies % 10 <= 9)) {
            return `${numericMovies} filmów`;
        } else {
            return `${numericMovies} filmy`;
        }
    };


    return {formatSubscribers, formatViews, formatMovies};
}