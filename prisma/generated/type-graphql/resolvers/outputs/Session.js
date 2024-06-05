const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const { User } = require("./User");

let Session = class Session {};
tslib_1.__decorate([
  TypeGraphQL.Field(_type => String, { nullable: false }),
  tslib_1.__metadata("design:type", String)
], Session.prototype, "sessionToken", void 0);

tslib_1.__decorate([
  TypeGraphQL.Field(_type => User, { nullable: false }),
  tslib_1.__metadata("design:type", User)
], Session.prototype, "user", void 0);

tslib_1.__decorate([
  TypeGraphQL.Field(_type => String, { nullable: false }),
  tslib_1.__metadata("design:type", String)
], Session.prototype, "userId", void 0);

tslib_1.__decorate([
  TypeGraphQL.Field(_type => Date, { nullable: false }),
  tslib_1.__metadata("design:type", Date)
], Session.prototype, "expires", void 0);

tslib_1.__decorate([
  TypeGraphQL.Field(_type => Date, { nullable: false }),
  tslib_1.__metadata("design:type", Date)
], Session.prototype, "createdAt", void 0);

tslib_1.__decorate([
  TypeGraphQL.Field(_type => Date, { nullable: false }),
  tslib_1.__metadata("design:type", Date)
], Session.prototype, "updatedAt", void 0);

Session = tslib_1.__decorate([
  TypeGraphQL.ObjectType({
    isAbstract: true
  })
], Session);
exports.Session = Session;
