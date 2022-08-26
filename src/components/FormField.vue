<template>
  <b-field
    :label="description"
    label-position="on-border"
    :type="errors ? 'is-danger' : 'is-primary'"
    :message="errors ? errors : ''"
  >
    <b-input
      v-if="fieldType === 'input'"
      v-model="vuexValue"
      size="is-small"
    ></b-input>
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
      v-else-if="fieldType === 'autocomplete' && !grouped"
      v-model="vuexValue"
      :data="filteredDataArray"
      placeholder="e.g. Search"
      icon="magnify"
      clearable
      @select="(option) => (selected = option)"
    >
      <template #header
        ><a @click="addOption"><span>Add New...</span></a></template
      >
      <template #empty>No results found</template>
    </b-autocomplete>
    <b-autocomplete
      v-else-if="fieldType === 'autocomplete' && grouped"
      v-model="vuexValue"
      group-type="type"
      group-items="items"
      :data="filteredDataArray"
      placeholder="e.g. Search"
      icon="magnify"
      clearable
      @select="(option) => (selected = option)"
    >
      <template #header
        ><a @click="addOption"><span>Add New...</span></a></template
      >
      <template #empty>No results found</template>
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
    name: 'FormField',
    props: {
        description: String,
        fieldType: String,
        field: String,
        dataArray: Array,
        grouped: Boolean,
    },
    data() {
        return {
            localValues: [],
        };
    },
    computed: {
        filteredDataArray() {
            return this.dataArray.filter((option) => {
                return (
          option
                    .toString()
                    .toLowerCase()
                    .indexOf(this.vuexValue.toLowerCase()) >= 0;
            });
        },
        vuexValue: {
            get() {
                return this.$store.state[this.field];
            },
            set(val) {
                this.$store.commit('update_field', { val: val, field: this.field });
            },
        },
    },
    methods: {
        addOption() {
            if (!this.dataArray.some((d) => d === this.vuexValue))
                this.dataArray.push(this.vuexValue);
        },
    },
};
</script>
<style scoped></style>
