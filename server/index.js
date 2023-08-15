const app = require("./app");
const conn = require("./db/conn");
const { syncAndSeed } = require("./db");

const init = async () => {
  try {
    await conn.sync({ force: true });
    console.log("syncing");
    await syncAndSeed();
    const port = process.env.PORT || 3001;
    app.listen(port, () => console.log(`listening on port ${port}`));
  } catch (ex) {
    console.log(ex);
  }
};

init();
