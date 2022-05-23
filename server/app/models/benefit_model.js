const sql = require("./database.js")

const Benefit = function (benefit) {
    this.benefitTitle = benefit.benefitTitle;
    this.benefitDescription = benefit.benefitDescription;
    this.benefitPromoCode = benefit.benefitPromoCode;
}

Benefit.create = (newBenefit, result) => {
    sql.query("insert into employee_benefits set ?", newBenefit, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        console.log("created new Benefit: ", { benefitId: res.insertId, ...newBenefit });
        result(null, { benefitId: res.insertId, ...newBenefit });
    });
};

Benefit.getAll = (id, result) => {
    let query = "SELECT * FROM employee_benefits ";

    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("benefit: ", res);
        result(null, res);
    });
};

Benefit.remove = (benefitId, result) => {
    sql.query("DELETE FROM employee_benefits WHERE benefitId = ?",benefitId, (err, res) => {
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

        console.log("deleted employee_benefit with benefitId: ", benefitId);
        result(null, res);
    });
};


module.exports = Benefit;