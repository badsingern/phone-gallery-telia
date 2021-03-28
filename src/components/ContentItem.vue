<template>
  <div :class="routable && 'content-item__pointed'" v-on:click="navigateTo" class="content-item">
    <img :src="contentItem.displayImageUrl || contentItem.imgUrl">
    <h3>
      {{ contentItem.displayName }}
    </h3>
  </div>
</template>

<script>
export default {
  name: "ContentItem",
  props: ['contentItem', 'routable'],
  methods: {
    navigateTo() {
      this.routable && this.$router.push({path: `/phones/${this.contentItem.id}`})
    }
  }
}
</script>

<style scoped lang="less">
.content-item {
  height: 300px;
  width: 100%;

  &__pointed {
    cursor: pointer;
  }

  img {
    width: auto;
    height: 80%;
  }

  a {
    text-decoration: none;
    color: black;
  }
}
</style>
