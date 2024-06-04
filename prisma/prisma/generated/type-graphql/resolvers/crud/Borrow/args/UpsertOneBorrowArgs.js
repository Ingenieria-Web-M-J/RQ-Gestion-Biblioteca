"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneBorrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BorrowCreateInput_1 = require("../../../inputs/BorrowCreateInput");
const BorrowUpdateInput_1 = require("../../../inputs/BorrowUpdateInput");
const BorrowWhereUniqueInput_1 = require("../../../inputs/BorrowWhereUniqueInput");
let UpsertOneBorrowArgs = class UpsertOneBorrowArgs {
};
exports.UpsertOneBorrowArgs = UpsertOneBorrowArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BorrowWhereUniqueInput_1.BorrowWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BorrowWhereUniqueInput_1.BorrowWhereUniqueInput)
], UpsertOneBorrowArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BorrowCreateInput_1.BorrowCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BorrowCreateInput_1.BorrowCreateInput)
], UpsertOneBorrowArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BorrowUpdateInput_1.BorrowUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BorrowUpdateInput_1.BorrowUpdateInput)
], UpsertOneBorrowArgs.prototype, "update", void 0);
exports.UpsertOneBorrowArgs = UpsertOneBorrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneBorrowArgs);
