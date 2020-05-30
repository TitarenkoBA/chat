<template>
    <button @click="this.click">Submit</button>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Button',
  props: {
    click: Function
  }
})
</script>

<style lang="less" scoped>
  button {
    width: 100px;
    height: 30px;
    padding: 5px;
    margin: 10px auto;
    border: none;
    border-radius: 0 10px 10px 10px;
    color: white;
    background: rgb(8, 167, 140);
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
    cursor: pointer;
    &:hover {
      background: rgba(8, 167, 140, 0.7);
    }
    &:active {
      box-shadow: none;
    }
  }
</style>
