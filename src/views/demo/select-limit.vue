<template>
  <el-select v-bind="$attrs" v-on="$listeners">
    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
    </el-option>
  </el-select>
</template>

<script>
export default {
  name: "SelectLimit",
  props: {
    options: {},
    limit: {
      default: 30,
    },
  },
};
</script>
<style></style>
