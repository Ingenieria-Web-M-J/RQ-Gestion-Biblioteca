"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyLibrarianArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LibrarianCreateManyInput_1 = require("../../../inputs/LibrarianCreateManyInput");
let CreateManyLibrarianArgs = class CreateManyLibrarianArgs {
};
exports.CreateManyLibrarianArgs = CreateManyLibrarianArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LibrarianCreateManyInput_1.LibrarianCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyLibrarianArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyLibrarianArgs.prototype, "skipDuplicates", void 0);
exports.CreateManyLibrarianArgs = CreateManyLibrarianArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyLibrarianArgs);
