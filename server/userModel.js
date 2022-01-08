
/*Elephant SQL link to "velocirabbitworkshop" */
//postgres://ephxsuqw:YrDBiYO2_YXpGhKJJjSwPk9v0MPYCSOv@castor.db.elephantsql.com/ephxsuqw

const { Pool } = require('pg');

const PG_URI = "postgres://ephxsuqw:YrDBiYO2_YXpGhKJJjSwPk9v0MPYCSOv@castor.db.elephantsql.com/ephxsuqw";

const pool = new Pool ({
  connectionString : PG_URI
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback)
  }
}