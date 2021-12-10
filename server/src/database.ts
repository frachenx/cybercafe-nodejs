import mysql from 'mysql'
import keys from './keys'
const conn = mysql.createConnection(keys.database);

conn.connect((err)=>{
    if(err) console.log(err);
    console.log('Database Connected');
})

export default conn;