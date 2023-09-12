export default {
  config: {
    locales: ['en'],
    translations: {
      en: {
        "app.components.LeftMenu.navbrand.title": "Ad Transparency DB",
        "Auth.form.welcome.title": "CLC Ad Transparency DB",
        "Auth.form.welcome.subtitle": "Log in to your account",
      }
    },
    theme: {
      light: {
        colors: {
          buttonNeutral0: '#ffffff',
          buttonPrimary500: '#308973',
          buttonPrimary600: '#035651',
          primary100: '#D9EDDF',
          primary200: '#65BF8F',
          primary500: '#308973',
          primary600: '#035651',
          primary700: '#384B42',
        },
          

      },
    },
  },
  bootstrap(app) {
    console.log(app);
  },
};
