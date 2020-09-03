import { TranslatorContext } from 'react-jhipster';

const frTranslations = require('../../target/classes/static/i18n/fr.json');
const enTranslations = require('../../target/classes/static/i18n/en.json');

TranslatorContext.registerTranslations('fr', frTranslations);
TranslatorContext.registerTranslations('en', enTranslations);

TranslatorContext.setDefaultLocale('fr');
TranslatorContext.setMissingTranslationMsg('Oups');
TranslatorContext.setRenderInnerTextForMissingKeys(true);

export const contexts = [
  {
    icon: 'box', // a icon displayed in the Storybook toolbar to control contextual props
    title: 'i18n', // an unique name of a contextual environment
    components: [
      // an array of components that is going to be injected to wrap stories
      /* Styled-components ThemeProvider, */
      /* Material-ui ThemeProvider, */
      // TranslatorContext,
    ],
    params: [
      // an array of params contains a set of predefined `props` for `components`
      {
        name: 'fr',
        props: {
          // defaultLocale: 'fr',
          // missingTranslationMsg: 'Oups !',
          locale: {
            currentLocale: 'fr',
          },
        },
        default: true,
      },
      {
        name: 'en',
        props: {
          // defaultLocale: 'fr',
          // missingTranslationMsg: 'Oups !',
          locale: {
            currentLocale: 'en',
          },
        },
        default: true,
      },
      // { name: 'Light Theme', props: { theme /* : your light theme */ } },
      // { name: 'Dark Theme', props: { theme /* : your dark theme */ }, default: true },
    ],
    options: {
      deep: true, // pass the `props` deeply into all wrapping components
      disable: false, // disable this contextual environment completely
      cancelable: false, // allow this contextual environment to be opt-out optionally in toolbar
    },
  },
];
