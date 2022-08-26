<template>
  <div class="hello">
    <b-field
      ><b-input
        v-model="foodName"
        placeholder="Enter Food..."
        @keydown.enter="foodSearch"
      ></b-input
      ><b-button @click="foodSearch">Search</b-button></b-field
    >
    <b-field v-if="serving"
      >Serving Size: {{ serving.size }}{{ serving.unit }}</b-field
    >
    <b-table
      v-if="nutrients.length > 0"
      :data="nutrients"
      :columns="columns"
    ></b-table>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: "FoodSearch",
    props: {
        msg: String,
    },
  data() {
    return {
      serving: null,
      nutrients: [],
      foodName: "",
            columns: [
                {
          field: "nutrientId",
          label: "ID",
          width: "40",
          numeric: true,
                },
                {
          field: "nutrientName",
                    label: 'Nutrient',
        },
        {
          field: "value",
          label: "Value",
                    numeric: true,
                },
        {
                    field: "unitName",
          label: "Unit",
        },
      ],
    };
  },
    methods: {
    async foodSearch() {
            const food = await getFoodData(this.foodName);
            this.nutrients = food.foods[0].foodNutrients;
            this.serving = {
                size: food.foods[0].servingSize,
        unit: food.foods[0].servingSizeUnit,
            };
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
