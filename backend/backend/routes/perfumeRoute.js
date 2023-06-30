const express = require("express");

// controller functions
const {
  addPerfume,
  getAllPerfumes,
  getPerfumeGender,
  getPerfumeCategory,
  getPerfumeType,
  addLogo,
  getAllLogos,
  addContact,
  getAllContact
} = require("../controllers/perfumeController");
const upload = require("../utils.js/multer");

const router = express.Router();

// Perfume Addition route
router.post(
  "/addPerfume",
  upload.fields([{ name: "image", maxCount: 1 }]),
  addPerfume
);

router.route("/perfumes").get(getAllPerfumes);
router.route("/perfumes-gender/:id").get(getPerfumeGender);
router.route("/perfumes-category/:id").get(getPerfumeCategory);
router.route("/perfumes-type/:id").get(getPerfumeType);
//Logos
router.post(
  "/logo",
  upload.fields([{ name: "image", maxCount: 1 }]),
  addLogo
);
router.route("/logos").get(getAllLogos);
//Contact
router.route("/contact").post(addContact);
router.route("/contacts").get(getAllContact);
module.exports = router;
