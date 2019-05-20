/* eslint-disable no-undef */
const xl = require("excel4node");
// eslint-disable-next-line no-unused-vars
const metaData = require("./list-of-places.json");
const wb = new xl.Workbook();
const ws = wb.addWorksheet("Sheet 1");

let rowCounter = 1;

// let metaData = { address: ["Laxmi Nagar", "Hauz Khas", "Lajpat Nagar"] };

const headingStyle = wb.createStyle({
  font: {
    color: "#333333",
    size: 14
  },
  numberFormat: "$#,##0.00; ($#,##0.00); -"
});

const contentStyle = wb.createStyle({
  font: {
    color: "#333333",
    size: 12
  },
  numberFormat: "$#,##0.00; ($#,##0.00); -"
});

// eslint-disable-next-line no-unused-vars
async function writeToExcel(metaData, columnNumber, columnName) {
  ws.cell(rowCounter, columnNumber)
    .string(columnName)
    .style(headingStyle);
  rowCounter += 1;
  for (let i = 0; i < metaData.address.length; i++) {
    ws.cell(rowCounter + i, columnNumber)
      .string(metaData.address[i])
      .style(contentStyle);
  }

  ws.column(columnNumber).setWidth(50);

  rowCounter += metaData.address.length;
  wb.write("data.xlsx");
}

writeToExcel(metaData, 1, "PG addresses");
