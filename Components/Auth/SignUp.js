const bcrypt = require('bcrypt');
const UserServices = require('../Services/UserServices');

const saltRounds = 10;

async function signUp(req, res) {
  const values = req.body;
  const inputNewUser = async () => {
    try {
      const hashedPassword = await bcrypt.hash(values.password, saltRounds);
      const data = await UserServices.newUser({
        username: values.username,
        email: values.email,
        password: hashedPassword,
        access_id: values.access_id,
      });
      return res.status(200).json({
        status: 'Success',
        message: 'Sign Up Success',
        data,
      });
    } catch (error) {
      return res.status(500).json({
        status: 'Error',
        message: 'Internal server error',
        data: error.message,
      });
    }
  };
  const findEmail = async () => {
    try {
      const emailNewUser = await UserServices.findEmailareSame({ email: values.email });

      if (emailNewUser.length === 0) {
        return inputNewUser();
      }
      return res.status(200).json({
        status: 'Success',
        message: 'Email Sudah ada.',
      });
    } catch (error) {
      return res.status(500).json({
        status: 'Error',
        message: 'Internal server error',
        data: error.message,
      });
    }
  };
  try {
    return findEmail();
  } catch (error) {
    return res.status(500).json({
      status: 'Error',
      message: 'Internal server error',
      data: error.message,
    });
  }
}

module.exports = {
  signUp,
};
