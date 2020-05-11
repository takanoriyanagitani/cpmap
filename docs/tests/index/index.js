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

e.s2c = function(s=""){ return s.split("") }

})
