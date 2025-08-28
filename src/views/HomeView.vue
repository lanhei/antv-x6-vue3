<script setup lang="ts">
</script>

<template>
  <h1>阿里X6示例页面导航</h1>
  <table>
    <thead>
      <tr>
        <th>页面名称</th>
        <th>超链接</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>流程图</td>
        <td><a href="/process" target="_blank">点击访问</a></td>
      </tr>
      <tr>
        <td>人工智能建模 DAG 图</td>
        <td><a href="/aidag" target="_blank">点击访问</a></td>
      </tr>
      <tr>
        <td>数据加工 DAG 图</td>
        <td><a href="/datadag" target="_blank">点击访问</a></td>
      </tr>
      <tr>
        <td>ER图</td>
        <td><a href="/er" target="_blank">点击访问</a></td>
      </tr>
      <tr>
        <td>思维导图</td>
        <td><a href="/mind" target="_blank">点击访问</a></td>
      </tr>
      <tr>
        <td>BPMN</td>
        <td><a href="/bpmn" target="_blank">点击访问</a></td>
      </tr>
      <tr>
        <td>泳道图</td>
        <td><a href="/swim" target="_blank">点击访问</a></td>
      </tr>
      <tr>
        <td>ELK</td>
        <td><a href="/elk" target="_blank">点击访问</a></td>
      </tr>
      <tr>
        <td>组织架构图</td>
        <td><a href="/org" target="_blank">点击访问</a></td>
      </tr>
      <tr>
        <td>组织架构图（自动布局）</td>
        <td><a href="/orgAuto" target="_blank">点击访问</a></td>
      </tr>
      <tr>
        <td>UML类图</td>
        <td><a href="/uml" target="_blank">点击访问</a></td>
      </tr>
      <tr>
        <td>展开/折叠树</td>
        <td><a href="/tree" target="_blank">点击访问</a></td>
      </tr>
      <tr>
        <td>内置节点(rect)</td>
        <td><a href="/rect" target="_blank">点击访问</a></td>
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