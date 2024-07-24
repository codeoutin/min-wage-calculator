const wageRates = {
    default: 15,
    zurich: 20
};

const wageMultiplierByJob = {
    default: 1,
    it: 1.5,
    bricklayer: 0.9,
    electrician: 1.1,
    painter: 0.65
};

export const getWageRate = (dateOfApplication: Date, jobDescription: string, placeOfJob: string, age: number): number => {
    let baseWage = wageRates.default;

    if (dateOfApplication.getFullYear() === 2024) {
        baseWage = 0;
    }

    if (placeOfJob.toLowerCase() === 'zurich' || placeOfJob === '8001') { // Zip code for Zurich
        baseWage += wageRates.zurich;
    }

    if (jobDescription.toLowerCase() === 'bricklayer') {
        baseWage *= wageMultiplierByJob.bricklayer;
    }

    if (age < 18) {
        baseWage *= 0.8; // 20% reduction for minors
    }

    return baseWage;
};

export const calculateAge = (birthdate: Date): number => {
    const today = new Date();
    let age = today.getFullYear() - birthdate.getFullYear();
    const monthDifference = today.getMonth() - birthdate.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthdate.getDate())) {
        age--;
    }

    return age;
};