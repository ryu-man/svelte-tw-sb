<script>
	import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
	import { Button } from "../src";

</script>

<Meta
	title="Example/Button"
	component={Button}
	argTypes={{
		class: {
			name: "class",
			type: { name: "string", required: false },
			defaultValue: "",
			description: "Provide custome class selectors",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: "" },
			},
			control: {
				type: "text",
			},
		},
		rounded: {
			control: "text",
			defaultValue: "",
			description: "Utilities for controlling the border radius of an element.",
			control: { type: "select" },
			options: ["xs", "sm", "", "md", "lg", "xl", "2xl"],
		},
		shadow: {
			control: "text",
			defaultValue: "",
			description: "Utilities for controlling the box shadow of an element.",
			control: { type: "select" },
			options: ["xs", "sm", "", "md", "lg", "xl", "2xl"],
		},
		bg: {
			control: "text",
			defaultValue: "",
			description: "class attribute",
			control: { type: "color" },
		},
		slot: { control: "text", defaultValue: "", description: "class attribute" },
		click: {
			action: "click",
			defaultValue: "",
			description: "click event",
		},
	}}
/>

<Template let:args>
	<Button {...args} on:click={args.onClick}>{args.slot}</Button>
</Template>

<Story
	name="Tailwind Button"
	args={{
		class: "p-4",
		rounded: "",
		shadow: "",
		bg: "blue",
		slot: "Hello, Storybook!",
	}}
/>
