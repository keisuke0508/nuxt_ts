<template>
  <div class="side_menu">
    <nuxt-link to="/" class="content">TOP</nuxt-link>
    <nuxt-link to="/graph" class="content">グラフ描画</nuxt-link>
    <nuxt-link to="/calendar" class="content">カレンダー</nuxt-link>
    <nuxt-link to="/picker" class="content">ピッカー</nuxt-link>
    <nuxt-link to="/drag_and_drop" class="content">ドラッグ＆ドロップ</nuxt-link>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class AppSideMenu extends Vue {}
</script>

<style lang="scss" scoped>
.side_menu {
  display: block;
  @media screen and (max-width: 767px) {
    display: none;
  }
  width: 250px;
  .content {
    display: block;
    width: 100%;
    padding: 20px 0;
    font-size: 16px;
    border: 1px solid black;
    text-align: center;
    color: black;
    text-decoration: none;
  }
}
</style>