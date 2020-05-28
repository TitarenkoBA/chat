<template>
  <div>
    <label :for="type">{{label}}</label>
    <input type="text" :name="type" :id="type">
  </div>
</template>

<script>
export default {
  name: 'Input',
  props: {
    type: String,
    label: String
  }
}
</script>

<style scoped>
  div {
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
  }
  label {
    margin-bottom: 10px;
    color: rgba(0, 0, 0, 0.5);
    font-size: 14px;
    text-align: left;
  }
  input {
    border: none;
    border-bottom: 2px solid rgba(0, 0, 0, 0.2);
    background: rgba(221, 220, 220, 0.1);
    cursor: pointer;
  }
  input:hover, input:focus {
    border-bottom: 2px solid rgb(8, 167, 140);
  }
</style>
