// backend/routes/adminRoutes.js
const express = require("express");
const router = express.Router();
const {
  loginAdmin,
  forgotPassword,
  resetPassword,
} = require("../controllers/adminController");
const {
  downloadFormExport,
  listFormExports,
} = require("../controllers/formExportController");
const { requireAdmin } = require("../middlewares/adminAuth");

router.post("/login", loginAdmin);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);
router.get("/form-exports", requireAdmin, listFormExports);
router.get("/form-exports/:formType/download", requireAdmin, downloadFormExport);

module.exports = router;
