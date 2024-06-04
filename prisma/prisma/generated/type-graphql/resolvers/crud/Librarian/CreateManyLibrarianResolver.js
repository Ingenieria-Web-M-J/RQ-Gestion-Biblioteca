"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyLibrarianResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateManyLibrarianArgs_1 = require("./args/CreateManyLibrarianArgs");
const Librarian_1 = require("../../../models/Librarian");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let CreateManyLibrarianResolver = class CreateManyLibrarianResolver {
    async createManyLibrarian(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).librarian.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.CreateManyLibrarianResolver = CreateManyLibrarianResolver;
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
], CreateManyLibrarianResolver.prototype, "createManyLibrarian", null);
exports.CreateManyLibrarianResolver = CreateManyLibrarianResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Librarian_1.Librarian)
], CreateManyLibrarianResolver);
