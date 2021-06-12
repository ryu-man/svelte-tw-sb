import { classes } from "../src/utils";

describe("Utils", () => {
	it("classes", () => {
		const rounded = "sm";
		expect("rounded-sm").toEqual(classes({ rounded }));
	});
});
