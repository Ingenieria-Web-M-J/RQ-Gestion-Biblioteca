"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneLibrarianArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LibrarianUpdateInput_1 = require("../../../inputs/LibrarianUpdateInput");
const LibrarianWhereUniqueInput_1 = require("../../../inputs/LibrarianWhereUniqueInput");
let UpdateOneLibrarianArgs = class UpdateOneLibrarianArgs {
};
exports.UpdateOneLibrarianArgs = UpdateOneLibrarianArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LibrarianUpdateInput_1.LibrarianUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LibrarianUpdateInput_1.LibrarianUpdateInput)
], UpdateOneLibrarianArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LibrarianWhereUniqueInput_1.LibrarianWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LibrarianWhereUniqueInput_1.LibrarianWhereUniqueInput)
], UpdateOneLibrarianArgs.prototype, "where", void 0);
exports.UpdateOneLibrarianArgs = UpdateOneLibrarianArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneLibrarianArgs);
