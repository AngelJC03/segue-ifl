import { DEFAULT_LANGUAGE } from '../context/LanguageContext';
import { getMessages, getNestedValue } from '../locales';
import { useLanguage } from './useLanguage';

const interpolate = (template, replacements) =>
  template.replace(/\{\{(\w+)\}\}/g, (_, key) => replacements[key] ?? '');

export function useTranslation(namespace = 'common') {
  const { language } = useLanguage();
  const messages = getMessages(language, namespace);
  const fallbackMessages = getMessages(DEFAULT_LANGUAGE, namespace);

  const t = (key, replacements = {}) => {
    const resolvedValue =
      getNestedValue(messages, key) ?? getNestedValue(fallbackMessages, key);

    if (resolvedValue === undefined) {
      return key;
    }

    if (typeof resolvedValue !== 'string') {
      return resolvedValue;
    }

    return interpolate(resolvedValue, replacements);
  };

  return {
    language,
    t,
  };
}
