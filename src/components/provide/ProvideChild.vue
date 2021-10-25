<template>
  <div>Объект в дочернем компоненте -  {{ reactive }}</div>
</template>

<script>
export default {
  name: 'ProvideChild',
  inject: {
    sendAnalyticsInjection: {
      from: 'sendAnalytics',
      default: () => () => {}
    },
    reactive: { default: () => ({}) }
  }
};
</script>
