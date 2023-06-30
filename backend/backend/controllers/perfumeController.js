const ErrorHandler = require("../utils.js/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncError");
const perfume = require("../models/perfumeModel");
const logo = require("../models/logoModel");
const contact = require("../models/contactModel");
const cloudinary = require("cloudinary");
require("../utils.js/cloudinary");

//Addition of Perfume
const addPerfume = catchAsyncErrors(async (req, res, next) => {
  const {
    productName,
    perfumeType,
    ratings,
    perfumeCategory,
    brandName,
    gender,
    price,
    discountPrice,
    discountPercent
  } = req.body;


  let result = await cloudinary.v2.uploader.upload(Object.values(req.files)[0][0].path, {
    folder: "perfumeImages",
  });

  const perfumes = await perfume.create({
    productName,
    perfumeType,
    ratings,
    perfumeCategory,
    brandName,
    gender,
    price,
    image:result.secure_url,
    discountPercent,
    discountPrice
  });

  res.status(201).json({
    message: "Perfume added successfully",
    perfumes,
  });
});

//Get all Perfumes
const getAllPerfumes = catchAsyncErrors(async (req, res, next) => {
  const perfumes = await perfume.find().sort({
    createdAt: -1,
  });

  res.status(200).json({
    message: "All perfumes displayed successfully",
    perfumes,
  });
});


//Search according to the gender -
const getPerfumeGender = catchAsyncErrors(async (req, res, next) => {
  const perfumes = await perfume.find({ gender: { $in: [req.params.id] } }).sort({
    createdAt: -1,
  });

  res.status(201).json({
    message: "Perfumes displayed successfully",
    perfumes,
  });
});

//Search according to the gender -
const getPerfumeCategory = catchAsyncErrors(async (req, res, next) => {
  const perfumes = await perfume.find({ perfumeCategory: { $in: [req.params.id] } }).sort({
    createdAt: -1,
  });

  res.status(201).json({
    message: "Perfumes displayed successfully",
    perfumes,
  });
});

//Search according to the type
const getPerfumeType = catchAsyncErrors(async (req, res, next) => {
  const perfumes = await perfume.find({ perfumeType: { $in: [req.params.id] } }).sort({
    createdAt: -1,
  });

  res.status(201).json({
    message: "Perfumes displayed successfully",
    perfumes,
  });
});

//Logo addition
//Addition of Perfume
const addLogo = catchAsyncErrors(async (req, res, next) => {
  const {
    logoName
  } = req.body;


  let result = await cloudinary.v2.uploader.upload(Object.values(req.files)[0][0].path, {
    folder: "logoImages",
  });

  const logos = await logo.create({
   logoName,
    image:result.secure_url,
  });

  res.status(201).json({
    message: "Perfume added successfully",
    logos,
  });
});


const getAllLogos = catchAsyncErrors(async (req, res, next) => {
  const logos = await logo.find().sort({
    createdAt: -1,
  });

  res.status(200).json({
    message: "All logos displayed successfully",
    logos,
  });
});

//Contact
const addContact = catchAsyncErrors(async (req, res, next) => {
  const {
    email,address,messages
  } = req.body;

  const perfumes = await contact.create({
   email,
   address,
   messages
  });

  res.status(201).json({
    message: "Contact added successfully",
    perfumes,
  });
});
// Get contact
const getAllContact = catchAsyncErrors(async (req, res, next) => {
  const contacts = await contact.find().sort({
    createdAt: -1,
  });

  res.status(200).json({
    message: "All contacts displayed successfully",
    contacts, 
  });
});


module.exports = {
  addPerfume,
  getAllPerfumes,
  getPerfumeGender,
  getPerfumeCategory,
  getPerfumeType,
  getPerfumeGender,
  addLogo,
  getAllLogos,
  addContact,
  getAllContact
};
