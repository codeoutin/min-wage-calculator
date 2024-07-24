const translations: { [key: string]: (wage: number) => string } = {
  de: (wage: number) => `Der berechnete Lohn beträgt ${wage} CHF`,
  fr: (wage: number) => `Le salaire calculé est de ${wage} CHF`,
  it: (wage: number) => `Il salario calcolato è ${wage} CHF`,
  en: (wage: number) => `The calculated wage is ${wage} CHF`,
};
  
  export const translate = (wage: number, language: string): string => {
    const translationFunction = translations[language] || translations.en;
    return translationFunction(wage);
  };