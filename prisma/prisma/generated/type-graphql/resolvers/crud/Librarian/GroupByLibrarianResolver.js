"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByLibrarianResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GroupByLibrarianArgs_1 = require("./args/GroupByLibrarianArgs");
const Librarian_1 = require("../../../models/Librarian");
const LibrarianGroupBy_1 = require("../../outputs/LibrarianGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByLibrarianResolver = class GroupByLibrarianResolver {
    async groupByLibrarian(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).librarian.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
exports.GroupByLibrarianResolver = GroupByLibrarianResolver;
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
], GroupByLibrarianResolver.prototype, "groupByLibrarian", null);
exports.GroupByLibrarianResolver = GroupByLibrarianResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Librarian_1.Librarian)
], GroupByLibrarianResolver);
