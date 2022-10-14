fetch("http://localhost:4000/users/v1/data").then(res => res.json()).then(res => {
    Object.keys(res.data).forEach(element => {
        console.log(res.data, element)
        document.getElementById(element).innerHTML = `${document.getElementById(element).textContent} ${res.data[`${element}`]}`
    })
})
