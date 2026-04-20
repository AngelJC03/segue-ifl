import enAbout from './en/about.json';
import enAcademics from './en/academics.json';
import enCommon from './en/common.json';
import enFamilyResources from './en/familyResources.json';
import enEnroll from './en/enroll.json';
import enHome from './en/home.json';
import enLegacy from './en/legacy.json';
import enNews from './en/news.json';
import enSegueK8 from './en/segueK8.json';
import esAbout from './es/about.json';
import esAcademics from './es/academics.json';
import esCommon from './es/common.json';
import esFamilyResources from './es/familyResources.json';
import esEnroll from './es/enroll.json';
import esHome from './es/home.json';
import esLegacy from './es/legacy.json';
import esNews from './es/news.json';
import esSegueK8 from './es/segueK8.json';

const locales = {
  en: {
    common: enCommon,
    familyResources: enFamilyResources,
    enroll: enEnroll,
    home: enHome,
    about: enAbout,
    academics: enAcademics,
    news: enNews,
    segueK8: enSegueK8,
    legacy: enLegacy,
  },
  es: {
    common: esCommon,
    familyResources: esFamilyResources,
    enroll: esEnroll,
    home: esHome,
    about: esAbout,
    academics: esAcademics,
    news: esNews,
    segueK8: esSegueK8,
    legacy: esLegacy,
  },
};

const isPlainObject = (value) =>
  typeof value === 'object' && value !== null && !Array.isArray(value);

const deepMerge = (baseValue, nextValue) => {
  if (!isPlainObject(baseValue) || !isPlainObject(nextValue)) {
    return nextValue ?? baseValue;
  }

  const merged = { ...baseValue };

  Object.keys(nextValue).forEach((key) => {
    merged[key] = deepMerge(baseValue[key], nextValue[key]);
  });

  return merged;
};

export const getNestedValue = (source, key) =>
  key.split('.').reduce((currentValue, segment) => currentValue?.[segment], source);

export const getMessages = (language, namespace = 'common') => {
  const locale = locales[language] ?? locales.en;
  const commonMessages = locale.common ?? {};

  if (!namespace || namespace === 'common') {
    return commonMessages;
  }

  const namespaces = Array.isArray(namespace) ? namespace : [namespace];

  return namespaces.reduce((accumulator, currentNamespace) => {
    const namespaceMessages = locale[currentNamespace] ?? {};
    return deepMerge(accumulator, namespaceMessages);
  }, commonMessages);
};
