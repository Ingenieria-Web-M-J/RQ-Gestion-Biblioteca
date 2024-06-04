"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookUpdateOneRequiredWithoutBorrowRecordsNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookCreateOrConnectWithoutBorrowRecordsInput_1 = require("../inputs/BookCreateOrConnectWithoutBorrowRecordsInput");
const BookCreateWithoutBorrowRecordsInput_1 = require("../inputs/BookCreateWithoutBorrowRecordsInput");
const BookUpdateToOneWithWhereWithoutBorrowRecordsInput_1 = require("../inputs/BookUpdateToOneWithWhereWithoutBorrowRecordsInput");
const BookUpsertWithoutBorrowRecordsInput_1 = require("../inputs/BookUpsertWithoutBorrowRecordsInput");
const BookWhereUniqueInput_1 = require("../inputs/BookWhereUniqueInput");
let BookUpdateOneRequiredWithoutBorrowRecordsNestedInput = class BookUpdateOneRequiredWithoutBorrowRecordsNestedInput {
};
exports.BookUpdateOneRequiredWithoutBorrowRecordsNestedInput = BookUpdateOneRequiredWithoutBorrowRecordsNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookCreateWithoutBorrowRecordsInput_1.BookCreateWithoutBorrowRecordsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookCreateWithoutBorrowRecordsInput_1.BookCreateWithoutBorrowRecordsInput)
], BookUpdateOneRequiredWithoutBorrowRecordsNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookCreateOrConnectWithoutBorrowRecordsInput_1.BookCreateOrConnectWithoutBorrowRecordsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookCreateOrConnectWithoutBorrowRecordsInput_1.BookCreateOrConnectWithoutBorrowRecordsInput)
], BookUpdateOneRequiredWithoutBorrowRecordsNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookUpsertWithoutBorrowRecordsInput_1.BookUpsertWithoutBorrowRecordsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookUpsertWithoutBorrowRecordsInput_1.BookUpsertWithoutBorrowRecordsInput)
], BookUpdateOneRequiredWithoutBorrowRecordsNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookWhereUniqueInput_1.BookWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookWhereUniqueInput_1.BookWhereUniqueInput)
], BookUpdateOneRequiredWithoutBorrowRecordsNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookUpdateToOneWithWhereWithoutBorrowRecordsInput_1.BookUpdateToOneWithWhereWithoutBorrowRecordsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookUpdateToOneWithWhereWithoutBorrowRecordsInput_1.BookUpdateToOneWithWhereWithoutBorrowRecordsInput)
], BookUpdateOneRequiredWithoutBorrowRecordsNestedInput.prototype, "update", void 0);
exports.BookUpdateOneRequiredWithoutBorrowRecordsNestedInput = BookUpdateOneRequiredWithoutBorrowRecordsNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookUpdateOneRequiredWithoutBorrowRecordsNestedInput", {})
], BookUpdateOneRequiredWithoutBorrowRecordsNestedInput);
