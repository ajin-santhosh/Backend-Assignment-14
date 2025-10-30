const jwt = require("jsonwebtoken");

const validate = async (req, res) => {
  const token = req.cookies.token;
  try {
    if (!token) return res.status(401).json({ message: "No token found" });

    // Synchronous version (throws error if invalid)
    const decoded = jwt.verify(token, process.env.SECRET_KEY);

    res.json({ valid: true, user: decoded });
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return res.status(403).json({ message: "Token expired" });
    }
    if (error.name === "JsonWebTokenError") {
      return res.status(403).json({ message: "Invalid token" });
    }

    console.error("Error during validation:", error.message);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = validate;
