var readline = require("./node_modules/readline-sync")
var Attack = require("./attack.js")

class Person extends Attack {
	constructor() {
		super()

		this.health = 100
		this.exp = 0
		this.level = 1
	}

	diserang() {
		this.health -= 20
		console.log(`Kamu diserang! Darah mu tersisa ${this.health}`)
	}

	checkExp() {
		if ((this.exp > 0) && (this.exp % 100) == 0) {
			this.level += 1
			console.log("LEVEL UP!")
		}
	}
} 

var manusia = new Person()

do {
	console.log("Serang? (Y/N/S): ")
	var choice = String(readline.question()).toUpperCase()
	if (choice == "Y") {
		manusia.serang()
	} else {
		manusia.diserang()
	}

	manusia.checkExp()
} while (choice != "S")
