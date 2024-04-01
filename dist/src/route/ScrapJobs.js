"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ScrapJobs_controller_1 = __importDefault(require("../controller/ScrapJobs.controller"));
//
const scrapJobs = (0, express_1.Router)();
scrapJobs.get("/jobs", ScrapJobs_controller_1.default.jobs);
exports.default = scrapJobs;
//# sourceMappingURL=ScrapJobs.js.map