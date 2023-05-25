import animateList from "@/assets/js/main.js";

export default defineNuxtPlugin((nuxtApp) => {
  Object.entries(animateList).forEach(([key, value]) => {
    nuxtApp[`$${key}`] = value;
  });
});
