"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueLibrarianOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueLibrarianOrThrowArgs_1 = require("./args/FindUniqueLibrarianOrThrowArgs");
const Librarian_1 = require("../../../models/Librarian");
const helpers_1 = require("../../../helpers");
let FindUniqueLibrarianOrThrowResolver = class FindUniqueLibrarianOrThrowResolver {
    async getLibrarian(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).librarian.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindUniqueLibrarianOrThrowResolver = FindUniqueLibrarianOrThrowResolver;
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
], FindUniqueLibrarianOrThrowResolver.prototype, "getLibrarian", null);
exports.FindUniqueLibrarianOrThrowResolver = FindUniqueLibrarianOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Librarian_1.Librarian)
], FindUniqueLibrarianOrThrowResolver);
