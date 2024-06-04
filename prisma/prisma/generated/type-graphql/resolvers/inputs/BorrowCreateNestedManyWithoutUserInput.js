"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BorrowCreateNestedManyWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BorrowCreateManyUserInputEnvelope_1 = require("../inputs/BorrowCreateManyUserInputEnvelope");
const BorrowCreateOrConnectWithoutUserInput_1 = require("../inputs/BorrowCreateOrConnectWithoutUserInput");
const BorrowCreateWithoutUserInput_1 = require("../inputs/BorrowCreateWithoutUserInput");
const BorrowWhereUniqueInput_1 = require("../inputs/BorrowWhereUniqueInput");
let BorrowCreateNestedManyWithoutUserInput = class BorrowCreateNestedManyWithoutUserInput {
};
exports.BorrowCreateNestedManyWithoutUserInput = BorrowCreateNestedManyWithoutUserInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BorrowCreateWithoutUserInput_1.BorrowCreateWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BorrowCreateNestedManyWithoutUserInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BorrowCreateOrConnectWithoutUserInput_1.BorrowCreateOrConnectWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BorrowCreateNestedManyWithoutUserInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BorrowCreateManyUserInputEnvelope_1.BorrowCreateManyUserInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BorrowCreateManyUserInputEnvelope_1.BorrowCreateManyUserInputEnvelope)
], BorrowCreateNestedManyWithoutUserInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BorrowWhereUniqueInput_1.BorrowWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BorrowCreateNestedManyWithoutUserInput.prototype, "connect", void 0);
exports.BorrowCreateNestedManyWithoutUserInput = BorrowCreateNestedManyWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BorrowCreateNestedManyWithoutUserInput", {})
], BorrowCreateNestedManyWithoutUserInput);
