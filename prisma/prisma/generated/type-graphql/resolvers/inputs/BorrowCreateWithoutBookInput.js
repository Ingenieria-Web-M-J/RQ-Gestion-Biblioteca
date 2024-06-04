"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BorrowCreateWithoutBookInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateNestedOneWithoutBooksInput_1 = require("../inputs/UserCreateNestedOneWithoutBooksInput");
let BorrowCreateWithoutBookInput = class BorrowCreateWithoutBookInput {
};
exports.BorrowCreateWithoutBookInput = BorrowCreateWithoutBookInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BorrowCreateWithoutBookInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], BorrowCreateWithoutBookInput.prototype, "borrowedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], BorrowCreateWithoutBookInput.prototype, "returnedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], BorrowCreateWithoutBookInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], BorrowCreateWithoutBookInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutBooksInput_1.UserCreateNestedOneWithoutBooksInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutBooksInput_1.UserCreateNestedOneWithoutBooksInput)
], BorrowCreateWithoutBookInput.prototype, "user", void 0);
exports.BorrowCreateWithoutBookInput = BorrowCreateWithoutBookInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BorrowCreateWithoutBookInput", {})
], BorrowCreateWithoutBookInput);
