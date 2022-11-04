function Riwayat() {
	return (
		<div className="Form">
			<form className="Background Riwayat">
				<label>Riwayat</label>
				<table>
					<thead>
						<tr>
							<th>Tanggal</th>
							<th>No Telp</th>
							<th>Nominal</th>
							<th>Provider</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>1/1/1111</td>
							<td>089090909090</td>
							<td>10000</td>
							<td>Telkomsel</td>
						</tr>
						<tr>
							<td>2/2/2222</td>
							<td>088080808080</td>
							<td>20000</td>
							<td>Telkomsel</td>
						</tr>
						<tr>
							<td>3/3/3333</td>
							<td>087070707070</td>
							<td>20000</td>
							<td>Telkomsel</td>
						</tr>
						<tr>
							<td>4/4/4444</td>
							<td>086060606060</td>
							<td>20000</td>
							<td>Telkomsel</td>
						</tr>
					</tbody>
				</table>
				<div className="Pages">
					<button>Prev</button>
					<button>1</button>
					<button>2</button>
					<button>3</button>
					<button>Next</button>
				</div>
			</form>
		</div>
	)
}

export default Riwayat