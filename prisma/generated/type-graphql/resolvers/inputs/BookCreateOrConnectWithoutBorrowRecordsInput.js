"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookCreateOrConnectWithoutBorrowRecordsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookCreateWithoutBorrowRecordsInput_1 = require("../inputs/BookCreateWithoutBorrowRecordsInput");
const BookWhereUniqueInput_1 = require("../inputs/BookWhereUniqueInput");
let BookCreateOrConnectWithoutBorrowRecordsInput = class BookCreateOrConnectWithoutBorrowRecordsInput {
};
exports.BookCreateOrConnectWithoutBorrowRecordsInput = BookCreateOrConnectWithoutBorrowRecordsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookWhereUniqueInput_1.BookWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookWhereUniqueInput_1.BookWhereUniqueInput)
], BookCreateOrConnectWithoutBorrowRecordsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookCreateWithoutBorrowRecordsInput_1.BookCreateWithoutBorrowRecordsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookCreateWithoutBorrowRecordsInput_1.BookCreateWithoutBorrowRecordsInput)
], BookCreateOrConnectWithoutBorrowRecordsInput.prototype, "create", void 0);
exports.BookCreateOrConnectWithoutBorrowRecordsInput = BookCreateOrConnectWithoutBorrowRecordsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookCreateOrConnectWithoutBorrowRecordsInput", {})
], BookCreateOrConnectWithoutBorrowRecordsInput);
