# to-english

Convert your machine readable wallet addresses (or really, any other string of numbers and letters) into something a little more human readable. It won't make sense, but I have a better chance of remembering `something else happened on the way to mister penguin dripping asian memory concerned crew` than I do `0x318d00f00004f00681631a3ea5f1`.

## Developing

Install deps

```bash
npm i
```

## Usage

First, you need to generate your dictionary. Right now, we have a default dictionary of [about 4300 words](/dictionary/en.txt)

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

## Contributing

If you want to open a PR, open a PR. I might approve it.

**DON'T CHANGE THE LIBRARY**

It'll break everything.

## TO DO

* Add other languages (es, fr, etc)
* Handle library switching
* Add import ability to other node/js apps
