const fs = require('fs')

const hexLetters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "#"]
const base58Letters = [
    "#", "1", "2", "3", "4", "5", "6", "7", "8", "9",
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
    "A", "B", "C", "D", "E", "F", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
]

const main = () => {
    const generatedHexCodes = []
    for (first of hexLetters) {
        for (second of hexLetters) {
            for (third of hexLetters) {
                generatedHexCodes.push(`${first}${second}${third}`)
            }
        }
    }

    const generatedBase58Codes = []
    for (first of base58Letters) {
        for (second of base58Letters) {
            generatedBase58Codes.push(`${first}${second}`)
        }
    }

    const generatedHexJson = {}
    const generatedBase58Json = {}

    fs.readFile('dictionary/en.txt', "utf8", (err, data) => {
        if (err) {
            console.error(err)
            return
        }

        // PLEASE DON'T CHANGE THIS
        const words = data.split('\n')
            .filter(word => !word.includes("'") && !word.includes('-'))
            .filter(word => word.length > 4)
            .map(string => string.trim().toLowerCase())
            .reduce((acc, word) => acc.includes(word) ? acc : acc.concat(word), [])

        generatedHexCodes.forEach((code, index) => {
            generatedHexJson[code] = words[index]
        })
        generatedBase58Codes.forEach((code, index) => {
            generatedBase58Json[code] = words[index]
        })

        fs.writeFile('dictionary.hex.json', JSON.stringify(generatedHexJson), (err) => {
            if (err) console.error(err)
        })
        fs.writeFile('dictionary.base58.json', JSON.stringify(generatedBase58Json), (err) => {
            if (err) console.error(err)
        })
        console.log('Success!')
    })
}

main()