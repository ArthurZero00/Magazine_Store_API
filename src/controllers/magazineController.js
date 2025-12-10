import {query} from "../db.js"


async function getMagazines (){
    const selectQuery = "SELECT * FROM magazines";
    const result = await query(selectQuery);
    return result.rows; 
}

async function magazinesGetByID(id) {
    const selectQueryByID = "SELECT * FROM magazines WHERE id = $1";
    const params = [id];
    const result = await query(selectQueryByID, params);
    return result.rows[0] || "No car found";
}

async function createMagazine(req) {
    try {
      //console.log(req.body)
      const { title, author, price } = req.body;
      const insert_query = `
        INSERT INTO magazines (title, author, price) 
        VALUES ($1, $2, $3)
        RETURNING *; 
      `;
  
      const values = [ title, author, price];
      const result = await query(insert_query, values);
  
      console.log("Inserted:", result.rows[0]); 
      return "Magazine has been added";
    } catch (err) {
      console.error("Error inserting magazine:", err);
      throw err;
    }
  }
  

async function updateMagazine (req) {
   try { const updateQuery = `
    UPDATE magazines
    SET title = $2,
        author = $3,
        price = $4
    WHERE id = $1
    RETURNING *;
  `;
    const values = [req.body.id,req.body.title, req.body.author, req.body.price];
    const result = await query(updateQuery, values);
    return `Magazine with id ${req.body.id} has been updated`;
   } catch(err){
    console.error("Error updating a magazine", err);
    throw err;
   }

}


async function deleteMagazine(id) {
    const deleteQuery = "DELETE FROM magazines WHERE id = $1 RETURNING *";
    const result = await query(deleteQuery, [id]);
    return `Magazine has been deleted.`
}



export {
    getMagazines,
    magazinesGetByID,
    updateMagazine,
    createMagazine,
    deleteMagazine
}




