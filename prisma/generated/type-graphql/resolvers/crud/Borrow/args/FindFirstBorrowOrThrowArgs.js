"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstBorrowOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BorrowOrderByWithRelationInput_1 = require("../../../inputs/BorrowOrderByWithRelationInput");
const BorrowWhereInput_1 = require("../../../inputs/BorrowWhereInput");
const BorrowWhereUniqueInput_1 = require("../../../inputs/BorrowWhereUniqueInput");
const BorrowScalarFieldEnum_1 = require("../../../../enums/BorrowScalarFieldEnum");
let FindFirstBorrowOrThrowArgs = class FindFirstBorrowOrThrowArgs {
};
exports.FindFirstBorrowOrThrowArgs = FindFirstBorrowOrThrowArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BorrowWhereInput_1.BorrowWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BorrowWhereInput_1.BorrowWhereInput)
], FindFirstBorrowOrThrowArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BorrowOrderByWithRelationInput_1.BorrowOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstBorrowOrThrowArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BorrowWhereUniqueInput_1.BorrowWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BorrowWhereUniqueInput_1.BorrowWhereUniqueInput)
], FindFirstBorrowOrThrowArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstBorrowOrThrowArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstBorrowOrThrowArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BorrowScalarFieldEnum_1.BorrowScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstBorrowOrThrowArgs.prototype, "distinct", void 0);
exports.FindFirstBorrowOrThrowArgs = FindFirstBorrowOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstBorrowOrThrowArgs);
