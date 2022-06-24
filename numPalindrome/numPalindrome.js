const isPalindrome = (n) => {
    if (n < 0 || (n % 10 === 0 && n !== 0)) {
        return false
    }

    let revertedNumber = 0
    while (n > revertedNumber) {
        revertedNumber = parseInt(revertedNumber * 10 + n % 10)
        n = parseInt(n / 10)
    }

    return n === revertedNumber || n === revertedNumber / 10
}

console.log(isPalindrome(789))
console.log(isPalindrome(10001))
console.log(isPalindrome(1001))