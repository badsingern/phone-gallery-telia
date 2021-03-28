<template>
  <ContentList :content-list="brands" :routable="true"/>
</template>

<script>
import ContentList from "@/components/ContentList";
import api from "@/api/api";

export default {
  name: "Brands",
  data() {
    return {
      brands: []
    }
  },
  created() {
    this.getBrands();
  },
  components: {ContentList},
  methods: {
    async getBrands() {
      api().brands().getBrandList()
          .then(brands => this.brands = brands.data.options)
    }
  }
}
</script>
