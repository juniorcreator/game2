<template>
	<div v-if="startgame[0].ishow" class="startgame">
		<div class="startgame__block">
			<div @click="$emit('startedGame')" class="startgame__text">
				start game
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['startgame'],
		data () {
			return {
			}
		},
		methods: {
			funcIshow () {
				this.$emit('startedGame');
			}
		}
	}
</script>

<style lang="scss" scoped> 
	.startgame {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(165,146,196, .5);
		&__block {
			width: 100%;
			height: 100%;
			position: relative;
			z-index: 10;
		}
		&__text{
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			width: 170px;
			height: 70px;
			border-radius: 13px;
			display: flex;
			justify-content: center;
			align-items: center;
			color: #fff;
			font-size: 20px;
			font-weight: bold;
			background-color: #000;
			transition: .4s;
			&:hover {
				cursor: pointer;
				color: #A592C4;
			}
		}
	}
</style>