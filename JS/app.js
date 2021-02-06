//import the data from data.js
const tableData = data;

//Reference the HTML table using d3
var tbody = d3.select("tbody");

function buildTable(data) {
    //Clear out any existing data
    tbody.html("");
        
    //loop through ea object and append a row and cells for ea value in the row
    data.forEach((dataRow) => {
        //Append a row to the table body
        let row = tbody.append("tr");
        // Loop through ea field in the dataRow and add ea value as a table cell (td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
            }
        );
    });
}
