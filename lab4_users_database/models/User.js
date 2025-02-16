const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minlength: 4
  },
  email: {
    type: String,
    required: true,
    match: [/^\S+@\S+\.\S+$/, "Invalid email format"]
  },
  city: {
    type: String,
    required: true,
    match: [/^[a-zA-Z\s]+$/, "City name must contain only alphabets and spaces"]
  },
  website: {
    type: String,
    required: true,
    match: [/^(https?:\/\/)[\w\-_]+(\.[\w\-_]+)+([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?$/, "Invalid URL"]
  },
  zip: {
    type: String,
    required: true,
    match: [/^\d{5}-\d{4}$/, "Zip code must be in format 12345-1234"]
  },
  phone: {
    type: String,
    required: true,
    match: [/^\d-\d{3}-\d{3}-\d{4}$/, "Phone number must be in format 1-123-123-1234"]
  }
});

const User = mongoose.model("User", userSchema);
module.exports = User;
