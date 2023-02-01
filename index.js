function findMatching(array, driverName) {
    const nameMatch = names => names.toUpperCase() === driverName.toUpperCase()
    const newArray = array.filter(nameMatch)
    return newArray
}

function fuzzyMatch(array, driverLetter) {
    const driverLetterLength = driverLetter.length
    const letterMatch = names => names.slice(0,driverLetterLength).toUpperCase() === driverLetter.toUpperCase()
    return array.filter(letterMatch)
}

function matchName(array, driverName) {
    const nameMatch = obj => obj.name === driverName
    return array.filter(nameMatch)
}