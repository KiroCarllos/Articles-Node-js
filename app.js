//  to controll ur website
const express = require("express");
const app = express();
const port = 5000;
const helemt = require("helmet")
app.set('view engine', 'ejs')
app.use(express.static('public'))
const ArticlesRouter = require("./routes/articles");


// TO MAKE POST REQUEST
app.use(express.urlencoded({extended:true}))

// connect mongoDb
const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://kiro:root@testapp.epxbfs1.mongodb.net/all-data?retryWrites=true&w=majority").then(result=>{
  app.listen(process.env.PORT  || port, () => {
    console.log(`Mongo DB connected successfully && app listening at http://localhost:${port}`);
  });
}).catch(error=>{
  console.log(error);
});
// end mongoDb

// for auto refresh
// const path = require("path");
// const livereload = require("livereload");
// const liveReloadServer = livereload.createServer();
// liveReloadServer.watch(path.join(__dirname, 'public'));
// const connectLivereload = require("connect-livereload");
// app.use(connectLivereload());
// liveReloadServer.server.once("connection", () => {
//   setTimeout(() => {
//     liveReloadServer.refresh("/");
//   }, 100);
// });
// end auto refresh



// routes
// first param here mean as prefix
app.use(ArticlesRouter);




// deploy
app.use(helemt())


