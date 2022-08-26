<template>
  <div class="field is-horizontal">
    <FormField
      fieldType="autocomplete"
      :field="`lifts.${index}.name`"
      description="Name of lift"
      :dataArray="lifts"
      :grouped="true"
    />
    <FormField
      fieldType="input"
      :field="`lifts.${index}.weight`"
      description="Weight"
    />
    <FormField
      fieldType="input"
      :field="`lifts.${index}.sets`"
      description="Sets"
    />
    <FormField
      fieldType="input"
      :field="`lifts.${index}.reps`"
      description="Reps"
    />
  </div>
</template>

<script>
import FormField from '../FormField.vue';

export default {
  name: "Workout",
    components: {
    FormField,
  },
  props: {
        index: Number,
    },
  data() {
    return {
      lifts: [
        {
                    type: 'Olympic',
          items: ['Snatch', 'Clean', 'Jerk'],
                },
                {
                    type: 'Squats',
                    items: ['Back Squat', 'Front Squat', 'OH Squat'],
        },
      ],
    };
  },
  methods: {},
};
</script>

<style scoped></style>
