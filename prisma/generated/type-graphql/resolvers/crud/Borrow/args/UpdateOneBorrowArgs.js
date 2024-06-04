"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneBorrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BorrowUpdateInput_1 = require("../../../inputs/BorrowUpdateInput");
const BorrowWhereUniqueInput_1 = require("../../../inputs/BorrowWhereUniqueInput");
let UpdateOneBorrowArgs = class UpdateOneBorrowArgs {
};
exports.UpdateOneBorrowArgs = UpdateOneBorrowArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BorrowUpdateInput_1.BorrowUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BorrowUpdateInput_1.BorrowUpdateInput)
], UpdateOneBorrowArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BorrowWhereUniqueInput_1.BorrowWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BorrowWhereUniqueInput_1.BorrowWhereUniqueInput)
], UpdateOneBorrowArgs.prototype, "where", void 0);
exports.UpdateOneBorrowArgs = UpdateOneBorrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneBorrowArgs);
