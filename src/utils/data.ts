const wageRates = {
    default: 15,
    zurich: 20,
    basel: 19
};

const wageMultiplierByJob = {
    default: 1,
    developer: 1.5,
    bricklayer: 0.9,
    electrician: 1.1,
    painter: 0.65
};

export const getWageRate = (dateOfApplication: Date, jobDescription: string, placeOfJob: string, age: number): number => {
    let baseWage = wageRates.default;

    if (dateOfApplication.getFullYear() <= 2024) {
        baseWage = 0;
    } else {
        baseWage = 5;
    }

    switch (placeOfJob.toLowerCase()) {
        case 'zurich':
        case '8001': // Zip code for Zurich
            baseWage += wageRates.zurich;
            break;
        case 'basel':
        case '4056': // Zip code for Basel
            baseWage += wageRates.basel;
            break;
        default:
            baseWage += wageRates.default;
            break;
    }

    switch (jobDescription.toLowerCase()) {
        case 'developer':
            baseWage *= wageMultiplierByJob.developer;
            break;
        case 'bricklayer':
            baseWage *= wageMultiplierByJob.bricklayer;
            break;
        case 'electrician':
            baseWage *= wageMultiplierByJob.electrician;
            break;
        case 'painter':
            baseWage *= wageMultiplierByJob.painter;
            break;
        default:
            baseWage *= wageMultiplierByJob.default;
            break;
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
