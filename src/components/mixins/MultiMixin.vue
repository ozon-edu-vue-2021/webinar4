<template>
  <div @click="click">Extended comp</div>
</template>

<script>
const LoggerMixin = {
  data() {
    return {
      defaultLevel: "error"
    }
  },
  mounted() {
    this.log('Logger alive!!');
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

const NotifyMixin = {
  mounted() {
    this.log('Notify alive!!');
  },
  methods: {
    notify() {
      this.$notify({
        group: 'foo',
        title: 'Important message',
        text: 'Hello user! This is a notification!'
      })
    }
  }
};

export default {
  name: 'MultiMixin',
  mixins: [LoggerMixin, NotifyMixin],
  data() {
    return {
      defaultLevel: "info"
    }
  },
  mounted() {
    this.log('MyComponent alive!!');
  },
  methods: {
    click() {
      this.notify();
    }
  }
};
</script>
