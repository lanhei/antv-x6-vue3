<template>
  <div :class="['node', status]">
    <img :src="image.logo" alt="logo" />
    <span class="label">{{ label }}</span>
    <span class="status">
      <img v-if="status === 'success'" :src="image.success" alt="success" />
      <img v-else-if="status === 'failed'" :src="image.failed" alt="failed" />
      <img
        v-else-if="status === 'running'"
        :src="image.running"
        alt="running"
      />
    </span>
  </div>
</template>

<script  lang="ts">
export default {
  name: "AlgoNode",
  props: { node: { type: Object, default: () => ({}) } },
  data() {
    return {
      image: {
        logo: "https://gw.alipayobjects.com/mdn/rms_43231b/afts/img/A*evDjT5vjkX0AAAAAAAAAAAAAARQnAQ",
        success:
          "https://gw.alipayobjects.com/mdn/rms_43231b/afts/img/A*6l60T6h8TTQAAAAAAAAAAAAAARQnAQ",
        failed:
          "https://gw.alipayobjects.com/mdn/rms_43231b/afts/img/A*SEISQ6My-HoAAAAAAAAAAAAAARQnAQ",
        running:
          "https://gw.alipayobjects.com/mdn/rms_43231b/afts/img/A*t8fURKfgSOgAAAAAAAAAAAAAARQnAQ",
      },
    };
  },
  computed: {
    nodeData() {
      return this.node?.getData?.() || {};
    },
    label() {
      return this.nodeData.label || "";
    },
    status() {
      return this.nodeData.status || "default";
    },
  },
};
</script>

<style scoped>
.node {
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #fff;
  border: 1px solid #c2c8d5;
  border-left: 4px solid #5f95ff;
  border-radius: 4px;
  box-shadow: 0 2px 5px 1px rgba(0, 0, 0, 0.06);
}
.node img {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  margin-left: 8px;
}
.node .label {
  display: inline-block;
  flex-shrink: 0;
  width: 104px;
  margin-left: 8px;
  color: #666;
  font-size: 12px;
}
.node .status {
  flex-shrink: 0;
}
.node.success {
  border-left: 4px solid #52c41a;
}
.node.failed {
  border-left: 4px solid #ff4d4f;
}
.node.running .status img {
  animation: spin 1s linear infinite;
}
</style>
