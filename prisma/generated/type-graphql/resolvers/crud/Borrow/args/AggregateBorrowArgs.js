"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateBorrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BorrowOrderByWithRelationInput_1 = require("../../../inputs/BorrowOrderByWithRelationInput");
const BorrowWhereInput_1 = require("../../../inputs/BorrowWhereInput");
const BorrowWhereUniqueInput_1 = require("../../../inputs/BorrowWhereUniqueInput");
let AggregateBorrowArgs = class AggregateBorrowArgs {
};
exports.AggregateBorrowArgs = AggregateBorrowArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BorrowWhereInput_1.BorrowWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BorrowWhereInput_1.BorrowWhereInput)
], AggregateBorrowArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BorrowOrderByWithRelationInput_1.BorrowOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateBorrowArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BorrowWhereUniqueInput_1.BorrowWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BorrowWhereUniqueInput_1.BorrowWhereUniqueInput)
], AggregateBorrowArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateBorrowArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateBorrowArgs.prototype, "skip", void 0);
exports.AggregateBorrowArgs = AggregateBorrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateBorrowArgs);
