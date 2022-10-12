// mengimport satu variabel/fungsi/objek
var penjumlahan = require("./kalkulator/penjumlahan")
var pengurangan = require("./kalkulator/pengurangan")
var pembagian = require("./kalkulator/pembagian")
var perkalian = require("./kalkulator/perkalian")

console.log(penjumlahan(20, 10))
console.log(pengurangan(20, 10))
console.log(perkalian(20, 10))
console.log(pembagian(20, 10))

// mengimport dua atau lebih variabel/fungsi/objek
var {tes, pi} = require("./import")

console.log(tes)
console.log(pi)

var {perkalian, pembagian, penjumlahan, pengurangan} = require("./kalkulatorFile")

console.log(perkalian(10, 2))
