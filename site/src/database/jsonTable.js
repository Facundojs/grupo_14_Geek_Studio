const fs = require('fs');
const path = require('path');

let model = function(tableName) {
    return {
        filePath: path.join(__dirname, './' + tableName + '.json'),
        readFile() {
            let fileContents = fs.readFileSync(this.filePath, 'utf-8');
        
            if(fileContents) {
                return JSON.parse(fileContents);
            }
        
            return [];
        },
        writeFile(contents) {
            let fileContents = JSON.stringify(contents, null, " ");
            fs.writeFileSync(this.filePath, fileContents);
        },
        nextId() {
            let rows = this.readFile();
            let lastRow = rows.pop();

            if (lastRow) {
                return ++lastRow.id;
            }

            return 1;
        },
        all() {
            return this.readFile();
        },
        find(id) {
            let rows = this.readFile();
            return rows.find(row => row.id == id);
        },
        findByField(field, value) {
            let rows = this.readFile();
            return rows.find(row => row[field] == value);
        },
        findAllByField(field, value) {
            let rows = this.readFile();
            return rows.filter(row => row[field] == value);
        },
        create(row) {
            let rows = this.readFile();
            row.id = this.nextId();
            rows.push(row);

            this.writeFile(rows);

            return row.id;
        },
        update(row) {
            let rows = this.readFile();
            let updatedRows = rows.map(oneRow => {
                if (oneRow.id == row.id) {
                    return row;
                }

                return oneRow;
            }); 

            this.writeFile(updatedRows);

            return row.id;
        },
        delete(id) {
            let rows = this.readFile();
            let updatedRows = rows.filter(oneRow => oneRow.id != id); 

            this.writeFile(updatedRows);
        }
    }
}

module.exports = model;
