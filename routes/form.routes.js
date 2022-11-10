const router = require("express").Router();
const isAuthenticated = require("../middleware/isAuthenticated.middleware");
const catchAsync = require("../utils/catchAsync");
const isAdmin = require("../middleware/isAdmin.middleware");

const FormController = require("../controllers/form/FormController");

router.get("/", isAdmin, catchAsync(FormController.getAllForms));

router.post("/", catchAsync(FormController.postNewForm));

router.get("/schema", isAdmin, catchAsync(FormController.getCurrentSchema));

// POST -> PUT
router.post("/schema", catchAsync(FormController.updateSchema));

router.get("/all", isAdmin, catchAsync(FormController.getAllForms));

router.get("/:id", isAdmin, catchAsync(FormController.getFormById));

module.exports = router;
