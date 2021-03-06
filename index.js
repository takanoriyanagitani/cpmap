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

e.m2p = function(m){
  const p = []
  m.forEach(function(v,k){ p.push([k,v]) })
  return p
}

e.m2s = function(m){
  const pairs = e.m2p(m)
  const strs  = pairs.map(function(p){ return p[0]+p[1] })
  return strs.join("")
}

e.usm = function(s,m){
  const old = e.s2m(s)
  const neo = new Map()
  old.forEach(function(v,k){ neo.set(k,v) })
  m.forEach(function(v,k){   neo.set(k,v) })
  return neo
}

e.sms = function(s,m){
  const updated = e.usm(s,m)
  return e.m2s(updated)
}

e.sss = function(a,b){
  const m = e.usm(a, e.s2m(b))
  return e.m2s(m)
}

e.s2s = e.sss

})
