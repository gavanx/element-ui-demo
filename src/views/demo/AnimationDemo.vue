<template>
  <div class="father-box">
    <!-- <div class="header-box"></div> -->
    <!-- <div class="arrow_box"></div> -->
    <el-select ref="select"></el-select>
    <el-button @click="anim">anim</el-button>
  </div>
</template>
<script>
export default {
  methods: {
    anim() {
      this.$refs.select.setAttribute('class', 'select-box');
    },
  },
};
</script>
<style scoped>
.arrow_box {
  width: 100px;
  height: 100px;
  margin: 10px;
  animation: glow 800ms ease-out infinite alternate;
}
@keyframes glow {
  0% {
    border-color: gray;
    box-shadow: 0 0 5px rgba(0, 255, 0, 0.2), inset 0 0 5px rgba(0, 255, 0, 0.1), 0 1px 0 #393;
  }
  100% {
    border-color: blue;
    box-shadow: 0 0 5px rgba(0, 255, 0, 0.6), inset 0 0 10px rgba(0, 255, 0, 0.4), 0 1px 0 #6f6;
  }
}

@keyframes test {
  from {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
  to {
    opacity: 1;
  }
}
@-webkit-keyframes test {
  from {
    opacity: 1;
  }
  50% {
    opacity: 0.1;
  }
  to {
    opacity: 1;
  }
}
.father-box {
  position: relative;
}

.header-box {
  color: #fff;
  padding: 10px;
  font-size: 15px;
  height: 300px;
  background-color: rgba(146, 139, 139, 0.8);
  animation: test 1000ms infinite;
  -webkit-animation: test 1000ms infinite;
}
.select-box {
  animation: test 500ms infinite;
  -webkit-animation: test 500ms 2;
}
</style>
