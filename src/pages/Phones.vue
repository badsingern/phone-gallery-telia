<template>
  <ContentList :content-list="phones"/>
</template>

<script>
import ContentList from "@/components/ContentList";
import api from "@/api/api";

export default {
  name: "Phones",
  props: ['brand'],
  data() {
    return {
      phones: []
    }
  },
  created() {
    this.getPhones();
  },
  components: {ContentList},
  methods: {
    async getPhones() {
      api().phones().getPhoneList(this.brand)
          .then(phones => this.phones = phones)
    }
  }
}
</script>
