<template>
  <div>
    Filter by: <br/>Group:
    <select @change="changeFilter" v-model="selected">
      <option value="">All</option>
      <option>Quest</option>
      <option>Shooting</option>
      <option>Strategy</option>
    </select>

  </div>
</template>

<script lang="ts">
import {IFilter} from '@/interfaces/IFilter';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'game-filter',
})
export default class GameFilter extends Vue {
  filter: IFilter = { prop: 'type', value: '' };
  selected = '';
  changeFilter() {
    console.log('changeFilter GameFilter', this.selected);
    this.filter.value = this.selected;
    console.log('changeFilter', this.selected);
    this.$emit('change-filter', this.filter);
    // EVENT BUS USE
    // eventBus.$emit(CHANGED_FILTER, this.filter);
  }
}
</script>
<style></style>