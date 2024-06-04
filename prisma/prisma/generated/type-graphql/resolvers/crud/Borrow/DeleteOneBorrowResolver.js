"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneBorrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteOneBorrowArgs_1 = require("./args/DeleteOneBorrowArgs");
const Borrow_1 = require("../../../models/Borrow");
const helpers_1 = require("../../../helpers");
let DeleteOneBorrowResolver = class DeleteOneBorrowResolver {
    async deleteOneBorrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).borrow.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.DeleteOneBorrowResolver = DeleteOneBorrowResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Borrow_1.Borrow, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneBorrowArgs_1.DeleteOneBorrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteOneBorrowResolver.prototype, "deleteOneBorrow", null);
exports.DeleteOneBorrowResolver = DeleteOneBorrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Borrow_1.Borrow)
], DeleteOneBorrowResolver);
