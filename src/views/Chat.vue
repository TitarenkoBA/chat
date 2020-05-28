<template>
  <div>
    <Form>
      <ContactsList />
    </Form>
    <Form>
      <p>I</p>
      <DisplayChatMessages />
      <TextArea type="textarea" placeholder="Enter your message here" />
      <Button />
    </Form>
    <Form>
      <p>Ivanov Ivan</p>
      <DisplayChatMessages />
      <TextArea type="textarea" placeholder="Enter your message here" />
      <Button />
    </Form>
  </div>
</template>

<script>
import Button from '@/components/Button'
import TextArea from '@/components/TextArea'
import Form from '@/components/Form'
import ContactsList from '@/components/ContactsList'
import DisplayChatMessages from '@/components/DisplayChatMessages'

export default {
  name: 'Chat',
  components: {
    Form,
    TextArea,
    Button,
    ContactsList,
    DisplayChatMessages
  }
}
</script>

<style scoped>
  div {
    height: 90vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
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
</style>
