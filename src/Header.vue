<template>
  <header id="header">
    <div class="header clearfix">
      <img src="./assets/images/logo.png" class="center-block">
          <h1 class="h1">{{ msg }}</h1>
    </div>
  </header>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Estudo Vue.js!'
    }
  }
}
</script>
