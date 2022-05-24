const sql = require("./database.js")

const Salary = function (salary) {
    this.month = salary.month;
    this.baseSalary = salary.baseSalary;
    this.reimbursements = salary.reimbursements;
    this.bonuses = salary.bonuses;
    this.userId = salary.userId;
}


Salary.create = (newSalary, result) => {
    sql.query("insert into salary set ?", newSalary, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        console.log("created new Salary: ", { salaryId: res.insertId, ...newSalary });
        result(null, { salaryId: res.insertId, ...newSalary });
    });
};

Salary.getAll = (id, result) => {
    let query = "SELECT * FROM salary ";

    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("salary: ", res);
        result(null, res);
    });
};

Salary.remove = (salaryId, result) => {
    sql.query("DELETE FROM salary WHERE salaryId = ?",salaryId, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        if (res.affectedRows == 0) {
            // not found restaurant_manager with the id
            result({ kind: "not_found" }, null);
            return;
        }

        console.log("deleted salary with salaryId: ", salaryId);
        result(null, res);
    });
};


module.exports = Salary;