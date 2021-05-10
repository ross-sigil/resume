<template>
  <v-app v-bind:style="appBack">
    <v-content>
      <Resume></Resume>
    </v-content>
    <v-layout justify-center>
      <Slider></Slider>
    </v-layout>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Resume from "./views/Resume.vue";
import Slider from "./components/Slider.vue";

export default Vue.extend({
  name: "App",
  components: {
    Resume,
    Slider,
  },

  data: () => ({
    //
  }),
  computed: {
    appBack() {
      return this.$store.state.appBack;
    },
  },
});
</script>
