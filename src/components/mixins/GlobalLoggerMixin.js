export const LoggerMixin = {
  logLevel: 'error',
  mounted() {
    this.log('Base alive!!');
  },
  data() {
    return {
      foo: 123
    }
  },
  methods: {
    log(message, level) {
      const _level = level || this.$options.logLevel;

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
