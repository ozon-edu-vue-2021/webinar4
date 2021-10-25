<template>
  <div>
    <Refs v-if="false" />

    <Extended v-if="false" />
    <MultiMixin v-if="false" />
    <WithGlobalMixin v-if="false" />

    <ProvideMain v-if="false" />

    <ScopedSlots v-if="true" />

    <notifications group="foo" />
  </div>
</template>

<script>
import WithGlobalMixin from '@/components/mixins/WithGlobalMixin';
import Extended from '@/components/mixins/Extend';
import MultiMixin from '@/components/mixins/MultiMixin';
import Refs from '@/components/refs/Refs';
import ProvideMain from '@/components/provide/ProvideMain';
import ScopedSlots from '@/components/slots/ScopedSlots';

export default {
  name: 'App',
  components: { ScopedSlots, ProvideMain, Refs, MultiMixin, Extended, WithGlobalMixin }
};
</script>

<style>
  * {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #001a34;
  }

  input {
    height: 32px;
    border-radius: 6px;
    margin-right: 6px;
    margin-bottom: 12px;
    padding: 4px 8px;
  }
</style>
