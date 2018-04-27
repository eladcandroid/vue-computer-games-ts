<template>
  <div>
    Search by: <input type="text" @input="changeSearch" v-model="searched" />
  </div>
</template>

<script lang="ts">
import {ISearch} from '../interfaces/ISearch';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'game-search',
})
export default class GameSearch extends Vue {
  search: ISearch = { prop: 'title', value: '' };
  searched = '';
  changeSearch() {
    this.search.value = this.searched;
    console.log('changeSearch', this.search);
    this.$emit('change-search', this.search);
    // EVENT BUS USE
    // eventBus.$emit(CHANGED_SEARCH, this.search);
  }
}
</script>
<style></style>