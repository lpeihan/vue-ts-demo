
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component
export default class TestComponent extends Vue {
  @Prop()
  private placement!: string

  render() {
    return (
      <div class="hello">hello</div>
    );
  };
}
