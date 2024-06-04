"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyLibrarianArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LibrarianUpdateManyMutationInput_1 = require("../../../inputs/LibrarianUpdateManyMutationInput");
const LibrarianWhereInput_1 = require("../../../inputs/LibrarianWhereInput");
let UpdateManyLibrarianArgs = class UpdateManyLibrarianArgs {
};
exports.UpdateManyLibrarianArgs = UpdateManyLibrarianArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LibrarianUpdateManyMutationInput_1.LibrarianUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LibrarianUpdateManyMutationInput_1.LibrarianUpdateManyMutationInput)
], UpdateManyLibrarianArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LibrarianWhereInput_1.LibrarianWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LibrarianWhereInput_1.LibrarianWhereInput)
], UpdateManyLibrarianArgs.prototype, "where", void 0);
exports.UpdateManyLibrarianArgs = UpdateManyLibrarianArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyLibrarianArgs);
