"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneBookResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteOneBookArgs_1 = require("./args/DeleteOneBookArgs");
const Book_1 = require("../../../models/Book");
const helpers_1 = require("../../../helpers");
let DeleteOneBookResolver = class DeleteOneBookResolver {
    async deleteOneBook(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).book.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.DeleteOneBookResolver = DeleteOneBookResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Book_1.Book, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneBookArgs_1.DeleteOneBookArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteOneBookResolver.prototype, "deleteOneBook", null);
exports.DeleteOneBookResolver = DeleteOneBookResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Book_1.Book)
], DeleteOneBookResolver);
