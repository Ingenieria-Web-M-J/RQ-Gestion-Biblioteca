"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateOneRequiredWithoutBooksNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutBooksInput_1 = require("../inputs/UserCreateOrConnectWithoutBooksInput");
const UserCreateWithoutBooksInput_1 = require("../inputs/UserCreateWithoutBooksInput");
const UserUpdateToOneWithWhereWithoutBooksInput_1 = require("../inputs/UserUpdateToOneWithWhereWithoutBooksInput");
const UserUpsertWithoutBooksInput_1 = require("../inputs/UserUpsertWithoutBooksInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpdateOneRequiredWithoutBooksNestedInput = class UserUpdateOneRequiredWithoutBooksNestedInput {
};
exports.UserUpdateOneRequiredWithoutBooksNestedInput = UserUpdateOneRequiredWithoutBooksNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutBooksInput_1.UserCreateWithoutBooksInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutBooksInput_1.UserCreateWithoutBooksInput)
], UserUpdateOneRequiredWithoutBooksNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutBooksInput_1.UserCreateOrConnectWithoutBooksInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutBooksInput_1.UserCreateOrConnectWithoutBooksInput)
], UserUpdateOneRequiredWithoutBooksNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpsertWithoutBooksInput_1.UserUpsertWithoutBooksInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpsertWithoutBooksInput_1.UserUpsertWithoutBooksInput)
], UserUpdateOneRequiredWithoutBooksNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserUpdateOneRequiredWithoutBooksNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateToOneWithWhereWithoutBooksInput_1.UserUpdateToOneWithWhereWithoutBooksInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateToOneWithWhereWithoutBooksInput_1.UserUpdateToOneWithWhereWithoutBooksInput)
], UserUpdateOneRequiredWithoutBooksNestedInput.prototype, "update", void 0);
exports.UserUpdateOneRequiredWithoutBooksNestedInput = UserUpdateOneRequiredWithoutBooksNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateOneRequiredWithoutBooksNestedInput", {})
], UserUpdateOneRequiredWithoutBooksNestedInput);
