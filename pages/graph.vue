<template>
  <div>
    <app-header></app-header>
    <div class="main">
      <app-side-menu></app-side-menu>
      <div class="main_content">
        <app-title title="Graph"></app-title>
        <index-main></index-main>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Graph extends Vue {}
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  margin-top: 70px;
  .main_content{
    display: block;
    width: calc(100% - 270px);
    @media screen and (max-width: 767px) {
      width: 100%;
    }
  }
}
</style>