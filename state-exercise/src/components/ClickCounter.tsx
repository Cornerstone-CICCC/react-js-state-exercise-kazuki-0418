type Props = {
	onClick: (value: number) => void;
};

export function ClickCounter({ onClick }: Props) {
	return (
		<button onClick={() => onClick(1)} type="button">
			count Up
		</button>
	);
}
