const fs = require('fs')

const main = () => {
    const addressFull = process.argv.slice(2)[0]
    
    if (addressFull.slice(0, 2) === "0x") {
        const dictionary = JSON.parse(fs.readFileSync('dictionary.hex.json'))
        const address = addressFull.slice(2).toLowerCase().padStart(addressFull.length - 1 + addressFull.slice(2).length % 3, '#')

        const chunks = address.match(/.{1,3}/g)
        const words = chunks.map(chunk => dictionary[chunk]).join(' ')

        console.log("hex " + words)
    } else {
        const dictionary = JSON.parse(fs.readFileSync('dictionary.base58.json'))
        const paddedAddress = addressFull.padStart(addressFull.length + addressFull.length % 2, "#")

        const chunks = paddedAddress.match(/.{1,2}/g)
        const words = chunks.map(chunk => dictionary[chunk]).join(' ')

        console.log("base58 " + words)
    }
}

main()