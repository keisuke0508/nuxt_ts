<template>
  <div>
    <app-header></app-header>
    <div class="main">
      <app-side-menu></app-side-menu>
    </div>
  </div>
</template>

<script>
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Index extends Vue {}
</script>

<style lang="scss" scoped>
.main {
  display: flex;
}
</style>