"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateOrConnectWithoutBooksInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutBooksInput_1 = require("../inputs/UserCreateWithoutBooksInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateOrConnectWithoutBooksInput = class UserCreateOrConnectWithoutBooksInput {
};
exports.UserCreateOrConnectWithoutBooksInput = UserCreateOrConnectWithoutBooksInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateOrConnectWithoutBooksInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutBooksInput_1.UserCreateWithoutBooksInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutBooksInput_1.UserCreateWithoutBooksInput)
], UserCreateOrConnectWithoutBooksInput.prototype, "create", void 0);
exports.UserCreateOrConnectWithoutBooksInput = UserCreateOrConnectWithoutBooksInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateOrConnectWithoutBooksInput", {})
], UserCreateOrConnectWithoutBooksInput);
