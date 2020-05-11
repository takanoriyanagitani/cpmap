const { s2c } = require("./index")

describe("s2c", () => {

  test("empty", () => expect(s2c("")).toStrictEqual([]))
  test("pair1", () => expect(s2c("c4")).toStrictEqual(["c","4"]))
  test("pair2", () => expect(s2c("r2d2")).toStrictEqual(["r","2","d","2"]))

})
