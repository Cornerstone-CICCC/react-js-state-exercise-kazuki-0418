import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { ClickCounter } from "./components/ClickCounter";
import { LightToggle } from "./components/LightToggle";
import { LottoNumbers } from "./components/LottoNumbers";

function App() {
	const [count, setCount] = useState(0);
	const [isLightOn, setIsLightOn] = useState(false);
	const [lottoNumbers, setLottoNumbers] = useState<number[]>([]);

	const handleClick = (count: number) => {
		setCount((prevCount) => prevCount + count);
	};

	return (
		<>
			<div>
				<a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank" rel="noopener noreferrer">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<div>
				<h2>Light Toggle</h2>
				<LightToggle setIsLightOn={setIsLightOn} isLightOn={isLightOn} />
				{isLightOn ? (
					<span className="light-on">💡</span>
				) : (
					<span className="light-off">💡</span>
				)}
				<h2>Lotto Numbers</h2>
				<LottoNumbers setLottoNumbers={setLottoNumbers} />
				<div className="output">{lottoNumbers}</div>

				<h2>Click Counter</h2>
				<ClickCounter onClick={handleClick} />
				<div className="output">{count}</div>
			</div>
		</>
	);
}

export default App;
