"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookCreateNestedOneWithoutBorrowRecordsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookCreateOrConnectWithoutBorrowRecordsInput_1 = require("../inputs/BookCreateOrConnectWithoutBorrowRecordsInput");
const BookCreateWithoutBorrowRecordsInput_1 = require("../inputs/BookCreateWithoutBorrowRecordsInput");
const BookWhereUniqueInput_1 = require("../inputs/BookWhereUniqueInput");
let BookCreateNestedOneWithoutBorrowRecordsInput = class BookCreateNestedOneWithoutBorrowRecordsInput {
};
exports.BookCreateNestedOneWithoutBorrowRecordsInput = BookCreateNestedOneWithoutBorrowRecordsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookCreateWithoutBorrowRecordsInput_1.BookCreateWithoutBorrowRecordsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookCreateWithoutBorrowRecordsInput_1.BookCreateWithoutBorrowRecordsInput)
], BookCreateNestedOneWithoutBorrowRecordsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookCreateOrConnectWithoutBorrowRecordsInput_1.BookCreateOrConnectWithoutBorrowRecordsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookCreateOrConnectWithoutBorrowRecordsInput_1.BookCreateOrConnectWithoutBorrowRecordsInput)
], BookCreateNestedOneWithoutBorrowRecordsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookWhereUniqueInput_1.BookWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookWhereUniqueInput_1.BookWhereUniqueInput)
], BookCreateNestedOneWithoutBorrowRecordsInput.prototype, "connect", void 0);
exports.BookCreateNestedOneWithoutBorrowRecordsInput = BookCreateNestedOneWithoutBorrowRecordsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookCreateNestedOneWithoutBorrowRecordsInput", {})
], BookCreateNestedOneWithoutBorrowRecordsInput);
