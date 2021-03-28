<template>
  <div class="content-list">
    <ContentItem v-for="contentItem in contentList" :key="contentItem.id" :content-item="contentItem" :routable="routable"/>
  </div>
</template>

<script>
import ContentItem from "@/components/ContentItem";

export default {
  name: "ContentList",
  props:['contentList', 'routable'],
  components: {ContentItem}
}
</script>

<style scoped lang="less">
.content-list {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 5px;
  width: 100%;

  @media only screen and (max-width: 760px) {
    & {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

  @media only screen and (max-width: 550px) {
    & {
      grid-template-columns: 1fr;
    }
  }
}
</style>
