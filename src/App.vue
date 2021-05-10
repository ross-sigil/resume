<template>
  <v-app>
    <v-content>
      <Resume></Resume>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Resume from "./views/Resume.vue";

export default Vue.extend({
  name: "App",
  components: {
    Resume,
  },

  data: () => ({
    //
  }),
});
</script>
