"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateBorrow = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BorrowCountAggregate_1 = require("../outputs/BorrowCountAggregate");
const BorrowMaxAggregate_1 = require("../outputs/BorrowMaxAggregate");
const BorrowMinAggregate_1 = require("../outputs/BorrowMinAggregate");
let AggregateBorrow = class AggregateBorrow {
};
exports.AggregateBorrow = AggregateBorrow;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BorrowCountAggregate_1.BorrowCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BorrowCountAggregate_1.BorrowCountAggregate)
], AggregateBorrow.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BorrowMinAggregate_1.BorrowMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BorrowMinAggregate_1.BorrowMinAggregate)
], AggregateBorrow.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BorrowMaxAggregate_1.BorrowMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BorrowMaxAggregate_1.BorrowMaxAggregate)
], AggregateBorrow.prototype, "_max", void 0);
exports.AggregateBorrow = AggregateBorrow = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateBorrow", {})
], AggregateBorrow);
