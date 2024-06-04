"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LibrarianWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let LibrarianWhereInput = class LibrarianWhereInput {
};
exports.LibrarianWhereInput = LibrarianWhereInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LibrarianWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LibrarianWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LibrarianWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LibrarianWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LibrarianWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LibrarianWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], LibrarianWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], LibrarianWhereInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], LibrarianWhereInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], LibrarianWhereInput.prototype, "password", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], LibrarianWhereInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], LibrarianWhereInput.prototype, "updatedAt", void 0);
exports.LibrarianWhereInput = LibrarianWhereInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LibrarianWhereInput", {})
], LibrarianWhereInput);
