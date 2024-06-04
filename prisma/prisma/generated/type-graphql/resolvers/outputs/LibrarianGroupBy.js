"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LibrarianGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LibrarianCountAggregate_1 = require("../outputs/LibrarianCountAggregate");
const LibrarianMaxAggregate_1 = require("../outputs/LibrarianMaxAggregate");
const LibrarianMinAggregate_1 = require("../outputs/LibrarianMinAggregate");
let LibrarianGroupBy = class LibrarianGroupBy {
};
exports.LibrarianGroupBy = LibrarianGroupBy;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], LibrarianGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], LibrarianGroupBy.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], LibrarianGroupBy.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], LibrarianGroupBy.prototype, "password", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], LibrarianGroupBy.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], LibrarianGroupBy.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LibrarianCountAggregate_1.LibrarianCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LibrarianCountAggregate_1.LibrarianCountAggregate)
], LibrarianGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LibrarianMinAggregate_1.LibrarianMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LibrarianMinAggregate_1.LibrarianMinAggregate)
], LibrarianGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LibrarianMaxAggregate_1.LibrarianMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LibrarianMaxAggregate_1.LibrarianMaxAggregate)
], LibrarianGroupBy.prototype, "_max", void 0);
exports.LibrarianGroupBy = LibrarianGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("LibrarianGroupBy", {})
], LibrarianGroupBy);
