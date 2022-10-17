function changeColor(i, obj) {
	// search a button with black background-color
	Object.keys(obj).forEach(q => {
		if (getComputedStyle(obj[q][0]).backgroundColor == "rgb(34, 40, 49)") {
			// if forEach find it, change the color
			obj[q][0].setAttribute("style", "background-color:white")
		}
	})
	// set selected button to black background-color
	obj[i][0].setAttribute("style", "background-color:#222831")
}

var r = []
let u = ["0", "-20%", "-40%"]
var g = document.getElementsByClassName("bar")

for (let i=0; i<g.length; i++) {
	r[i] = [g[i], u[i]]
}

var slide = document.getElementsByClassName("s1")[0]

for (let i=0; i<Object.keys(r).length; i++) {
	r[i][0].addEventListener("click", () => {
		changeColor(i, r)
		
		switch (i) {
			case 0:
				slide.setAttribute("style", "margin-left:0")
				break;
			case 1:
				slide.setAttribute("style", "margin-left:-20%")
				break;
			case 2:
				slide.setAttribute("style", "margin-left:-40%")
				break;
		}
	})
}

// automatic
let i = 0
setInterval(()=>{
	changeColor(i, r)
	slide.setAttribute("style", `margin-left:${u[i]}`)
	i++
	if (i == u.length) {
		i = 0
	}
}, 3000)



