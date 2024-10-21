const express = require("express");
const {
  handlePostAll,
  handleGetAll,
  handleGetById,
  handleDeleteById,
  handlePatchById,
} = require("../controller/user");
const router = express.Router();

router.get("/", handleGetAll).post("/", handlePostAll);

router
  .get("/:id", handleGetById)
  .patch("/:id", handlePatchById)
  .delete("/:id", handleDeleteById);

module.exports = router;
