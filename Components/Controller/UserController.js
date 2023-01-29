const UserServices = require('../Services/UserServices');

module.exports.getUsers = async (req, res) => {
  try {
    const data = await UserServices.getUsers();
    return res.status(200).json({
      status: 'Success',
      message: 'Get All User Successfully',
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
