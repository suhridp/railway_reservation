const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Admin = require("./models/Admin");

mongoose.connect("YOUR_MONGO_URI");

(async () => {
  const hashedPassword = await bcrypt.hash("admin123", 10);
  await Admin.create({
    username: "admin",
    password: hashedPassword,
  });
  console.log("Admin created");
  process.exit();
})();
