import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const myPlugin = (stor: any) => {
  stor.subscribe((mutation: any, state: any) => {
    localStorage.setItem("Store", JSON.stringify(state));
  });
};

export default new Vuex.Store({
  state: {
    appBack: "background:#133337",
    defaultApp: "background:#133337",
    sliderPercent: 0,
  },
  mutations: {
    appBack: (state, payload: string) => (state.appBack = payload),
    sliderSet: (state, per: number) => (state.sliderPercent = per),
    setState: (state, payload: any) => {
      state.sliderPercent = payload.sliderPercent;
      state.appBack = payload.appBack;
    },

    setDefault: (state) => {
      state.sliderPercent = 0;
      state.appBack = state.defaultApp;
    },
  },
  actions: {},
  modules: {},
  plugins: [myPlugin],
});
