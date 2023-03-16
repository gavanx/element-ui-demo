<template>
  <div>
    <div>
      <h2><a href="#one">one</a></h2>
      <h2><a href="#two">two</a></h2>
      <h2><a href="#three">three</a></h2>
      <el-button @click="handleScrollTop">scrollTop</el-button>
    </div>
    <div style="height: 70vh; background: red" id="one">one</div>
    <div style="height: 70vh; background: blue" id="two">two</div>
    <div style="height: 70vh; background: green" id="three">three</div>
    <backtop />
  </div>
</template>
<script>
import Backtop from '../components/Backtop.vue';
import scrollTop from '../components/scrollTop';
export default {
  components: {
    Backtop,
  },
  methods: {
    handleScrollTop() {
      scrollTop(document.documentElement);
    },
  },
};
</script>
