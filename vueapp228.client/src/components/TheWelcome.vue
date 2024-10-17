
<script>
  import { ref } from 'vue'
  import HelloWorld from './HelloWorld.vue'
  export default {
    components: {
      HelloWorld: HelloWorld
    },
    setup() {
      return {
        value: ref(true)
      }
    }
  }
</script>

<template>
  <div class="q-pa-md">
    <div class="row">
      <div class="col">
        <HelloWorld msg="You did it!" />
      </div>
      <div class="col">
        .colasdasdasdasads
      </div>
    </div>
  </div>
</template>
