"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstBorrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstBorrowArgs_1 = require("./args/FindFirstBorrowArgs");
const Borrow_1 = require("../../../models/Borrow");
const helpers_1 = require("../../../helpers");
let FindFirstBorrowResolver = class FindFirstBorrowResolver {
    async findFirstBorrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).borrow.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindFirstBorrowResolver = FindFirstBorrowResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Borrow_1.Borrow, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstBorrowArgs_1.FindFirstBorrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstBorrowResolver.prototype, "findFirstBorrow", null);
exports.FindFirstBorrowResolver = FindFirstBorrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Borrow_1.Borrow)
], FindFirstBorrowResolver);
