const { Builder } = require("selenium-webdriver")

const c = require("selenium-webdriver/chrome")

require("chromedriver")

describe("chrome", () => {

  const state = { browser: null }

  beforeAll(() => Promise.resolve(new Builder())
    .then(b=>b.forBrowser("chrome"))
    .then(b=>b.setChromeOptions(new c.Options().headless()))
    .then(b=>b.build())
    .then(b=>Object.assign(state, {browser:b}))
  , 16384)

  afterAll(() => Promise.resolve(state.browser)
    .then(b=>b.quit())
  , 16384)

  test("str2chars", () => Promise.resolve(state.browser)
    .then(b=>b.get("https://takanoriyanagitani.github.io/cpmap/docs/tests/index/s2c.html"))
    .then(_=>state.browser)
    .then(b=>b.getTitle())
    .then(t=>expect(t == "OK").toBe(true))
  , 16384)

  test("str2pairs", () => Promise.resolve(state.browser)
    .then(b=>b.get("https://takanoriyanagitani.github.io/cpmap/docs/tests/index/s2p.html"))
    .then(_=>state.browser)
    .then(b=>b.getTitle())
    .then(t=>expect(t == "OK").toBe(true))
  , 16384)

})
