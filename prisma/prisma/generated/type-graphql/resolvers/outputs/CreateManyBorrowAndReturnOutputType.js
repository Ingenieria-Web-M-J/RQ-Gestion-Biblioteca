"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyBorrowAndReturnOutputType = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Book_1 = require("../outputs/Book");
const User_1 = require("../outputs/User");
let CreateManyBorrowAndReturnOutputType = class CreateManyBorrowAndReturnOutputType {
};
exports.CreateManyBorrowAndReturnOutputType = CreateManyBorrowAndReturnOutputType;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CreateManyBorrowAndReturnOutputType.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CreateManyBorrowAndReturnOutputType.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CreateManyBorrowAndReturnOutputType.prototype, "bookId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], CreateManyBorrowAndReturnOutputType.prototype, "borrowedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], CreateManyBorrowAndReturnOutputType.prototype, "returnedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], CreateManyBorrowAndReturnOutputType.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], CreateManyBorrowAndReturnOutputType.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => User_1.User, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", typeof (_a = typeof User_1.User !== "undefined" && User_1.User) === "function" ? _a : Object)
], CreateManyBorrowAndReturnOutputType.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Book_1.Book, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", typeof (_b = typeof Book_1.Book !== "undefined" && Book_1.Book) === "function" ? _b : Object)
], CreateManyBorrowAndReturnOutputType.prototype, "book", void 0);
exports.CreateManyBorrowAndReturnOutputType = CreateManyBorrowAndReturnOutputType = tslib_1.__decorate([
    TypeGraphQL.ObjectType("CreateManyBorrowAndReturnOutputType", {})
], CreateManyBorrowAndReturnOutputType);
