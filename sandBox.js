const crud = require("./crud");

async function execute() {
  // const result = await crud.getById("user", "ydqpBC48p9rfnkKxmF8n");
  const result = await crud.get("user");
  // const result = await crud.remove("user", "ydqpBC48p9rfnkKxmF8n");

  const data = {
    name: "Diego Benner",
    age: 42,
  };
  // const result = await crud.post("user", undefined, data);
  // console.log("RESULT: ", result);
  console.log("\nRESULT: ", result.map((item) => item.name).join(", \n"));
}

execute().catch((e) => {
  console.log("\nTHERE's AN ERROR: ", e);
});
