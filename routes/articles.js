const express = require("express");
const router = express.Router()
const articleController = require("../controllers/articleController")


router.get("/", (req, res) => {
    res.redirect("/all-articles");
   
});
  
  router.get("/all-articles", articleController.getArticles);
  
  router.get("/add-new-article", (req, res) => {
    res.render("add-new-article")
  });
  
  router.post("/add-new-article", articleController.addNewArticles);
  
  router.get("/article-details/:id", articleController.articleDetails);

  router.delete("/deleteArticle/:id", articleController.deleteArticle);
  
  //  404 
  router.use((req, res) => {
    res.status(404).send("Sorry can't find that!");
  });
  

  module.exports = router;
  