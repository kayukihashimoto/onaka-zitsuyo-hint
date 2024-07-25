import VueGtag from "vue-gtag";

export default defineNuxtPlugin((nuxtApp) => {
  const router = useRouter();

  nuxtApp.vueApp.use(
    VueGtag,
    {
      appName: "おなかの不調と向き合うわたしの実用ヒント",
      pageTrackerScreenviewEnabled: true,
      config: { id: `G-HCY4ZC7ES0` },
    },
    router
  );
});
