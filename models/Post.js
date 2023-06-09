const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      max: 140,
    },
    img:  {
      type: String,
    },
    likes: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }

);

// exports どのファイルでもアクセスできるように
module.exports = mongoose.model("Post", PostSchema);