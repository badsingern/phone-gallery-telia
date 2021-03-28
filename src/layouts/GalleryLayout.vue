<template>
  <header>
    <h3>
      <router-link to="/brands">Brands</router-link>
    </h3>
    <span> | </span>
    <h3>
      <router-link to="/phones">Phones</router-link>
    </h3>
  </header>
  <data>
    <router-view></router-view>
  </data>
  <footer>&copy; 2021</footer>
</template>

<script>
export default {
  name: "GalleryLayout"
}
</script>

<style scoped lang="less">
@headerBackground: #6A5ACD;
@defaultColor: black;

header {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  background: rgba(@headerBackground, 0.5);
}

a {
  text-decoration: none;
  color: @defaultColor;
}

data {
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100% - 180px);
  display: block;
  box-sizing: border-box;
  overflow: scroll;
}

footer {
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(@headerBackground, 0.5);
}

span {
  font-weight: bold;
  padding: 0 5px;
}

::-webkit-scrollbar {
  display: none;
}
</style>
