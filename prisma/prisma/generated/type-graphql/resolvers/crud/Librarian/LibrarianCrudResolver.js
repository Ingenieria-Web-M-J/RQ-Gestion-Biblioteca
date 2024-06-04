"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LibrarianCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateLibrarianArgs_1 = require("./args/AggregateLibrarianArgs");
const CreateManyLibrarianArgs_1 = require("./args/CreateManyLibrarianArgs");
const CreateOneLibrarianArgs_1 = require("./args/CreateOneLibrarianArgs");
const DeleteManyLibrarianArgs_1 = require("./args/DeleteManyLibrarianArgs");
const DeleteOneLibrarianArgs_1 = require("./args/DeleteOneLibrarianArgs");
const FindFirstLibrarianArgs_1 = require("./args/FindFirstLibrarianArgs");
const FindFirstLibrarianOrThrowArgs_1 = require("./args/FindFirstLibrarianOrThrowArgs");
const FindManyLibrarianArgs_1 = require("./args/FindManyLibrarianArgs");
const FindUniqueLibrarianArgs_1 = require("./args/FindUniqueLibrarianArgs");
const FindUniqueLibrarianOrThrowArgs_1 = require("./args/FindUniqueLibrarianOrThrowArgs");
const GroupByLibrarianArgs_1 = require("./args/GroupByLibrarianArgs");
const UpdateManyLibrarianArgs_1 = require("./args/UpdateManyLibrarianArgs");
const UpdateOneLibrarianArgs_1 = require("./args/UpdateOneLibrarianArgs");
const UpsertOneLibrarianArgs_1 = require("./args/UpsertOneLibrarianArgs");
const helpers_1 = require("../../../helpers");
const Librarian_1 = require("../../../models/Librarian");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateLibrarian_1 = require("../../outputs/AggregateLibrarian");
const LibrarianGroupBy_1 = require("../../outputs/LibrarianGroupBy");
let LibrarianCrudResolver = class LibrarianCrudResolver {
    async aggregateLibrarian(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).librarian.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createManyLibrarian(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).librarian.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneLibrarian(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).librarian.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyLibrarian(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).librarian.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneLibrarian(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).librarian.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstLibrarian(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).librarian.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstLibrarianOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).librarian.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async librarians(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).librarian.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async librarian(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).librarian.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async getLibrarian(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).librarian.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByLibrarian(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).librarian.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyLibrarian(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).librarian.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneLibrarian(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).librarian.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneLibrarian(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).librarian.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.LibrarianCrudResolver = LibrarianCrudResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateLibrarian_1.AggregateLibrarian, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateLibrarianArgs_1.AggregateLibrarianArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], LibrarianCrudResolver.prototype, "aggregateLibrarian", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyLibrarianArgs_1.CreateManyLibrarianArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], LibrarianCrudResolver.prototype, "createManyLibrarian", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Librarian_1.Librarian, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneLibrarianArgs_1.CreateOneLibrarianArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], LibrarianCrudResolver.prototype, "createOneLibrarian", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyLibrarianArgs_1.DeleteManyLibrarianArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], LibrarianCrudResolver.prototype, "deleteManyLibrarian", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Librarian_1.Librarian, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneLibrarianArgs_1.DeleteOneLibrarianArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], LibrarianCrudResolver.prototype, "deleteOneLibrarian", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Librarian_1.Librarian, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstLibrarianArgs_1.FindFirstLibrarianArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], LibrarianCrudResolver.prototype, "findFirstLibrarian", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Librarian_1.Librarian, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstLibrarianOrThrowArgs_1.FindFirstLibrarianOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], LibrarianCrudResolver.prototype, "findFirstLibrarianOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Librarian_1.Librarian], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyLibrarianArgs_1.FindManyLibrarianArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], LibrarianCrudResolver.prototype, "librarians", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Librarian_1.Librarian, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueLibrarianArgs_1.FindUniqueLibrarianArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], LibrarianCrudResolver.prototype, "librarian", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Librarian_1.Librarian, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueLibrarianOrThrowArgs_1.FindUniqueLibrarianOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], LibrarianCrudResolver.prototype, "getLibrarian", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [LibrarianGroupBy_1.LibrarianGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByLibrarianArgs_1.GroupByLibrarianArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], LibrarianCrudResolver.prototype, "groupByLibrarian", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyLibrarianArgs_1.UpdateManyLibrarianArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], LibrarianCrudResolver.prototype, "updateManyLibrarian", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Librarian_1.Librarian, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneLibrarianArgs_1.UpdateOneLibrarianArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], LibrarianCrudResolver.prototype, "updateOneLibrarian", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Librarian_1.Librarian, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneLibrarianArgs_1.UpsertOneLibrarianArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], LibrarianCrudResolver.prototype, "upsertOneLibrarian", null);
exports.LibrarianCrudResolver = LibrarianCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Librarian_1.Librarian)
], LibrarianCrudResolver);
