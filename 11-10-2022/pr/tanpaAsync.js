function getApi(index, latitude, longtitude, ids) {
    let kota = fetch(`https://api.weatherbit.io/v2.0/current?lat=${latitude}&lon=${longtitude}&key=d2f2876b7e5e48f39aa04701b186c5ee&lang=id`).then(res => res.json())
    let kotaElements = getElements(ids)
    changeData(index, kota, kotaElements)
}

function getElements(ids) {
    let data = []

    ids.forEach(element => {
        data.push(document.getElementById(element))
    });

    return data
}

function changeData(index, api, elements) {
    api.then(res => {

        let data = res.data[0].temp + "&deg; C"
        
        if (index == 0) {
            data = res.data[0].weather.description + " " + res.data[0].temp + "&deg; C"
        }

        elements[0].innerHTML = res.data[0].city_name
        elements[1].innerHTML = data
        elements[2].src = "https://www.weatherbit.io/static/img/icons/" + res.data[0].weather.icon + ".png"
    })
}

async function cetak() {
    let citys = [
        [-6.200000, 106.816666, ["ht", "bg1", "img1"]], 
        [-7.797068, 110.370529, ["ht22", "cel1", "img22"]],
        [-6.178763, 107.065758, ["ht23", "cel2", "img23"]]
    ]

    for (let i=0; i<citys.length; i++) {
        await getApi(i, citys[i][0], citys[i][1], citys[i][2])
    }
}

cetak()
