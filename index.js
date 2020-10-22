const XLSX = require('xlsx');

const filePath = "./example2.xlsx";

const parseXlsxToJson = file => {
    const workbook = XLSX.readFile(file,  {sheetStubs: true});

    return  workbook.SheetNames.map((sheet) =>  ({
        name: sheet,
        content: XLSX.utils.sheet_to_json(workbook.Sheets[sheet], {defval:""})
    }));
}

const pages = parseXlsxToJson(filePath)

console.log("DATA ============>>>>> ", pages[0].content[0])

