"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyLibrarianResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteManyLibrarianArgs_1 = require("./args/DeleteManyLibrarianArgs");
const Librarian_1 = require("../../../models/Librarian");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManyLibrarianResolver = class DeleteManyLibrarianResolver {
    async deleteManyLibrarian(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).librarian.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.DeleteManyLibrarianResolver = DeleteManyLibrarianResolver;
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
], DeleteManyLibrarianResolver.prototype, "deleteManyLibrarian", null);
exports.DeleteManyLibrarianResolver = DeleteManyLibrarianResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Librarian_1.Librarian)
], DeleteManyLibrarianResolver);
