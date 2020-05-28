<template>
  <div class="home">
    <Form>
      <Input type="login" label="Enter your login" />
      <Input type="avatar_link" label="Enter your avatar link" />
      <Button />
    </Form>
  </div>
</template>

<script>
import Button from '@/components/Button'
import Input from '@/components/Input'
import Form from '@/components/Form'

export default {
  name: 'Home',
  components: {
    Button,
    Input,
    Form
  }
}
</script>

<style scoped>

</style>
