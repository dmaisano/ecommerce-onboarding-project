// a lil overkill for a small demo
// but it's nice to trim down the size of the bundled css file :)

// [reference](https://github.com/FullHuman/purgecss)

module.exports = {
  content: ["./src/**/*.vue", "./src/**/*.js", "./src/**/*.html"],
  whitelist: ["body", "html", "img", "a"],
  extractors: [
    {
      // eslint-disable-next-line no-undef
      extractor: TailwindExtractor,
      extensions: ["vue", "js", "html"]
    }
  ]
};
