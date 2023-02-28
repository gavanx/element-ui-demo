<template>
  <el-select
    v-bind="$attrs"
    v-on="$listeners"
    filterable
    clearable
    :filter-method="filterOptions"
    :placeholder="$attrs.placeholder || 请搜索并选择"
  >
    <el-option
      v-for="item in filteredOptions"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    >
    </el-option>
  </el-select>
</template>

<script>
export default {
  name: "ElSelectLimit",
  props: {
    options: {},
    limit: {
      type: Number,
      default: 30,
    },
  },
  data() {
    return {
      filteredOptions: [],
    };
  },
  created() {
    this.filterOptions();
  },
  methods: {
    filterOptions(query) {
      const list = this.options;
      const ret = [];
      if (query) {
        let item;
        for (let i = 0; i < list.length; i++) {
          item = list[i];
          if (item.label && item.label.includes(query)) {
            ret.push(item);
          }
          if (ret.length >= this.limit) {
            break;
          }
        }
        this.filteredOptions = ret;
      } else {
        this.filteredOptions = list.slice(0, this.limit);
      }
    },
  },
};
</script>
<style></style>
