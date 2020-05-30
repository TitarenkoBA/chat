<template>
  <div>
    <label :for="type">{{label}}</label>
    <input
      type="text"
      :name="type"
      :id="type"
      v-model="value"
    >
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Input',
  props: {
    type: String,
    label: String
  },
  data () {
    return {
      value: ''
    }
  },
  watch: {
    value: function (value) {
      const input: object = { value, type: this.type }
      this.$store.dispatch('UPDATE_INPUT_VALUE', input)
    }
  }
})
</script>

<style lang="less" scoped>
  div {
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
    label {
      margin-bottom: 10px;
      color: rgba(0, 0, 0, 0.5);
      font-size: 14px;
      text-align: left;
    }
    input {
      border: none;
      border-bottom: 2px solid rgba(0, 0, 0, 0.2);
      background: transparent;
      cursor: pointer;
      &:hover, &:focus {
        border-bottom: 2px solid rgb(8, 167, 140);
      }
    }
  }
</style>
