const express = require("express");

const router = express.Router()

const Apprenant = require("../controllers/apprenants")

/* @GET URL */
router.get("/getAll", Apprenant.getAll);


/* @POST URL */




module.exports = router;
