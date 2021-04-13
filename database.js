let mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "todoDemo",
});

connection.connect();

const Select = (callback) => {
  connection.query("SELECT * FROM todoDemo.todo", (err, rows) => {
    if (err) throw err;
    return callback(rows);
  });

};

const Insert = (data) => {
  console.log("11111111111111111111111", data);

  let sql = `INSERT INTO todoDemo.todo 
                (
                    title
                )
                VALUES
                (
                    ${data}
                )`;

  connection.query(sql, (err) => {
    if (err) throw err;
    return "success";
  });
  
};
connection.end();

module.exports = { Select, Insert };
