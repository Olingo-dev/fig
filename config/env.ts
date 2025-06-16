import { z } from "zod";
export const envSchema = z.object({
  FIG_REGISTRY_HOST: z.string().min(1, "FIG_REGISTRY_HOST is required"),
  FIG_USE_HTTPS: z.string()
    .min(1, "FIG_USE_HTTPS is required")
    .transform((val) => val === "true")
    .refine((val) => typeof val === "boolean"),
  FIG_REGISTRY_PORT: z
    .string().min(1, "FIG_REGISTRY_PORT is required")
    .transform((val) => {
      const num = Number(val);
      if (isNaN(num)) throw new Error("FIG_REGISTRY_PORT must be a number");
      return num;
    }),
});
export const validateEnv = () => envSchema.safeParse(process.env);

export const env = (() => {
  const parsed = envSchema.safeParse(process.env);
  if (!parsed.success) {
    console.error("Invalid environment variables:", parsed.error.format());
    process.exit(1);
  }
  return parsed.data;
})();

