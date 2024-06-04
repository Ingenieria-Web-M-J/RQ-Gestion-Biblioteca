"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookCountBorrowRecordsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BorrowWhereInput_1 = require("../../inputs/BorrowWhereInput");
let BookCountBorrowRecordsArgs = class BookCountBorrowRecordsArgs {
};
exports.BookCountBorrowRecordsArgs = BookCountBorrowRecordsArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BorrowWhereInput_1.BorrowWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BorrowWhereInput_1.BorrowWhereInput)
], BookCountBorrowRecordsArgs.prototype, "where", void 0);
exports.BookCountBorrowRecordsArgs = BookCountBorrowRecordsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], BookCountBorrowRecordsArgs);
