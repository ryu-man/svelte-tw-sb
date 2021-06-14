<script>
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

<button class="p-4 bg-blue-500 text-white rounded" on:click>
	<slot />
</button>
