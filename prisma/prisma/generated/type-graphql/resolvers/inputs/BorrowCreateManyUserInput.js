"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BorrowCreateManyUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let BorrowCreateManyUserInput = class BorrowCreateManyUserInput {
};
exports.BorrowCreateManyUserInput = BorrowCreateManyUserInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BorrowCreateManyUserInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], BorrowCreateManyUserInput.prototype, "bookId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], BorrowCreateManyUserInput.prototype, "borrowedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], BorrowCreateManyUserInput.prototype, "returnedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], BorrowCreateManyUserInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], BorrowCreateManyUserInput.prototype, "updatedAt", void 0);
exports.BorrowCreateManyUserInput = BorrowCreateManyUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BorrowCreateManyUserInput", {})
], BorrowCreateManyUserInput);
