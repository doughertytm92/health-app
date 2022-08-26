<template>
  <div>
    <FormField />
  </div>
</template>

<script>
import FormField from './FormField.vue';

export default {
    name: "Workout",
  components: {
    FormField,
    },
    props: {
    msg: String,
  },
    data() {
        return {};
    },
    methods: {},
};
</script>

<style scoped></style>
