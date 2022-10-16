function changeColor(i, r, g) {
	if (getComputedStyle(r[i]).backgroundColor != "rgb(0, 0, 0)") {
	// search a button with black background-color
	r.forEach(q => {
		if (getComputedStyle(q).backgroundColor == "rgb(0, 0, 0)") {
			// if forEach find it, change the color
			q.setAttribute("style", "background-color:white")
		}
	})
		// set selected button to black background-color
		g[i].setAttribute("style", "background-color:black")
	}
}

var r = []
var g = document.getElementsByClassName("bar")

for (let i=0; i<g.length; i++) {
	r.push(g[i])
}

var slide = document.getElementsByClassName("s1")[0]

for (let i=0; i<r.length; i++) {
	r[i].addEventListener("click", () => {
		changeColor(i, r, g)
		
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




