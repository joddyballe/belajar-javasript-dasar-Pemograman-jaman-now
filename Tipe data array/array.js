// let arrayKosong = [];
// let arrayNama = ["joddy", "lintar", "balle"];

const names = [];
names.push("joddy");
names.push("lintar", "balle");
names.push("hendrico", "firdaus", "balok");

console.table(names);

console.info(names[0]);
console.info(names[1]);
console.info(names[2]);

names[3] = "programmer";
names[4] = "rajin";
names[5] = "ngoding";

console.table(names);

delete names[3];
console.table(names);

console.table(names);
names.push("joddy lagi");
console.table(names);
names[3] = "diubah lagi";
names.push(1, 2, 3, 4, 5, 6);
names.push("joddy", "lintar", "balle");
console.table(names);
