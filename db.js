import mysql from "mysql"

export const db = mysql.createConnection({
  host:"us-cdbr-east-02.cleardb.com",
  database:"heroku_06b46eb0d23c83d",
  user:"befd08c438bbab",
  password: "34ab012c"
})