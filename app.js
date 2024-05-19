const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
// const errorController = require('./controllers/error');

// const User = require('./models/user');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
// const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  //   User.findById('6648ab14eb12fea64b2693e5')
  //     .then(user => {
  //       console.log(user);

  //       req.user = new User(user.name, user.email, user.cart, user._id);
  //       next();
  //     })
  //     .catch(err => console.log(err));
  next();
});

app.use('/admin', adminRoutes);
// app.use(shopRoutes);

// app.use(errorController.get404);
//const URL = "mongodb+srv://binni-dev:Binnidev123@cluster0.luvofic.mongodb.net/"
const URL = "mongodb+srv://dev-binni:Binnidev123@cluster0.th46meb.mongodb.net/shop_mongoose?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(URL).then(res => {
  console.log("connected to database");
  app.listen(3000, () => {
    console.log('App is running on port 3000');

  })
}).catch(err => {
  console.log(err);

})
