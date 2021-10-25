<template>
  <div>Extended comp</div>
</template>

<script>
const BaseLogger = {
  data() {
    return {
      defaultLevel: "error"
    }
  },
  mounted() {
    this.log('Base alive!!');
  },
  methods: {
    log(message, level) {
      const _level = level || this.defaultLevel;

      switch (_level) {
        case 'info':
          console.log(message);
          break;
        case 'warning':
          console.warn(message);
          break;
        case 'error':
          console.error(message);
          break;
      }
    }
  }
};

export default {
  name: 'Extended',
  extends: BaseLogger,
  data() {
    return {
      defaultLevel: "info"
    }
  },
  mounted() {
    this.log('MyComponent alive!!');
  },
  methods: {
    log(message) {
      alert(message)
    }
  }
};
</script>
