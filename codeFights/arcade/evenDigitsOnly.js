function evenDigitsOnly(n) {
    return (""+n).split("").filter(digit => digit % 2 !== 0).length === 0;
}