import { pool } from '../index';

async function createTeamsTable() {
    const client = await pool.connect();
  
    try {
      const verifyTable = await client.query(
        "SELECT EXISTS (SELECT FROM information_schema.tables WHERE table_name = 'teams')"
      );
  
      const tableExist = verifyTable.rows[0].exists;
  
      if (!tableExist) {
        await client.query(`
          CREATE TABLE teams (
            id SERIAL PRIMARY KEY,
            owner VARCHAR(255) NOT NULL,
            pokemons JSONB NOT NULL
          )
        `);
        console.log('Create table succefull!');
      }
    } catch (error) {
      console.error('Error to create a teams table:', error);
    } finally {
      client.release();
    }
  }
  
  export { createTeamsTable };