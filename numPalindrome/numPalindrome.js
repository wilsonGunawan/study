const isPalindrome = (n) => {
    let temp = n
    let num = n
    let multipliers = 1
    let dup = 0
    while (n > 1) {
        n = parseInt(n / 10)
        if (n >= 1) {
            multipliers *= 10
        }
    }
    while (temp >= 1) {
        const remainder = parseInt(temp % 10)
        temp = parseInt(temp / 10)
        dup += remainder * multipliers
        multipliers /= 10
    }
    return num == dup
}

console.log(isPalindrome(789))
console.log(isPalindrome(10001))