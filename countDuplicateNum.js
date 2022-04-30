// Given an  interger array, numbers, count the number of elements that occur more than once
const arry = [8,1,3,1,4,5,6,3,2];

function countDuplicate(numbers) {
    const toFindDuplicates = numbers => numbers.filter((item, index) => numbers.indexOf(item) !== index)
    const duplicateElements = toFindDuplicates(numbers);
    return duplicateElements.length
}
console.log(countDuplicate(arry))

