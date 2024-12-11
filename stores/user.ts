import { acceptHMRUpdate, defineStore } from "pinia";

export const useUserStore = defineStore(
  'UserStore',
  () => {
    
    return {
      hello: 'world'
    };
  },
);

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot));
}