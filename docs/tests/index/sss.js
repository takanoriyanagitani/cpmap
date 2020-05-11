(function(cpmap){

  const sss = cpmap.sss
  const tests = document.getElementById("tests")

  const li = tests.getElementsByTagName("li")

  const n2i = function(n){ return document.getElementsByName(n)[0] }

  const create_map = function(kvpairs){
    const m = new Map()
    kvpairs.forEach(function(kv){ m.set(kv[0], kv[1]) })
    return m
  }

  const cases = [
    ["empty", ["",       ""], ""],
    ["pair1", ["i2",   "i1"], "i1"],
    ["pair2", ["v6i1", "v5"], "v5i1"],
  ]

  const state = {
    OK:    0,
    NG:    0,
    Total: cases.length,
  }

  cases.forEach(function(c){
    const n = c[0]
    const i = c[1]
    const e = c[2]
    const a = sss(i[0], i[1])
    const ok = e === a
    n2i(n).checked = ok
    state.OK += ok ? 1 : 0
    state.NG += ok ? 0 : 1
  })

  document.title = state.Total === state.OK ? "OK" : "NG"

})(window.CharPairs2Map)
