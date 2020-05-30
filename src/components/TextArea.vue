<template>
  <textarea :name="type" :id="type" :placeholder="placeholder" v-model="value" @keydown.ctrl.enter="submit"></textarea>
</template>

<script>
export default {
  name: 'TextArea',
  props: {
    type: String,
    placeholder: String
  },
  data () {
    return {
      value: ''
    }
  },
  watch: {
    value: function (value) {
      this.$store.state.CurrentMessage = value
    }
  },
  methods: {
    submit () {
      if (this.type === 'textareaFirst') {
        this.$store.state.Submit = 1
      } else {
        this.$store.state.Submit = 2
      }
    }
  }
}
</script>

<style scoped>
  textarea {
    width: 90%;
    height: 10vh;
    margin: 10px auto;
    border: none;
    border: 2px solid rgba(0, 0, 0, 0.2);
    border-radius: 0 10px 10px 10px;
    cursor: pointer;
  }
  textarea:focus {
    border-color:  rgb(8, 167, 140);
  }
</style>
