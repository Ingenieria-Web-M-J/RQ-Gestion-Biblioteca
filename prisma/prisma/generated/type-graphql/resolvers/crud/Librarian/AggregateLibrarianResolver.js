"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateLibrarianResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateLibrarianArgs_1 = require("./args/AggregateLibrarianArgs");
const Librarian_1 = require("../../../models/Librarian");
const AggregateLibrarian_1 = require("../../outputs/AggregateLibrarian");
const helpers_1 = require("../../../helpers");
let AggregateLibrarianResolver = class AggregateLibrarianResolver {
    async aggregateLibrarian(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).librarian.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
};
exports.AggregateLibrarianResolver = AggregateLibrarianResolver;
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
], AggregateLibrarianResolver.prototype, "aggregateLibrarian", null);
exports.AggregateLibrarianResolver = AggregateLibrarianResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Librarian_1.Librarian)
], AggregateLibrarianResolver);
