"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BorrowCreateOrConnectWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BorrowCreateWithoutUserInput_1 = require("../inputs/BorrowCreateWithoutUserInput");
const BorrowWhereUniqueInput_1 = require("../inputs/BorrowWhereUniqueInput");
let BorrowCreateOrConnectWithoutUserInput = class BorrowCreateOrConnectWithoutUserInput {
};
exports.BorrowCreateOrConnectWithoutUserInput = BorrowCreateOrConnectWithoutUserInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BorrowWhereUniqueInput_1.BorrowWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BorrowWhereUniqueInput_1.BorrowWhereUniqueInput)
], BorrowCreateOrConnectWithoutUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BorrowCreateWithoutUserInput_1.BorrowCreateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BorrowCreateWithoutUserInput_1.BorrowCreateWithoutUserInput)
], BorrowCreateOrConnectWithoutUserInput.prototype, "create", void 0);
exports.BorrowCreateOrConnectWithoutUserInput = BorrowCreateOrConnectWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BorrowCreateOrConnectWithoutUserInput", {})
], BorrowCreateOrConnectWithoutUserInput);
