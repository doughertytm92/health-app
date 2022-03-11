<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Quinoa: {{ data }}</h2>
  </div>
</template>

<script>
import getFoodData from "../api/usdaAPI.js";

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      data: null,
    };
  },
  method: {
    async gettingFoodData() {
      const food = await getFoodData("quinoa");
      this.data = food.foods[0].description;
    },
  },
  mounted() {
    this.gettingFoodData;
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
