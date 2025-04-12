import { z } from "zod";
import { config } from 'dotenv';

config();

export const env = z.object({
    PORT: z.number().default(3000),
    clientOrigin: z.string().default('*'),
    JWT_SECRET: z.string().default(''),
}).parse({
    ...process.env,
    PORT: parseInt(process.env.PORT || '3002', 10),
});
