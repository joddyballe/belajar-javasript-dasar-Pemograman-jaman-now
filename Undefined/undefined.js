let name;
if (name === undefined) {
  console.info("UNDEFINED");
} else {
  console.info("DEFINED");
}

const names = ["joddy", "balle"];
delete names[0];

if (names[2] === undefined) {
  console.info("ARRAY UNDEFINED");
} else {
  console.info("ARRAY DEFINED");
}

const person = {
  nama: "joddy lintar",
};
if (person.nama === undefined) {
  console.info("OBJECT UNDEFINED");
} else {
  console.info("OBJECT DEFINED");
}
