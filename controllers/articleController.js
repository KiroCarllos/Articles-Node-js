const Article = require("../models/articleSchema");

const getArticles = (req, res) => {
    Article.find().then((result)=>{
      res.render("index",{articles:result})
    }).catch((error)=>{
        console.log(error);
    });
  }


  const addNewArticles = (req, res) => {
    const article = new Article(req.body);
    article.save().then((result)=>{
        console.log(result);
        res.redirect("/all-articles");
    }).catch((error)=>{
        console.log(error);
    })
  }


  const articleDetails = (req, res) => {
  
    Article.findById(req.params.id).then((result)=>{
  
      res.render("details",{article:result})
    }).catch((error)=>{
        console.log(error);
    });
  
  }


  const deleteArticle = (req, res) => {
  
    Article.findByIdAndDelete(req.params.id).then((result)=>{
  
      res.json({
        "status" : 1
      })
    }).catch((error)=>{
        console.log(error);
    });
  
  }



  module.exports = {
    getArticles,
    addNewArticles,
    articleDetails,
    deleteArticle
  }