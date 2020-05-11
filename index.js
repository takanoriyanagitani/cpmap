(function(g,f){

  const e = "object"    === typeof exports
  const m = "undefined" === typeof module
  const n = !m

  const c = e && n

  const x = function(){ return f(exports) }
  const y = function(){
    g.CharPairs2Map = {}
    return f(g.CharPairs2Map)
  }

  return c ? x() : y()

})(this, function(e){

e.s2c = function(s){ return s.split("") }

e.c2p = function(c){
  const ret = []
  const len = c.length
  const hlf = len >> 1
  for(let i=0; i<hlf; i++) ret.push([c[i*2], c[i*2+1]])
  return ret
}

e.p2s = function(p){ return p[0] + p[1] }

e.s2p = function(s){ return e.c2p(e.s2c(s)).map(e.p2s) }

e.s2m = function(s){
  const c = e.s2c(s)
  const p = e.c2p(c)
  const m = new Map()
  p.forEach(function(kv){
    const k = kv[0]
    const v = kv[1]
    m.set(k,v)
  })
  return m
}

})
