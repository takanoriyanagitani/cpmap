const { Builder } = require("selenium-webdriver")

const c = require("selenium-webdriver/chrome")

const timeout = 32768

require("chromedriver")

describe("chrome", () => {

  const state = { browser: null }

  beforeAll(() => Promise.resolve(new Builder())
    .then(b=>b.forBrowser("chrome"))
    .then(b=>b.setChromeOptions(new c.Options().headless()))
    .then(b=>b.build())
    .then(b=>Object.assign(state, {browser:b}))
  , timeout)

  afterAll(() => Promise.resolve(state.browser)
    .then(b=>b.quit())
  , timeout)

  test("str2chars", () => Promise.resolve(state.browser)
    .then(b=>b.get("https://takanoriyanagitani.github.io/cpmap/docs/tests/index/s2c.html"))
    .then(_=>state.browser)
    .then(b=>b.getTitle())
    .then(t=>expect(t == "OK").toBe(true))
  , timeout)

  test("str2pairs", () => Promise.resolve(state.browser)
    .then(b=>b.get("https://takanoriyanagitani.github.io/cpmap/docs/tests/index/s2p.html"))
    .then(_=>state.browser)
    .then(b=>b.getTitle())
    .then(t=>expect(t == "OK").toBe(true))
  , timeout)

  test("str2map", () => Promise.resolve(state.browser)
    .then(b=>b.get("https://takanoriyanagitani.github.io/cpmap/docs/tests/index/s2m.html"))
    .then(_=>state.browser)
    .then(b=>b.getTitle())
    .then(t=>expect(t == "OK").toBe(true))
  , timeout)

  test("map2str", () => Promise.resolve(state.browser)
    .then(b=>b.get("https://takanoriyanagitani.github.io/cpmap/docs/tests/index/m2s.html"))
    .then(_=>state.browser)
    .then(b=>b.getTitle())
    .then(t=>expect(t == "OK").toBe(true))
  , timeout)

})
