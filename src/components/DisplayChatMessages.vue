<template>
  <div>
    <p v-for="(message, index) in messages" :key="index" :class="message.messageType">{{message.message}}</p>
  </div>
</template>

<script>
export default {
  name: 'DisplayChatMessages',
  computed: {
    messages () {
      return this.$store.state.Messages
    }
  }
}
</script>

<style scoped>
  div {
    display: block !important;
    width: 90%;
    height: 50%;
    margin: auto;
    border: 2px solid rgba(0, 0, 0, 0.2);
    border-radius: 0 10px 10px 10px;
    overflow-y: auto;
  }
  .sentMessage {
    max-width: 70%;
    min-height: 30px;
    padding: 5px;
    margin: 0 auto 5px 0;
    box-sizing: border-box;
    border-radius: 0 10px 10px 10px;
    color: white;
    font-size: 14px;
    text-align: center;
    background: rgb(8, 167, 140);
  }
  .recievedMessage {
    max-width: 70%;
    min-height: 30px;
    padding: 5px;
    margin: 0 0 5px auto;
    box-sizing: border-box;
    border-radius: 10px 0 10px 10px;
    color: white;
    font-size: 14px;
    text-align: center;
    background: rgba(8, 167, 140, 0.5);
  }
</style>
