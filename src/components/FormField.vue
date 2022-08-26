<template>
  <b-field
    :label="description"
    label-position="on-border"
    :type="errors ? 'is-danger' : 'is-primary'"
    :message="errors ? errors : ''"
  >
    <b-input v-if="fieldType === 'input'" v-model="vuexValue"> </b-input>
    <b-input
      v-if="fieldType === 'textarea'"
      v-model="vuexValue"
      type="textarea"
    >
    </b-input>
    <b-select v-else-if="fieldType === 'dropdown'" v-model="vuexValue">
    </b-select>
    <b-datepicker v-else-if="fieldType === 'date'" v-model="vuexValue">
    </b-datepicker>
    <b-autocomplete
      v-else-if="fieldType === 'autocomplete'"
      v-model="vuexValue"
    >
    </b-autocomplete>
    <b-taginput v-else-if="fieldType === 'tags'" v-model="localValues">
    </b-taginput>
    <b-checkbox v-else-if="fieldType === 'checkbox'" v-model="vuexValue">
    </b-checkbox>
    <b-radio v-else-if="fieldType === 'radio'" v-model="vuexValue"> </b-radio>
  </b-field>
</template>

<script>
export default {
  name: "FormField",
    props: {
        description: String,
        fieldType: String,
        field: String,
  },
  data() {
        return {
            localValues: [],
    };
  },
    computed: {
        vuexValue: {
            get() {
        return this.$store.state[this.field];
      },
      set(val) {
                this.$store.commit("update_field", { val: val, field: this.field });
            },
    },
  },
  methods: {},
};
</script>
<style scoped></style>
