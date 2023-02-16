<template>
  <div class="about">
    <h1>This is an SelectDemo2 page</h1>
    <el-select v-model="selectedItem" placeholder="请选择">
      <el-option
        v-for="item in options"
        :key="item.id"
        :label="item.name"
        :value="item"
      >
      </el-option>
    </el-select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
        {
          value: "选项3",
          label: "蚵仔煎",
        },
        {
          value: "选项4",
          label: "龙须面",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
        },
      ].map((item) => ({
        id: item.value,
        name: item.label,
      })),
      selectedItem: "",
    };
  },
  watch: {
    selectedItem(value) {
      console.log("selectedItem", value);
    },
  },
};
</script>
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
