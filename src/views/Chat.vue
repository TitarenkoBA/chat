<template>
  <div>
    <Form>
      <ContactsList />
    </Form>
    <Form>
      <p>{{dialog[0].name}}</p>
      <DisplayChatMessages />
      <TextArea type="textareaFirst" placeholder="Enter your message here" />
      <Button :click="submit" />
    </Form>
    <Form>
      <p>{{dialog[1].name}}</p>
      <DisplayChatMessages />
      <TextArea type="textareaSecond" placeholder="Enter your message here" />
      <Button :click="submitReverse" />
    </Form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Button from '@/components/Button.vue'
import TextArea from '@/components/TextArea.vue'
import Form from '@/components/Form.vue'
import ContactsList from '@/components/ContactsList.vue'
import DisplayChatMessages from '@/components/DisplayChatMessages.vue'

export default Vue.extend({
  name: 'Chat',
  components: {
    Form,
    TextArea,
    Button,
    ContactsList,
    DisplayChatMessages
  },
  computed: {
    submitFlag () {
      const submit: number | null = this.$store.state.Submit
      return submit
    },
    dialog () {
      const dialog: object[] = this.$store.state.Contacts
      return dialog
    }
  },
  watch: {
    submitFlag: function (value) {
      if (value === 1) {
        this.submit()
        this.$store.state.Submit = null
      } else if (value === 2) {
        this.submitReverse()
      }
    }
  },
  methods: {
    submit () {
      if (this.$store.state.CurrentMessage) {
        this.$store.state.Messages.push({ messageType: 'sentMessage', message: this.$store.state.CurrentMessage })
        document.querySelector('#textareaFirst').value = ''
        this.$store.state.Submit = null
      }
    },
    submitReverse () {
      if (this.$store.state.CurrentMessage) {
        this.$store.state.Messages.push({ messageType: 'recievedMessage', message: this.$store.state.CurrentMessage })
        document.querySelector('#textareaSecond').value = ''
        this.$store.state.Submit = null
      }
    }
  }
})
</script>

<style lang="less" scoped>
  div {
    height: 90vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    Form {
      width: 38%;
    }
    Form:first-child {
      width: 20%;
      margin-right: 2%;
    }
    Form:last-child {
      margin-left: 2%;
    }
  }
</style>
