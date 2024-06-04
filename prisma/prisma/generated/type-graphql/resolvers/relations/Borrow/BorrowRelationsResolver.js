"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BorrowRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Book_1 = require("../../../models/Book");
const Borrow_1 = require("../../../models/Borrow");
const User_1 = require("../../../models/User");
const helpers_1 = require("../../../helpers");
let BorrowRelationsResolver = class BorrowRelationsResolver {
    async user(borrow, ctx, info) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).borrow.findUniqueOrThrow({
            where: {
                id: borrow.id,
            },
        }).user({
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async book(borrow, ctx, info) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).borrow.findUniqueOrThrow({
            where: {
                id: borrow.id,
            },
        }).book({
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.BorrowRelationsResolver = BorrowRelationsResolver;
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => User_1.User, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Borrow_1.Borrow, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], BorrowRelationsResolver.prototype, "user", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Book_1.Book, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Borrow_1.Borrow, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], BorrowRelationsResolver.prototype, "book", null);
exports.BorrowRelationsResolver = BorrowRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Borrow_1.Borrow)
], BorrowRelationsResolver);
