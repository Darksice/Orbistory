const {Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl:{
      rejectUnauthorized: false
  }
});

const getPays = () =>{
    return new Promise(function(resolve,reject){
        pool.query('SELECT DISTINCT article.Pays From article',(error,results) => {
            if(error){
                reject(error);
            }
            resolve(results.rows);
        })

    })
}

module.exports = {
    getPays,
}