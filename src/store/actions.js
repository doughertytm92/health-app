import foodQuery from "../api/usdaAPI.js";
import * as types from './mutations.js';

export async function searchFood(commit, foodName) {
  const data = await foodQuery(foodName, 10);
    commit(types.setFoodList, data);
}
