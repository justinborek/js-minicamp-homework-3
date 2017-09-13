// Do not change any of the function names

function makeCat(name, age) {
  var cat = {
    name : name,
    age : age,
    meow : function(){
      return ('Meow!');
    }
  };
  return cat;
}

function addProperty(object, property) {
  object[property] = null;
  return object;
}

function invokeMethod(object, method) {
  object[method]();
}

function multiplyMysteryNumberByFive(mysteryNumberObject) {
  return mysteryNumberObject.mysteryNumber * 5;
}

function deleteProperty(object, property) {
delete object[property];
return object;
}

function newUser(name, email, password) {
  var user = {};
  user.name = name;
  user.email = email;
  user.password = password;
  return user;
}

function hasEmail(user) {
  if (!user.hasOwnProperty('email')){
    return false;
  }
  if (user.email != '') {
    return true;
  } else {
  return false;
}
}

function hasProperty(object, property) {
  return (object.hasOwnProperty(property));
}

function verifyPassword(user, password) {
  return user.password === password;
}

function updatePassword(user, newPassword) {
  user.password = newPassword;
  return user;
}

function addFriend(user, newFriend) {
  user.friends.push(newFriend);
  return user;
}

function setUsersToPremium(users) {
  for (var i = 0; i < users.length; i++){
    users[i].isPremium = true;
  }
  return users;
}

function sumUserPostLikes(user) {
  var sum = 0;
  for (var i = 0; i < user.posts.length; i++){
    sum = user.posts[i].likes + sum;
  }
  return sum;
}

function addCalculateDiscountPriceMethod(storeItem) {
  storeItem.calculateDiscountPrice = function (){
    return (this.price - (this.price * this.discountPercentage));
  };
  return storeItem;
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  makeCat: makeCat,
  addProperty: addProperty,
  invokeMethod: invokeMethod,
  multiplyMysteryNumberByFive: multiplyMysteryNumberByFive,
  deleteProperty: deleteProperty,
  newUser: newUser,
  hasEmail: hasEmail,
  hasProperty: hasProperty,
  verifyPassword: verifyPassword,
  updatePassword: updatePassword,
  addFriend: addFriend,
  setUsersToPremium: setUsersToPremium,
  sumUserPostLikes: sumUserPostLikes,
  addCalculateDiscountPriceMethod: addCalculateDiscountPriceMethod
};
