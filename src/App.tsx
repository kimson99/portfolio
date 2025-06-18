import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "./App.css";

function App() {
	useGSAP(() => {
		gsap
			.timeline()
			.to(".the-light", {
				opacity: "100%",
				ease: "bounce.inOut",
				duration: 1,
			})
			.to(".the-light", {
				opacity: "0%",
				ease: "bounce.inOut",
				duration: 0.5,
			})
			.repeat(2)
			.to(".the-light", {
				opacity: "100%",
				ease: "bounce.inOut",
				duration: 1,
			})
			.delay(0.1);
	});
	return (
		<>
			<div className="dark:bg-black bg-white h-[100vh] w-[100vw] pt-4 pb-4">
				<div className="relative">
					<div
						className="the-light absolute -top-80 -right-96 opacity-0
					 border-l-[100vh] border-r-[100vh] border-b-[150vh] border-b-amber-100 border-l-transparent border-r-transparent rotate-[45deg]"
					></div>
				</div>
			</div>
		</>
	);
}

export default App;
