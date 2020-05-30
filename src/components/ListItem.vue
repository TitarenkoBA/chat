<template>
  <li>{{contact.name}}</li>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ListItem',
  props: {
    contact: Object
  }
})
</script>

<style lang="less" scoped>
  li {
    margin: 0;
    padding: 5px;
    list-style: none;
    font-size: 14px;
    background: white;
    cursor: pointer;
    &:hover {
      border-radius: 0 10px 10px 10px;
      background: rgb(8, 167, 140);
      color: white;
    }
    &.select {
      background: rgb(8, 167, 140);
      color: white;
    }
  }
</style>
