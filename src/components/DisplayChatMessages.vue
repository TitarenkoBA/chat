<template>
  <div class="displayChatMessages">
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
  },
  updated () {
    const displaysChatMessages = document.querySelectorAll('.displayChatMessages')
    displaysChatMessages.forEach((elem) => {
      elem.scrollTop = elem.scrollHeight
    })
  }
}
</script>

<style scoped>
  .displayChatMessages {
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
    float: left;
    clear: both;
    padding: 5px;
    margin: 5px;
    box-sizing: border-box;
    border-radius: 0 10px 10px 10px;
    color: white;
    font-size: 14px;
    text-align: center;
    word-wrap: break-word;
    background: rgb(8, 167, 140);
  }
  .recievedMessage {
    max-width: 70%;
    min-height: 30px;
    float: right;
    clear: both;
    padding: 5px;
    margin: 5px;
    box-sizing: border-box;
    border-radius: 10px 0 10px 10px;
    color: white;
    font-size: 14px;
    text-align: center;
    word-wrap: break-word;
    background: rgb(0, 100, 84);
  }
</style>
