import express from "express"
import * as controller from "../controllers/magazineController.js"
import {param, body, validationResult} from "express-validator"
const router = express.Router();


router.get("/magazines", async (req, res) => {
    try {
        res.json(await controller.getMagazines());
        console.log("Get requested")
    }catch (err) {
        console.error("Error fetching magazines:", err);
        res.status(500).json({ error: "Server error" });
      }

})
router.get("/magazines/:id", [
    param("id").isInt({min: 1}).withMessage("ID must be a positive number")
  ], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    console.log("Requested Get by ID");
    const id = req.params.id;
    //console.log(req.params.id)
    try {
      const magazine = await controller.magazinesGetByID(id);
      res.json(magazine);
    } catch(err){
      console.error("Error Fetching magazine by ID", err);
      res.status(500).json({error: "Server error"});
    }
})

router.post(
  "/magazines",
  [
    body("title").notEmpty().withMessage("Title is required"),
    body("price")
      .isFloat({ gt: 0 })
      .withMessage("Price must be a number greater than 0"),
    body("author").notEmpty().withMessage("Author is required"),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      console.log("Requested Post.");
      const newMagazine = await controller.createMagazine(req); 
      res.status(201).json(newMagazine); 
    } catch (err) {
      console.error("Error creating Magazine:", err);
      res.status(500).json({ error: "Server error" });
    }
  }
);

router.put("/magazines", [
    body("id").isInt({min: 1}).withMessage("ID must be a valid positive number"),
    body("title").optional().notEmpty().withMessage("Title is rquired"),
    body("price").optional().isFloat({ gt: 0 }).withMessage("Price must be a number greater than 0"),
    body("author").notEmpty().withMessage("Author is required"),
  ], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    console.log("Requested Put")
    try {
      const updated = await controller.updateMagazine(req);
      res.json(updated);
    } catch(err){
      console.log("Error updating a magazine", err);
      res.status(500).json({error: "Server Error"});
    }
})

router.delete("/magazines/:id", [
    param("id").isInt({min: 1}).withMessage("ID must be a valid posituve number")
  ], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
      };
    console.log("Requested Delete")
    try { 
      const deleted = await controller.deleteMagazine(req.params.id);
      res.json(deleted);
    } catch(err){
      console.error("Error deleting a car", err);
      res.status(500).json({error: "Server error"});
    }
})

export default router;
