import { Router } from 'express';
import { calculateWage } from '../controllers/wageController';

const router = Router();

/**
 * @swagger
 * /calculate-wage:
 *   post:
 *     summary: Calculate minimum wage
 *     description: Calculate the minimum wage based on date of application, place of job, date of birth, and job description.
 *     tags:
 *       - Wage
 *     parameters:
 *       - in: header
 *         name: Accept-Language
 *         required: false
 *         schema:
 *           type: string
 *           enum: [en, de, fr, it]
 *           default: en
 *         description: Language for the response
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               dateOfApplication:
 *                 type: string
 *                 format: date
 *                 example: "2024-07-01"
 *               placeOfJob:
 *                 type: string
 *                 example: "zurich"
 *               dateOfBirth:
 *                 type: string
 *                 format: date
 *                 example: "1990-01-01"
 *               jobDescription:
 *                 type: string
 *                 example: "bricklayer"
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 dateOfApplication:
 *                   type: string
 *                 placeOfJob:
 *                   type: string
 *                 dateOfBirth:
 *                   type: string
 *                 jobDescription:
 *                   type: string
 *                 calculatedWage:
 *                   type: string
 *       400:
 *         description: Bad request
 */
router.post('/', calculateWage);

export { router };