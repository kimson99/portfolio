import clsx from "clsx";
import { useRef, useState, type ReactElement } from "react";
import { CgChevronDown, CgChevronUp, CgDarkMode } from "react-icons/cg";
import { CiDark, CiLight } from "react-icons/ci";
import useClickOutside from "../hooks/useClickOutside";

type ThemeOptions = "light" | "dark" | "default";

const themeModes: {
	id: string;
	label: string;
	theme: ThemeOptions;
	icon: ReactElement;
}[] = [
	{
		id: "light",
		label: "Light",
		theme: "light",
		icon: <CiLight />,
	},
	{
		id: "dark",
		label: "Dark",
		theme: "dark",
		icon: <CiDark />,
	},
	{
		id: "default",
		label: "System",
		theme: "default",
		icon: <CgDarkMode />,
	},
];

const ThemeSwitch = () => {
	const [selectedThemeId, setThemeId] = useState<string>(
		localStorage.getItem("theme") ?? "default"
	);
	const [isOpen, setOpen] = useState<boolean>(false);
	const ref = useRef<HTMLDivElement>(null);

	const handleThemeChange = (
		theme: "light" | "dark" | "default",
		id: string
	) => {
		setThemeId(id);
		const currTheme = localStorage.getItem("theme");
		if (currTheme !== null && (currTheme === "light" || currTheme === "dark")) {
			document.documentElement.classList.remove(currTheme);
			document.documentElement.classList.add(theme);
		}

		if (theme === "light" || theme === "dark") {
			localStorage.setItem("theme", theme);
		} else {
			if (
				window.matchMedia &&
				window.matchMedia("(prefers-color-scheme: dark)").matches
			) {
				document.documentElement.classList.add("dark");
			}
			localStorage.removeItem("theme");
		}

		setOpen(false);
	};

	useClickOutside(ref, () => {
		setOpen(false);
	});

	const handleToggleSelect = () => {
		setOpen(!isOpen);
	};
	return (
		<div className="flex flex-col" ref={ref}>
			<div
				onClick={() => handleToggleSelect()}
				className={clsx(
					isOpen
						? "rounded-t-2xl border-t-1 border-l-1 border-r-1"
						: "rounded-2xl border-1",
					"flex items-center justify-between cursor-pointer dark:text-white text-black border-gray-400 p-2"
				)}
			>
				{themeModes.find((t) => t.id === selectedThemeId)?.label}
				{isOpen ? <CgChevronUp /> : <CgChevronDown />}
			</div>
			<div className={clsx(isOpen ? "visible" : "hidden", "relative")}>
				<div className="flex flex-col absolute w-full border-b-1 border-l-1 border-r-1 rounded-b-2xl border-gray-400 dark:text-white text-black">
					{themeModes.map((item) => {
						return (
							<div
								className="flex items-center gap-2 p-2 cursor-pointer hover:bg-gray-600"
								key={item.id}
								onClick={() => handleThemeChange(item.theme, item.id)}
							>
								<span>{item.icon}</span>
								<span>{item.label}</span>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default ThemeSwitch;
