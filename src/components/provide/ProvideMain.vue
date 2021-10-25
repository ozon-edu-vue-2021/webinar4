<template>
  <div>
    <ProvideChild />

    <div>
      Объект в data родителя - {{ reactiveObject }}
    </div>

    <button @click="changeInner">Меняем свойства</button>
    <button @click="changeObject">Меняем объект полностью</button>
  </div>
</template>

<script>
import ProvideChild from '@/components/provide/ProvideChild';

export default {
  name: 'ProvideMain',
  components: { ProvideChild },
  data() {
    return {
      reactiveObject: {
        foo: 0,
        bar: 2
      }
    };
  },
  provide() {
    return {
      sendAnalytics: this.sendAnalytics,
      reactive: this.reactiveObject
    };
  },
  methods: {
    sendAnalytics() {
      console.log('send analytics');
    },
    changeInner() {
      this.reactiveObject.foo++;
    },
    changeObject() {
      this.reactiveObject = {
        baz: 'newObject'
      }
    }
  }
};
</script>

