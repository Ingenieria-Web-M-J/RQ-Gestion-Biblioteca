"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneBorrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateOneBorrowArgs_1 = require("./args/UpdateOneBorrowArgs");
const Borrow_1 = require("../../../models/Borrow");
const helpers_1 = require("../../../helpers");
let UpdateOneBorrowResolver = class UpdateOneBorrowResolver {
    async updateOneBorrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).borrow.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.UpdateOneBorrowResolver = UpdateOneBorrowResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Borrow_1.Borrow, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneBorrowArgs_1.UpdateOneBorrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateOneBorrowResolver.prototype, "updateOneBorrow", null);
exports.UpdateOneBorrowResolver = UpdateOneBorrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Borrow_1.Borrow)
], UpdateOneBorrowResolver);
