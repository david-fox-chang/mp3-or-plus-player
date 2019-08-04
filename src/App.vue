<template>
  <router-view id="app"/>
</template>

<style lang="less">
@import './styles/animate.min.css';
@import './styles/reset.css';
@import './styles/font.css';
@import './styles/global.less';
</style>

<style lang="less" scoped>
@import (reference) './styles/helper.less';
#app {
  width: 375px;
  height: 812px;
  margin: 0;
  margin-right: auto;
  margin-left: auto;
  .line-tmp();
}
</style>
