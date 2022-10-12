function getApi(data) {
    let citys = []
    let elements = []

    for (let i=0; i<Object.keys(data).length; i++) {
        let latitude = data[i][0][0]
        let longtitude = data[i][0][1]
        let ids = data[i][1]
        let kota = fetch(`https://api.weatherbit.io/v2.0/current?lat=${latitude}&lon=${longtitude}&key=d2f2876b7e5e48f39aa04701b186c5ee&lang=id`).then(res => res.json())
        let kotaElements = getElements(ids)

        citys.push(kota)
        elements.push(kotaElements)
    }
    changeData([citys, elements])
}

function getElements(ids) {
    let data = []

    ids.forEach(element => {
        data.push(document.getElementById(element))
    });

    return data
}

function changeData(citys) {
    let test = citys[0]
    let elements = citys[1]
    let listCity = {}

    Promise.all(test).then(res => {
        let [kota1, kota2, kota3] = res
        let arrCity = [kota1, kota2, kota3]
        
        for (let i=0; i<arrCity.length; i++) {
            listCity[i] = [arrCity[i], elements[i]]
        }

        Object.entries(listCity).forEach(([key, value]) => {
            let data = value[0].data[0].temp + "&deg; C"
            if (key == 0) {
                data = value[0].data[0].weather.description + " " + data
            }
            
            value[1][0].innerHTML = value[0].data[0].city_name
            value[1][1].innerHTML = data
            value[1][2].innerHTML = "https://www.weatherbit.io/static/img/icons/" + value[0].data[0].weather.icon + ".png"
        })
    })
}

async function cetak() {
    let citys = {
        0 : [[-6.200000, 106.816666], ["ht", "bg1", "img1"]], 
        1 : [[-7.797068, 110.370529], ["ht22", "cel1", "img22"]],
        2 : [[-6.178763, 107.065758], ["ht23", "cel2", "img23"]]
    }

    await getApi(citys)
}

cetak()
