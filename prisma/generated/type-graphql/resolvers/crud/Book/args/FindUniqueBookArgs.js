"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueBookArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookWhereUniqueInput_1 = require("../../../inputs/BookWhereUniqueInput");
let FindUniqueBookArgs = class FindUniqueBookArgs {
};
exports.FindUniqueBookArgs = FindUniqueBookArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookWhereUniqueInput_1.BookWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookWhereUniqueInput_1.BookWhereUniqueInput)
], FindUniqueBookArgs.prototype, "where", void 0);
exports.FindUniqueBookArgs = FindUniqueBookArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueBookArgs);
