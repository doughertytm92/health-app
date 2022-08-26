<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <FoodSearch msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import FoodSearch from "@/components/FoodSearch.vue";

export default {
  name: "Home",
  components: {
    FoodSearch,
  },
};
</script>
