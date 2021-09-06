<template>
  <div class="header">
    <div class="humburger_menu">
      <div v-for="n in 3" :key="n" class="humburger_menu_line"></div>
    </div>
  </div>
</template>

<script>
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class AppHeader extends Vue {}
</script>

<style lang="scss" scoped>
.header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 60px;
  background: linear-gradient(#333,#777);
  .humburger_menu {
    border: 2px solid #aaa;
    border-radius: 2px;
    width: 38px;
    height: 38px;
    float: right;
    margin: 10px;
    cursor: pointer;
    display: none;
    @media screen and (max-width: 767px) {
      display: block;
    }
    .humburger_menu_line {
      border: 1px solid #aaa;
      width: 30px;
      margin-top: 8px;
      margin-left: 3px;
    }
  }
}
</style>