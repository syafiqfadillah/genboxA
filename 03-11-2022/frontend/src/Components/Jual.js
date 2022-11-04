function Jual() {
	return (
		<div className="Form">
			<form className="Background Jual">
				<label>Pulsa</label>
				<input placeholder="Masukan Nomer Hp"></input>
				<input placeholder="Masukan Jumlah Pulsa"></input>
				<div className="Providers">
					<button type="button">XL</button>
					<button type="button">Telkomsel</button>
					<button type="button">3</button>
					<button type="button">IM3</button>
				</div>
				<button>Kirim</button>
			</form>
		</div>
	)
}

export default Jual