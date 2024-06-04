"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyLibrarianArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LibrarianWhereInput_1 = require("../../../inputs/LibrarianWhereInput");
let DeleteManyLibrarianArgs = class DeleteManyLibrarianArgs {
};
exports.DeleteManyLibrarianArgs = DeleteManyLibrarianArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LibrarianWhereInput_1.LibrarianWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LibrarianWhereInput_1.LibrarianWhereInput)
], DeleteManyLibrarianArgs.prototype, "where", void 0);
exports.DeleteManyLibrarianArgs = DeleteManyLibrarianArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyLibrarianArgs);
