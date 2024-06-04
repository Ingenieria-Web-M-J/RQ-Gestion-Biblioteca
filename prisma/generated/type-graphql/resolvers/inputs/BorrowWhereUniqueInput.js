"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BorrowWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookRelationFilter_1 = require("../inputs/BookRelationFilter");
const BorrowWhereInput_1 = require("../inputs/BorrowWhereInput");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const DateTimeNullableFilter_1 = require("../inputs/DateTimeNullableFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const UserRelationFilter_1 = require("../inputs/UserRelationFilter");
let BorrowWhereUniqueInput = class BorrowWhereUniqueInput {
};
exports.BorrowWhereUniqueInput = BorrowWhereUniqueInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BorrowWhereUniqueInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BorrowWhereInput_1.BorrowWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BorrowWhereUniqueInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BorrowWhereInput_1.BorrowWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BorrowWhereUniqueInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BorrowWhereInput_1.BorrowWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BorrowWhereUniqueInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], BorrowWhereUniqueInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], BorrowWhereUniqueInput.prototype, "bookId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], BorrowWhereUniqueInput.prototype, "borrowedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableFilter_1.DateTimeNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeNullableFilter_1.DateTimeNullableFilter)
], BorrowWhereUniqueInput.prototype, "returnedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], BorrowWhereUniqueInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], BorrowWhereUniqueInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserRelationFilter_1.UserRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserRelationFilter_1.UserRelationFilter)
], BorrowWhereUniqueInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookRelationFilter_1.BookRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookRelationFilter_1.BookRelationFilter)
], BorrowWhereUniqueInput.prototype, "book", void 0);
exports.BorrowWhereUniqueInput = BorrowWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BorrowWhereUniqueInput", {})
], BorrowWhereUniqueInput);
