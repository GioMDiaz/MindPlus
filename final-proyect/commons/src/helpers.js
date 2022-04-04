function millisToDays(millis) {
    return Math.round(millis / 86400000)
}
const randomInteger = (min, max) => min + Math.round((max - min) * Math.random())

module.exports = {
    millisToDays,
    randomInteger
}