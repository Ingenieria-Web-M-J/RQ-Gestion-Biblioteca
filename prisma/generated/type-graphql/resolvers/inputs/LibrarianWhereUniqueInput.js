"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LibrarianWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const LibrarianWhereInput_1 = require("../inputs/LibrarianWhereInput");
const StringFilter_1 = require("../inputs/StringFilter");
let LibrarianWhereUniqueInput = class LibrarianWhereUniqueInput {
};
exports.LibrarianWhereUniqueInput = LibrarianWhereUniqueInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LibrarianWhereUniqueInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LibrarianWhereUniqueInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LibrarianWhereInput_1.LibrarianWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LibrarianWhereUniqueInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LibrarianWhereInput_1.LibrarianWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LibrarianWhereUniqueInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LibrarianWhereInput_1.LibrarianWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LibrarianWhereUniqueInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], LibrarianWhereUniqueInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], LibrarianWhereUniqueInput.prototype, "password", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], LibrarianWhereUniqueInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], LibrarianWhereUniqueInput.prototype, "updatedAt", void 0);
exports.LibrarianWhereUniqueInput = LibrarianWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LibrarianWhereUniqueInput", {})
], LibrarianWhereUniqueInput);
