"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateNestedOneWithoutBooksInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutBooksInput_1 = require("../inputs/UserCreateOrConnectWithoutBooksInput");
const UserCreateWithoutBooksInput_1 = require("../inputs/UserCreateWithoutBooksInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateNestedOneWithoutBooksInput = class UserCreateNestedOneWithoutBooksInput {
};
exports.UserCreateNestedOneWithoutBooksInput = UserCreateNestedOneWithoutBooksInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutBooksInput_1.UserCreateWithoutBooksInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutBooksInput_1.UserCreateWithoutBooksInput)
], UserCreateNestedOneWithoutBooksInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutBooksInput_1.UserCreateOrConnectWithoutBooksInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutBooksInput_1.UserCreateOrConnectWithoutBooksInput)
], UserCreateNestedOneWithoutBooksInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateNestedOneWithoutBooksInput.prototype, "connect", void 0);
exports.UserCreateNestedOneWithoutBooksInput = UserCreateNestedOneWithoutBooksInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateNestedOneWithoutBooksInput", {})
], UserCreateNestedOneWithoutBooksInput);
