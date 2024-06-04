"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyBorrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateManyBorrowArgs_1 = require("./args/UpdateManyBorrowArgs");
const Borrow_1 = require("../../../models/Borrow");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyBorrowResolver = class UpdateManyBorrowResolver {
    async updateManyBorrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).borrow.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.UpdateManyBorrowResolver = UpdateManyBorrowResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyBorrowArgs_1.UpdateManyBorrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateManyBorrowResolver.prototype, "updateManyBorrow", null);
exports.UpdateManyBorrowResolver = UpdateManyBorrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Borrow_1.Borrow)
], UpdateManyBorrowResolver);
