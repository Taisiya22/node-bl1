const fs = require("fs/promises");
const path = require("path");

const usersPath = path.join(__dirname, "..", "db", "users.json");

class FileOperations {

  constructor(path) {
    this.path = path;
    
  }

  read =async()=> {
    return await fs.readFile(this.path, "utf-8");
  }

   create = async(data) => {
    return await fs.writeFile(this.path, JSON.stringify(data, null, 2));
  }

   update = async(data) => {
    const usersData = JSON.parse(await fs.readFile(this.path, "utf-8"));
    usersData.push(data);
    await this.create(usersData);
  }

 remove =  async() => {
    return await fs.unlink(this.path);
  }

  async display() {
    const users = await this.read();
    console.log(users);
  }

  
}

const data = [{ name: "Oleh" }, { name: "Taisiya" }];

const file = new FileOperations(usersPath);

// file.display()
// file.create(data);
// file.update({name: "Andrii"})
// file.remove()

async function tryCatchHandler(clb) {
  try {
    await clb;
  } catch (error) {
    console.log(error.message);
  }
}

// tryCatchHandler(file.display.bind(file))
// tryCatchHandler(file.create.bind(file, data));
// tryCatchHandler(file.update.bind(file, { name: 'Serhii' }))
// tryCatchHandler(file.remove.bind(file));



//////////////////////Homework/////////////
tryCatchHandler(file.display(file))
// tryCatchHandler(file.update({ name: 'Zahar' }))
// tryCatchHandler(file.create( data));
// tryCatchHandler(file.remove(file))