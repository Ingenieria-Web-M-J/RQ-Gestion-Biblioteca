"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyBorrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BorrowUpdateManyMutationInput_1 = require("../../../inputs/BorrowUpdateManyMutationInput");
const BorrowWhereInput_1 = require("../../../inputs/BorrowWhereInput");
let UpdateManyBorrowArgs = class UpdateManyBorrowArgs {
};
exports.UpdateManyBorrowArgs = UpdateManyBorrowArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BorrowUpdateManyMutationInput_1.BorrowUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BorrowUpdateManyMutationInput_1.BorrowUpdateManyMutationInput)
], UpdateManyBorrowArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BorrowWhereInput_1.BorrowWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BorrowWhereInput_1.BorrowWhereInput)
], UpdateManyBorrowArgs.prototype, "where", void 0);
exports.UpdateManyBorrowArgs = UpdateManyBorrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyBorrowArgs);
