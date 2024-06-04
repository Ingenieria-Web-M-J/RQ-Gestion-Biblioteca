"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneLibrarianArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LibrarianCreateInput_1 = require("../../../inputs/LibrarianCreateInput");
const LibrarianUpdateInput_1 = require("../../../inputs/LibrarianUpdateInput");
const LibrarianWhereUniqueInput_1 = require("../../../inputs/LibrarianWhereUniqueInput");
let UpsertOneLibrarianArgs = class UpsertOneLibrarianArgs {
};
exports.UpsertOneLibrarianArgs = UpsertOneLibrarianArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LibrarianWhereUniqueInput_1.LibrarianWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LibrarianWhereUniqueInput_1.LibrarianWhereUniqueInput)
], UpsertOneLibrarianArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LibrarianCreateInput_1.LibrarianCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LibrarianCreateInput_1.LibrarianCreateInput)
], UpsertOneLibrarianArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LibrarianUpdateInput_1.LibrarianUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LibrarianUpdateInput_1.LibrarianUpdateInput)
], UpsertOneLibrarianArgs.prototype, "update", void 0);
exports.UpsertOneLibrarianArgs = UpsertOneLibrarianArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneLibrarianArgs);
