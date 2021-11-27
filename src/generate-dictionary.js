const fs = require('fs')

const letters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"]

const main = () => {
    const generatedCodes = []
    for (first of letters) {
        for (second of letters) {
            for (third of letters) {
                generatedCodes.push(`${first}${second}${third}`)
            }
        }
    }

    const generatedJson = {}

    fs.readFile('dictionary/en.txt', "utf8", (err, data) => {
        if (err) {
            console.error(err)
            return
        }

        const words = data.split('\n')
            .filter(word => !word.includes("'") && !word.includes('-'))
            .filter(word => word.length > 1)
            .map(string => string.trim().toLowerCase())
            .reduce((acc, word) => acc.includes(word) ? acc : acc.concat(word), [])

            console.log("words length", words.length)
        generatedCodes.forEach((code, index) => {
            generatedJson[code] = words[index]
        })

        fs.writeFile('dictionary.hex.json', JSON.stringify(generatedJson), (err) => {
            if (err) console.error(err)
        })
    })
}

main()