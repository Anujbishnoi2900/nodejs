const homeModel = require("../models/homeModel");

exports.getAddHome = (req,res)=>{
  res.render("admin/add-home");
};

exports.postAddHome = (req,res)=>{

  const newHome = {
    id: Date.now(),
    title: req.body.title,
    location: req.body.location,
    price: req.body.price
  };

  homeModel.addHome(newHome);

  res.redirect("/");
};

exports.getAdminHomes = (req,res)=>{

  const homes = homeModel.getHomes();

  res.render("admin/admin-home-list",{homes});
};

exports.deleteHome = (req,res)=>{

  homeModel.deleteHome(req.params.id);

  res.redirect("/admin/admin-home-list");
};

exports.getEditHome = (req,res)=>{

  const home = homeModel.getHomeById(req.params.id);

  res.render("admin/edit-home",{home});
};

exports.postEditHome = (req,res)=>{

  homeModel.updateHome(req.body.id,req.body);

  res.redirect("/admin/admin-home-list");
};