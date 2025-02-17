const express = require("express");
const app = express();
const PORT = 3001;
const cors = require("cors");
const jwt = require("jsonwebtoken");

const SECRET_KEY = "SLnBJ4qlGt+Cp/9QmjQmpaLpZwNzq6MxENFmzSzHh1fTFoLVfzfDSNLC";
// const SECRET_KEY = "fH8KAVLYsd+ZSNQGzTei1J0VjKThNM9n1okLVC7PfyJHH4VAtHKtniZn";

app.use(express.json());
app.use(cors());

function generateGuestToken(dashboardId) {
  const payload = {
    user: {
      username: "guest_user",
      roles: ["Gamma"],
    },
    resources: [{ type: "dashboard", id: dashboardId }],

  };
  return jwt.sign(payload, SECRET_KEY, { algorithm: "HS256" });
}

app.get("/api/generate-token/:id", (req, res) => {
  const id = req.params.id;   
  if (!id) {
    return res.status(400).json({ error: "Dashboard ID is required" });
  }

  try {
    const token = generateGuestToken(parseInt(id));
    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: "Failed to generate token" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
