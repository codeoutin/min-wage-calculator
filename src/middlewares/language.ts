import { Request, Response, NextFunction } from 'express';

export const languageMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const supportedLanguages = ['de', 'fr', 'it'];
  const defaultLanguage = 'en';

  let language = req.headers['accept-language'] || defaultLanguage;
  if (!supportedLanguages.includes(language)) {
    language = defaultLanguage;
  }

  (req as any).language = language;
  next();
};
