<template>
  <div class="home">
    <Form>
      <Input type="Login" label="Enter your login" />
      <Input type="AvatarLink" label="Enter your avatar link" />
      <Button :click="enterChat"/>
    </Form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Button from '@/components/Button.vue'
import Input from '@/components/Input.vue'
import Form from '@/components/Form.vue'

export default Vue.extend({
  name: 'Home',
  components: {
    Button,
    Input,
    Form
  },
  methods: {
    enterChat () {
      const login: string | null = this.$store.state.Login
      const avatarLink: string | null = this.$store.state.AvatarLink
      this.$store.state.User = { login, avatarLink }
      interface User {
        name: string | null;
        id: string;
      }
      const users: Array<User> = [...this.$store.state.Contacts]
      users[0].name = login
      this.$store.state.Contacts = [...users]
      this.$router.push('/Chat')
    }
  }
})
</script>
