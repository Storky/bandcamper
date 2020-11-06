export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    };
};

export const excludeKeys = ((obj, excludeStrOrArrOfStrings) => {
    const keysToExcludeArr = excludeStrOrArrOfStrings.length ? excludeStrOrArrOfStrings : [excludeStrOrArrOfStrings];
    return Object.fromEntries(Object.entries(obj).filter(entry => !keysToExcludeArr.includes(entry[0])))
});
