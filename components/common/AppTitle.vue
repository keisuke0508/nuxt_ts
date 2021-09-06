<template>
  <h1 class="title">{{ title }}</h1>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component
export default class AppTitle extends Vue {

  @Prop({ type: String, required: true, default: null })
  public title!: string

}
</script>

<style lang="scss" scoped>
.title {
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  color: black;
}
</style>