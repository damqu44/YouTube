const updateIds = <T extends { id: string }>(array: T[]): T[] => {
    return array.map((item, index) => ({
        ...item,
        id: index.toString(),
    }));
};

export default updateIds;