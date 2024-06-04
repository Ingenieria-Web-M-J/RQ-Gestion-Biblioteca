"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByBorrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BorrowOrderByWithAggregationInput_1 = require("../../../inputs/BorrowOrderByWithAggregationInput");
const BorrowScalarWhereWithAggregatesInput_1 = require("../../../inputs/BorrowScalarWhereWithAggregatesInput");
const BorrowWhereInput_1 = require("../../../inputs/BorrowWhereInput");
const BorrowScalarFieldEnum_1 = require("../../../../enums/BorrowScalarFieldEnum");
let GroupByBorrowArgs = class GroupByBorrowArgs {
};
exports.GroupByBorrowArgs = GroupByBorrowArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BorrowWhereInput_1.BorrowWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BorrowWhereInput_1.BorrowWhereInput)
], GroupByBorrowArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BorrowOrderByWithAggregationInput_1.BorrowOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByBorrowArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BorrowScalarFieldEnum_1.BorrowScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByBorrowArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BorrowScalarWhereWithAggregatesInput_1.BorrowScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BorrowScalarWhereWithAggregatesInput_1.BorrowScalarWhereWithAggregatesInput)
], GroupByBorrowArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByBorrowArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByBorrowArgs.prototype, "skip", void 0);
exports.GroupByBorrowArgs = GroupByBorrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByBorrowArgs);
