export function classes(...args) {
	return args
		.filter(Boolean)
		.filter((arg) => {
			if (["object", "string"].some((type) => typeof arg === type)) {
				return true;
			} else {
				false;
			}
		})
		.map((arg) => {
			if (typeof arg === "string") {
				return arg;
			} else if (typeof arg === "object") {
				return Object.entries(arg)
					.filter(([_, value]) => value === "" || value)
					.map(([key, value]) =>
						value.length ? [key, "-" + value] : [key, value]
					)
					.map(([key, value]) => `${key}${value}`)
					.join(" ");
			} else {
				return "";
			}
		})
		.join(" ");
}
