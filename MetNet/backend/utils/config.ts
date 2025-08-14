const { PORT = 3000 } = process.env;

export const config = {
  PORT,
} as const;
