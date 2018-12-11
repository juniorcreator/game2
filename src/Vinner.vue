<template>
    <div class="winner">
        <h1>Congratulations</h1>
        <p>Yo passed the game</p>
        <p> <span>Time = {{timermoves.counter}} seconds || </span>  <span>Moves = {{timermoves.moves}}</span> </p>
        <button @click="FplayAgain">Play again?</button>
    </div>
</template>

<script>
  export default {
    props: ['timermoves'],
    data () {
      return {

      }
    },
    methods: {
      FplayAgain () {
        this.$emit('onPlayAgain');
      }
    }
  }
</script>

<style lang="scss" scoped>
    .winner {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(47,34,95, 0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 200;
        flex-direction: column;
        h1 {
            font-size: 35px;
            color: #fff;
            font-weight: bold;
            text-transform: uppercase;
            margin-bottom: 15px;
        }
        p {
            color: #fff;
            font-size: 20px;
            font-weight: bold;
            text-transform: uppercase;
            margin-bottom: 10px;
        }
    }
</style>