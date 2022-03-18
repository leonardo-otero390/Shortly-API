import * as authRepository from "../repositories/authRepository.js"
import * as userRepository from "../repositories/userRepository.js"

export async function validateTokenMiddleware(req, res, next) {
  const authorization = req.headers.authorization;
  const token = authorization?.replace("Bearer ", "");
  if (!token) {
    return res.sendStatus(401);
  }

  const session = await authRepository.findByToken(token);
  if (!session) {
    return res.sendStatus(401);
  }

  const user = await userRepository.find(session.userId);
  if (!user) {
    return res.sendStatus(401);
  }

  res.locals.user = user;
  next();
}