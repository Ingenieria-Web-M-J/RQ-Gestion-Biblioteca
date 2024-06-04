"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyLibrarianResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateManyLibrarianArgs_1 = require("./args/UpdateManyLibrarianArgs");
const Librarian_1 = require("../../../models/Librarian");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyLibrarianResolver = class UpdateManyLibrarianResolver {
    async updateManyLibrarian(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).librarian.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.UpdateManyLibrarianResolver = UpdateManyLibrarianResolver;
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
], UpdateManyLibrarianResolver.prototype, "updateManyLibrarian", null);
exports.UpdateManyLibrarianResolver = UpdateManyLibrarianResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Librarian_1.Librarian)
], UpdateManyLibrarianResolver);
