<template>
  <div>
    <ul class="container">
      <li v-for="el in elements" :key="el" class="el" ref="elementRef">{{ el }}</li>
    </ul>
    <button @click="add">Add element</button>
  </div>

</template>
<script>
export default {
  name: 'CollectionCheck',
  data() {
    return {
      elements: ['foo', 'bar', 'baz']
    };
  },
  mounted() {
    console.log(this.$refs)
  },
  updated() {
    console.log(this.$refs)
  },
  methods: {
    add() {
      this.elements.push(Math.random())
    }
  }
};
</script>
<style scoped>
  .container {
  }

  .el {
    margin-right: 4px;
  }
</style>
