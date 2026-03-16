let homes = [];

exports.getHomes = () => homes;

exports.addHome = (home) => {
  homes.push(home);
};

exports.getHomeById = (id) => {
  return homes.find(home => home.id == id);
};

exports.deleteHome = (id) => {
  homes = homes.filter(home => home.id != id);
};

exports.updateHome = (id,data) => {

  const home = homes.find(home => home.id == id);

  if(home){
    home.title = data.title;
    home.location = data.location;
    home.price = data.price;
  }
};