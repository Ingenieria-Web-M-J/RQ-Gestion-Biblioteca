const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const { User } = require("./User");

let Account = class Account {};
tslib_1.__decorate([
  TypeGraphQL.Field(_type => TypeGraphQL.ID, { nullable: false }),
  tslib_1.__metadata("design:type", String)
], Account.prototype, "id", void 0);

tslib_1.__decorate([
  TypeGraphQL.Field(_type => String, { nullable: false }),
  tslib_1.__metadata("design:type", String)
], Account.prototype, "type", void 0);

tslib_1.__decorate([
  TypeGraphQL.Field(_type => String, { nullable: false }),
  tslib_1.__metadata("design:type", String)
], Account.prototype, "provider", void 0);

tslib_1.__decorate([
  TypeGraphQL.Field(_type => String, { nullable: false }),
  tslib_1.__metadata("design:type", String)
], Account.prototype, "providerAccountId", void 0);

tslib_1.__decorate([
  TypeGraphQL.Field(_type => String, { nullable: true }),
  tslib_1.__metadata("design:type", String)
], Account.prototype, "refresh_token", void 0);

tslib_1.__decorate([
  TypeGraphQL.Field(_type => String, { nullable: true }),
  tslib_1.__metadata("design:type", String)
], Account.prototype, "access_token", void 0);

tslib_1.__decorate([
  TypeGraphQL.Field(_type => Number, { nullable: true }),
  tslib_1.__metadata("design:type", Number)
], Account.prototype, "expires_at", void 0);

tslib_1.__decorate([
  TypeGraphQL.Field(_type => String, { nullable: true }),
  tslib_1.__metadata("design:type", String)
], Account.prototype, "token_type", void 0);

tslib_1.__decorate([
  TypeGraphQL.Field(_type => String, { nullable: true }),
  tslib_1.__metadata("design:type", String)
], Account.prototype, "scope", void 0);

tslib_1.__decorate([
  TypeGraphQL.Field(_type => String, { nullable: true }),
  tslib_1.__metadata("design:type", String)
], Account.prototype, "id_token", void 0);

tslib_1.__decorate([
  TypeGraphQL.Field(_type => String, { nullable: true }),
  tslib_1.__metadata("design:type", String)
], Account.prototype, "session_state", void 0);

tslib_1.__decorate([
  TypeGraphQL.Field(_type => Date, { nullable: false }),
  tslib_1.__metadata("design:type", Date)
], Account.prototype, "createdAt", void 0);

tslib_1.__decorate([
  TypeGraphQL.Field(_type => Date, { nullable: false }),
  tslib_1.__metadata("design:type", Date)
], Account.prototype, "updatedAt", void 0);

Account = tslib_1.__decorate([
  TypeGraphQL.ObjectType({
    isAbstract: true
  })
], Account);
exports.Account = Account;
