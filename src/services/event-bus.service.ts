import Vue from 'vue';
export const CHANGED_FILTER = 'changed-filter';
export const CHANGED_SEARCH = 'changed-search';

const bus = new Vue();

export default bus;
