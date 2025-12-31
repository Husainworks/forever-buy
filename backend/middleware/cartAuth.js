import jwt from "jsonwebtoken";

export const authUser = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Not Authorized" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const token_decode = jwt.verify(token, process.env.JWT_SECRET);
    req.body.userId = token_decode.id; // Attach userId to the request
    next(); // Pass control to the route handler
  } catch (error) {
    res.status(401).json({
      message: "Invalid or Expired Token",
      error: error.message,
    });
  }
};
