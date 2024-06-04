"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueBorrowOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueBorrowOrThrowArgs_1 = require("./args/FindUniqueBorrowOrThrowArgs");
const Borrow_1 = require("../../../models/Borrow");
const helpers_1 = require("../../../helpers");
let FindUniqueBorrowOrThrowResolver = class FindUniqueBorrowOrThrowResolver {
    async getBorrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).borrow.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindUniqueBorrowOrThrowResolver = FindUniqueBorrowOrThrowResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Borrow_1.Borrow, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueBorrowOrThrowArgs_1.FindUniqueBorrowOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueBorrowOrThrowResolver.prototype, "getBorrow", null);
exports.FindUniqueBorrowOrThrowResolver = FindUniqueBorrowOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Borrow_1.Borrow)
], FindUniqueBorrowOrThrowResolver);
