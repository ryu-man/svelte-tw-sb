<script>
	import { classes } from "./utils";

	/**
	 * A Button Component
	 * @component
	 */

	let _class;
	/**
	 * Provide custom class selector
	 * @required
	 * @type {String}
	 */
	export { _class as class };

</script>

<button class={[_class, "p-4 bg-blue-500 text-white"].join(" ")} on:click>
	<slot />
</button>
