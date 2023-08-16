const mongoose = require('mongoose');
const User = require('./users')


main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}


run()

async function run(){
  const user = new User(
    {
      name: "bobby",
      age: 22,
      email: "test@test.com",
    }
  )
  await user.save()
  console.log(user);
}