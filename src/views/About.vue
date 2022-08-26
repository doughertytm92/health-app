<template>
  <div class="about">
    <span
      >Add Lift<b-icon @click="addLift" icon="plus" size="is-small"> </b-icon
    ></span>
    <Lift v-for="(p, idx) in lifts" :key="p.id" :index="idx" />
  </div>
</template>
<script>
import Lift from '../components/workout/Lift.vue';

export default {
  name: "Workout",
  components: {
        Lift,
    },
  data() {
        return {
      lifts: [{ id: 0 }],
        };
    },
    methods: {
    addLift() {
            this.lifts.push({ id: this.lifts.length + 1 });
        },
  },
};
</script>
