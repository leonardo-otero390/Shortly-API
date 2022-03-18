import * as userService from "../services/userService.js";

export async function createUser(req, res, next) {
  try {
    await userService.insert(req.body);
    res.sendStatus(201);
  } catch (error) {
    next(error);
  }
}

export async function getUser(req, res, next) {
  const { user } = res.locals;

  try {
    res.send(user);
  } catch (error) {
    next(error);
  }
}

export async function listUserUrls(req, res, next) {
  const { id } = req.params;

  try {
    const urls = await userService.findAndListUserUrls(id);
    res.send(urls);
  } catch (error) {
    next(error);
  }
}
