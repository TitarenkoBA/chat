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
      this.$store.dispatch('ENTER_CHAT')
      this.$router.push('/Chat')
    }
  }
})
</script>
