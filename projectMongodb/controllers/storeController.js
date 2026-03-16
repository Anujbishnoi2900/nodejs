// Home model import kar rahe hain
const Home = require("../models/homeModel");


// Store page par saare homes show karne ke liye
exports.getHomeList = (req, res) => {

  // database se saare homes fetch karna
  Home.fetchAll()

    .then((homes) => {

      // home-list.ejs me homes data bhejna
      res.render("store/home-list", { homes });

    })

    // error handle karna
    .catch(err => console.log(err));
};



// Single home detail page
exports.getHomeDetail = (req, res) => {

  // route se id milti hai
  const homeId = req.params.id;

  // database se specific home fetch karna
  Home.getHomeById(homeId)

    .then((home) => {

      // home-detail.ejs me home data bhejna
      res.render("store/home-detail", { home });

    })

    .catch(err => console.log(err));
};