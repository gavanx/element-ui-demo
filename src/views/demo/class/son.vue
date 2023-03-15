<script>
import father from './father.vue';
const LOG_KEY = 'son:';
export default {
  extends: father,
  data() {
    return {
      v1: 'son',
    };
  },
  created() {
    console.log(LOG_KEY, 'created', this.v1, this.v2);
  },
  mounted() {
    this.testMethod();
  },
  methods: {
    // testMethod() {
    //   console.log(LOG_KEY, 'testMethod');
    //   super.testMethod();
    // },
  },
};
</script>
