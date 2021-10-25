<template>
  <Layout>
    <template #header="{innerHeader}">
      <h1>{{ innerHeader }}</h1>
    </template>

    <p>Параграф для основного контента.</p>
    <p>И ещё один.</p>
  </Layout>
</template>

<script>
import Layout from '@/components/slots/Layout';
export default {
  name: 'ScopedSlots',
  components: { Layout },
  data() {
    return {
      header: 'Текст заголовка из родительского компонента'
    }
  }
};
</script>
