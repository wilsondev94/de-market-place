"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InfiniteQuerySchema = exports.AuthCredentialsSchema = void 0;
var zod_1 = __importDefault(require("zod"));
exports.AuthCredentialsSchema = zod_1.default.object({
    email: zod_1.default.string().email(),
    password: zod_1.default.string().min(8, {
        message: "Password must be at least 8 characters long.",
    }),
});
exports.InfiniteQuerySchema = zod_1.default.object({
    category: zod_1.default.string().optional(),
    sort: zod_1.default.enum(["asc", "desc"]).optional(),
    limit: zod_1.default.number().optional(),
});
