"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneBorrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BorrowCreateInput_1 = require("../../../inputs/BorrowCreateInput");
let CreateOneBorrowArgs = class CreateOneBorrowArgs {
};
exports.CreateOneBorrowArgs = CreateOneBorrowArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BorrowCreateInput_1.BorrowCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BorrowCreateInput_1.BorrowCreateInput)
], CreateOneBorrowArgs.prototype, "data", void 0);
exports.CreateOneBorrowArgs = CreateOneBorrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneBorrowArgs);
