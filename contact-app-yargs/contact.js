import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";

const rl = readline.createInterface({ input, output });

// membuat folder data
const dirPath = "./data";
if (!existsSync(dirPath)) {
  mkdirSync(dirPath);
}

// membuat file contact.json
const dataPath = "./data/contact.json";
if (!existsSync(dataPath)) {
  writeFileSync(dataPath, "[]", "utf-8");
}

const simpanContact = (nama, email, noHP) => {
  const contact = { nama, noHP, email };

  let fileBuffer = readFileSync("data/contact.json", "utf-8");
  const contacts = JSON.parse(fileBuffer);

  contacts.push(contact);

  writeFileSync("data/contact.json", JSON.stringify(contacts));
  console.log(`Berhasil memasukkan data, data yang dimasukkan adalah ${nama}, ${noHP} dan ${email}`);

  rl.close();
};
