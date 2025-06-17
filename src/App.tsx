import "./App.css";
import ThemeSwitch from "./components/ThemeSwitch";

function App() {
	return (
		<>
			<div className="dark:bg-black bg-white h-[100vh] w-[100vw] p-4">
				<ThemeSwitch />
			</div>
		</>
	);
}

export default App;
