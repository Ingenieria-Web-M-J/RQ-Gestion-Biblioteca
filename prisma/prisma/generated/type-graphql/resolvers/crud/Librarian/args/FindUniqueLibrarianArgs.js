"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueLibrarianArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LibrarianWhereUniqueInput_1 = require("../../../inputs/LibrarianWhereUniqueInput");
let FindUniqueLibrarianArgs = class FindUniqueLibrarianArgs {
};
exports.FindUniqueLibrarianArgs = FindUniqueLibrarianArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LibrarianWhereUniqueInput_1.LibrarianWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LibrarianWhereUniqueInput_1.LibrarianWhereUniqueInput)
], FindUniqueLibrarianArgs.prototype, "where", void 0);
exports.FindUniqueLibrarianArgs = FindUniqueLibrarianArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueLibrarianArgs);
