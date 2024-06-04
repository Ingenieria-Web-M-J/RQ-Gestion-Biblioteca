"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BorrowListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BorrowWhereInput_1 = require("../inputs/BorrowWhereInput");
let BorrowListRelationFilter = class BorrowListRelationFilter {
};
exports.BorrowListRelationFilter = BorrowListRelationFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BorrowWhereInput_1.BorrowWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BorrowWhereInput_1.BorrowWhereInput)
], BorrowListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BorrowWhereInput_1.BorrowWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BorrowWhereInput_1.BorrowWhereInput)
], BorrowListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BorrowWhereInput_1.BorrowWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BorrowWhereInput_1.BorrowWhereInput)
], BorrowListRelationFilter.prototype, "none", void 0);
exports.BorrowListRelationFilter = BorrowListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("BorrowListRelationFilter", {})
], BorrowListRelationFilter);
