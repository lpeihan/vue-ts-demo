<template>
  <div>
    <div class="example">{{ propB }}</div>
    <example />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop, Watch } from 'vue-property-decorator';
import example from './example';

@Component({
  components: {
    example
  }
})
export default class App extends Vue {
  private msg: string = 'hello world';
  private timer: number = 1;

  @Prop({ default: 1 }) propA: number = 1;
  @Prop({ default: 'default b' }) propB!: string;

  @Watch('timer')
  function(val: number) {
    console.log(val);
  }

  get computedMsg() {
    return 'computed msg';
  }

  hello(msg: string): string {
    return msg;
  }

  mounted() {
    console.log('mounted');

    setTimeout(() => {
      this.timer++;
    });
  }
}
</script>

<style>
.example {
  color: red;
}
</style>
