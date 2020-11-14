const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'bzkzdtzwqy2di3eu0h42-mysql.services.clever-cloud.com',
  user     : 'uxqfjdl4idypawmb',
  password : 'mTsGKOR2SeTZAkdBXPpR',
  database : 'bzkzdtzwqy2di3eu0h42'
});

connection.connect((error) => {
    if(error){
      console.log(`Error en conexión a base de datos: ${error}`)
      return;
    }else{
      console.log("Conexión extablecida con el servidor de MySQL")
    }
});

module.exports =  {connection: connection}