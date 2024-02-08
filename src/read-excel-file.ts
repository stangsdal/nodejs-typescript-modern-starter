import * as XLSX from "xlsx";

export const readExcelFile = async (filePath: string, sheetName?: string) => {
  try {
    const path = "src/common/utils";
    const file = XLSX.readFile(`${path}/${filePath}`);
    let data: unknown[] = [];
    let sheetNames = file.SheetNames;

    // if sheetName is defined, then that's the only sheet we will process
    if (!(typeof sheetName === "undefined")) {
      sheetNames = [sheetName];
    }

    sheetNames.forEach(function (sheet) {
      const temp = XLSX.utils.sheet_to_json(file.Sheets[sheet] ?? {});
      temp.forEach(function (res) {
        console.log("-->", res);
        data.push(res);
      });
    });

    return data;
  } catch (err) {
    console.log(err);
  }
};
