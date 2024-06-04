"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByBorrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GroupByBorrowArgs_1 = require("./args/GroupByBorrowArgs");
const Borrow_1 = require("../../../models/Borrow");
const BorrowGroupBy_1 = require("../../outputs/BorrowGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByBorrowResolver = class GroupByBorrowResolver {
    async groupByBorrow(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).borrow.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
exports.GroupByBorrowResolver = GroupByBorrowResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [BorrowGroupBy_1.BorrowGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByBorrowArgs_1.GroupByBorrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByBorrowResolver.prototype, "groupByBorrow", null);
exports.GroupByBorrowResolver = GroupByBorrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Borrow_1.Borrow)
], GroupByBorrowResolver);
