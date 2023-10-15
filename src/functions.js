const Bcrypt = require("bcrypt");
const saltRounds = 10;

class functions {
  static async bcrypt(password) {
    try {
      const salt = await Bcrypt.genSalt(saltRounds);
      const hash = await Bcrypt.hash(password, salt);
      return hash;
    } catch (err) {
      console.error(err.message);
      throw err; // or return some error indication
    }
  }

  static async validate(literal, hash) {
    return await Bcrypt.compare(literal, hash);
  }
}

module.exports = functions;
