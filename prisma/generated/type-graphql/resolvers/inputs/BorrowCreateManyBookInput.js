"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BorrowCreateManyBookInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let BorrowCreateManyBookInput = class BorrowCreateManyBookInput {
};
exports.BorrowCreateManyBookInput = BorrowCreateManyBookInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BorrowCreateManyBookInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], BorrowCreateManyBookInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], BorrowCreateManyBookInput.prototype, "borrowedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], BorrowCreateManyBookInput.prototype, "returnedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], BorrowCreateManyBookInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], BorrowCreateManyBookInput.prototype, "updatedAt", void 0);
exports.BorrowCreateManyBookInput = BorrowCreateManyBookInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BorrowCreateManyBookInput", {})
], BorrowCreateManyBookInput);
