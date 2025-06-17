import { useEffect, type RefObject } from "react";

const useClickOutside = <T extends HTMLElement>(
	ref: RefObject<T | null>,
	callback: () => void
) => {
	useEffect(() => {
		if (!ref.current) {
			return;
		}

		const handleClick = (e: MouseEvent | TouchEvent) => {
			if (ref.current?.contains(e.target as Element)) {
				return;
			}
			callback();
		};

		document.addEventListener("mousedown", handleClick);
		document.addEventListener("touchstart", handleClick);

		return () => {
			document.removeEventListener("mousedown", handleClick);
			document.removeEventListener("touchstart", handleClick);
		};
	}, [ref, callback]);
};

export default useClickOutside;
