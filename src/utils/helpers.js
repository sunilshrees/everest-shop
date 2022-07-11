export const formatPrice = (price) => {
    const newPrice = price.toLocaleString('en-IN');
    return newPrice;
};

export const getUniqueValues = (data, type) => {
    let unique = data.map((item) => item[type]);
    return ['all', ...new Set(unique.flat())];
};
