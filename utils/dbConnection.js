import pg from "pg";

const dbConnectionString = process.env.NEXT_PROGRES;

export const db = new pg.Pool({
  connectionString: dbConnectionString,
});