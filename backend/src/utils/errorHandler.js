export const errorHandler = (err, req, res, next) => {
  console.error("❌ Error:", err.message);

  res.status(err.response?.status || 500).json({
    error: true,
    message: err.message || "Server error"
  });
};
