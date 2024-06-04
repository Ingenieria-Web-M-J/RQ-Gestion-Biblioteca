"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpsertWithoutBooksInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutBooksInput_1 = require("../inputs/UserCreateWithoutBooksInput");
const UserUpdateWithoutBooksInput_1 = require("../inputs/UserUpdateWithoutBooksInput");
const UserWhereInput_1 = require("../inputs/UserWhereInput");
let UserUpsertWithoutBooksInput = class UserUpsertWithoutBooksInput {
};
exports.UserUpsertWithoutBooksInput = UserUpsertWithoutBooksInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutBooksInput_1.UserUpdateWithoutBooksInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutBooksInput_1.UserUpdateWithoutBooksInput)
], UserUpsertWithoutBooksInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutBooksInput_1.UserCreateWithoutBooksInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutBooksInput_1.UserCreateWithoutBooksInput)
], UserUpsertWithoutBooksInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereInput_1.UserWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereInput_1.UserWhereInput)
], UserUpsertWithoutBooksInput.prototype, "where", void 0);
exports.UserUpsertWithoutBooksInput = UserUpsertWithoutBooksInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpsertWithoutBooksInput", {})
], UserUpsertWithoutBooksInput);
