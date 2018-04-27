<template>
    <div class="add-game-container">
        <div class="field">
            <div class="control">
                <input class="input is-primary" placeholder="Title" type="text" v-model="game.title">
            </div>
        </div>
        <div class="field">
            <div class="control">
                <input class="input is-primary" placeholder="Type" type="text" v-model="game.type">
            </div>
        </div>
        <div class="field">
            <div class="control">
                <input class="input is-primary" placeholder="Image" type="text" v-model="game.image">
            </div>
        </div>
        <div class="field">
            <div class="control">
                <input class="input is-primary" placeholder="Price" type="text" v-model="game.price">
            </div>
        </div>
        <p class="buttons">
            <a class="button is-primary" @click="addGame()">Add Game</a>
            <a class="button is-primary" @click="reset()">Reset</a>
        </p>
    </div>
</template>

<script lang="ts">

import dataService from '@/services/data.service';
import { Component, Vue } from 'vue-property-decorator';
import {IDataItem} from '../interfaces/IDataItem';

@Component
export default class AddGame extends Vue {
  newGame: IDataItem = {
    title: '',
    type: '',
    price: 0,
    image: '',
  };
  game: IDataItem = {
    title: '',
    type: '',
    price: 0,
    image: '',
  };

  get canAdd() {
    return (
      this.game.title && this.game.type && this.game.image && this.game.price
    );
  }
  addGame() {
    dataService.addItem(this.game).then(() => {
      alert('Game was added!');
      this.$router.push('/');
    });
  }
  reset() {
    this.game = { ...this.newGame };
  }
}
</script>
<style>
.add-game-container {
  margin: 10px;
}
</style>