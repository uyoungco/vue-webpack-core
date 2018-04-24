<template>
  <header :class="$style.mainHeader">
      <h1>JTodo</h1>
  </header>
</template>

<style lang="stylus" module>
// 当 <style> 标签有 scoped 属性时，它的 CSS 只作用于当前组件中的元素。
.main-header {
  text-align: center;

  h1 {
    font-size: 100px;
    color: rgba(175, 47, 47, 0.4);
    font-weight: 800;
    margin: 20px;
  }
}
</style>
