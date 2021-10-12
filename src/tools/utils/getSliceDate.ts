export const getSliceDate = (date: string) => {
    if (typeof date !== 'string' || date.length < 10) {
        return null;
    }

    return date.slice(0, 10).split('-')
        .reverse()
        .join('.');
};
