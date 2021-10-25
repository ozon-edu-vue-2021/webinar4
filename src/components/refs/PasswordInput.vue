<template>
  <div class="container">
    <input :type="inputType" name="password" ref="input">
    <font-awesome-icon icon="eye" @click="toggleShowPassword" />

<!--    <span>{{ passLength }}</span>-->
  </div>
</template>
<script>
export default {
  name: 'PasswordInput',
  data() {
    return {
      isPasswordShown: false
    };
  },
  computed: {
    inputType() {
      // return this.isPasswordShown ? 'text' : 'password';

      return this.$parent.isPasswordShown ? 'text' : 'password';
    },
    // passLength() {
    //   return this.$refs.input.value.length;
    // }
  },
  methods: {
    toggleShowPassword() {
      // this.isPasswordShown = !this.isPasswordShown;
      this.$parent.isPasswordShown = !this.$parent.isPasswordShown;

      this.$refs.input.focus();
    }
  }
};
</script>
<style scoped>
  .container {
    display: flex;
    align-items: center;
  }

  input[name=password] {
    flex: 1;
    margin-bottom: 0;
  }
</style>
