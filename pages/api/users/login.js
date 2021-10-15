import nc from 'next-connect';
import User from '../../../models/User';
import db from '../../../utils/db';
import bcrypt from 'bcryptjs';
import { signToken } from '../../../utils/auth';

const handler = nc();

handler.get(async (req, res) => {
  await db.connect();
  //search for email in db
  const user = await User.findOne({email: req.body.email});
  await db.disconnect();
  if (user && bcrypt.compareSync(req.body.password, user.password)) {
      const token = signToken(user);
      //send token + user info to front end ( no password)
      res.send({
          token, _id: user._id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,
      })
  } else {
      res.status(401).send({message: 'Invalid username or password'})
  }
});

export default handler;
