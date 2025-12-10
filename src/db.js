import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
  user: DB_USER,    
  host: ADDRESS,       
  database: DB_NAME, 
  password: DB_PASS, 
  port: DB_PORT,                
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
