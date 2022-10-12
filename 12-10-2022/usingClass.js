class Tes {
    tambah(a, b) {
        return a + b
    }
}

class Calc extends Tes {
    constructor(nm) {
        super()
        this.nama = nm
    }
}

var tambah = new Tes()
var coba = new Calc("risa")

console.log(tambah.tambah(5, 10))
console.log(coba)
console.log(coba.tambah(1, 1))