const lowerCaseWords = (arr) => {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(arr)) {
            return reject('Input must be an array');
        }
        resolve(arr.filter(item => typeof item === 'string').map(word => word.toLowerCase()));
    });
};
const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];
lowerCaseWords(mixedArray)
    .then(result => console.log(result))
    .catch(err => console.error(err));