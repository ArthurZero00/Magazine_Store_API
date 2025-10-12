import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
  user: "postgres",    
  host: "localhost",       
  database: "my_DB", 
  password: "1234", 
  port: 5432,                
});

export const query = (text, params) => pool.query(text, params);

(async () => {
  try {
    const res = await query("SELECT NOW()");
    console.log("Postgres connected at:", res.rows[0].now);
  } catch (err) {
    console.error("DB connection error:", err);
  }
})();