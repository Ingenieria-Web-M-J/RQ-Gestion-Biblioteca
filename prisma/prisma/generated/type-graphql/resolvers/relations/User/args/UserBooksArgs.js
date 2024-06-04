"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserBooksArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BorrowOrderByWithRelationInput_1 = require("../../../inputs/BorrowOrderByWithRelationInput");
const BorrowWhereInput_1 = require("../../../inputs/BorrowWhereInput");
const BorrowWhereUniqueInput_1 = require("../../../inputs/BorrowWhereUniqueInput");
const BorrowScalarFieldEnum_1 = require("../../../../enums/BorrowScalarFieldEnum");
let UserBooksArgs = class UserBooksArgs {
};
exports.UserBooksArgs = UserBooksArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BorrowWhereInput_1.BorrowWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BorrowWhereInput_1.BorrowWhereInput)
], UserBooksArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BorrowOrderByWithRelationInput_1.BorrowOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserBooksArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BorrowWhereUniqueInput_1.BorrowWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BorrowWhereUniqueInput_1.BorrowWhereUniqueInput)
], UserBooksArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], UserBooksArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], UserBooksArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BorrowScalarFieldEnum_1.BorrowScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserBooksArgs.prototype, "distinct", void 0);
exports.UserBooksArgs = UserBooksArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UserBooksArgs);
