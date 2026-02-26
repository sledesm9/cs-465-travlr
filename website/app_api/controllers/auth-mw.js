const jwt = require('jsonwebtoken');

const requireAuth = (req, res, next) =>
{
    const auth = req.headers.authorization;
    if (!auth)
    {
        return res.status(401).json({ message: "Authorization header missing" });
    }
    const parts = auth.split(' ');
    if (parts.length !== 2 || parts[0] !== 'Bearer')
    {
        return res.status(401).json({ message: 'Missing Bearer token' });
    }
    const token = parts[1];
    try {
        const payload = jwt.verify(token, '8b2e61d571c7f41c1dd7110affee025dd1c8ded2fa2dea17f342720cd682220b5e087b297b7674e85f2fff6ec971380405eaa85dff2faba29aba775eaf3612cb');
        req.user = payload; 
        next();
    }
    catch (err)
    {
        return res.status(401).json({ message: 'Invalid/expired token' });
    }
};

module.exports = { requireAuth };