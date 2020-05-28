<template>
  <div>
    <p>Contacts</p>
    <ul>
      <ListItem v-for="(contact, index) in contacts" :key="index" :contact="contact"/>
    </ul>
  </div>
</template>

<script>
import ListItem from '@/components/ListItem'

export default {
  name: 'ContactsList',
  components: {
    ListItem
  },
  computed: {
    contacts () {
      return this.$store.state.Contacts
    }
  }
}
</script>

<style scoped>
  div {
    display: flex;
    flex-direction: column !important;
    justify-content: flex-start !important;
    width: 90%;
    height: 90%;
    margin: 0 auto;
    background: white;
  }
  p {
    width: 100%;
    height: 40px;
    padding: 10px;
    margin-bottom: 10px;
    box-sizing: border-box;
    border-radius: 0 10px 10px 10px;
    color: white;
    font-size: 14px;
    text-align: center;
    background: rgb(8, 167, 140);
  }
  ul {
    max-height: 400px;
    margin: 0;
    padding: 0;
    border: 2px solid rgba(0, 0, 0, 0.2);
    border-radius: 0 10px 10px 10px;
  }
</style>
