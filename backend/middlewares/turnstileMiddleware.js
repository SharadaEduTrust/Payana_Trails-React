const https = require("https");

const verifyTurnstile = (req, res, next) => {
  const token = req.body.cfTurnstileResponse;
  
  if (!token) {
    return res.status(400).json({
      success: false,
      message: "CAPTCHA token missing. Please complete the CAPTCHA.",
    });
  }

  const secret = process.env.TURNSTILE_SECRET_KEY || "1x0000000000000000000000000000000AA"; // Dummy secret for testing always passes

  const postData = new URLSearchParams({
    secret: secret,
    response: token,
    remoteip: req.ip,
  }).toString();

  const options = {
    hostname: "challenges.cloudflare.com",
    path: "/turnstile/v0/siteverify",
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Content-Length": Buffer.byteLength(postData),
    },
  };

  const request = https.request(options, (response) => {
    let body = "";
    response.on("data", (chunk) => {
      body += chunk;
    });

    response.on("end", () => {
      try {
        const parsed = JSON.parse(body);
        if (parsed.success) {
          next();
        } else {
          res.status(400).json({
            success: false,
            message: "CAPTCHA verification failed. Please try again.",
            errors: parsed["error-codes"],
          });
        }
      } catch (err) {
        res.status(500).json({
          success: false,
          message: "Internal server error during CAPTCHA verification.",
        });
      }
    });
  });

  request.on("error", (err) => {
    console.error("Turnstile request error:", err);
    res.status(500).json({
      success: false,
      message: "Unable to verify CAPTCHA at this time.",
    });
  });

  request.write(postData);
  request.end();
};

module.exports = { verifyTurnstile };
