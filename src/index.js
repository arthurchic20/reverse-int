module.exports = function reverse (number) {
    const res = String(number).split('');
    if (res[0] === '-') res.shift()
    let revArr = res.reverse();
    return revArr.join('');
}
