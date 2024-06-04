"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCountBooksArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BorrowWhereInput_1 = require("../../inputs/BorrowWhereInput");
let UserCountBooksArgs = class UserCountBooksArgs {
};
exports.UserCountBooksArgs = UserCountBooksArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BorrowWhereInput_1.BorrowWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BorrowWhereInput_1.BorrowWhereInput)
], UserCountBooksArgs.prototype, "where", void 0);
exports.UserCountBooksArgs = UserCountBooksArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UserCountBooksArgs);
