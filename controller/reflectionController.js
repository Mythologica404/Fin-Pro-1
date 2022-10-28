import {
  addReflection,
  getAllReflections,
  editReflection,
  deleteReflection,
} from "../models/Reflection.js";

export const userAddReflection = async (req, res) => {
  const { success, low_point, take_away } = req.body;
  const { userID } = req.user;
  addReflection(userID, success, low_point, take_away).then((data) => {
    res.json(data);
  });
};

export const userGetAllReflections = async (req, res) => {
  const { userID } = req.user;
  getAllReflections(userID).then((data) => {
    res.json(data);
  });
};

export const userEditReflection = async (req, res) => {
  const { success, low_point, take_away } = req.body;
  const { userID } = req.user;
  const { id } = req.params;
  editReflection(id, userID, success, low_point, take_away).then((data) => {
    res.json(data);
  });
};

export const userDeleteReflection = async (req, res) => {
  const { userID } = req.user;
  const { id } = req.params;
  deleteReflection(id, userID).then((data) => {
    res.json(data);
  });
};
