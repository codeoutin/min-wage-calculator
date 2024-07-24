import express from 'express';
import bodyParser from 'body-parser';
import { router as calculateRouter } from './routes/calculate';
import { languageMiddleware } from './middlewares/language';
import { errorHandler } from './middlewares/errorHandler';
import { setupSwagger } from './swagger';

const app = express();

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Middleware to handle language
app.use(languageMiddleware);

// Setup Swagger (API documentation)
setupSwagger(app);

// Routes
app.use('/calculate-wage', calculateRouter);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
