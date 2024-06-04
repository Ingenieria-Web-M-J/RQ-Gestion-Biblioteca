"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyBorrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BorrowWhereInput_1 = require("../../../inputs/BorrowWhereInput");
let DeleteManyBorrowArgs = class DeleteManyBorrowArgs {
};
exports.DeleteManyBorrowArgs = DeleteManyBorrowArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BorrowWhereInput_1.BorrowWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BorrowWhereInput_1.BorrowWhereInput)
], DeleteManyBorrowArgs.prototype, "where", void 0);
exports.DeleteManyBorrowArgs = DeleteManyBorrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyBorrowArgs);
