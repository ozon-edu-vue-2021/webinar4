<template>
  <div>Extended comp</div>
</template>

<script>
export default {
  name: 'WithGlobalMixin',
  logLevel: 'info',
  mounted() {
    this.log('MyComponent alive!!');
  },
};
</script>
