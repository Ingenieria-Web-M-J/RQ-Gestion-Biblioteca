"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyBorrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BorrowCreateManyInput_1 = require("../../../inputs/BorrowCreateManyInput");
let CreateManyBorrowArgs = class CreateManyBorrowArgs {
};
exports.CreateManyBorrowArgs = CreateManyBorrowArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BorrowCreateManyInput_1.BorrowCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyBorrowArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyBorrowArgs.prototype, "skipDuplicates", void 0);
exports.CreateManyBorrowArgs = CreateManyBorrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyBorrowArgs);
