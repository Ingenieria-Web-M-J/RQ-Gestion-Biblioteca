"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BorrowGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BorrowCountAggregate_1 = require("../outputs/BorrowCountAggregate");
const BorrowMaxAggregate_1 = require("../outputs/BorrowMaxAggregate");
const BorrowMinAggregate_1 = require("../outputs/BorrowMinAggregate");
let BorrowGroupBy = class BorrowGroupBy {
};
exports.BorrowGroupBy = BorrowGroupBy;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], BorrowGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], BorrowGroupBy.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], BorrowGroupBy.prototype, "bookId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], BorrowGroupBy.prototype, "borrowedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], BorrowGroupBy.prototype, "returnedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], BorrowGroupBy.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], BorrowGroupBy.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BorrowCountAggregate_1.BorrowCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BorrowCountAggregate_1.BorrowCountAggregate)
], BorrowGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BorrowMinAggregate_1.BorrowMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BorrowMinAggregate_1.BorrowMinAggregate)
], BorrowGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BorrowMaxAggregate_1.BorrowMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BorrowMaxAggregate_1.BorrowMaxAggregate)
], BorrowGroupBy.prototype, "_max", void 0);
exports.BorrowGroupBy = BorrowGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("BorrowGroupBy", {})
], BorrowGroupBy);
