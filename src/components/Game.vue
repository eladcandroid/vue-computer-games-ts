<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-4by3">
        <img :src="gameData.image" alt="">
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-4">{{gameData.title}}</p>
          <p class="subtitle is-6">{{gameData.type}}</p>
        </div>
      </div>

      <div class="content">
        <div v-if="!isEditPriceMode">
          <span class="price">Price: {{gameData.price}}$</span>
          <span class="editIcon icon" @click="isEditPriceMode = true">
            <i class="fas fa-edit"></i>
          </span>
        </div>
        <div v-else>
          <input type="text" v-model="editedPrice">
          <button @click="saveEditedPrice()">Save</button>
          <button @click="cancelEditedPrice()">Cancel</button>
        </div>

        <div class="price-nis">NIS: {{calcRate}} ₪</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import {IDataItem} from '@/interfaces/IDataItem';
import {Prop} from 'vue-property-decorator';

@Component({
  name: 'game',
})
export default class Game extends Vue  {
  @Prop() gameData: IDataItem;
  isEditPriceMode = false;
  editedPrice = 0;
  rate = 3.506;
  mounted() {
    this.editedPrice = this.gameData.price;
  }
  get calcRate() {
    return Math.trunc(this.gameData.price * this.rate);
  }
  saveEditedPrice() {
    this.gameData.price = this.editedPrice;
    this.isEditPriceMode = false;
    this.$emit('save-game', this.gameData);
  }
  cancelEditedPrice() {
    this.editedPrice = this.gameData.price;
    this.isEditPriceMode = false;
  }
}
</script>
<style></style>