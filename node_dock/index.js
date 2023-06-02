const cors = require('cors')
const express = require("express")
//to make a pool of connection with database
const { createPool } = require("mysql");


const pool = createPool({
  host: "162.246.19.18",
  user: "technove_misbah",
  password: "misbah@technoverse",
  database: "technove_demo",
  charset: "utf8mb4",
  connectionLimit: 10
});

// const queryData = pool.query(`select * from Usertbl`,  (err,result, fields)=>{
//     if (err) {
//         return console.log(err);
//     }

//     console.log(result);
// })


const app = express()
app.use(cors());

// const data= {
//     id: 'Raw_Vio_P1',
//     dataType: 'Raw',
//     wave: 'Vio',
//     sensor: 'P1'
// }

app.get('/', (req, res) => {
  pool.query(`SELECT * FROM Usertbl`, (err, results, fields) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    } else {
      res.json(results);
    }
  });
});
  
  // Start the server
  app.listen(4000, () => {
    console.log('API server is running on port 4000');
  });



 