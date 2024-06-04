"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BorrowCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateBorrowArgs_1 = require("./args/AggregateBorrowArgs");
const CreateManyBorrowArgs_1 = require("./args/CreateManyBorrowArgs");
const CreateOneBorrowArgs_1 = require("./args/CreateOneBorrowArgs");
const DeleteManyBorrowArgs_1 = require("./args/DeleteManyBorrowArgs");
const DeleteOneBorrowArgs_1 = require("./args/DeleteOneBorrowArgs");
const FindFirstBorrowArgs_1 = require("./args/FindFirstBorrowArgs");
const FindFirstBorrowOrThrowArgs_1 = require("./args/FindFirstBorrowOrThrowArgs");
const FindManyBorrowArgs_1 = require("./args/FindManyBorrowArgs");
const FindUniqueBorrowArgs_1 = require("./args/FindUniqueBorrowArgs");
const FindUniqueBorrowOrThrowArgs_1 = require("./args/FindUniqueBorrowOrThrowArgs");
const GroupByBorrowArgs_1 = require("./args/GroupByBorrowArgs");
const UpdateManyBorrowArgs_1 = require("./args/UpdateManyBorrowArgs");
const UpdateOneBorrowArgs_1 = require("./args/UpdateOneBorrowArgs");
const UpsertOneBorrowArgs_1 = require("./args/UpsertOneBorrowArgs");
const helpers_1 = require("../../../helpers");
const Borrow_1 = require("../../../models/Borrow");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateBorrow_1 = require("../../outputs/AggregateBorrow");
const BorrowGroupBy_1 = require("../../outputs/BorrowGroupBy");
let BorrowCrudResolver = class BorrowCrudResolver {
    async aggregateBorrow(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).borrow.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createManyBorrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).borrow.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneBorrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).borrow.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyBorrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).borrow.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneBorrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).borrow.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstBorrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).borrow.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstBorrowOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).borrow.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async borrows(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).borrow.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async borrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).borrow.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async getBorrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).borrow.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByBorrow(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).borrow.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyBorrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).borrow.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneBorrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).borrow.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneBorrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).borrow.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.BorrowCrudResolver = BorrowCrudResolver;
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
], BorrowCrudResolver.prototype, "aggregateBorrow", null);
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
], BorrowCrudResolver.prototype, "createManyBorrow", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Borrow_1.Borrow, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneBorrowArgs_1.CreateOneBorrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], BorrowCrudResolver.prototype, "createOneBorrow", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyBorrowArgs_1.DeleteManyBorrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], BorrowCrudResolver.prototype, "deleteManyBorrow", null);
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
], BorrowCrudResolver.prototype, "deleteOneBorrow", null);
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
], BorrowCrudResolver.prototype, "findFirstBorrow", null);
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
], BorrowCrudResolver.prototype, "findFirstBorrowOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Borrow_1.Borrow], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyBorrowArgs_1.FindManyBorrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], BorrowCrudResolver.prototype, "borrows", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Borrow_1.Borrow, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueBorrowArgs_1.FindUniqueBorrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], BorrowCrudResolver.prototype, "borrow", null);
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
], BorrowCrudResolver.prototype, "getBorrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [BorrowGroupBy_1.BorrowGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByBorrowArgs_1.GroupByBorrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], BorrowCrudResolver.prototype, "groupByBorrow", null);
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
], BorrowCrudResolver.prototype, "updateManyBorrow", null);
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
], BorrowCrudResolver.prototype, "updateOneBorrow", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Borrow_1.Borrow, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneBorrowArgs_1.UpsertOneBorrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], BorrowCrudResolver.prototype, "upsertOneBorrow", null);
exports.BorrowCrudResolver = BorrowCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Borrow_1.Borrow)
], BorrowCrudResolver);
