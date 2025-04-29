export function LightToggle({
	isLightOn,
	setIsLightOn,
}: {
	isLightOn: boolean;
	setIsLightOn: React.Dispatch<React.SetStateAction<boolean>>;
}) {
	return (
		<button onClick={() => setIsLightOn(!isLightOn)} type="button">
			{isLightOn ? "Turn off" : "Turn on"} the light
		</button>
	);
}
