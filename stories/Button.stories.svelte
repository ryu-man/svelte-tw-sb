<script>
	import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
	import { Button } from "../src";
	import Root from './Root.svelte'
</script>

<Meta
	title="Example/Button"
	component={Button}
	argTypes={{
		class: {
			name: "class",
			type: { name: "string", required: false },
			defaultValue: "",
			description: "Provide custom class selectors",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: "" },
			},
			control: {
				type: "text",
			},
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
	<Root>
		<Button {...args} on:click={args.onClick}>{args.slot}</Button>
	</Root>
</Template>

<Story
	name="Tailwind Button"
	args={{
		class: "twBtn",
		slot: "Hello, Storybook!",
	}}
/>
