"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstBorrowOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstBorrowOrThrowArgs_1 = require("./args/FindFirstBorrowOrThrowArgs");
const Borrow_1 = require("../../../models/Borrow");
const helpers_1 = require("../../../helpers");
let FindFirstBorrowOrThrowResolver = class FindFirstBorrowOrThrowResolver {
    async findFirstBorrowOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).borrow.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindFirstBorrowOrThrowResolver = FindFirstBorrowOrThrowResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Borrow_1.Borrow, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstBorrowOrThrowArgs_1.FindFirstBorrowOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstBorrowOrThrowResolver.prototype, "findFirstBorrowOrThrow", null);
exports.FindFirstBorrowOrThrowResolver = FindFirstBorrowOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Borrow_1.Borrow)
], FindFirstBorrowOrThrowResolver);
