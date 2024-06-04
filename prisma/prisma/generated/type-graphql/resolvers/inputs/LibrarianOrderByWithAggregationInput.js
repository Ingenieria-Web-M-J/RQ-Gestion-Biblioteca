"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LibrarianOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LibrarianCountOrderByAggregateInput_1 = require("../inputs/LibrarianCountOrderByAggregateInput");
const LibrarianMaxOrderByAggregateInput_1 = require("../inputs/LibrarianMaxOrderByAggregateInput");
const LibrarianMinOrderByAggregateInput_1 = require("../inputs/LibrarianMinOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let LibrarianOrderByWithAggregationInput = class LibrarianOrderByWithAggregationInput {
};
exports.LibrarianOrderByWithAggregationInput = LibrarianOrderByWithAggregationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LibrarianOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LibrarianOrderByWithAggregationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LibrarianOrderByWithAggregationInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LibrarianOrderByWithAggregationInput.prototype, "password", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LibrarianOrderByWithAggregationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LibrarianOrderByWithAggregationInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LibrarianCountOrderByAggregateInput_1.LibrarianCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LibrarianCountOrderByAggregateInput_1.LibrarianCountOrderByAggregateInput)
], LibrarianOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LibrarianMaxOrderByAggregateInput_1.LibrarianMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LibrarianMaxOrderByAggregateInput_1.LibrarianMaxOrderByAggregateInput)
], LibrarianOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LibrarianMinOrderByAggregateInput_1.LibrarianMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LibrarianMinOrderByAggregateInput_1.LibrarianMinOrderByAggregateInput)
], LibrarianOrderByWithAggregationInput.prototype, "_min", void 0);
exports.LibrarianOrderByWithAggregationInput = LibrarianOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LibrarianOrderByWithAggregationInput", {})
], LibrarianOrderByWithAggregationInput);
