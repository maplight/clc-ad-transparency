export default {
  config: {
    locales: ['en'],
    translations: {
      en: {
        "app.components.LeftMenu.navbrand.title": "Ad Disclosure Dashboard",
        "app.components.LeftMenuLinkContainer.collectionTypes": "Data Types",
        "Auth.form.welcome.subtitle": "Log in to your Ad Disclosure account",
        "Auth.form.welcome.title": "Welcome to Ad Disclosure!",
        "content-manager.components.LeftMenu.collection-types": "Data Types",
        "content-manager.containers.SettingsPage.Block.contentType.title": "Data Types",
        "content-manager.header.name": "Filings",
        "content-manager.models": "Data Types",
        "content-manager.models.numbered": "Data Types ({number})",
        "global.content-manager": "Filings Manager",
        "menu.section.models.name": "Data Types",
        "Settings.permissions.users.listview.header.subtitle": "All the users of the Ad Disclosure system",
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
