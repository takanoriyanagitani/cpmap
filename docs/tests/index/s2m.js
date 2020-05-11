(function(cpmap){

  const s2m = cpmap.s2m
  const tests = document.getElementById("tests")

  const li = tests.getElementsByTagName("li")

  const n2i = function(n){ return document.getElementsByName(n)[0] }

  const create_map = function(kvpairs){
    const m = new Map()
    kvpairs.forEach(function(kv){ m.set(kv[0], kv[1]) })
    return m
  }

  const cases = [
    ["empty", "",     create_map([])],
    ["pair1", "i1",   create_map([["i","1"]])],
    ["pair2", "v5i1", create_map([["v","5"], ["i","1"]])],
  ]

  const mcmp = function(a,b){
    switch(a.size){
      case 0:  return 0 === b.size
      default: break
    }
    let ok = 1
    a.forEach(function(v,k){ ok &= a.size === b.size && a[k] === b[k] ? 1 : 0 })
    switch(ok){
      case 1:  return true
      default: return false
    }
  }

  const state = {
    OK:    0,
    NG:    0,
    Total: cases.length,
  }

  cases.forEach(function(c){
    const n = c[0]
    const i = c[1]
    const e = c[2]
    const a = s2m(i)
    const ok = mcmp(e,a)
    n2i(n).checked = ok
    state.OK += ok ? 1 : 0
    state.NG += ok ? 0 : 1
  })

  document.title = state.Total === state.OK ? "OK" : "NG"

})(window.CharPairs2Map)
