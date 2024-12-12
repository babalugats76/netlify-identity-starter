import { /*acceptHMRUpdate, */ defineStore } from 'pinia';

export const useUserStore = defineStore('user', () => {
  const user = ref(null);

  function setUser(newUser: any) {
    user.value = newUser;
  }

  return {
    user,
    setUser,
  };
});

// if (import.meta.hot) {
//   import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot));
// }
