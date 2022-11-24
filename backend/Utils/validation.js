const yup = require('yup');
const UserModels = require('../Models/userModels');

const userSchema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  userName: yup.string(),
  email: yup.string().email('Please Enter Valid Email Format').required(),
  password: yup.string().min(8).max(20).required(),
  gender: yup.string().required(),
  bYear: yup.string().required(),
  bMonth: yup.string().required(),
  bDay: yup.string().required(),
});

const validateGenerateUsername = async (userName) => {
  let a = false;
  do {
    let check = await UserModels.findOne({ userName });
    if (check) {
      //change username
      userName += Math.floor(Math.random() * 10);
      a = true;
    } else {
      a = false;
    }
  } while (a);
  return userName;
};

module.exports = { userSchema, validateGenerateUsername };
