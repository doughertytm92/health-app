export const mutations = {
  setFoodList(state, data) {
        let result = {
      query: data.foodSearchCriteria.query,
        };
        state.currentFoods = result;
  },
    addToList(state, data) {
        state.foodList.push(data);
  },
    update_field(state, { val, field }) {
    state[field] = val;
    },
};
