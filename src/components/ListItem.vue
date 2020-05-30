<template>
  <li>{{contact.name}}</li>
</template>

<script>
export default {
  name: 'ListItem',
  props: ['contact']
}
</script>

<style scoped>
  li {
    margin: 0;
    padding: 5px;
    list-style: none;
    font-size: 14px;
    background: white;
    cursor: pointer;
  }
  li:hover {
    border-radius: 0 10px 10px 10px;
    background: rgb(8, 167, 140);
    color: white;
  }
  li.select {
    background: rgb(8, 167, 140);
    color: white;
  }
</style>
