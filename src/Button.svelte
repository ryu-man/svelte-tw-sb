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
	/**
	 * Button border radius
	 * @required
	 * @type {xs | sm |  | md | lg | xl | 2xl}
	 */
	export let rounded;
	/**
	 * Button drop shadow
	 * @required
	 * @type {xs | sm |  | md | lg | xl | 2xl}
	 */
	export let shadow;
	/**
	 * Button background
	 * @required
	 */
	export let bg;

</script>

<button
	class={classes(_class, "p-2 bg-gray-600 text-white", { rounded, shadow, bg })}
	on:click
>
	<slot />
</button>
