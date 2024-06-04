"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookCreateWithoutBorrowRecordsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let BookCreateWithoutBorrowRecordsInput = class BookCreateWithoutBorrowRecordsInput {
};
exports.BookCreateWithoutBorrowRecordsInput = BookCreateWithoutBorrowRecordsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookCreateWithoutBorrowRecordsInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], BookCreateWithoutBorrowRecordsInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], BookCreateWithoutBorrowRecordsInput.prototype, "author", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], BookCreateWithoutBorrowRecordsInput.prototype, "isbn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], BookCreateWithoutBorrowRecordsInput.prototype, "available", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], BookCreateWithoutBorrowRecordsInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], BookCreateWithoutBorrowRecordsInput.prototype, "updatedAt", void 0);
exports.BookCreateWithoutBorrowRecordsInput = BookCreateWithoutBorrowRecordsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookCreateWithoutBorrowRecordsInput", {})
], BookCreateWithoutBorrowRecordsInput);
