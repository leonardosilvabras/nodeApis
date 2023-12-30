const AppError = require('../utils/AppError.js');

class UsersController {
  create(req, res) {
    const { name, email, password } = req.body;

    if(!name) {
      throw new AppError('Name is required', 400);
    }

    res.status(201).json({ name, email, password });
  }
}

module.exports = UsersController;
