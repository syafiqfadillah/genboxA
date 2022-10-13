let fs = require("fs")
let readline = require("readline")

// // async writeFile
// fs.writeFile("test.txt", "test5", (err) => {
//     try {
//         console.log("Berhasil!")
//     } catch(err) {
//         console.err(err)
//     }
// })

// async readline (input)
let rl =  readline.createInterface({
    input: process.stdin, 
    output: process.stdout
})

rl.question("Masukan nama anda : ", (nama) => {
    console.log(`Nama anda ${nama}`)
    rl.close()
})

// // sync writeFile
// fs.writeFileSync("./tes.txt", "test2")

// // sync readFile
// console.log(fs.readFileSync("./tes.txt", "utf-8"))

