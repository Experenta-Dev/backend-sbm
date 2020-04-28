const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    client.query('SELECT * FROM salesforce.account', (err, data)=>{
      if (err) {
        console.log(err);
        res.status(400).send(err);
      } else {
        res.json(data.rows);
      }
    });
});
  
app.get('/:id', (req, res)=>{
    client.query('SELECT * FROM salesforce.account WHERE id = $1', [req.params.id], (err, data)=>{
      if (err) {
        console.log(err);
        res.status(400).send(err);
      } else {
        res.json(data.rows[0]);
      }
    });
});

module.exports = router;