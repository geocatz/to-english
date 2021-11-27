const { Console } = require('console')
const fs = require('fs')

const main = () => {
    const addressFull = process.argv.slice(2)[0]

    if (addressFull.slice(0, 2) === "0x") {
        const address = addressFull.slice(2).toLowerCase().padStart(addressFull.length - 1 + addressFull.slice(2).length % 3, 0)

        const dictionary = JSON.parse(fs.readFileSync('dictionary.hex.json'))

        const chunks = address.match(/.{1,3}/g)
        const words = chunks.map(chunk => dictionary[chunk]).join(' ')

        console.log("chunks", chunks, words)
    }
}

main()