"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BorrowCreateWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookCreateNestedOneWithoutBorrowRecordsInput_1 = require("../inputs/BookCreateNestedOneWithoutBorrowRecordsInput");
let BorrowCreateWithoutUserInput = class BorrowCreateWithoutUserInput {
};
exports.BorrowCreateWithoutUserInput = BorrowCreateWithoutUserInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BorrowCreateWithoutUserInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], BorrowCreateWithoutUserInput.prototype, "borrowedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], BorrowCreateWithoutUserInput.prototype, "returnedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], BorrowCreateWithoutUserInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], BorrowCreateWithoutUserInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookCreateNestedOneWithoutBorrowRecordsInput_1.BookCreateNestedOneWithoutBorrowRecordsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookCreateNestedOneWithoutBorrowRecordsInput_1.BookCreateNestedOneWithoutBorrowRecordsInput)
], BorrowCreateWithoutUserInput.prototype, "book", void 0);
exports.BorrowCreateWithoutUserInput = BorrowCreateWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BorrowCreateWithoutUserInput", {})
], BorrowCreateWithoutUserInput);
