const crud = require("../../crud");

const tableName = "Books";

//1 -> Get the data from params: title, array of authors, qty of pages
//2 -> Check if the title has already been filled
//3 -> Check if the qty of pages has already been filled
//4 -> Check if there's at least one author
//5 -> Check if the author is registered
//6 -> Return an error in case of any error above
//7 -> Make the register of the book
//8 -> Return the success of the registered book
async function registerBook(
  data = { title: "", qtyPages: 0, arrayAuthors: [] }
) {
  if (!data.title) {
    return {
      error: "0001",
      message: "The title is required",
      necessaryFields: ["title"],
    };
  }

  if (!data.qtyPages || !(data.qtyPages > 0)) {
    return {
      error: "0001",
      message: "The qty of pages is required",
      necessaryFields: ["qtyPages"],
    };
  }

  if (!data.arrayAuthors || data.arrayAuthors.length === 0) {
    return {
      error: "0001",
      message: "At least one author is required",
      necessaryFields: ["arrayAuthors"],
    };
  }

  if (!Array.isArray(data.arrayAuthors)) {
    return {
      error: "0002",
      message: "It's expected an array",
      expectedType: ["array"],
      necessaryFields: ["arrayAuthors"],
    };
  }

  if (typeof data.qtyPages !== "number") {
    return {
      error: "0002",
      message: "It's expected a number",
      expectedType: ["number"],
      necessaryFields: ["qtyPages"],
    };
  }

  if (await checkListRegisteredAuthors(data.arrayAuthors)) {
    return {
      error: "0003",
      message: "Not found",
      situation: "Some author is not registered",
    };
  }

  const book = await crud.post(tableName, undefined, data);
  return book;
}

async function checkListRegisteredAuthors(list = []) {
  let notRegistered = false;
  for (const author of list) {
    try {
      await crud.getById("Authors", author);
    } catch (erro) {
      notRegistered = true;
      return notRegistered;
    }
  }
  return notRegistered;
}

module.exports = {
  registerBook,
};
