# to-english

Convert your machine readable wallet addresses (or really, any other string of numbers and letters) into something a little more human readable. It won't make sense, but I have a better chance of remembering `hex matt aqua absolutely aaron actions aboriginal difference blog buttons computation` than I do `0x318d00f00004f00681631a3ea5f1`.

## Developing

Install deps

```bash
npm i
```

## Usage

### Generate Dictionary

First, you need to generate your dictionary. Right now, we have a default dictionary of [about 10,000 words](/dictionary/en.txt)

To use the default options (english, standard word list) run
```bash
npm run generate
```

To use an alternate word list, use the param `--library` or `-l` with the path to a text file containing a list of words.
```bash
npm run generate -- --library ~/list.txt
```

To use a different default language, use the param `--language` or `-a` with a string of the language you want, for example spanish:
```bash
npm run generate -- --language es
```

### Convert wallet address to text

Once you have your dictionary, run the following command to "stringify" your wallet address
```bash
npm run readable -- <wallet address>
```
For example, running
```bash
npm run readable -- 0x318d00f00004f00681631a3ea5f1
```
will result in the output
```bash
> node src/toHuman.js "0x318d00f00004f00681631a3ea5f1"

hex matt aqua absolutely aaron actions aboriginal difference blog buttons computation
```

### Convert text to wallet address

To go the other way, from a human readable string to wallet address, run the following, replacing everything following the `--` with your personalized words, generated above
```bash
npm run encode -- hex matt aqua absolutely aaron actions aboriginal difference blog buttons computation
```
The output should look like this
```bash
> node src/toMachine.js "hex" "matt" "aqua" "absolutely" "aaron" "actions" "aboriginal" "difference" "blog" "buttons" "computation"

wallet address: 0x318d00f00004f00681631a3ea5f1
```

## Contributing

If you want to open a PR, open a PR. I might approve it.

**DON'T CHANGE THE LIBRARY**

It'll break everything.

## To Do

* Add other languages (es, fr, etc)
* Handle library switching
* Add import ability to other node/js apps
