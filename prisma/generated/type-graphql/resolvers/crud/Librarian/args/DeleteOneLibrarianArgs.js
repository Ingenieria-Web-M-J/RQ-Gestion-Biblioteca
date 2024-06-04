"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneLibrarianArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LibrarianWhereUniqueInput_1 = require("../../../inputs/LibrarianWhereUniqueInput");
let DeleteOneLibrarianArgs = class DeleteOneLibrarianArgs {
};
exports.DeleteOneLibrarianArgs = DeleteOneLibrarianArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LibrarianWhereUniqueInput_1.LibrarianWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LibrarianWhereUniqueInput_1.LibrarianWhereUniqueInput)
], DeleteOneLibrarianArgs.prototype, "where", void 0);
exports.DeleteOneLibrarianArgs = DeleteOneLibrarianArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneLibrarianArgs);
