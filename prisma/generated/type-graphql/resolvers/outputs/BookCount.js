"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookCount = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookCountBorrowRecordsArgs_1 = require("./args/BookCountBorrowRecordsArgs");
let BookCount = class BookCount {
    getBorrowRecords(root, args) {
        return root.borrowRecords;
    }
};
exports.BookCount = BookCount;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        name: "borrowRecords",
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [BookCount, BookCountBorrowRecordsArgs_1.BookCountBorrowRecordsArgs]),
    tslib_1.__metadata("design:returntype", Number)
], BookCount.prototype, "getBorrowRecords", null);
exports.BookCount = BookCount = tslib_1.__decorate([
    TypeGraphQL.ObjectType("BookCount", {})
], BookCount);
