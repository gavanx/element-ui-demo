<template>
  <div>
    <div>v1: {{ v1 }}</div>
    <div>v2: {{ v2 }}</div>
  </div>
</template>

<script>
const LOG_KEY = 'father:';
export default {
  data() {
    return {
      v1: 'father1',
      v2: 'father2',
    };
  },
  created() {
    console.log(LOG_KEY, 'created', this.v1, this.v2);
  },
  mounted() {
    // this.testMethod();
  },
  methods: {
    testMethod() {
      console.log(LOG_KEY, 'testMethod');
    },
  },
};
</script>
