"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneLibrarianResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateOneLibrarianArgs_1 = require("./args/UpdateOneLibrarianArgs");
const Librarian_1 = require("../../../models/Librarian");
const helpers_1 = require("../../../helpers");
let UpdateOneLibrarianResolver = class UpdateOneLibrarianResolver {
    async updateOneLibrarian(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).librarian.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.UpdateOneLibrarianResolver = UpdateOneLibrarianResolver;
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
], UpdateOneLibrarianResolver.prototype, "updateOneLibrarian", null);
exports.UpdateOneLibrarianResolver = UpdateOneLibrarianResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Librarian_1.Librarian)
], UpdateOneLibrarianResolver);
