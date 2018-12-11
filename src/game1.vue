<template>
	<div v-if="gameLevel" class="game game1">
		<div 
		v-for="card in cards"
		@click="fOpenCard(card)" 
		:class="{
			opened: card.isactive,
			pointerNone: card.isDisabled,
			matched: card.isMatched,
		}" 
		class="cards">
			<div  class="cards__card">
				<img :src="card.src">
			</div>
		</div>
	</div>
</template>

<script>
export default {
props: ['cards','gameLevel'],
data () {
	return {
		arr: [],
		arrChecked: [],
	  	allChecked: [],
		counterClicks: 0,
		resultClicks: 0,
	  	allOpened: 0,
	}
},
methods: {
	fOpenCard (item) {
		if(this.counterClicks == 2) return

		this.counterClicks +=1;
		item.isactive = true;
		
		this.arr.push(item.type);
		this.arrChecked.push(item);

		if(this.counterClicks == 2){

			this.$emit('movesPlus1');
			this.counter = setTimeout(() => {
			  this.counterClicks = 0;

				if (this.arr[0] == this.arr[1]) {
				  	this.allOpened +=2;
				  	console.log(this.allOpened);
				  	// console.log(this.cards.length);
				  	if (this.allOpened == this.cards.length) {
				  	  console.log('time to game over');
                      this.allOpened = 0;
				  	  this.$emit('onGameOver');
					}
					this.arrChecked.forEach((item, index) => {

						item.isMatched = true;
						item.isactive = false;
				});
			}else {
				this.arrChecked.forEach((item, index) => {
					item.isactive = false;
				});
			}
				this.arr = [];
				this.arrChecked = [];
			},500);
			
		}
	},
	fCloseCards () {

	},
}
}
</script>

<style lang='scss' scoped>

	.game {
		display: flex;
		justify-content: center;
		align-items: center;
		min-height: 235px;
		flex-wrap: wrap;
		margin-top: 57px;
      .cards{
		width: 65px;
		height: 65px;
		margin: 5px;
		background-color: #4B258A;
		border-radius: 8px;
		cursor: pointer;
        &__card{
			max-width: 95px;
			width: 100%;
			max-height: 95px;
			height: 100%;
          img {
			width: 100%;
			height: 100%;
			opacity: 0;
          }
        }
        &.opened {
          	background-color: transparent;
          	pointer-events: none;
          	img {
          		opacity: 1;
          	}
          }
        &.matched {
          	background-color: transparent;
          	pointer-events: none;
          	img {
          		opacity: 1;
          	}
          }
          &.pointerNone {
          	pointer-events: none;
          }
      }
    }
</style>