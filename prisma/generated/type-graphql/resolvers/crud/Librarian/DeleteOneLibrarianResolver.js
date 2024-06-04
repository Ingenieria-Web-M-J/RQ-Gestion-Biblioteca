"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneLibrarianResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteOneLibrarianArgs_1 = require("./args/DeleteOneLibrarianArgs");
const Librarian_1 = require("../../../models/Librarian");
const helpers_1 = require("../../../helpers");
let DeleteOneLibrarianResolver = class DeleteOneLibrarianResolver {
    async deleteOneLibrarian(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).librarian.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.DeleteOneLibrarianResolver = DeleteOneLibrarianResolver;
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
], DeleteOneLibrarianResolver.prototype, "deleteOneLibrarian", null);
exports.DeleteOneLibrarianResolver = DeleteOneLibrarianResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Librarian_1.Librarian)
], DeleteOneLibrarianResolver);
