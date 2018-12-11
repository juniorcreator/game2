<template>
	<div class="wrapper">
		<div class="wrapper__time">
			<span class="wrapper__text">Time</span>
			<span class="wrapper__data">{{timermoves.counter}} sec</span>
		</div>
		<div class="wrapper__moves">
			<span class="wrapper__text">Moves</span>
			<span class="wrapper__data">{{timermoves.moves}}</span>
		</div>
	</div>
</template>


<script>
 export default {
 	props: ['timermoves'],
 	data () {
 		return {

 		}
 	}
	
}
</script>

<style lang='scss' scoped>
	.wrapper {
		max-width: 200px;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		&__text, &__data {
			font-weight: bold;
			color: #8D7C8D;
			font-size: 15px;
		}
	}
</style>
