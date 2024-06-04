"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByLibrarianArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LibrarianOrderByWithAggregationInput_1 = require("../../../inputs/LibrarianOrderByWithAggregationInput");
const LibrarianScalarWhereWithAggregatesInput_1 = require("../../../inputs/LibrarianScalarWhereWithAggregatesInput");
const LibrarianWhereInput_1 = require("../../../inputs/LibrarianWhereInput");
const LibrarianScalarFieldEnum_1 = require("../../../../enums/LibrarianScalarFieldEnum");
let GroupByLibrarianArgs = class GroupByLibrarianArgs {
};
exports.GroupByLibrarianArgs = GroupByLibrarianArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LibrarianWhereInput_1.LibrarianWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LibrarianWhereInput_1.LibrarianWhereInput)
], GroupByLibrarianArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LibrarianOrderByWithAggregationInput_1.LibrarianOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByLibrarianArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LibrarianScalarFieldEnum_1.LibrarianScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByLibrarianArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LibrarianScalarWhereWithAggregatesInput_1.LibrarianScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LibrarianScalarWhereWithAggregatesInput_1.LibrarianScalarWhereWithAggregatesInput)
], GroupByLibrarianArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByLibrarianArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByLibrarianArgs.prototype, "skip", void 0);
exports.GroupByLibrarianArgs = GroupByLibrarianArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByLibrarianArgs);
