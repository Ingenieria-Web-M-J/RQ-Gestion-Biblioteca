"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BoolFilter_1 = require("../inputs/BoolFilter");
const BorrowListRelationFilter_1 = require("../inputs/BorrowListRelationFilter");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let BookWhereInput = class BookWhereInput {
};
exports.BookWhereInput = BookWhereInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], BookWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], BookWhereInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], BookWhereInput.prototype, "author", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], BookWhereInput.prototype, "isbn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFilter_1.BoolFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFilter_1.BoolFilter)
], BookWhereInput.prototype, "available", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], BookWhereInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], BookWhereInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BorrowListRelationFilter_1.BorrowListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BorrowListRelationFilter_1.BorrowListRelationFilter)
], BookWhereInput.prototype, "borrowRecords", void 0);
exports.BookWhereInput = BookWhereInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookWhereInput", {})
], BookWhereInput);
