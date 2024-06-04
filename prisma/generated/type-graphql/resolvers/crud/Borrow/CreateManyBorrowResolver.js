"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyBorrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateManyBorrowArgs_1 = require("./args/CreateManyBorrowArgs");
const Borrow_1 = require("../../../models/Borrow");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let CreateManyBorrowResolver = class CreateManyBorrowResolver {
    async createManyBorrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).borrow.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.CreateManyBorrowResolver = CreateManyBorrowResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyBorrowArgs_1.CreateManyBorrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateManyBorrowResolver.prototype, "createManyBorrow", null);
exports.CreateManyBorrowResolver = CreateManyBorrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Borrow_1.Borrow)
], CreateManyBorrowResolver);
