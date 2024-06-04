"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BorrowOrderByRelationAggregateInput_1 = require("../inputs/BorrowOrderByRelationAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let BookOrderByWithRelationInput = class BookOrderByWithRelationInput {
};
exports.BookOrderByWithRelationInput = BookOrderByWithRelationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookOrderByWithRelationInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookOrderByWithRelationInput.prototype, "author", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookOrderByWithRelationInput.prototype, "isbn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookOrderByWithRelationInput.prototype, "available", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookOrderByWithRelationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookOrderByWithRelationInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BorrowOrderByRelationAggregateInput_1.BorrowOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BorrowOrderByRelationAggregateInput_1.BorrowOrderByRelationAggregateInput)
], BookOrderByWithRelationInput.prototype, "borrowRecords", void 0);
exports.BookOrderByWithRelationInput = BookOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookOrderByWithRelationInput", {})
], BookOrderByWithRelationInput);
