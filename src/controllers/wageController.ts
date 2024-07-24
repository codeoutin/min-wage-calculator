import { Request, Response } from 'express';
import { calculateMinimumWage } from '../services/wageService';
import { translate } from '../utils/language';

interface CustomRequest extends Request {
  language?: string;
}

export const calculateWage = (req: CustomRequest, res: Response) => {
  const { dateOfApplication, placeOfJob, dateOfBirth, jobDescription } = req.body;
  const language = req.language || 'en';

  try {
    const wage = calculateMinimumWage(dateOfApplication, placeOfJob, dateOfBirth, jobDescription);
    const translatedWage = translate(wage, language);

    // Mock response data
    const data = {
        baseWage: wage,
        holidayCompensation: wage * 0.1064,
        officialHolidayCompensation: wage * 0.317,
        shareExtraMonth: wage * 0.833
    }
    res.status(200).json({ dateOfApplication, placeOfJob, dateOfBirth, jobDescription, calculatedWage: translatedWage, data });
  } catch (error: Error | any) {
    res.status(400).json({ error: error.message });
  }
};