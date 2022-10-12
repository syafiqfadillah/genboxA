class Attack {
	serang() {
		this.exp += 30
	}

	diserang() {
		this.health -= 20
		console.log(`Kamu diserang! Darah mu tersisa ${this.health}`)
	}
}

module.exports = Attack