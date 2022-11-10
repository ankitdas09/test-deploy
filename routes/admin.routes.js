const router = require("express").Router();

const catchAsync = require("../utils/catchAsync");
const isAdmin = require("../middleware/isAdmin.middleware");

const AdminController = require("../controllers/admin/AdminController");

router.get("/users", isAdmin, catchAsync(AdminController.getAllUsers));

router.post("/users", isAdmin, catchAsync(AdminController.addNewUser));

router.get("/results", isAdmin, catchAsync(AdminController.getResults));

router.post("/add", isAdmin, catchAsync(AdminController.addNewAdmin));

module.exports = router;
