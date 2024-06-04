"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BorrowUpdateWithWhereUniqueWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BorrowUpdateWithoutUserInput_1 = require("../inputs/BorrowUpdateWithoutUserInput");
const BorrowWhereUniqueInput_1 = require("../inputs/BorrowWhereUniqueInput");
let BorrowUpdateWithWhereUniqueWithoutUserInput = class BorrowUpdateWithWhereUniqueWithoutUserInput {
};
exports.BorrowUpdateWithWhereUniqueWithoutUserInput = BorrowUpdateWithWhereUniqueWithoutUserInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BorrowWhereUniqueInput_1.BorrowWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BorrowWhereUniqueInput_1.BorrowWhereUniqueInput)
], BorrowUpdateWithWhereUniqueWithoutUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BorrowUpdateWithoutUserInput_1.BorrowUpdateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BorrowUpdateWithoutUserInput_1.BorrowUpdateWithoutUserInput)
], BorrowUpdateWithWhereUniqueWithoutUserInput.prototype, "data", void 0);
exports.BorrowUpdateWithWhereUniqueWithoutUserInput = BorrowUpdateWithWhereUniqueWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BorrowUpdateWithWhereUniqueWithoutUserInput", {})
], BorrowUpdateWithWhereUniqueWithoutUserInput);
