"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BorrowOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BorrowCountOrderByAggregateInput_1 = require("../inputs/BorrowCountOrderByAggregateInput");
const BorrowMaxOrderByAggregateInput_1 = require("../inputs/BorrowMaxOrderByAggregateInput");
const BorrowMinOrderByAggregateInput_1 = require("../inputs/BorrowMinOrderByAggregateInput");
const SortOrderInput_1 = require("../inputs/SortOrderInput");
const SortOrder_1 = require("../../enums/SortOrder");
let BorrowOrderByWithAggregationInput = class BorrowOrderByWithAggregationInput {
};
exports.BorrowOrderByWithAggregationInput = BorrowOrderByWithAggregationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BorrowOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BorrowOrderByWithAggregationInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BorrowOrderByWithAggregationInput.prototype, "bookId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BorrowOrderByWithAggregationInput.prototype, "borrowedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], BorrowOrderByWithAggregationInput.prototype, "returnedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BorrowOrderByWithAggregationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BorrowOrderByWithAggregationInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BorrowCountOrderByAggregateInput_1.BorrowCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BorrowCountOrderByAggregateInput_1.BorrowCountOrderByAggregateInput)
], BorrowOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BorrowMaxOrderByAggregateInput_1.BorrowMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BorrowMaxOrderByAggregateInput_1.BorrowMaxOrderByAggregateInput)
], BorrowOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BorrowMinOrderByAggregateInput_1.BorrowMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BorrowMinOrderByAggregateInput_1.BorrowMinOrderByAggregateInput)
], BorrowOrderByWithAggregationInput.prototype, "_min", void 0);
exports.BorrowOrderByWithAggregationInput = BorrowOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BorrowOrderByWithAggregationInput", {})
], BorrowOrderByWithAggregationInput);
