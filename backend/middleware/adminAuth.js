import jwt from "jsonwebtoken";

export const adminAuth = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        message: "Not Authorized - Token Missing",
      });
    }

    const token = authHeader.split(" ")[1];

    // Decode token and verify
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const expected = process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD;

    if (decoded !== expected) {
      return res.status(401).json({
        message: "Not Authorized - Invalid Token",
      });
    }

    // Token is valid
    next();
  } catch (error) {
    return res.status(500).json({
      message: "Internal Error Occurred",
      error: error.message,
    });
  }
};
