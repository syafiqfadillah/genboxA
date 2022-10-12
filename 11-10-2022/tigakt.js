function getData(kt1, kt2, kt3) {
    Promise.all([kt1, kt2, kt3]).then(res => {
        let [kt1, kt2, kt3] = res

        console.log(kt1)
        console.log(kt2)
        console.log(kt3)
    })
}

var kt1 = fetch("https://api.weatherbit.io/v2.0/current?lat=-6.200000&lon=106.816666&key=d2f2876b7e5e48f39aa04701b186c5ee").then(res => res.json())
var kt2 = fetch("https://api.weatherbit.io/v2.0/current?lat=-6.597629&lon=106.799568&key=d2f2876b7e5e48f39aa04701b186c5ee").then(res => res.json())
var kt3 = fetch("https://api.weatherbit.io/v2.0/current?lat=-6.178763&lon=107.065758&key=d2f2876b7e5e48f39aa04701b186c5ee").theb(res => res.json())

getData(kt1, kt2, kt3)


	// // Jakarta
		// var heading1 = document.getElementById("ht")
		// var data1 =  document.getElementById("bg1")
		// var img1 = document.getElementById("img1")

		// var kt1 = fetch("https://api.weatherbit.io/v2.0/current?lat=-6.200000&lon=106.816666&key=d2f2876b7e5e48f39aa04701b186c5ee")
		// var kt11 = kt1.then(res => res.json())
		// kt11.then(res => {
		// 		heading1.innerHTML = res.data[0].city_name
		// 		data1.innerHTML = res.data[0].weather.description
		// 		img1.src = "https://www.weatherbit.io/static/img/icons/" + res.data[0].weather.icon + ".png"
		// })

		// // Yogyakarta
		// var heading2 = document.getElementById("ht22")
		// var img2 = document.getElementById("img22")
		// var cel = document.getElementById("cel1")

		// var kt2 = fetch("https://api.weatherbit.io/v2.0/current?lat=-7.797068&lon=110.370529&key=d2f2876b7e5e48f39aa04701b186c5ee&lang=id")
		// var kt12 = kt2.then(res => res.json())
		// kt12.then(res => {
		// 		heading2.innerHTML = res.data[0].city_name
		// 		img2.src = "https://www.weatherbit.io/static/img/icons/" + res.data[0].weather.icon + ".png"
		// 		cel.innerHTML = res.data[0].temp
		// })

		// // Bekasi
		// var heading3 = document.getElementById("ht23")
		// var img3 = document.getElementById("img23")
		// var cel2 = document.getElementById("cel2")

		// var kt3 = fetch("https://api.weatherbit.io/v2.0/current?lat=-7.797068&lon=110.370529&key=d2f2876b7e5e48f39aa04701b186c5ee&lang=id")
		// var kt13 = kt3.then(res => res.json())
		// kt13.then(res => {
		// 		heading3.innerHTML = res.data[0].city_name
		// 		img3.src = "https://www.weatherbit.io/static/img/icons/" + res.data[0].weather.icon + ".png"
		// 		cel2.innerHTML = res.data[0].temp
		// })