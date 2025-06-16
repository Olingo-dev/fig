/* eslint-disable @typescript-eslint/no-empty-object-type */
import { envSchema } from "@/config/env";
import { z } from "zod";

declare global {
    namespace NodeJS {
        interface ProcessEnv extends z.output<typeof envSchema> {}
    }
}