var connection = require("./connection.js")


var orm = {
    getAll: function(tableName, cb) {
        connection.query("SELECT * FROM ??", [tableName], (err, data) => {
            if (err) throw err
            cb(data)
        })
    },

    getByAttribute: function(tableName, colName, colAttribute, cb) {
        query = "SELECT * FROM ?? WHERE ?? = ?"
        connection.query(query, [tableName, colName, colAttribute], (err, data) => {
            if (err) throw err
            cb(data)
        })
    },

    addNew: function(tableName, colArr, valArr, cb) {
        
        query = "INSERT INTO " + tableName +  " SET " + conditionQuestionMarks(colArr.length)
        connection.query(query, combineConditions(colArr, valArr), (err, data) => {
            if (err) throw err
            cb(data)
        })
    },

    updateByAttribute: function(tableName, colName, colVal, condName, condAttr, cb) {
        connection.query("UPDATE " + tableName + " SET ?? = ? WHERE ?? = ?", [colName, colVal, condName, condAttr], (err, data) => {
            if (err) throw err
            cb(data)
        })
    },

    deleteByAttribute: function(tableName, condName, condAttr, cb) {
        connection.query("DELETE FROM ?? WHERE ?? = ?", [tableName, condName, condAttr], (err, data) => {
            if (err) throw err
            cb(data)
        })
    }

    
}

function conditionQuestionMarks(arrayLength) {
    var string = ""
    for (i=0; i<arrayLength; i++) {
        if (i === arrayLength - 1) {
            string += "?? = ?"
        }
        else {
        string += "?? = ?, "
        }
    }
    return string
}

function combineConditions(colArr, valArr) {
    arr = []
    for (i =0; i<colArr.length; i++) {
        arr.push(colArr[i]);
        arr.push(valArr[i])
    }
    return arr
}

module.exports = orm