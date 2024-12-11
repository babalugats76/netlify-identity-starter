import { createPinia, type Pinia } from 'pinia';
import { defineNuxtPlugin } from '#app';

export default defineNuxtPlugin((nuxtApp): void => {
  const pinia: Pinia = createPinia();
  nuxtApp.vueApp.use(pinia);
  nuxtApp.provide('pinia', pinia);
});
