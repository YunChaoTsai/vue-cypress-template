<template>
  <div class="hello">My liff id: {{ liffId }}</div>
  <button @click="init">init liff</button>
  <div class="click" v-if="clicked">clicked</div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import liff from "@line/liff";

export default defineComponent({
  name: "LiffApp",
  props: {
    liffId: String,
  },
  setup(props) {
    const clicked = ref(false);
    const init = () => {
      
      if (props.liffId) {
        clicked.value = true;
        
        liff.init({ liffId: props.liffId });
      }
    };
    return {
      init,
      clicked
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
