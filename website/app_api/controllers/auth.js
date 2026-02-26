const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = mongoose.model('User');

const login = async (req, res) =>
{
  try
  {
    const { email, password } = req.body;
    if (!email)
    {
      return res.status(400).json({ message: 'Email required' });
    }
    if (!password)
    {
      return res.status(400).json({ message: 'password required' });
    }
    const user = await User.findOne({ email: email.toLowerCase() }).exec();
    if (!user)
    {
        return res.status(401).json({ message: 'Invalid credentials' });
    }
    const flag = await bcrypt.compare(password, user.passwordHash);
    if (flag === false)
    {
        return res.status(401).json({ message: 'Invalid credentials' });
    }
    const token = jwt.sign
    (
        {
            sub: user._id.toString(),
            email: user.email,
            role: user.role
        },
        '8b2e61d571c7f41c1dd7110affee025dd1c8ded2fa2dea17f342720cd682220b5e087b297b7674e85f2fff6ec971380405eaa85dff2faba29aba775eaf3612cb',
        {
            expiresIn: '2h'
        }
    );

    return res.status(200).json(
    {
      token,
      user:
        {
            name: user.name,
            email: user.email,
            role: user.role
        }
    });
  }
  catch (err)
  {
    return res.status(500).json({ message: 'Login failed', error: err });
  }
};

module.exports = { login };