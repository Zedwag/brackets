module.exports = function check(str, bracketsConfig) {
    let stack = []
    bracketsConfig = [].concat(...bracketsConfig)
    str.split('').forEach(el => el === stack[stack.length - 1] ? stack.pop() : stack.push(bracketsConfig[bracketsConfig.indexOf(el) + 1]))
    return stack.length === 0 ? true : false
}
