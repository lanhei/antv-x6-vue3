<script setup lang="ts">
</script>

<template>
  <h1>示例页面导航</h1>
  <table>
    <thead>
      <tr>
        <th>页面名称</th>
        <th>超链接</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>打开流程页面</td>
        <td><a href="/process" target="_blank">点击访问</a></td>
      </tr>
      <tr>
        <td>打开dag页面</td>
        <td><a href="/dag" target="_blank">点击访问</a></td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
table {
  width: 100%;
  max-width: 600px;
  border-collapse: collapse;
  margin: 20px 0;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}
th,
td {
  padding: 12px 15px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}
th {
  background-color: #f8f9fa;
  font-weight: bold;
}
tr:hover {
  background-color: #f5f5f5;
}
a {
  color: #1a73e8;
  text-decoration: none;
  transition: color 0.3s;
}
a:hover {
  color: #0d47a1;
  text-decoration: underline;
}
</style>