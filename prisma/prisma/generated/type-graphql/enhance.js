"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyInputTypesEnhanceMap = exports.applyOutputTypesEnhanceMap = exports.applyModelsEnhanceMap = exports.applyRelationResolversEnhanceMap = exports.applyArgsTypesEnhanceMap = exports.applyResolversEnhanceMap = void 0;
const tslib_1 = require("tslib");
const tslib = tslib_1.__importStar(require("tslib"));
const crudResolvers = tslib_1.__importStar(require("./resolvers/crud/resolvers-crud.index"));
const argsTypes = tslib_1.__importStar(require("./resolvers/crud/args.index"));
const actionResolvers = tslib_1.__importStar(require("./resolvers/crud/resolvers-actions.index"));
const relationResolvers = tslib_1.__importStar(require("./resolvers/relations/resolvers.index"));
const models = tslib_1.__importStar(require("./models"));
const outputTypes = tslib_1.__importStar(require("./resolvers/outputs"));
const inputTypes = tslib_1.__importStar(require("./resolvers/inputs"));
const crudResolversMap = {
    User: crudResolvers.UserCrudResolver,
    Book: crudResolvers.BookCrudResolver,
    Borrow: crudResolvers.BorrowCrudResolver,
    Librarian: crudResolvers.LibrarianCrudResolver,
    Account: crudResolvers.AccountCrudResolver,
    Session: crudResolvers.SessionCrudResolver,
    VerificationToken: crudResolvers.VerificationTokenCrudResolver
};
const actionResolversMap = {
    User: {
        aggregateUser: actionResolvers.AggregateUserResolver,
        createManyUser: actionResolvers.CreateManyUserResolver,
        createOneUser: actionResolvers.CreateOneUserResolver,
        deleteManyUser: actionResolvers.DeleteManyUserResolver,
        deleteOneUser: actionResolvers.DeleteOneUserResolver,
        findFirstUser: actionResolvers.FindFirstUserResolver,
        findFirstUserOrThrow: actionResolvers.FindFirstUserOrThrowResolver,
        users: actionResolvers.FindManyUserResolver,
        user: actionResolvers.FindUniqueUserResolver,
        getUser: actionResolvers.FindUniqueUserOrThrowResolver,
        groupByUser: actionResolvers.GroupByUserResolver,
        updateManyUser: actionResolvers.UpdateManyUserResolver,
        updateOneUser: actionResolvers.UpdateOneUserResolver,
        upsertOneUser: actionResolvers.UpsertOneUserResolver
    },
    Book: {
        aggregateBook: actionResolvers.AggregateBookResolver,
        createManyBook: actionResolvers.CreateManyBookResolver,
        createOneBook: actionResolvers.CreateOneBookResolver,
        deleteManyBook: actionResolvers.DeleteManyBookResolver,
        deleteOneBook: actionResolvers.DeleteOneBookResolver,
        findFirstBook: actionResolvers.FindFirstBookResolver,
        findFirstBookOrThrow: actionResolvers.FindFirstBookOrThrowResolver,
        books: actionResolvers.FindManyBookResolver,
        book: actionResolvers.FindUniqueBookResolver,
        getBook: actionResolvers.FindUniqueBookOrThrowResolver,
        groupByBook: actionResolvers.GroupByBookResolver,
        updateManyBook: actionResolvers.UpdateManyBookResolver,
        updateOneBook: actionResolvers.UpdateOneBookResolver,
        upsertOneBook: actionResolvers.UpsertOneBookResolver
    },
    Borrow: {
        aggregateBorrow: actionResolvers.AggregateBorrowResolver,
        createManyBorrow: actionResolvers.CreateManyBorrowResolver,
        createOneBorrow: actionResolvers.CreateOneBorrowResolver,
        deleteManyBorrow: actionResolvers.DeleteManyBorrowResolver,
        deleteOneBorrow: actionResolvers.DeleteOneBorrowResolver,
        findFirstBorrow: actionResolvers.FindFirstBorrowResolver,
        findFirstBorrowOrThrow: actionResolvers.FindFirstBorrowOrThrowResolver,
        borrows: actionResolvers.FindManyBorrowResolver,
        borrow: actionResolvers.FindUniqueBorrowResolver,
        getBorrow: actionResolvers.FindUniqueBorrowOrThrowResolver,
        groupByBorrow: actionResolvers.GroupByBorrowResolver,
        updateManyBorrow: actionResolvers.UpdateManyBorrowResolver,
        updateOneBorrow: actionResolvers.UpdateOneBorrowResolver,
        upsertOneBorrow: actionResolvers.UpsertOneBorrowResolver
    },
    Librarian: {
        aggregateLibrarian: actionResolvers.AggregateLibrarianResolver,
        createManyLibrarian: actionResolvers.CreateManyLibrarianResolver,
        createOneLibrarian: actionResolvers.CreateOneLibrarianResolver,
        deleteManyLibrarian: actionResolvers.DeleteManyLibrarianResolver,
        deleteOneLibrarian: actionResolvers.DeleteOneLibrarianResolver,
        findFirstLibrarian: actionResolvers.FindFirstLibrarianResolver,
        findFirstLibrarianOrThrow: actionResolvers.FindFirstLibrarianOrThrowResolver,
        librarians: actionResolvers.FindManyLibrarianResolver,
        librarian: actionResolvers.FindUniqueLibrarianResolver,
        getLibrarian: actionResolvers.FindUniqueLibrarianOrThrowResolver,
        groupByLibrarian: actionResolvers.GroupByLibrarianResolver,
        updateManyLibrarian: actionResolvers.UpdateManyLibrarianResolver,
        updateOneLibrarian: actionResolvers.UpdateOneLibrarianResolver,
        upsertOneLibrarian: actionResolvers.UpsertOneLibrarianResolver
    },
    Account: {
        aggregateAccount: actionResolvers.AggregateAccountResolver,
        createManyAccount: actionResolvers.CreateManyAccountResolver,
        createOneAccount: actionResolvers.CreateOneAccountResolver,
        deleteManyAccount: actionResolvers.DeleteManyAccountResolver,
        deleteOneAccount: actionResolvers.DeleteOneAccountResolver,
        findFirstAccount: actionResolvers.FindFirstAccountResolver,
        findFirstAccountOrThrow: actionResolvers.FindFirstAccountOrThrowResolver,
        accounts: actionResolvers.FindManyAccountResolver,
        account: actionResolvers.FindUniqueAccountResolver,
        getAccount: actionResolvers.FindUniqueAccountOrThrowResolver,
        groupByAccount: actionResolvers.GroupByAccountResolver,
        updateManyAccount: actionResolvers.UpdateManyAccountResolver,
        updateOneAccount: actionResolvers.UpdateOneAccountResolver,
        upsertOneAccount: actionResolvers.UpsertOneAccountResolver
    },
    Session: {
        aggregateSession: actionResolvers.AggregateSessionResolver,
        createManySession: actionResolvers.CreateManySessionResolver,
        createOneSession: actionResolvers.CreateOneSessionResolver,
        deleteManySession: actionResolvers.DeleteManySessionResolver,
        deleteOneSession: actionResolvers.DeleteOneSessionResolver,
        findFirstSession: actionResolvers.FindFirstSessionResolver,
        findFirstSessionOrThrow: actionResolvers.FindFirstSessionOrThrowResolver,
        sessions: actionResolvers.FindManySessionResolver,
        session: actionResolvers.FindUniqueSessionResolver,
        getSession: actionResolvers.FindUniqueSessionOrThrowResolver,
        groupBySession: actionResolvers.GroupBySessionResolver,
        updateManySession: actionResolvers.UpdateManySessionResolver,
        updateOneSession: actionResolvers.UpdateOneSessionResolver,
        upsertOneSession: actionResolvers.UpsertOneSessionResolver
    },
    VerificationToken: {
        aggregateVerificationToken: actionResolvers.AggregateVerificationTokenResolver,
        createManyVerificationToken: actionResolvers.CreateManyVerificationTokenResolver,
        createOneVerificationToken: actionResolvers.CreateOneVerificationTokenResolver,
        deleteManyVerificationToken: actionResolvers.DeleteManyVerificationTokenResolver,
        deleteOneVerificationToken: actionResolvers.DeleteOneVerificationTokenResolver,
        findFirstVerificationToken: actionResolvers.FindFirstVerificationTokenResolver,
        findFirstVerificationTokenOrThrow: actionResolvers.FindFirstVerificationTokenOrThrowResolver,
        verificationTokens: actionResolvers.FindManyVerificationTokenResolver,
        verificationToken: actionResolvers.FindUniqueVerificationTokenResolver,
        getVerificationToken: actionResolvers.FindUniqueVerificationTokenOrThrowResolver,
        groupByVerificationToken: actionResolvers.GroupByVerificationTokenResolver,
        updateManyVerificationToken: actionResolvers.UpdateManyVerificationTokenResolver,
        updateOneVerificationToken: actionResolvers.UpdateOneVerificationTokenResolver,
        upsertOneVerificationToken: actionResolvers.UpsertOneVerificationTokenResolver
    }
};
const crudResolversInfo = {
    User: ["aggregateUser", "createManyUser", "createOneUser", "deleteManyUser", "deleteOneUser", "findFirstUser", "findFirstUserOrThrow", "users", "user", "getUser", "groupByUser", "updateManyUser", "updateOneUser", "upsertOneUser"],
    Book: ["aggregateBook", "createManyBook", "createOneBook", "deleteManyBook", "deleteOneBook", "findFirstBook", "findFirstBookOrThrow", "books", "book", "getBook", "groupByBook", "updateManyBook", "updateOneBook", "upsertOneBook"],
    Borrow: ["aggregateBorrow", "createManyBorrow", "createOneBorrow", "deleteManyBorrow", "deleteOneBorrow", "findFirstBorrow", "findFirstBorrowOrThrow", "borrows", "borrow", "getBorrow", "groupByBorrow", "updateManyBorrow", "updateOneBorrow", "upsertOneBorrow"],
    Librarian: ["aggregateLibrarian", "createManyLibrarian", "createOneLibrarian", "deleteManyLibrarian", "deleteOneLibrarian", "findFirstLibrarian", "findFirstLibrarianOrThrow", "librarians", "librarian", "getLibrarian", "groupByLibrarian", "updateManyLibrarian", "updateOneLibrarian", "upsertOneLibrarian"],
    Account: ["aggregateAccount", "createManyAccount", "createOneAccount", "deleteManyAccount", "deleteOneAccount", "findFirstAccount", "findFirstAccountOrThrow", "accounts", "account", "getAccount", "groupByAccount", "updateManyAccount", "updateOneAccount", "upsertOneAccount"],
    Session: ["aggregateSession", "createManySession", "createOneSession", "deleteManySession", "deleteOneSession", "findFirstSession", "findFirstSessionOrThrow", "sessions", "session", "getSession", "groupBySession", "updateManySession", "updateOneSession", "upsertOneSession"],
    VerificationToken: ["aggregateVerificationToken", "createManyVerificationToken", "createOneVerificationToken", "deleteManyVerificationToken", "deleteOneVerificationToken", "findFirstVerificationToken", "findFirstVerificationTokenOrThrow", "verificationTokens", "verificationToken", "getVerificationToken", "groupByVerificationToken", "updateManyVerificationToken", "updateOneVerificationToken", "upsertOneVerificationToken"]
};
const argsInfo = {
    AggregateUserArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManyUserArgs: ["data", "skipDuplicates"],
    CreateOneUserArgs: ["data"],
    DeleteManyUserArgs: ["where"],
    DeleteOneUserArgs: ["where"],
    FindFirstUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindFirstUserOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueUserArgs: ["where"],
    FindUniqueUserOrThrowArgs: ["where"],
    GroupByUserArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyUserArgs: ["data", "where"],
    UpdateOneUserArgs: ["data", "where"],
    UpsertOneUserArgs: ["where", "create", "update"],
    AggregateBookArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManyBookArgs: ["data", "skipDuplicates"],
    CreateOneBookArgs: ["data"],
    DeleteManyBookArgs: ["where"],
    DeleteOneBookArgs: ["where"],
    FindFirstBookArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindFirstBookOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyBookArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueBookArgs: ["where"],
    FindUniqueBookOrThrowArgs: ["where"],
    GroupByBookArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyBookArgs: ["data", "where"],
    UpdateOneBookArgs: ["data", "where"],
    UpsertOneBookArgs: ["where", "create", "update"],
    AggregateBorrowArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManyBorrowArgs: ["data", "skipDuplicates"],
    CreateOneBorrowArgs: ["data"],
    DeleteManyBorrowArgs: ["where"],
    DeleteOneBorrowArgs: ["where"],
    FindFirstBorrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindFirstBorrowOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyBorrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueBorrowArgs: ["where"],
    FindUniqueBorrowOrThrowArgs: ["where"],
    GroupByBorrowArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyBorrowArgs: ["data", "where"],
    UpdateOneBorrowArgs: ["data", "where"],
    UpsertOneBorrowArgs: ["where", "create", "update"],
    AggregateLibrarianArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManyLibrarianArgs: ["data", "skipDuplicates"],
    CreateOneLibrarianArgs: ["data"],
    DeleteManyLibrarianArgs: ["where"],
    DeleteOneLibrarianArgs: ["where"],
    FindFirstLibrarianArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindFirstLibrarianOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyLibrarianArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueLibrarianArgs: ["where"],
    FindUniqueLibrarianOrThrowArgs: ["where"],
    GroupByLibrarianArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyLibrarianArgs: ["data", "where"],
    UpdateOneLibrarianArgs: ["data", "where"],
    UpsertOneLibrarianArgs: ["where", "create", "update"],
    AggregateAccountArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManyAccountArgs: ["data", "skipDuplicates"],
    CreateOneAccountArgs: ["data"],
    DeleteManyAccountArgs: ["where"],
    DeleteOneAccountArgs: ["where"],
    FindFirstAccountArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindFirstAccountOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyAccountArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueAccountArgs: ["where"],
    FindUniqueAccountOrThrowArgs: ["where"],
    GroupByAccountArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyAccountArgs: ["data", "where"],
    UpdateOneAccountArgs: ["data", "where"],
    UpsertOneAccountArgs: ["where", "create", "update"],
    AggregateSessionArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManySessionArgs: ["data", "skipDuplicates"],
    CreateOneSessionArgs: ["data"],
    DeleteManySessionArgs: ["where"],
    DeleteOneSessionArgs: ["where"],
    FindFirstSessionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindFirstSessionOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManySessionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueSessionArgs: ["where"],
    FindUniqueSessionOrThrowArgs: ["where"],
    GroupBySessionArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManySessionArgs: ["data", "where"],
    UpdateOneSessionArgs: ["data", "where"],
    UpsertOneSessionArgs: ["where", "create", "update"],
    AggregateVerificationTokenArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManyVerificationTokenArgs: ["data", "skipDuplicates"],
    CreateOneVerificationTokenArgs: ["data"],
    DeleteManyVerificationTokenArgs: ["where"],
    DeleteOneVerificationTokenArgs: ["where"],
    FindFirstVerificationTokenArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindFirstVerificationTokenOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyVerificationTokenArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueVerificationTokenArgs: ["where"],
    FindUniqueVerificationTokenOrThrowArgs: ["where"],
    GroupByVerificationTokenArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyVerificationTokenArgs: ["data", "where"],
    UpdateOneVerificationTokenArgs: ["data", "where"],
    UpsertOneVerificationTokenArgs: ["where", "create", "update"]
};
function applyResolversEnhanceMap(resolversEnhanceMap) {
    const mutationOperationPrefixes = [
        "createOne", "createMany", "deleteOne", "updateOne", "deleteMany", "updateMany", "upsertOne"
    ];
    for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
        const modelName = resolversEnhanceMapKey;
        const crudTarget = crudResolversMap[modelName].prototype;
        const resolverActionsConfig = resolversEnhanceMap[modelName];
        const actionResolversConfig = actionResolversMap[modelName];
        const allActionsDecorators = resolverActionsConfig._all;
        const resolverActionNames = crudResolversInfo[modelName];
        for (const resolverActionName of resolverActionNames) {
            const maybeDecoratorsOrFn = resolverActionsConfig[resolverActionName];
            const isWriteOperation = mutationOperationPrefixes.some(prefix => resolverActionName.startsWith(prefix));
            const operationKindDecorators = isWriteOperation ? resolverActionsConfig._mutation : resolverActionsConfig._query;
            const mainDecorators = [
                ...allActionsDecorators ?? [],
                ...operationKindDecorators ?? [],
            ];
            let decorators;
            if (typeof maybeDecoratorsOrFn === "function") {
                decorators = maybeDecoratorsOrFn(mainDecorators);
            }
            else {
                decorators = [...mainDecorators, ...maybeDecoratorsOrFn ?? []];
            }
            const actionTarget = actionResolversConfig[resolverActionName].prototype;
            tslib.__decorate(decorators, crudTarget, resolverActionName, null);
            tslib.__decorate(decorators, actionTarget, resolverActionName, null);
        }
    }
}
exports.applyResolversEnhanceMap = applyResolversEnhanceMap;
function applyArgsTypesEnhanceMap(argsTypesEnhanceMap) {
    for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
        const argsTypeName = argsTypesEnhanceMapKey;
        const typeConfig = argsTypesEnhanceMap[argsTypeName];
        const typeClass = argsTypes[argsTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, argsInfo[argsTypeName]);
    }
}
exports.applyArgsTypesEnhanceMap = applyArgsTypesEnhanceMap;
const relationResolversMap = {
    User: relationResolvers.UserRelationsResolver,
    Book: relationResolvers.BookRelationsResolver,
    Borrow: relationResolvers.BorrowRelationsResolver,
    Account: relationResolvers.AccountRelationsResolver,
    Session: relationResolvers.SessionRelationsResolver
};
const relationResolversInfo = {
    User: ["books", "accounts", "sessions"],
    Book: ["borrowRecords"],
    Borrow: ["user", "book"],
    Account: ["user"],
    Session: ["user"]
};
function applyRelationResolversEnhanceMap(relationResolversEnhanceMap) {
    for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
        const modelName = relationResolversEnhanceMapKey;
        const relationResolverTarget = relationResolversMap[modelName].prototype;
        const relationResolverActionsConfig = relationResolversEnhanceMap[modelName];
        const allActionsDecorators = relationResolverActionsConfig._all ?? [];
        const relationResolverActionNames = relationResolversInfo[modelName];
        for (const relationResolverActionName of relationResolverActionNames) {
            const maybeDecoratorsOrFn = relationResolverActionsConfig[relationResolverActionName];
            let decorators;
            if (typeof maybeDecoratorsOrFn === "function") {
                decorators = maybeDecoratorsOrFn(allActionsDecorators);
            }
            else {
                decorators = [...allActionsDecorators, ...maybeDecoratorsOrFn ?? []];
            }
            tslib.__decorate(decorators, relationResolverTarget, relationResolverActionName, null);
        }
    }
}
exports.applyRelationResolversEnhanceMap = applyRelationResolversEnhanceMap;
function applyTypeClassEnhanceConfig(enhanceConfig, typeClass, typePrototype, typeFieldNames) {
    if (enhanceConfig.class) {
        tslib.__decorate(enhanceConfig.class, typeClass);
    }
    if (enhanceConfig.fields) {
        const allFieldsDecorators = enhanceConfig.fields._all ?? [];
        for (const typeFieldName of typeFieldNames) {
            const maybeDecoratorsOrFn = enhanceConfig.fields[typeFieldName];
            let decorators;
            if (typeof maybeDecoratorsOrFn === "function") {
                decorators = maybeDecoratorsOrFn(allFieldsDecorators);
            }
            else {
                decorators = [...allFieldsDecorators, ...maybeDecoratorsOrFn ?? []];
            }
            tslib.__decorate(decorators, typePrototype, typeFieldName, void 0);
        }
    }
}
const modelsInfo = {
    User: ["id", "name", "email", "password", "role", "createdAt", "updatedAt", "emailVerified", "image"],
    Book: ["id", "title", "author", "isbn", "available", "createdAt", "updatedAt"],
    Borrow: ["id", "userId", "bookId", "borrowedAt", "returnedAt", "createdAt", "updatedAt"],
    Librarian: ["id", "name", "email", "password", "createdAt", "updatedAt"],
    Account: ["userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "createdAt", "updatedAt"],
    Session: ["sessionToken", "userId", "expires", "createdAt", "updatedAt"],
    VerificationToken: ["identifier", "token", "expires"]
};
function applyModelsEnhanceMap(modelsEnhanceMap) {
    for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
        const modelName = modelsEnhanceMapKey;
        const modelConfig = modelsEnhanceMap[modelName];
        const modelClass = models[modelName];
        const modelTarget = modelClass.prototype;
        applyTypeClassEnhanceConfig(modelConfig, modelClass, modelTarget, modelsInfo[modelName]);
    }
}
exports.applyModelsEnhanceMap = applyModelsEnhanceMap;
const outputsInfo = {
    AggregateUser: ["_count", "_min", "_max"],
    UserGroupBy: ["id", "name", "email", "password", "role", "createdAt", "updatedAt", "emailVerified", "image", "_count", "_min", "_max"],
    AggregateBook: ["_count", "_min", "_max"],
    BookGroupBy: ["id", "title", "author", "isbn", "available", "createdAt", "updatedAt", "_count", "_min", "_max"],
    AggregateBorrow: ["_count", "_min", "_max"],
    BorrowGroupBy: ["id", "userId", "bookId", "borrowedAt", "returnedAt", "createdAt", "updatedAt", "_count", "_min", "_max"],
    AggregateLibrarian: ["_count", "_min", "_max"],
    LibrarianGroupBy: ["id", "name", "email", "password", "createdAt", "updatedAt", "_count", "_min", "_max"],
    AggregateAccount: ["_count", "_avg", "_sum", "_min", "_max"],
    AccountGroupBy: ["userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "createdAt", "updatedAt", "_count", "_avg", "_sum", "_min", "_max"],
    AggregateSession: ["_count", "_min", "_max"],
    SessionGroupBy: ["sessionToken", "userId", "expires", "createdAt", "updatedAt", "_count", "_min", "_max"],
    AggregateVerificationToken: ["_count", "_min", "_max"],
    VerificationTokenGroupBy: ["identifier", "token", "expires", "_count", "_min", "_max"],
    AffectedRowsOutput: ["count"],
    UserCount: ["books", "accounts", "sessions"],
    UserCountAggregate: ["id", "name", "email", "password", "role", "createdAt", "updatedAt", "emailVerified", "image", "_all"],
    UserMinAggregate: ["id", "name", "email", "password", "role", "createdAt", "updatedAt", "emailVerified", "image"],
    UserMaxAggregate: ["id", "name", "email", "password", "role", "createdAt", "updatedAt", "emailVerified", "image"],
    BookCount: ["borrowRecords"],
    BookCountAggregate: ["id", "title", "author", "isbn", "available", "createdAt", "updatedAt", "_all"],
    BookMinAggregate: ["id", "title", "author", "isbn", "available", "createdAt", "updatedAt"],
    BookMaxAggregate: ["id", "title", "author", "isbn", "available", "createdAt", "updatedAt"],
    BorrowCountAggregate: ["id", "userId", "bookId", "borrowedAt", "returnedAt", "createdAt", "updatedAt", "_all"],
    BorrowMinAggregate: ["id", "userId", "bookId", "borrowedAt", "returnedAt", "createdAt", "updatedAt"],
    BorrowMaxAggregate: ["id", "userId", "bookId", "borrowedAt", "returnedAt", "createdAt", "updatedAt"],
    LibrarianCountAggregate: ["id", "name", "email", "password", "createdAt", "updatedAt", "_all"],
    LibrarianMinAggregate: ["id", "name", "email", "password", "createdAt", "updatedAt"],
    LibrarianMaxAggregate: ["id", "name", "email", "password", "createdAt", "updatedAt"],
    AccountCountAggregate: ["userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "createdAt", "updatedAt", "_all"],
    AccountAvgAggregate: ["expires_at"],
    AccountSumAggregate: ["expires_at"],
    AccountMinAggregate: ["userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "createdAt", "updatedAt"],
    AccountMaxAggregate: ["userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "createdAt", "updatedAt"],
    SessionCountAggregate: ["sessionToken", "userId", "expires", "createdAt", "updatedAt", "_all"],
    SessionMinAggregate: ["sessionToken", "userId", "expires", "createdAt", "updatedAt"],
    SessionMaxAggregate: ["sessionToken", "userId", "expires", "createdAt", "updatedAt"],
    VerificationTokenCountAggregate: ["identifier", "token", "expires", "_all"],
    VerificationTokenMinAggregate: ["identifier", "token", "expires"],
    VerificationTokenMaxAggregate: ["identifier", "token", "expires"],
    CreateManyUserAndReturnOutputType: ["id", "name", "email", "password", "role", "createdAt", "updatedAt", "emailVerified", "image"],
    CreateManyBookAndReturnOutputType: ["id", "title", "author", "isbn", "available", "createdAt", "updatedAt"],
    CreateManyBorrowAndReturnOutputType: ["id", "userId", "bookId", "borrowedAt", "returnedAt", "createdAt", "updatedAt", "user", "book"],
    CreateManyLibrarianAndReturnOutputType: ["id", "name", "email", "password", "createdAt", "updatedAt"],
    CreateManyAccountAndReturnOutputType: ["userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "createdAt", "updatedAt", "user"],
    CreateManySessionAndReturnOutputType: ["sessionToken", "userId", "expires", "createdAt", "updatedAt", "user"],
    CreateManyVerificationTokenAndReturnOutputType: ["identifier", "token", "expires"]
};
function applyOutputTypesEnhanceMap(outputTypesEnhanceMap) {
    for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
        const outputTypeName = outputTypeEnhanceMapKey;
        const typeConfig = outputTypesEnhanceMap[outputTypeName];
        const typeClass = outputTypes[outputTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, outputsInfo[outputTypeName]);
    }
}
exports.applyOutputTypesEnhanceMap = applyOutputTypesEnhanceMap;
const inputsInfo = {
    UserWhereInput: ["AND", "OR", "NOT", "id", "name", "email", "password", "role", "createdAt", "updatedAt", "emailVerified", "image", "books", "accounts", "sessions"],
    UserOrderByWithRelationInput: ["id", "name", "email", "password", "role", "createdAt", "updatedAt", "emailVerified", "image", "books", "accounts", "sessions"],
    UserWhereUniqueInput: ["id", "email", "AND", "OR", "NOT", "name", "password", "role", "createdAt", "updatedAt", "emailVerified", "image", "books", "accounts", "sessions"],
    UserOrderByWithAggregationInput: ["id", "name", "email", "password", "role", "createdAt", "updatedAt", "emailVerified", "image", "_count", "_max", "_min"],
    UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "email", "password", "role", "createdAt", "updatedAt", "emailVerified", "image"],
    BookWhereInput: ["AND", "OR", "NOT", "id", "title", "author", "isbn", "available", "createdAt", "updatedAt", "borrowRecords"],
    BookOrderByWithRelationInput: ["id", "title", "author", "isbn", "available", "createdAt", "updatedAt", "borrowRecords"],
    BookWhereUniqueInput: ["id", "isbn", "AND", "OR", "NOT", "title", "author", "available", "createdAt", "updatedAt", "borrowRecords"],
    BookOrderByWithAggregationInput: ["id", "title", "author", "isbn", "available", "createdAt", "updatedAt", "_count", "_max", "_min"],
    BookScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "title", "author", "isbn", "available", "createdAt", "updatedAt"],
    BorrowWhereInput: ["AND", "OR", "NOT", "id", "userId", "bookId", "borrowedAt", "returnedAt", "createdAt", "updatedAt", "user", "book"],
    BorrowOrderByWithRelationInput: ["id", "userId", "bookId", "borrowedAt", "returnedAt", "createdAt", "updatedAt", "user", "book"],
    BorrowWhereUniqueInput: ["id", "AND", "OR", "NOT", "userId", "bookId", "borrowedAt", "returnedAt", "createdAt", "updatedAt", "user", "book"],
    BorrowOrderByWithAggregationInput: ["id", "userId", "bookId", "borrowedAt", "returnedAt", "createdAt", "updatedAt", "_count", "_max", "_min"],
    BorrowScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "userId", "bookId", "borrowedAt", "returnedAt", "createdAt", "updatedAt"],
    LibrarianWhereInput: ["AND", "OR", "NOT", "id", "name", "email", "password", "createdAt", "updatedAt"],
    LibrarianOrderByWithRelationInput: ["id", "name", "email", "password", "createdAt", "updatedAt"],
    LibrarianWhereUniqueInput: ["id", "email", "AND", "OR", "NOT", "name", "password", "createdAt", "updatedAt"],
    LibrarianOrderByWithAggregationInput: ["id", "name", "email", "password", "createdAt", "updatedAt", "_count", "_max", "_min"],
    LibrarianScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "email", "password", "createdAt", "updatedAt"],
    AccountWhereInput: ["AND", "OR", "NOT", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "createdAt", "updatedAt", "user"],
    AccountOrderByWithRelationInput: ["userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "createdAt", "updatedAt", "user"],
    AccountWhereUniqueInput: ["provider_providerAccountId", "AND", "OR", "NOT", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "createdAt", "updatedAt", "user"],
    AccountOrderByWithAggregationInput: ["userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "createdAt", "updatedAt", "_count", "_avg", "_max", "_min", "_sum"],
    AccountScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "createdAt", "updatedAt"],
    SessionWhereInput: ["AND", "OR", "NOT", "sessionToken", "userId", "expires", "createdAt", "updatedAt", "user"],
    SessionOrderByWithRelationInput: ["sessionToken", "userId", "expires", "createdAt", "updatedAt", "user"],
    SessionWhereUniqueInput: ["sessionToken", "AND", "OR", "NOT", "userId", "expires", "createdAt", "updatedAt", "user"],
    SessionOrderByWithAggregationInput: ["sessionToken", "userId", "expires", "createdAt", "updatedAt", "_count", "_max", "_min"],
    SessionScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "sessionToken", "userId", "expires", "createdAt", "updatedAt"],
    VerificationTokenWhereInput: ["AND", "OR", "NOT", "identifier", "token", "expires"],
    VerificationTokenOrderByWithRelationInput: ["identifier", "token", "expires"],
    VerificationTokenWhereUniqueInput: ["identifier_token", "AND", "OR", "NOT", "identifier", "token", "expires"],
    VerificationTokenOrderByWithAggregationInput: ["identifier", "token", "expires", "_count", "_max", "_min"],
    VerificationTokenScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "identifier", "token", "expires"],
    UserCreateInput: ["id", "name", "email", "password", "role", "createdAt", "updatedAt", "emailVerified", "image", "books", "accounts", "sessions"],
    UserUpdateInput: ["id", "name", "email", "password", "role", "createdAt", "updatedAt", "emailVerified", "image", "books", "accounts", "sessions"],
    UserCreateManyInput: ["id", "name", "email", "password", "role", "createdAt", "updatedAt", "emailVerified", "image"],
    UserUpdateManyMutationInput: ["id", "name", "email", "password", "role", "createdAt", "updatedAt", "emailVerified", "image"],
    BookCreateInput: ["id", "title", "author", "isbn", "available", "createdAt", "updatedAt", "borrowRecords"],
    BookUpdateInput: ["id", "title", "author", "isbn", "available", "createdAt", "updatedAt", "borrowRecords"],
    BookCreateManyInput: ["id", "title", "author", "isbn", "available", "createdAt", "updatedAt"],
    BookUpdateManyMutationInput: ["id", "title", "author", "isbn", "available", "createdAt", "updatedAt"],
    BorrowCreateInput: ["id", "borrowedAt", "returnedAt", "createdAt", "updatedAt", "user", "book"],
    BorrowUpdateInput: ["id", "borrowedAt", "returnedAt", "createdAt", "updatedAt", "user", "book"],
    BorrowCreateManyInput: ["id", "userId", "bookId", "borrowedAt", "returnedAt", "createdAt", "updatedAt"],
    BorrowUpdateManyMutationInput: ["id", "borrowedAt", "returnedAt", "createdAt", "updatedAt"],
    LibrarianCreateInput: ["id", "name", "email", "password", "createdAt", "updatedAt"],
    LibrarianUpdateInput: ["id", "name", "email", "password", "createdAt", "updatedAt"],
    LibrarianCreateManyInput: ["id", "name", "email", "password", "createdAt", "updatedAt"],
    LibrarianUpdateManyMutationInput: ["id", "name", "email", "password", "createdAt", "updatedAt"],
    AccountCreateInput: ["type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "createdAt", "updatedAt", "user"],
    AccountUpdateInput: ["type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "createdAt", "updatedAt", "user"],
    AccountCreateManyInput: ["userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "createdAt", "updatedAt"],
    AccountUpdateManyMutationInput: ["type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "createdAt", "updatedAt"],
    SessionCreateInput: ["sessionToken", "expires", "createdAt", "updatedAt", "user"],
    SessionUpdateInput: ["sessionToken", "expires", "createdAt", "updatedAt", "user"],
    SessionCreateManyInput: ["sessionToken", "userId", "expires", "createdAt", "updatedAt"],
    SessionUpdateManyMutationInput: ["sessionToken", "expires", "createdAt", "updatedAt"],
    VerificationTokenCreateInput: ["identifier", "token", "expires"],
    VerificationTokenUpdateInput: ["identifier", "token", "expires"],
    VerificationTokenCreateManyInput: ["identifier", "token", "expires"],
    VerificationTokenUpdateManyMutationInput: ["identifier", "token", "expires"],
    StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
    StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
    EnumRoleFilter: ["equals", "in", "notIn", "not"],
    DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    DateTimeNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    BorrowListRelationFilter: ["every", "some", "none"],
    AccountListRelationFilter: ["every", "some", "none"],
    SessionListRelationFilter: ["every", "some", "none"],
    SortOrderInput: ["sort", "nulls"],
    BorrowOrderByRelationAggregateInput: ["_count"],
    AccountOrderByRelationAggregateInput: ["_count"],
    SessionOrderByRelationAggregateInput: ["_count"],
    UserCountOrderByAggregateInput: ["id", "name", "email", "password", "role", "createdAt", "updatedAt", "emailVerified", "image"],
    UserMaxOrderByAggregateInput: ["id", "name", "email", "password", "role", "createdAt", "updatedAt", "emailVerified", "image"],
    UserMinOrderByAggregateInput: ["id", "name", "email", "password", "role", "createdAt", "updatedAt", "emailVerified", "image"],
    StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
    StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
    EnumRoleWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
    DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    DateTimeNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    BoolFilter: ["equals", "not"],
    BookCountOrderByAggregateInput: ["id", "title", "author", "isbn", "available", "createdAt", "updatedAt"],
    BookMaxOrderByAggregateInput: ["id", "title", "author", "isbn", "available", "createdAt", "updatedAt"],
    BookMinOrderByAggregateInput: ["id", "title", "author", "isbn", "available", "createdAt", "updatedAt"],
    BoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
    UserRelationFilter: ["is", "isNot"],
    BookRelationFilter: ["is", "isNot"],
    BorrowCountOrderByAggregateInput: ["id", "userId", "bookId", "borrowedAt", "returnedAt", "createdAt", "updatedAt"],
    BorrowMaxOrderByAggregateInput: ["id", "userId", "bookId", "borrowedAt", "returnedAt", "createdAt", "updatedAt"],
    BorrowMinOrderByAggregateInput: ["id", "userId", "bookId", "borrowedAt", "returnedAt", "createdAt", "updatedAt"],
    LibrarianCountOrderByAggregateInput: ["id", "name", "email", "password", "createdAt", "updatedAt"],
    LibrarianMaxOrderByAggregateInput: ["id", "name", "email", "password", "createdAt", "updatedAt"],
    LibrarianMinOrderByAggregateInput: ["id", "name", "email", "password", "createdAt", "updatedAt"],
    IntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    AccountProviderProviderAccountIdCompoundUniqueInput: ["provider", "providerAccountId"],
    AccountCountOrderByAggregateInput: ["userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "createdAt", "updatedAt"],
    AccountAvgOrderByAggregateInput: ["expires_at"],
    AccountMaxOrderByAggregateInput: ["userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "createdAt", "updatedAt"],
    AccountMinOrderByAggregateInput: ["userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "createdAt", "updatedAt"],
    AccountSumOrderByAggregateInput: ["expires_at"],
    IntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    SessionCountOrderByAggregateInput: ["sessionToken", "userId", "expires", "createdAt", "updatedAt"],
    SessionMaxOrderByAggregateInput: ["sessionToken", "userId", "expires", "createdAt", "updatedAt"],
    SessionMinOrderByAggregateInput: ["sessionToken", "userId", "expires", "createdAt", "updatedAt"],
    VerificationTokenIdentifierTokenCompoundUniqueInput: ["identifier", "token"],
    VerificationTokenCountOrderByAggregateInput: ["identifier", "token", "expires"],
    VerificationTokenMaxOrderByAggregateInput: ["identifier", "token", "expires"],
    VerificationTokenMinOrderByAggregateInput: ["identifier", "token", "expires"],
    BorrowCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
    AccountCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
    SessionCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
    StringFieldUpdateOperationsInput: ["set"],
    NullableStringFieldUpdateOperationsInput: ["set"],
    EnumRoleFieldUpdateOperationsInput: ["set"],
    DateTimeFieldUpdateOperationsInput: ["set"],
    NullableDateTimeFieldUpdateOperationsInput: ["set"],
    BorrowUpdateManyWithoutUserNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    AccountUpdateManyWithoutUserNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    SessionUpdateManyWithoutUserNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    BorrowCreateNestedManyWithoutBookInput: ["create", "connectOrCreate", "createMany", "connect"],
    BoolFieldUpdateOperationsInput: ["set"],
    BorrowUpdateManyWithoutBookNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    UserCreateNestedOneWithoutBooksInput: ["create", "connectOrCreate", "connect"],
    BookCreateNestedOneWithoutBorrowRecordsInput: ["create", "connectOrCreate", "connect"],
    UserUpdateOneRequiredWithoutBooksNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    BookUpdateOneRequiredWithoutBorrowRecordsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    UserCreateNestedOneWithoutAccountsInput: ["create", "connectOrCreate", "connect"],
    NullableIntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
    UserUpdateOneRequiredWithoutAccountsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    UserCreateNestedOneWithoutSessionsInput: ["create", "connectOrCreate", "connect"],
    UserUpdateOneRequiredWithoutSessionsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
    NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
    NestedEnumRoleFilter: ["equals", "in", "notIn", "not"],
    NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedDateTimeNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
    NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
    NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedEnumRoleWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
    NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    NestedDateTimeNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    NestedBoolFilter: ["equals", "not"],
    NestedBoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
    NestedIntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    NestedFloatNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    BorrowCreateWithoutUserInput: ["id", "borrowedAt", "returnedAt", "createdAt", "updatedAt", "book"],
    BorrowCreateOrConnectWithoutUserInput: ["where", "create"],
    BorrowCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
    AccountCreateWithoutUserInput: ["type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "createdAt", "updatedAt"],
    AccountCreateOrConnectWithoutUserInput: ["where", "create"],
    AccountCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
    SessionCreateWithoutUserInput: ["sessionToken", "expires", "createdAt", "updatedAt"],
    SessionCreateOrConnectWithoutUserInput: ["where", "create"],
    SessionCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
    BorrowUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
    BorrowUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
    BorrowUpdateManyWithWhereWithoutUserInput: ["where", "data"],
    BorrowScalarWhereInput: ["AND", "OR", "NOT", "id", "userId", "bookId", "borrowedAt", "returnedAt", "createdAt", "updatedAt"],
    AccountUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
    AccountUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
    AccountUpdateManyWithWhereWithoutUserInput: ["where", "data"],
    AccountScalarWhereInput: ["AND", "OR", "NOT", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "createdAt", "updatedAt"],
    SessionUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
    SessionUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
    SessionUpdateManyWithWhereWithoutUserInput: ["where", "data"],
    SessionScalarWhereInput: ["AND", "OR", "NOT", "sessionToken", "userId", "expires", "createdAt", "updatedAt"],
    BorrowCreateWithoutBookInput: ["id", "borrowedAt", "returnedAt", "createdAt", "updatedAt", "user"],
    BorrowCreateOrConnectWithoutBookInput: ["where", "create"],
    BorrowCreateManyBookInputEnvelope: ["data", "skipDuplicates"],
    BorrowUpsertWithWhereUniqueWithoutBookInput: ["where", "update", "create"],
    BorrowUpdateWithWhereUniqueWithoutBookInput: ["where", "data"],
    BorrowUpdateManyWithWhereWithoutBookInput: ["where", "data"],
    UserCreateWithoutBooksInput: ["id", "name", "email", "password", "role", "createdAt", "updatedAt", "emailVerified", "image", "accounts", "sessions"],
    UserCreateOrConnectWithoutBooksInput: ["where", "create"],
    BookCreateWithoutBorrowRecordsInput: ["id", "title", "author", "isbn", "available", "createdAt", "updatedAt"],
    BookCreateOrConnectWithoutBorrowRecordsInput: ["where", "create"],
    UserUpsertWithoutBooksInput: ["update", "create", "where"],
    UserUpdateToOneWithWhereWithoutBooksInput: ["where", "data"],
    UserUpdateWithoutBooksInput: ["id", "name", "email", "password", "role", "createdAt", "updatedAt", "emailVerified", "image", "accounts", "sessions"],
    BookUpsertWithoutBorrowRecordsInput: ["update", "create", "where"],
    BookUpdateToOneWithWhereWithoutBorrowRecordsInput: ["where", "data"],
    BookUpdateWithoutBorrowRecordsInput: ["id", "title", "author", "isbn", "available", "createdAt", "updatedAt"],
    UserCreateWithoutAccountsInput: ["id", "name", "email", "password", "role", "createdAt", "updatedAt", "emailVerified", "image", "books", "sessions"],
    UserCreateOrConnectWithoutAccountsInput: ["where", "create"],
    UserUpsertWithoutAccountsInput: ["update", "create", "where"],
    UserUpdateToOneWithWhereWithoutAccountsInput: ["where", "data"],
    UserUpdateWithoutAccountsInput: ["id", "name", "email", "password", "role", "createdAt", "updatedAt", "emailVerified", "image", "books", "sessions"],
    UserCreateWithoutSessionsInput: ["id", "name", "email", "password", "role", "createdAt", "updatedAt", "emailVerified", "image", "books", "accounts"],
    UserCreateOrConnectWithoutSessionsInput: ["where", "create"],
    UserUpsertWithoutSessionsInput: ["update", "create", "where"],
    UserUpdateToOneWithWhereWithoutSessionsInput: ["where", "data"],
    UserUpdateWithoutSessionsInput: ["id", "name", "email", "password", "role", "createdAt", "updatedAt", "emailVerified", "image", "books", "accounts"],
    BorrowCreateManyUserInput: ["id", "bookId", "borrowedAt", "returnedAt", "createdAt", "updatedAt"],
    AccountCreateManyUserInput: ["type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "createdAt", "updatedAt"],
    SessionCreateManyUserInput: ["sessionToken", "expires", "createdAt", "updatedAt"],
    BorrowUpdateWithoutUserInput: ["id", "borrowedAt", "returnedAt", "createdAt", "updatedAt", "book"],
    AccountUpdateWithoutUserInput: ["type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "createdAt", "updatedAt"],
    SessionUpdateWithoutUserInput: ["sessionToken", "expires", "createdAt", "updatedAt"],
    BorrowCreateManyBookInput: ["id", "userId", "borrowedAt", "returnedAt", "createdAt", "updatedAt"],
    BorrowUpdateWithoutBookInput: ["id", "borrowedAt", "returnedAt", "createdAt", "updatedAt", "user"]
};
function applyInputTypesEnhanceMap(inputTypesEnhanceMap) {
    for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
        const inputTypeName = inputTypeEnhanceMapKey;
        const typeConfig = inputTypesEnhanceMap[inputTypeName];
        const typeClass = inputTypes[inputTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, inputsInfo[inputTypeName]);
    }
}
exports.applyInputTypesEnhanceMap = applyInputTypesEnhanceMap;
