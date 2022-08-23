const crud = require("./crud");

async function execute() {
  // const result = await crud.getById("user", "ydqpBC48p9rfnkKxmF8n");
  // const result = await crud.get("user");
  // const result = await crud.remove("user", "ydqpBC48p9rfnkKxmF8n");
  // console.log("RESULT: ", result);
  // console.log("\nRESULT: ", result.map((item) => item.name).join(", \n"));

  const data = {
    name: "Kenzo",
  };

  const result = await crud.post("Authors", undefined, data);
  console.log("RESULT: ", result);
}

// execute().catch((e) => {
//   console.log("\nTHERE's AN ERROR: ", e);
// });

const bookHandler = require("./api/book/book.handler");

async function execute() {
  const book = {
    title: "The Lord of the Rings",
    qtyPages: 8,
    arrayAuthors: ["SG0AJdQdByg0me3oQly4", "araIKklkc6aqa72bugo3"],
  };
  const result = await bookHandler.registerBook(book);
  console.log("RESULT: ", result);
}

execute().catch((e) => {
  console.log("\nTHERE's AN ERROR: ", e);
});
