"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueBorrowOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BorrowWhereUniqueInput_1 = require("../../../inputs/BorrowWhereUniqueInput");
let FindUniqueBorrowOrThrowArgs = class FindUniqueBorrowOrThrowArgs {
};
exports.FindUniqueBorrowOrThrowArgs = FindUniqueBorrowOrThrowArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BorrowWhereUniqueInput_1.BorrowWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BorrowWhereUniqueInput_1.BorrowWhereUniqueInput)
], FindUniqueBorrowOrThrowArgs.prototype, "where", void 0);
exports.FindUniqueBorrowOrThrowArgs = FindUniqueBorrowOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueBorrowOrThrowArgs);
