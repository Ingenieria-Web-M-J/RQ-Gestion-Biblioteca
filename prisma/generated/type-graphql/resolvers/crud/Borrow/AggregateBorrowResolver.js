"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateBorrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateBorrowArgs_1 = require("./args/AggregateBorrowArgs");
const Borrow_1 = require("../../../models/Borrow");
const AggregateBorrow_1 = require("../../outputs/AggregateBorrow");
const helpers_1 = require("../../../helpers");
let AggregateBorrowResolver = class AggregateBorrowResolver {
    async aggregateBorrow(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).borrow.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
};
exports.AggregateBorrowResolver = AggregateBorrowResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateBorrow_1.AggregateBorrow, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateBorrowArgs_1.AggregateBorrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateBorrowResolver.prototype, "aggregateBorrow", null);
exports.AggregateBorrowResolver = AggregateBorrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Borrow_1.Borrow)
], AggregateBorrowResolver);
