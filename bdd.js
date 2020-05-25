const {Pool } = require('pg');

//Pour deploy heroku
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl:{
      rejectUnauthorized: false
  }
});

//Pour deploy localhost
// const pool = new Pool({
//     user: 'postgres',
//     host: 'localhost',
//     database: 'salutH',
//     password: 'Uzescalou98',
//     port: 5432,
//   });


const getPays = () =>{
    return new Promise(function(resolve,reject){
        pool.query('SELECT DISTINCT article.pays From article',(error,results) => {
            if(error){
                reject(error);
            }
            resolve(results.rows);
        })

    })
}

const getAnnee = () =>{
    return new Promise(function(resolve,reject){
        pool.query('SELECT DISTINCT article.annee From article',(error,results) => {
            if(error){
                reject(error);
            }
            resolve(results.rows);
        })

    })
}

const getPaysArticle = (paysId) =>{
    const query = {
        // give the query a unique name
        text: 'SELECT DISTINCT article.nom From article WHERE article.pays=$1',
        values: ['France'],
      }
    return new Promise(function(resolve,reject){
        pool.query(query,(error,results) => {
            if(error){
                reject(error);
            }
            resolve(results.rows);
        })

    })
}

module.exports = {
    getPays,
    getAnnee,
    getPaysArticle,
}