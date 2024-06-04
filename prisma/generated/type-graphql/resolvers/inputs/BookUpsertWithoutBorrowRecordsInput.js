"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookUpsertWithoutBorrowRecordsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookCreateWithoutBorrowRecordsInput_1 = require("../inputs/BookCreateWithoutBorrowRecordsInput");
const BookUpdateWithoutBorrowRecordsInput_1 = require("../inputs/BookUpdateWithoutBorrowRecordsInput");
const BookWhereInput_1 = require("../inputs/BookWhereInput");
let BookUpsertWithoutBorrowRecordsInput = class BookUpsertWithoutBorrowRecordsInput {
};
exports.BookUpsertWithoutBorrowRecordsInput = BookUpsertWithoutBorrowRecordsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookUpdateWithoutBorrowRecordsInput_1.BookUpdateWithoutBorrowRecordsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookUpdateWithoutBorrowRecordsInput_1.BookUpdateWithoutBorrowRecordsInput)
], BookUpsertWithoutBorrowRecordsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookCreateWithoutBorrowRecordsInput_1.BookCreateWithoutBorrowRecordsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookCreateWithoutBorrowRecordsInput_1.BookCreateWithoutBorrowRecordsInput)
], BookUpsertWithoutBorrowRecordsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookWhereInput_1.BookWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookWhereInput_1.BookWhereInput)
], BookUpsertWithoutBorrowRecordsInput.prototype, "where", void 0);
exports.BookUpsertWithoutBorrowRecordsInput = BookUpsertWithoutBorrowRecordsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookUpsertWithoutBorrowRecordsInput", {})
], BookUpsertWithoutBorrowRecordsInput);
