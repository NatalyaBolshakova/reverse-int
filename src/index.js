module.exports = function reverse (n) {
    n = Math.abs(n);
    const str = n +'';
    let pos = str.length - 1;
    let strN = '';
    for (pos; pos >= 0; pos--){
        strN += str[pos];        
    }
    return +strN;
}
