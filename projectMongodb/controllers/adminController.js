// Home model import kar rahe hain taaki database operations use kar sake
const Home = require("../models/homeModel");


// Add Home page render karne ke liye
exports.getAddHome = (req, res) => {

  // add-home.ejs page open karega
  res.render("admin/add-home");
};



// Form submit hone par new home database me save karna
exports.postAddHome = (req, res) => {

  // form se data lekar new Home object create kar rahe hain
  const home = new Home(
    req.body.title,      // form se title
    req.body.price,      // form se price
    req.body.location    // form se location
  );

  // database me home save karna
  home.save()

    // save hone ke baad admin home list page par redirect
    .then(() => {
      res.redirect("/admin/admin-home-list");
    })

    // error aane par console me show karega
    .catch(err => console.log(err));
};



// Admin panel me saare homes show karne ke liye
exports.getAdminHomes = (req, res) => {

  // database se saare homes fetch karna
  Home.fetchAll()

    .then((homes) => {

      // admin-home-list.ejs me homes data bhejna
      res.render("admin/admin-home-list", { homes });

    })

    .catch(err => console.log(err));
};



// Home delete karne ke liye
exports.deleteHome = (req, res) => {

  // route se id milti hai (req.params.id)
  Home.deleteHome(req.params.id)

    .then(() => {

      // delete hone ke baad admin home list page par redirect
      res.redirect("/admin/admin-home-list");

    })

    .catch(err => console.log(err));
};



// Edit page open karna
exports.getEditHome = (req, res) => {

  // id ke basis par home fetch karna
  Home.getHomeById(req.params.id)

    .then((home) => {

      // edit-home.ejs me home data bhejna
      res.render("admin/edit-home", { home });

    })

    .catch(err => console.log(err));
};



// Edit form submit hone par update karna
exports.postEditHome = (req, res) => {

  // database me update karna
  Home.updateHome(req.body.id, req.body)

    .then(() => {

      // update hone ke baad admin home list page par redirect
      res.redirect("/admin/admin-home-list");

    })

    .catch(err => console.log(err));
};