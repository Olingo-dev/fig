import { ZodIssue } from "zod";
import { validateEnv } from "./config/env";

const constructZodIssues = (errors: ZodIssue[]) : string[] => {
    return errors.map((error, id) => {
        return `${id + 1} ${error.path.join('.')} : ${error.message}`;
    })
}

export async function register() {
    const zodValidation = validateEnv();
    if(zodValidation.error) {
        const errors = constructZodIssues(zodValidation.error.errors);
        throw new Error(
            `\n\nError in loading environment variables:\n${errors.join('\n')}\n`
        );
    }
    console.info("Environment variables loaded");
}