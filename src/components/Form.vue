<template>
  <form @submit.prevent>
    <slot></slot>
  </form>
</template>

<script>
export default {
  name: 'Form'
}
</script>

<style scoped>
  form {
    display: flex;
    flex-direction: column;
    width: 40%;
    padding: 20px;
    margin: 5% auto;
    border: 2px solid rgb(8, 167, 140);
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
    background: white;
  }
</style>
