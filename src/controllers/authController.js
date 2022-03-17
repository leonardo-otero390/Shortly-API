import * as authService from "../services/authService.js";

export async function login(req, res, next) {
  try {
    await authService.insert(req.body);
  } catch (error) {
    next(error);
  }
}
