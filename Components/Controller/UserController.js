const UserServices = require('../Services/UserServices');

async function getUsers(req, res) {
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
}

module.exports = {
  getUsers,
};
