<template>
  <div class="container">
    <header>
      Header -
      <slot name="header" :innerHeader="innerHeader"></slot>
    </header>

    <main>
      Main -
      <slot></slot>
      <!-- <slot name="default"></slot> -->
    </main>

    <footer>
      Footer -
      <slot name="footer">Fallback footer</slot>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Layout',
  data() {
    return {
      innerHeader: 'Заголовок внутреннего компонента!!!'
    }
  }
};
</script>

<style scoped>

  header, main, footer {
    border: 1px solid #005bff;
    padding: 16px
  }

</style>
