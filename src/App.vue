<template>
  <cyHeader/>
</template>

<script>
import cyHeader from './components/cyHeader.vue'

export default {
  name: 'App',
  components: {
    cyHeader
  }
}
</script>

<style>
@import url(./assets/variables.css);
#app {
background-color: var(--cr-bg);
padding: 0%;
}
</style>
