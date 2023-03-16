<template>
  <div>
    <div>
      <h2><a href="#one">one</a></h2>
      <h2><a href="#two">two</a></h2>
      <h2><a href="#three">three</a></h2>
    </div>
    <div style="height: 70vh; background: red" id="one">one</div>
    <div style="height: 70vh; background: blue" id="two">two</div>
    <div style="height: 70vh; background: green" id="three">three</div>
    <backtop />
  </div>
</template>
<script>
import Backtop from '../components/Backtop.vue';
export default {
  components: {
    Backtop,
  },
};
</script>
