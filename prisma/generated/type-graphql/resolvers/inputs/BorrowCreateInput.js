"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BorrowCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookCreateNestedOneWithoutBorrowRecordsInput_1 = require("../inputs/BookCreateNestedOneWithoutBorrowRecordsInput");
const UserCreateNestedOneWithoutBooksInput_1 = require("../inputs/UserCreateNestedOneWithoutBooksInput");
let BorrowCreateInput = class BorrowCreateInput {
};
exports.BorrowCreateInput = BorrowCreateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BorrowCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], BorrowCreateInput.prototype, "borrowedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], BorrowCreateInput.prototype, "returnedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], BorrowCreateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], BorrowCreateInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutBooksInput_1.UserCreateNestedOneWithoutBooksInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutBooksInput_1.UserCreateNestedOneWithoutBooksInput)
], BorrowCreateInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookCreateNestedOneWithoutBorrowRecordsInput_1.BookCreateNestedOneWithoutBorrowRecordsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookCreateNestedOneWithoutBorrowRecordsInput_1.BookCreateNestedOneWithoutBorrowRecordsInput)
], BorrowCreateInput.prototype, "book", void 0);
exports.BorrowCreateInput = BorrowCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BorrowCreateInput", {})
], BorrowCreateInput);
