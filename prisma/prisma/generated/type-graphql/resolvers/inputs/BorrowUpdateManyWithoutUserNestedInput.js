"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BorrowUpdateManyWithoutUserNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BorrowCreateManyUserInputEnvelope_1 = require("../inputs/BorrowCreateManyUserInputEnvelope");
const BorrowCreateOrConnectWithoutUserInput_1 = require("../inputs/BorrowCreateOrConnectWithoutUserInput");
const BorrowCreateWithoutUserInput_1 = require("../inputs/BorrowCreateWithoutUserInput");
const BorrowScalarWhereInput_1 = require("../inputs/BorrowScalarWhereInput");
const BorrowUpdateManyWithWhereWithoutUserInput_1 = require("../inputs/BorrowUpdateManyWithWhereWithoutUserInput");
const BorrowUpdateWithWhereUniqueWithoutUserInput_1 = require("../inputs/BorrowUpdateWithWhereUniqueWithoutUserInput");
const BorrowUpsertWithWhereUniqueWithoutUserInput_1 = require("../inputs/BorrowUpsertWithWhereUniqueWithoutUserInput");
const BorrowWhereUniqueInput_1 = require("../inputs/BorrowWhereUniqueInput");
let BorrowUpdateManyWithoutUserNestedInput = class BorrowUpdateManyWithoutUserNestedInput {
};
exports.BorrowUpdateManyWithoutUserNestedInput = BorrowUpdateManyWithoutUserNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BorrowCreateWithoutUserInput_1.BorrowCreateWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BorrowUpdateManyWithoutUserNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BorrowCreateOrConnectWithoutUserInput_1.BorrowCreateOrConnectWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BorrowUpdateManyWithoutUserNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BorrowUpsertWithWhereUniqueWithoutUserInput_1.BorrowUpsertWithWhereUniqueWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BorrowUpdateManyWithoutUserNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BorrowCreateManyUserInputEnvelope_1.BorrowCreateManyUserInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BorrowCreateManyUserInputEnvelope_1.BorrowCreateManyUserInputEnvelope)
], BorrowUpdateManyWithoutUserNestedInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BorrowWhereUniqueInput_1.BorrowWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BorrowUpdateManyWithoutUserNestedInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BorrowWhereUniqueInput_1.BorrowWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BorrowUpdateManyWithoutUserNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BorrowWhereUniqueInput_1.BorrowWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BorrowUpdateManyWithoutUserNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BorrowWhereUniqueInput_1.BorrowWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BorrowUpdateManyWithoutUserNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BorrowUpdateWithWhereUniqueWithoutUserInput_1.BorrowUpdateWithWhereUniqueWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BorrowUpdateManyWithoutUserNestedInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BorrowUpdateManyWithWhereWithoutUserInput_1.BorrowUpdateManyWithWhereWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BorrowUpdateManyWithoutUserNestedInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BorrowScalarWhereInput_1.BorrowScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BorrowUpdateManyWithoutUserNestedInput.prototype, "deleteMany", void 0);
exports.BorrowUpdateManyWithoutUserNestedInput = BorrowUpdateManyWithoutUserNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BorrowUpdateManyWithoutUserNestedInput", {})
], BorrowUpdateManyWithoutUserNestedInput);
