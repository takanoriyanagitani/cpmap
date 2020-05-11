# cpmap
map creation from character pairs

[![IE11 CI](https://github.com/takanoriyanagitani/cpmap/workflows/IE11%20CI/badge.svg)](https://github.com/takanoriyanagitani/cpmap/actions?query=workflow%3A%22IE11+CI%22)
[![Chrome/Node.js CI](https://github.com/takanoriyanagitani/cpmap/workflows/Chrome/Node.js%20CI/badge.svg)](https://github.com/takanoriyanagitani/cpmap/actions?query=workflow%3A%22Chrome%2FNode.js+CI%22)

* s2m: decoder (String -> Map)
* m2s: encoder (Map    -> String)
* s2s: update encoded Map

### Example

| Function | Input | Output |
|:---------|:------|:-------|
| s2m      | v5i1  | Map({'v'=>'5', 'i'=>'1'}) |
| m2s      | Map({"3"=>"8", "0"=>"1"}) | 3801 |
| s2s      | i2,i1 | i1 |
