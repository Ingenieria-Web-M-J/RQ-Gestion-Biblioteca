"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneLibrarianArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LibrarianCreateInput_1 = require("../../../inputs/LibrarianCreateInput");
let CreateOneLibrarianArgs = class CreateOneLibrarianArgs {
};
exports.CreateOneLibrarianArgs = CreateOneLibrarianArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LibrarianCreateInput_1.LibrarianCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LibrarianCreateInput_1.LibrarianCreateInput)
], CreateOneLibrarianArgs.prototype, "data", void 0);
exports.CreateOneLibrarianArgs = CreateOneLibrarianArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneLibrarianArgs);
