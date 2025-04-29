export function LottoNumbers({
	setLottoNumbers,
}: {
	setLottoNumbers: React.Dispatch<React.SetStateAction<number[]>>;
}) {
	return (
		<button
			onClick={() => {
				// Generate 7 random numbers between 1 and 50.
				const newNumbers = Array.from(
					{ length: 7 },
					() => Math.floor(Math.random() * 50) + 1,
				)
					.sort((a, b) => a - b)
					.slice(0, 7);
				setLottoNumbers(newNumbers);
			}}
			type="button"
		>
			Generate Lotto Numbers
		</button>
	);
}
