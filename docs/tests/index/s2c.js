(function(cpmap){

  const s2c = cpmap.s2c
  const tests = document.getElementById("tests")

  const li = tests.getElementsByTagName("li")

  const n2i = function(n){ return li.getElementsByName(n)[0] }

  const cases = [
    ["empty", "",     []],
    ["pair1", "c4",   ["c","4"]],
    ["pair2", "r2d2", ["r","2","d","2"]],
  ]

  const acmp = function(a,b){
    switch(a.length){
      case 0:  return 0 === b.length
      default: return a.every(function(e,i){ return a.length === b.length && a[i] === b[i] })
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
    const a = s2c(i)
    const ok = acmp(e,a)
    n2i(n).checked = ok
    state.ok += ok ? 1 : 0
    state.ng += ok ? 0 : 1
  })

  document.title = JSON.stringify(state)

})(window.CharPairs2Map)
