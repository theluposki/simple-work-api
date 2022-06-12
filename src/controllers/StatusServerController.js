export const StatusServerController = {
  status(req, res) {
    res.status(200).json({
      status: "OK",
      timestamp: Date.now(),
    });
  },
};
