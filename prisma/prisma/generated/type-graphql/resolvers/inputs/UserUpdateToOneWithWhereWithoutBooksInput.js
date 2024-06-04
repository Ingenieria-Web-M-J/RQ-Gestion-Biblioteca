"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateToOneWithWhereWithoutBooksInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserUpdateWithoutBooksInput_1 = require("../inputs/UserUpdateWithoutBooksInput");
const UserWhereInput_1 = require("../inputs/UserWhereInput");
let UserUpdateToOneWithWhereWithoutBooksInput = class UserUpdateToOneWithWhereWithoutBooksInput {
};
exports.UserUpdateToOneWithWhereWithoutBooksInput = UserUpdateToOneWithWhereWithoutBooksInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereInput_1.UserWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereInput_1.UserWhereInput)
], UserUpdateToOneWithWhereWithoutBooksInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutBooksInput_1.UserUpdateWithoutBooksInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutBooksInput_1.UserUpdateWithoutBooksInput)
], UserUpdateToOneWithWhereWithoutBooksInput.prototype, "data", void 0);
exports.UserUpdateToOneWithWhereWithoutBooksInput = UserUpdateToOneWithWhereWithoutBooksInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateToOneWithWhereWithoutBooksInput", {})
], UserUpdateToOneWithWhereWithoutBooksInput);
