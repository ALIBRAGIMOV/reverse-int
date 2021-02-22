module.exports = function reverse(num) {
    return Number.parseInt(num.toString().split('').reverse().join(''))
}
