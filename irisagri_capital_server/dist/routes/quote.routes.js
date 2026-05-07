"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const quote_controller_1 = require("../controller/quote.controller");
const validate_1 = require("../middleware/validate");
const quote_validator_1 = require("../validators/quote.validator");
const router = (0, express_1.Router)();
router.post("/quote", (0, validate_1.validate)(quote_validator_1.quoteSchema), quote_controller_1.sendQuote);
exports.default = router;
