function printDigits(num) {
    let safeNum = Number(num)
    let rev

    while (safeNum > 0) {
        let rev = safeNum % 10
        safeNum = Math.floor(safeNum / 10)
        console.log(rev)
    }
}

printDigits(123)