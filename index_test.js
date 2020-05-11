const {
  s2c,
  c2p,
  p2s,
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

})
