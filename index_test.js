const {
  s2c, c2p, p2s, s2p, s2m,
  m2p,
} = require("./index")

describe("node", () => {

describe("str2chars", () => {

  test("empty", () => expect(s2c("")).toStrictEqual([]))
  test("pair1", () => expect(s2c("c4")).toStrictEqual(["c","4"]))
  test("pair2", () => expect(s2c("r2d2")).toStrictEqual(["r","2","d","2"]))

})

describe("chars2pairs", () => {

  test("empty", () => expect(c2p([])).toStrictEqual([]))
  test("pair1", () => expect(c2p(["c","4"])).toStrictEqual([["c","4"]]))
  test("pair2", () => expect(c2p(s2c("r2d2"))).toStrictEqual([["r","2"], ["d","2"]]))

})

describe("pair2string", () => {

  test("pair1", () => expect(p2s(["c","4"])).toBe("c4"))

})

describe("str2pairs", () => {

  test("empty", () => expect(s2p("")).toStrictEqual([]))
  test("pair1", () => expect(s2p("c4")).toStrictEqual(["c4"]))
  test("pair2", () => expect(s2p("r2d2")).toStrictEqual(["r2", "d2"]))

})

describe("str2map", () => {

  test("empty", () => expect(s2m("")).toStrictEqual(new Map()))
  test("pair1", () => expect(s2m("v5")).toStrictEqual(new Map([["v","5"]])))
  test("pair2", () => expect(s2m("i1v5")).toStrictEqual(new Map([["i","1"], ["v","5"]])))

})

describe("map2pairs", () => {

  test("empty", () => expect(m2p(new Map())).toStrictEqual([]))
  test("pair1", () => expect(m2p(new Map([["v","5"]]))).toStrictEqual([["v","5"]]))
  test("pair2", () => expect(m2p(new Map([["i","1"], ["v","5"]]))).toStrictEqual([["i","1"], ["v","5"]]))

})

})
