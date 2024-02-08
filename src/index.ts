#!/usr/bin/env node
// NOTE: You can remove the first line if you don't plan to release an
// executable package. E.g. code that can be used as cli like prettier or eslint

import { readExcelFile } from "./read-excel-file";

const main = async () => {
  console.log("hello Node.js  asdf Typescript world :]");

  const data = await readExcelFile("ModbusTables.xlsx", "HoldingRegisters");

  // console.log(JSON.stringify(data, null, 2));
};

// This was just here to force a linting error for now to demonstrate/test the
// eslint pipeline. You can uncomment this and run "yarn check-lint" to test the
// linting.
// const x: number[] = [1, 2];
// const y: Array<number> = [3, 4];

// This was just here to force a linting error for now to demonstrate/test the
// eslint pipeline. You can uncomment this and run "yarn check-lint" to test the
// linting.
// if (x == y) {
//   console.log("equal!");
// }

main();
