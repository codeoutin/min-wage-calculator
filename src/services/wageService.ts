import { calculateAge, getWageRate } from '../utils/data';

export const calculateMinimumWage = (
  dateOfApplication: string,
  placeOfJob: string,
  dateOfBirth: string,
  jobDescription: string
): number => {
  const age = calculateAge(new Date(dateOfBirth));
  const wage = getWageRate(new Date(dateOfApplication), jobDescription, placeOfJob, age);
  return wage;
};