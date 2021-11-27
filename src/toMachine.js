const fs = require('fs')

const main = () => {
    const words = process.argv.slice(2)

    const dictionary = JSON.parse(fs.readFileSync('dictionary.hex.json'))
    const hexChunks = words.map((word) => Object.keys(dictionary)[Object.values(dictionary).indexOf(word)])
    hexChunks[0] = hexChunks[0].slice(2)

    const string = '0x' + hexChunks.join('')
    console.log("string", string)
}

main()