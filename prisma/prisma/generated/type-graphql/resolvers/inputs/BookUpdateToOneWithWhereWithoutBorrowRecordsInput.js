"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookUpdateToOneWithWhereWithoutBorrowRecordsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookUpdateWithoutBorrowRecordsInput_1 = require("../inputs/BookUpdateWithoutBorrowRecordsInput");
const BookWhereInput_1 = require("../inputs/BookWhereInput");
let BookUpdateToOneWithWhereWithoutBorrowRecordsInput = class BookUpdateToOneWithWhereWithoutBorrowRecordsInput {
};
exports.BookUpdateToOneWithWhereWithoutBorrowRecordsInput = BookUpdateToOneWithWhereWithoutBorrowRecordsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookWhereInput_1.BookWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookWhereInput_1.BookWhereInput)
], BookUpdateToOneWithWhereWithoutBorrowRecordsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookUpdateWithoutBorrowRecordsInput_1.BookUpdateWithoutBorrowRecordsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookUpdateWithoutBorrowRecordsInput_1.BookUpdateWithoutBorrowRecordsInput)
], BookUpdateToOneWithWhereWithoutBorrowRecordsInput.prototype, "data", void 0);
exports.BookUpdateToOneWithWhereWithoutBorrowRecordsInput = BookUpdateToOneWithWhereWithoutBorrowRecordsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookUpdateToOneWithWhereWithoutBorrowRecordsInput", {})
], BookUpdateToOneWithWhereWithoutBorrowRecordsInput);
