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
