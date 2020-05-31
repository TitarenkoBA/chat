<template>
  <div>
    <Form>
      <ContactsList />
    </Form>
    <Form>
      <p>{{dialog[0].name}}</p>
      <DisplayChatMessages type="first" />
      <TextArea type="textareaFirst" placeholder="Enter your message here" />
      <Button :click="submit" />
    </Form>
    <Form>
      <p>{{dialog[1].name}}</p>
      <DisplayChatMessages type="second" />
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
      } else if (value === 2) {
        this.submitReverse()
      }
    }
  },
  methods: {
    submit () {
      if (this.$store.state.CurrentMessage) {
        this.$store.dispatch('SUBMIT', 'sentMessage')
      }
    },
    submitReverse () {
      if (this.$store.state.CurrentMessage) {
        this.$store.dispatch('SUBMIT', 'recievedMessage')
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
    &:first-child {
      width: 20%;
      margin-right: 2%;
    }
    &:last-child {
      margin-left: 2%;
    }
  }
  @media screen and (max-width: 650px) {
    flex-direction: column;
    justify-content: flex-start;
    width: 90%;
    margin: auto;
    Form {
      width: 90% !important;
      min-height: 200px !important;
      margin: auto !important;
    }
  }
}
</style>
