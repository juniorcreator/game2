<template>
	<div class="resetGame">
		<button @click="resetGame">Reset Game</button>
	</div>
</template>

<script>
	import {eventEmitter} from './main.js';
	export default {
		data() {
			return {

			}
		},
		methods: {
			resetGame() {
				this.$emit('resetGame');
				eventEmitter.$emit('openerCardToZero');

			}
		}

	}
</script>

<style>

</style>
