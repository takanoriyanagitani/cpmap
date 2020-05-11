const {
  s2c, c2p, p2s, s2p, s2m,
  m2p, m2s,
  usm, sms, sss,
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

describe("map2string", () => {

  test("empty", () => expect(m2s(new Map())).toBe(""))
  test("pair1", () => expect(m2s(new Map([["v","5"]]))).toBe("v5"))
  test("pair2", () => expect(m2s(new Map([["i","1"], ["v","5"]]))).toBe("i1v5"))

})

describe("update map(string, map)", () => {

  test("empty", () => expect(usm("", new Map())).toStrictEqual(new Map()))
  test("s1m0",  () => expect(usm("i1", new Map())).toStrictEqual(new Map([["i","1"]])))
  test("s0m1",  () => expect(usm("", new Map([["v","5"]]))).toStrictEqual(new Map([["v","5"]])))
  test("s1m1",  () => expect(usm("v6", new Map([["v","5"]]))).toStrictEqual(new Map([["v","5"]])))
  test("pair2", () => expect(usm("v6i1", new Map([["v","5"]]))).toStrictEqual(new Map([["v","5"], ["i","1"]])))

})

describe("get updated map(as string)", () => {

  test("empty", () => expect(sms("",   new Map())).toBe(""))
  test("s1m0",  () => expect(sms("v5", new Map())).toBe("v5"))
  test("s0m1",  () => expect(sms("",   new Map([["i","1"]]))).toBe("i1"))
  test("s1m1",  () => expect(sms("v6", new Map([["v","5"]]))).toBe("v5"))
  test("s2m1", () => expect(sms("i2v5", new Map([["i","1"]]))).toBe("i1v5"))
  test("s2m2", () => expect(sms("v6i2", new Map([["i","1"], ["v","5"]]))).toBe("v5i1"))
  test("s+m",  () => expect(sms("v5", new Map([["i","1"]]))).toBe("v5i1"))
  test("m+s",  () => expect(sms("i1", new Map([["v","5"]]))).toBe("i1v5"))

})

describe("get updated map(string,string -> string)", () => {

  test("empty", () => expect(sss("","")).toBe(""))
  test("new1",  () => expect(sss("","v5")).toBe("v5"))
  test("upd1",  () => expect(sss("v6","v5")).toBe("v5"))
  test("u1n1",  () => expect(sss("v6","v5i1")).toBe("v5i1"))
  test("n1u1",  () => expect(sss("i2","v5i1")).toBe("i1v5"))
  test("u0n1",  () => expect(sss("v5","i1")).toBe("v5i1"))

})

})
