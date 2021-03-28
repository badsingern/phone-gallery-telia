<template>
  <GalleryLayout></GalleryLayout>
</template>

<script>
import GalleryLayout from "@/layouts/GalleryLayout";

export default {
  name: 'App',
  components: {
    GalleryLayout
  }
}
</script>

<style>
html, body, #app {
  margin: 0;
  padding: 0;
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

