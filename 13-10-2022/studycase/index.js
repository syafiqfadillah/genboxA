let fs = require("fs")
let readline = require("readline")

function interface(data) {
    let newData = JSON.parse(data)

    console.log("No ----- Kegiatan ----- Tanggal ----- Jam")
    Object.keys(newData).forEach(element => {
        console.log(` ${element} --------- ${newData[element][0]} ----------- ${newData[element][1]} --------- ${newData[element][2]}`)
    })
}

let rl =  readline.createInterface({
    input: process.stdin, 
    output: process.stdout
})

rl.question("Kegiatan/Tanggal/Jam : ", (data) => {
    let [kegiatan, tanggal, jam] = data.split("/")
    let datas = JSON.parse(fs.readFileSync("./database.json", "utf-8"))
    let index = Object.keys(datas).length

    index++

    datas[index] = [kegiatan, tanggal, jam]

    let convert = JSON.stringify(datas)

    fs.writeFileSync("./database.json", convert)

    interface(fs.readFileSync("./database.json", "utf-8"))

    rl.close()
})
