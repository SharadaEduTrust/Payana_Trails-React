const express = require("express");
const router = express.Router();
const { subscribe, unsubscribe } = require("../controllers/newsletterController");
const { body, validationResult } = require("express-validator");
const { formRateLimiter } = require("../middlewares/rateLimiter");
const { verifyTurnstile } = require("../middlewares/turnstileMiddleware");

const validateNewsletter = [
  body("fullName").trim().notEmpty().withMessage("Name is required").escape(),
  body("email").trim().isEmail().withMessage("Valid email is required").normalizeEmail(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, message: errors.array().map(e => e.msg).join(", ") });
    }
    next();
  }
];

router.post("/subscribe", formRateLimiter, verifyTurnstile, validateNewsletter, subscribe);
router.get("/unsubscribe/:token", unsubscribe);

module.exports = router;
