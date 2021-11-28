const fs = require('fs')

const main = () => {
    const words = process.argv.slice(2)

    if (words[0].toLowerCase() === "hex") {
        const dictionary = JSON.parse(fs.readFileSync('dictionary.hex.json'))
        const hexChunks = words.slice(1).map((word) => Object.keys(dictionary)[Object.values(dictionary).indexOf(word)])

        const string = '0x' + hexChunks.join('').replace(/#/g, '')
        console.log("wallet address: " + string)
    } else if (wrods[0].toLowerCase() === "base58") {
        const dictionary = JSON.parse(fs.readFileSync('dictionary.base58.json'))
        const hexChunks = words.slice(1).map((word) => Object.keys(dictionary)[Object.values(dictionary).indexOf(word)])

        const string = hexChunks.join('').replace(/#/g, '')
        console.log("wallet address: " + string)
    }

    
}

main()