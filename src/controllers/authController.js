import * as authService from "../services/authService.js";

export async function login(req, res, next) {
  try {
    const token = await authService.insert(req.body);
    res.send(token);
  } catch (error) {
    console.log(error);
    next(error);
  }
}
