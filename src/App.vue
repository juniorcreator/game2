<template>
  <div class="maiwrapper">
    <h1 v-color:color.textcenter="'#4D2659'">{{titleGame}}</h1>
    <hr>
      <app-timemoves :timermoves='timermoves'></app-timemoves>
      <app-startgame
      :startgame='startgame'
      @startedGame="startGame"
      ></app-startgame>
      <button v-if="false" @click="startgame[0].ishow = !startgame[0].ishow">show</button>
      <app-resetgame @resetGame="fresetGame"></app-resetgame>
      <app-game1
      :cards="cards"
      :gameLevel="gameLeves[0].gameLevel"
      @clcickinsrise="fIncrisedCounter"
      @tozeroclickCounter="ftozeroCounter"
      @movesPlus1="movescount"
      @onGameOver="FshowGameOver"
      ></app-game1>
    <app-vinner
            :timermoves="timermoves"
            v-if="isPlayAgaing" @onPlayAgain="fPlayAgain">

    </app-vinner>
  </div>
</template>
<script>
import timemoves from './timemoves.vue'
import startgame from './startgame.vue'
import resetgame from './resetgame.vue'
import game1 from './game1.vue'
import vinner from './Vinner.vue'
  export default {
    name: 'app',
    data (){
      return{
        titleGame: 'CARDS GAME',
        timermoves: {
          counter: 0,
          moves: 0,
        },
        clickCounter: 0,
        mainClickCounter: 0,
        startgame: [
          {ishow: true},
        ],
        movesCounter: 0,
        ifReset: false,
        cards: [
         {'type': 'img34', src: '../src/assets/images/level1/image34.jpg', isactive: false, isDisabled: false, isMatched: false},
         {'type': 'img40', src: '../src/assets/images/level1/image40.jpg', isactive: false, isDisabled: false, isMatched: false},
         {'type': 'img40', src: '../src/assets/images/level1/image40.jpg', isactive: false, isDisabled: false, isMatched: false},
         {'type': 'img34', src: '../src/assets/images/level1/image34.jpg', isactive: false, isDisabled: false, isMatched: false},
         {'type': 'img7', src: '../src/assets/images/level1/image7.jpg', isactive: false, isDisabled: false, isMatched: false},
          {'type': 'img7', src: '../src/assets/images/level1/image7.jpg', isactive: false, isDisabled: false, isMatched: false},
         {'type': 'img51', src: '../src/assets/images/level1/image51.jpg', isactive: false, isDisabled: false, isMatched: false},
         {'type': 'img51', src: '../src/assets/images/level1/image51.jpg', isactive: false, isDisabled: false, isMatched: false},
          {'type': 'img0', src: '../src/assets/images/level1/image0.jpg', isactive: false, isDisabled: false, isMatched: false},
          {'type': 'img0', src: '../src/assets/images/level1/image0.jpg', isactive: false, isDisabled: false, isMatched: false},
          {'type': 'img10', src: '../src/assets/images/level1/image10.jpg', isactive: false, isDisabled: false, isMatched: false},
          {'type': 'img10', src: '../src/assets/images/level1/image10.jpg', isactive: false, isDisabled: false, isMatched: false},
          {'type': 'img14', src: '../src/assets/images/level1/image14.jpg', isactive: false, isDisabled: false, isMatched: false},
          {'type': 'img14', src: '../src/assets/images/level1/image14.jpg', isactive: false, isDisabled: false, isMatched: false},
          {'type': 'img16', src: '../src/assets/images/level1/image16.jpg', isactive: false, isDisabled: false, isMatched: false},
          {'type': 'img16', src: '../src/assets/images/level1/image16.jpg', isactive: false, isDisabled: false, isMatched: false},
          {'type': 'img22', src: '../src/assets/images/level1/image22.jpg', isactive: false, isDisabled: false, isMatched: false},
          {'type': 'img22', src: '../src/assets/images/level1/image22.jpg', isactive: false, isDisabled: false, isMatched: false},
          {'type': 'img23', src: '../src/assets/images/level1/image23.jpg', isactive: false, isDisabled: false, isMatched: false},
          {'type': 'img23', src: '../src/assets/images/level1/image23.jpg', isactive: false, isDisabled: false, isMatched: false},
          {'type': 'img31', src: '../src/assets/images/level1/image31.jpg', isactive: false, isDisabled: false, isMatched: false},
          {'type': 'img31', src: '../src/assets/images/level1/image31.jpg', isactive: false, isDisabled: false, isMatched: false},
          {'type': 'img49', src: '../src/assets/images/level1/image49.jpg', isactive: false, isDisabled: false, isMatched: false},
          {'type': 'img49', src: '../src/assets/images/level1/image49.jpg', isactive: false, isDisabled: false, isMatched: false},
          {'type': 'img37', src: '../src/assets/images/level1/image37.jpg', isactive: false, isDisabled: false, isMatched: false},
          {'type': 'img37', src: '../src/assets/images/level1/image37.jpg', isactive: false, isDisabled: false, isMatched: false},
          {'type': 'img12', src: '../src/assets/images/level1/image12.jpg', isactive: false, isDisabled: false, isMatched: false},
          {'type': 'img12', src: '../src/assets/images/level1/image12.jpg', isactive: false, isDisabled: false, isMatched: false},
          {'type': 'img44', src: '../src/assets/images/level1/image44.jpg', isactive: false, isDisabled: false, isMatched: false},
          {'type': 'img44', src: '../src/assets/images/level1/image44.jpg', isactive: false, isDisabled: false, isMatched: false},
        ],
        gameLeves: [
          {gameLevel: true},
        ],
        isPlayAgaing: false,
      }
    },
    beforeMount () {
    },
    created () {
      this.resortArray(this.cards);
    },
    beforeDestroy() {
  },
    components:{
      appTimemoves: timemoves,
      appStartgame: startgame,
      appResetgame: resetgame,
      appGame1: game1,
      appVinner: vinner,
    },
    methods: {
      resortArray (array) {
        for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
        }
      },
      startGame (value) {
          this.startgame[0].ishow = false;
          this.isPlayAgaing = false;
          this.interval = setInterval(() => {
          this.timermoves.counter +=1;
        },1000);
      },
      playAgain () {
        console.log('again');
        this.isPlayAgaing = false;
        console.log(this.isPlayAgaing);
      },

      fresetGame () {
        this.startgame[0].ishow = true;
        clearInterval(this.interval);
        this.timermoves.counter = 0;
        this.timermoves.moves = 0;
        this.isPlayAgaing = false;
        this.cards.forEach((item, index, arr) => {
          item.isactive = false;
          item.isMatched = false;
        });

      },
      fPlayAgain () {
        this.startGame();
        // this.interval = setInterval(() => {
        //   this.timermoves.counter +=1;
        // },1000);
        // this.isPlayAgaing = false;
        // this.startgame[0].ishow = false;
        this.timermoves.counter = 0;
        this.timermoves.moves = 0;
        this.isPlayAgaing = false;
        this.cards.forEach((item, index, arr) => {
          item.isactive = false;
          item.isMatched = false;
        });
      },


      fIncrisedCounter (val) {
      },

      ftozeroCounter () {
      },

      pushingFromGame (value) {
          this.arrForChecking.push(value);
        },

      movescount() {
        this.timermoves.moves +=1;
      },
      FshowGameOver () {
        this.isPlayAgaing = true;
        clearInterval(this.interval);

        // this.fresetGame();

      },
    },
    mounted () {
      // this.resortArray(this.cards);
      // return
      // console.log('mounted')
    },
  }
</script>

<style lang="scss" scoped> 
  .maiwrapper {
    position: relative;
    max-width: 520px;
    height: 100%;
    max-height: 500px;
    margin: 0 auto;
    padding: 0 15px;
    h1 {
      font-size: 40px;
      font-weight: bold;
      margin: 5px 0;
    }
    .resetGame {
      position: absolute;
      bottom: -21px;
      left: 0;
    }
  }
</style>
