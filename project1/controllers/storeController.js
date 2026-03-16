const homeModel = require("../models/homeModel");

exports.getHomeList = (req,res)=>{

  const homes = homeModel.getHomes();

  res.render("store/home-list",{homes});
};

exports.getHomeDetail = (req,res)=>{

  const home = homeModel.getHomeById(req.params.id);

  res.render("store/home-detail",{home});
};