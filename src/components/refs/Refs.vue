<template>
  <div>
    <form class="form">
      <span>Авторизация</span><br>

      <fieldset class="fieldset">
        <input type="text" name="login">
        <PasswordInput />
      </fieldset>
    </form>

    <CollectionCheck v-if="true" />
  </div>
</template>

<script>
import PasswordInput from '@/components/refs/PasswordInput';
import CollectionCheck from '@/components/refs/CollectionCheck';

export default {
  name: 'Refs',
  components: { PasswordInput, CollectionCheck },
  data() {
    return {
      isPasswordShown: false
    };
  }
};
</script>

<style scoped>
  .form {
    padding: 40px;
    display: flex;
    flex-direction: column;
    max-width: 250px;
  }

  .fieldset {
    display: flex;
    flex-direction: column;
    border: none;
    padding: 0;
  }
</style>
