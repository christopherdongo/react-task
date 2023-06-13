/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string | number; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** The `BigInt` scalar type represents whole numeric values. */
  BigInt: { input: any; output: any; }
  /** A date string, such as `2007-12-25`, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: { input: any; output: any; }
  /** A date-time string at UTC, such as `2007-12-25T16:15:30Z`, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
  /** A time string at UTC, such as `16:15:30Z`, compliant with the `full-time` format outlined in section 5.6 of the RFC 3339profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Time: { input: any; output: any; }
};

export enum AggregationFunctionType {
  AnyValue = 'ANY_VALUE',
  Avg = 'AVG',
  Count = 'COUNT',
  GroupConcat = 'GROUP_CONCAT',
  Max = 'MAX',
  Min = 'MIN',
  StddevPop = 'STDDEV_POP',
  StddevSamp = 'STDDEV_SAMP',
  Sum = 'SUM',
  VarPop = 'VAR_POP',
  VarSamp = 'VAR_SAMP'
}

export type ApiToken = {
  __typename?: 'ApiToken';
  _description?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<User>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  roles?: Maybe<RoleListResponse>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type ApiTokenRolesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<RoleFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<RoleGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<RoleOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<RoleSort>>;
};

/** ApiTokens create input */
export type ApiTokenCreateInput = {
  name: Scalars['String']['input'];
  roles?: InputMaybe<ApiTokensRolesRelationInput>;
};

/** ApiTokens delete input */
export type ApiTokenDeleteInput = {
  force?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ApiTokenFilter = {
  AND?: InputMaybe<Array<ApiTokenFilter>>;
  OR?: InputMaybe<Array<ApiTokenFilter>>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<DateTimePredicate>;
  createdBy?: InputMaybe<UserFilter>;
  deletedAt?: InputMaybe<IntPredicate>;
  id?: InputMaybe<IdPredicate>;
  name?: InputMaybe<StringPredicate>;
  roles?: InputMaybe<RoleRelationFilter>;
  token?: InputMaybe<StringPredicate>;
  updatedAt?: InputMaybe<DateTimePredicate>;
};

export type ApiTokenGroupBy = {
  first?: InputMaybe<Scalars['Int']['input']>;
  having?: InputMaybe<Having>;
  last?: InputMaybe<Scalars['Int']['input']>;
  query: ApiTokenGroupByQuery;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<GroupBySort>>;
};

export type ApiTokenGroupByQuery = {
  _group?: InputMaybe<Array<GroupIdentifiersGroupByField>>;
  createdAt?: InputMaybe<Array<GroupByField>>;
  createdBy?: InputMaybe<UserGroupByQuery>;
  id?: InputMaybe<Array<GroupByField>>;
  name?: InputMaybe<Array<GroupByField>>;
  roles?: InputMaybe<RoleGroupByQuery>;
  updatedAt?: InputMaybe<Array<GroupByField>>;
};

export type ApiTokenKeyFilter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** ApiTokenListResponse output */
export type ApiTokenListResponse = {
  __typename?: 'ApiTokenListResponse';
  /** List items count */
  count: Scalars['Int']['output'];
  /** Aggregated items */
  groups: Array<GroupByResponse>;
  /** List items */
  items: Array<ApiToken>;
};

/** ApiTokenManyResponse output */
export type ApiTokenManyResponse = {
  __typename?: 'ApiTokenManyResponse';
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<ApiToken>;
};

/** No longer supported. Use `sort` instead. */
export enum ApiTokenOrderBy {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  TokenAsc = 'token_ASC',
  TokenDesc = 'token_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** ApiTokens subscription payload */
export type ApiTokenPayload = {
  __typename?: 'ApiTokenPayload';
  mutation: MutationType;
  node?: Maybe<ApiToken>;
  previousValues?: Maybe<ApiToken>;
  updatedFields?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type ApiTokenRelationFilter = {
  every?: InputMaybe<ApiTokenFilter>;
  none?: InputMaybe<ApiTokenFilter>;
  some?: InputMaybe<ApiTokenFilter>;
};

/** API Token Response */
export type ApiTokenResponse = {
  __typename?: 'ApiTokenResponse';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<User>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  roles?: Maybe<RoleListResponse>;
  token: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


/** API Token Response */
export type ApiTokenResponseRolesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<RoleFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<RoleGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<RoleOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<RoleSort>>;
};

export type ApiTokenSort = {
  createdAt?: InputMaybe<SortOrder>;
  createdBy?: InputMaybe<UserSort>;
  deletedAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

/** ApiTokens subscription filter */
export type ApiTokenSubscriptionFilter = {
  mutation_in?: InputMaybe<Array<InputMaybe<MutationType>>>;
  node?: InputMaybe<ApiTokenFilter>;
  updatedFields?: InputMaybe<UpdatedFieldsFilter>;
};

/** ApiTokens update input */
export type ApiTokenUpdateByFilterInput = {
  name?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
  token?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
};

/** ApiTokens update input */
export type ApiTokenUpdateInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  roles?: InputMaybe<ApiTokensRolesUpdateRelationInput>;
};

export type ApiToken_PermissionFilter = {
  AND?: InputMaybe<Array<ApiToken_PermissionFilter>>;
  OR?: InputMaybe<Array<ApiToken_PermissionFilter>>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<DateTimePredicate>;
  createdBy?: InputMaybe<User_PermissionFilter>;
  deletedAt?: InputMaybe<IntPredicate>;
  id?: InputMaybe<IdPredicate>;
  name?: InputMaybe<StringPredicate>;
  roles?: InputMaybe<Role_PermissionRelationFilter>;
  token?: InputMaybe<StringPredicate>;
  updatedAt?: InputMaybe<DateTimePredicate>;
};

export type ApiToken_PermissionRelationFilter = {
  every?: InputMaybe<ApiToken_PermissionFilter>;
  none?: InputMaybe<ApiToken_PermissionFilter>;
  some?: InputMaybe<ApiToken_PermissionFilter>;
};

/** ApiTokens relation input */
export type ApiTokensRolesRelationInput = {
  connect?: InputMaybe<Array<RoleKeyFilter>>;
  create?: InputMaybe<Array<InputMaybe<ApiTokens_RoleCreateInput>>>;
};

/** ApiTokens relation input */
export type ApiTokensRolesUpdateRelationInput = {
  connect?: InputMaybe<Array<RoleKeyFilter>>;
  create?: InputMaybe<Array<InputMaybe<ApiTokens_RoleCreateInput>>>;
  disconnect?: InputMaybe<Array<RoleKeyFilter>>;
  reconnect?: InputMaybe<Array<RoleKeyFilter>>;
  update?: InputMaybe<Array<InputMaybe<ApiTokens_RoleUpdateInput>>>;
};

/** Roles create input from apiTokens */
export type ApiTokens_RoleCreateInput = {
  apiTokens?: InputMaybe<RolesApiTokensRelationInput>;
  authenticationProfiles?: InputMaybe<RolesAuthenticationProfilesRelationInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  permissions?: InputMaybe<PermissionsInput>;
  users?: InputMaybe<RolesUsersRelationInput>;
};

/** Roles update input from apiTokens */
export type ApiTokens_RoleUpdateInput = {
  data: RoleUpdateInput;
  filter?: InputMaybe<RoleKeyFilter>;
};

/** Application */
export type Application = {
  __typename?: 'Application';
  appType: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  status: ApplicationStatusEnum;
};

/** ApplicationDeleteMutationInput */
export type ApplicationDeleteMutationInput = {
  force?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
};

/** Application install input */
export type ApplicationInstallInput = {
  appType: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  status?: InputMaybe<ApplicationStatusEnum>;
};

/** ApplicationListResponse output */
export type ApplicationListResponse = {
  __typename?: 'ApplicationListResponse';
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<Application>;
};

/** Application Status Enum */
export enum ApplicationStatusEnum {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE'
}

/** Application update input */
export type ApplicationUpdateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<ApplicationStatusEnum>;
};

/** Async Session */
export type AsyncSession = {
  __typename?: 'AsyncSession';
  sessionId: Scalars['String']['output'];
};

export type AsyncSessionStatusResponse = {
  __typename?: 'AsyncSessionStatusResponse';
  message?: Maybe<Scalars['String']['output']>;
  status: Scalars['String']['output'];
};

/** Auth response */
export type Auth = {
  __typename?: 'Auth';
  accessToken?: Maybe<Scalars['String']['output']>;
  accessTokenExpiresAt?: Maybe<Scalars['Int']['output']>;
  idToken?: Maybe<Scalars['String']['output']>;
  idTokenExpiresAt?: Maybe<Scalars['Int']['output']>;
  refreshToken?: Maybe<Scalars['String']['output']>;
};

export type AuthenticationProfile = {
  __typename?: 'AuthenticationProfile';
  _description?: Maybe<Scalars['String']['output']>;
  attributes?: Maybe<AuthenticationProfileAttributes>;
  audiences?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  clientId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<User>;
  databaseName?: Maybe<Scalars['String']['output']>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  domain?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  managementDomain?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  roles?: Maybe<RoleListResponse>;
  secret?: Maybe<Scalars['String']['output']>;
  selfSignUpEmailDomains?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  selfSignUpEnabled?: Maybe<Scalars['Boolean']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type AuthenticationProfileRolesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<RoleFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<RoleGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<RoleOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<RoleSort>>;
};

/** Authentication Profile Attributes */
export type AuthenticationProfileAttributes = CognitoAuthProfileAttributes;

/** Authentication profile connection options */
export type AuthenticationProfileConnectionOptions = {
  __typename?: 'AuthenticationProfileConnectionOptions';
  facebook?: Maybe<FacebookOptions>;
  github?: Maybe<GithubOptions>;
  google?: Maybe<GoogleOptions>;
};

/** Authentication profile connection options input */
export type AuthenticationProfileConnectionsOptionsInput = {
  facebook?: InputMaybe<FacebookOptionsInput>;
  github?: InputMaybe<GithubOptionsInput>;
  google?: InputMaybe<GoogleOptionsInput>;
};

/** AuthenticationProfiles create input */
export type AuthenticationProfileCreateInput = {
  audiences?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  clientId?: InputMaybe<Scalars['String']['input']>;
  databaseName?: InputMaybe<Scalars['String']['input']>;
  domain?: InputMaybe<Scalars['String']['input']>;
  managementDomain?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  roles?: InputMaybe<AuthenticationProfilesRolesRelationInput>;
  secret?: InputMaybe<Scalars['String']['input']>;
  selfSignUpEmailDomains?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  selfSignUpEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

/** AuthenticationProfiles create many input */
export type AuthenticationProfileCreateManyInput = {
  audiences?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  clientId?: InputMaybe<Scalars['String']['input']>;
  databaseName?: InputMaybe<Scalars['String']['input']>;
  domain?: InputMaybe<Scalars['String']['input']>;
  managementDomain?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  roles?: InputMaybe<AuthenticationProfilesRolesManyRelationInput>;
  secret?: InputMaybe<Scalars['String']['input']>;
  selfSignUpEmailDomains?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  selfSignUpEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

/** AuthenticationProfiles delete input */
export type AuthenticationProfileDeleteInput = {
  force?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type AuthenticationProfileFilter = {
  AND?: InputMaybe<Array<AuthenticationProfileFilter>>;
  OR?: InputMaybe<Array<AuthenticationProfileFilter>>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  clientId?: InputMaybe<StringPredicate>;
  createdAt?: InputMaybe<DateTimePredicate>;
  createdBy?: InputMaybe<UserFilter>;
  databaseName?: InputMaybe<StringPredicate>;
  deletedAt?: InputMaybe<IntPredicate>;
  domain?: InputMaybe<StringPredicate>;
  id?: InputMaybe<IdPredicate>;
  managementDomain?: InputMaybe<StringPredicate>;
  name?: InputMaybe<StringPredicate>;
  roles?: InputMaybe<RoleRelationFilter>;
  secret?: InputMaybe<StringPredicate>;
  selfSignUpEnabled?: InputMaybe<BoolPredicate>;
  type?: InputMaybe<StringPredicate>;
  updatedAt?: InputMaybe<DateTimePredicate>;
};

export type AuthenticationProfileGroupBy = {
  first?: InputMaybe<Scalars['Int']['input']>;
  having?: InputMaybe<Having>;
  last?: InputMaybe<Scalars['Int']['input']>;
  query: AuthenticationProfileGroupByQuery;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<GroupBySort>>;
};

export type AuthenticationProfileGroupByQuery = {
  _group?: InputMaybe<Array<GroupIdentifiersGroupByField>>;
  audiences?: InputMaybe<Array<GroupByField>>;
  clientId?: InputMaybe<Array<GroupByField>>;
  createdAt?: InputMaybe<Array<GroupByField>>;
  createdBy?: InputMaybe<UserGroupByQuery>;
  databaseName?: InputMaybe<Array<GroupByField>>;
  domain?: InputMaybe<Array<GroupByField>>;
  id?: InputMaybe<Array<GroupByField>>;
  managementDomain?: InputMaybe<Array<GroupByField>>;
  name?: InputMaybe<Array<GroupByField>>;
  roles?: InputMaybe<RoleGroupByQuery>;
  secret?: InputMaybe<Array<GroupByField>>;
  selfSignUpEmailDomains?: InputMaybe<Array<GroupByField>>;
  selfSignUpEnabled?: InputMaybe<Array<GroupByField>>;
  type?: InputMaybe<Array<GroupByField>>;
  updatedAt?: InputMaybe<Array<GroupByField>>;
};

export type AuthenticationProfileKeyFilter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** AuthenticationProfileListResponse output */
export type AuthenticationProfileListResponse = {
  __typename?: 'AuthenticationProfileListResponse';
  /** List items count */
  count: Scalars['Int']['output'];
  /** Aggregated items */
  groups: Array<GroupByResponse>;
  /** List items */
  items: Array<AuthenticationProfile>;
};

/** AuthenticationProfileManyResponse output */
export type AuthenticationProfileManyResponse = {
  __typename?: 'AuthenticationProfileManyResponse';
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<AuthenticationProfile>;
};

/** No longer supported. Use `sort` instead. */
export enum AuthenticationProfileOrderBy {
  ClientIdAsc = 'clientId_ASC',
  ClientIdDesc = 'clientId_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DatabaseNameAsc = 'databaseName_ASC',
  DatabaseNameDesc = 'databaseName_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  DomainAsc = 'domain_ASC',
  DomainDesc = 'domain_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  ManagementDomainAsc = 'managementDomain_ASC',
  ManagementDomainDesc = 'managementDomain_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SecretAsc = 'secret_ASC',
  SecretDesc = 'secret_DESC',
  SelfSignUpEnabledAsc = 'selfSignUpEnabled_ASC',
  SelfSignUpEnabledDesc = 'selfSignUpEnabled_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** AuthenticationProfiles subscription payload */
export type AuthenticationProfilePayload = {
  __typename?: 'AuthenticationProfilePayload';
  mutation: MutationType;
  node?: Maybe<AuthenticationProfile>;
  previousValues?: Maybe<AuthenticationProfile>;
  updatedFields?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type AuthenticationProfileRelationFilter = {
  every?: InputMaybe<AuthenticationProfileFilter>;
  none?: InputMaybe<AuthenticationProfileFilter>;
  some?: InputMaybe<AuthenticationProfileFilter>;
};

export type AuthenticationProfileSort = {
  clientId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  createdBy?: InputMaybe<UserSort>;
  databaseName?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  domain?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  managementDomain?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  secret?: InputMaybe<SortOrder>;
  selfSignUpEnabled?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

/** AuthenticationProfiles subscription filter */
export type AuthenticationProfileSubscriptionFilter = {
  mutation_in?: InputMaybe<Array<InputMaybe<MutationType>>>;
  node?: InputMaybe<AuthenticationProfileFilter>;
  updatedFields?: InputMaybe<UpdatedFieldsFilter>;
};

/** AuthenticationProfiles update input */
export type AuthenticationProfileUpdateByFilterInput = {
  audiences?: InputMaybe<Array<InputMaybe<UpdateByFilterListStringInput>>>;
  clientId?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
  databaseName?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
  domain?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
  managementDomain?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
  name?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
  secret?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
  selfSignUpEmailDomains?: InputMaybe<Array<InputMaybe<UpdateByFilterListStringInput>>>;
  selfSignUpEnabled?: InputMaybe<Array<InputMaybe<UpdateByFilterBooleanSwitchInput>>>;
  type?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
};

/** AuthenticationProfiles update input */
export type AuthenticationProfileUpdateInput = {
  audiences?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  clientId?: InputMaybe<Scalars['String']['input']>;
  databaseName?: InputMaybe<Scalars['String']['input']>;
  domain?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  managementDomain?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  roles?: InputMaybe<AuthenticationProfilesRolesUpdateRelationInput>;
  secret?: InputMaybe<Scalars['String']['input']>;
  selfSignUpEmailDomains?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  selfSignUpEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type AuthenticationProfile_PermissionFilter = {
  AND?: InputMaybe<Array<AuthenticationProfile_PermissionFilter>>;
  OR?: InputMaybe<Array<AuthenticationProfile_PermissionFilter>>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  clientId?: InputMaybe<StringPredicate>;
  createdAt?: InputMaybe<DateTimePredicate>;
  createdBy?: InputMaybe<User_PermissionFilter>;
  databaseName?: InputMaybe<StringPredicate>;
  deletedAt?: InputMaybe<IntPredicate>;
  domain?: InputMaybe<StringPredicate>;
  id?: InputMaybe<IdPredicate>;
  managementDomain?: InputMaybe<StringPredicate>;
  name?: InputMaybe<StringPredicate>;
  roles?: InputMaybe<Role_PermissionRelationFilter>;
  secret?: InputMaybe<StringPredicate>;
  selfSignUpEnabled?: InputMaybe<BoolPredicate>;
  type?: InputMaybe<StringPredicate>;
  updatedAt?: InputMaybe<DateTimePredicate>;
};

export type AuthenticationProfile_PermissionRelationFilter = {
  every?: InputMaybe<AuthenticationProfile_PermissionFilter>;
  none?: InputMaybe<AuthenticationProfile_PermissionFilter>;
  some?: InputMaybe<AuthenticationProfile_PermissionFilter>;
};

/** AuthenticationProfiles relation input */
export type AuthenticationProfilesRolesManyRelationInput = {
  connect?: InputMaybe<Array<RoleKeyFilter>>;
};

/** AuthenticationProfiles relation input */
export type AuthenticationProfilesRolesRelationInput = {
  connect?: InputMaybe<Array<RoleKeyFilter>>;
  create?: InputMaybe<Array<InputMaybe<AuthenticationProfiles_RoleCreateInput>>>;
};

/** AuthenticationProfiles relation input */
export type AuthenticationProfilesRolesUpdateRelationInput = {
  connect?: InputMaybe<Array<RoleKeyFilter>>;
  create?: InputMaybe<Array<InputMaybe<AuthenticationProfiles_RoleCreateInput>>>;
  disconnect?: InputMaybe<Array<RoleKeyFilter>>;
  reconnect?: InputMaybe<Array<RoleKeyFilter>>;
  update?: InputMaybe<Array<InputMaybe<AuthenticationProfiles_RoleUpdateInput>>>;
};

/** Roles create input from authenticationProfiles */
export type AuthenticationProfiles_RoleCreateInput = {
  apiTokens?: InputMaybe<RolesApiTokensRelationInput>;
  authenticationProfiles?: InputMaybe<RolesAuthenticationProfilesRelationInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  permissions?: InputMaybe<PermissionsInput>;
  users?: InputMaybe<RolesUsersRelationInput>;
};

/** Roles update input from authenticationProfiles */
export type AuthenticationProfiles_RoleUpdateInput = {
  data: RoleUpdateInput;
  filter?: InputMaybe<RoleKeyFilter>;
};

export type AuthenticationSetting = {
  __typename?: 'AuthenticationSetting';
  _description?: Maybe<Scalars['String']['output']>;
  allowedCallbacks?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  allowedLogouts?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  allowedWebOrigins?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  connections?: Maybe<AuthenticationProfileConnectionOptions>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<User>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type AuthenticationSettingFilter = {
  AND?: InputMaybe<Array<AuthenticationSettingFilter>>;
  OR?: InputMaybe<Array<AuthenticationSettingFilter>>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<DateTimePredicate>;
  createdBy?: InputMaybe<UserFilter>;
  deletedAt?: InputMaybe<IntPredicate>;
  updatedAt?: InputMaybe<DateTimePredicate>;
};

/** AuthenticationSettings subscription payload */
export type AuthenticationSettingPayload = {
  __typename?: 'AuthenticationSettingPayload';
  mutation: MutationType;
  node?: Maybe<AuthenticationSetting>;
  previousValues?: Maybe<AuthenticationSetting>;
  updatedFields?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

/** AuthenticationSettings subscription filter */
export type AuthenticationSettingSubscriptionFilter = {
  mutation_in?: InputMaybe<Array<InputMaybe<MutationType>>>;
  node?: InputMaybe<AuthenticationSettingFilter>;
  updatedFields?: InputMaybe<UpdatedFieldsFilter>;
};

/** AuthenticationSettings update input */
export type AuthenticationSettingUpdateInput = {
  allowedCallbacks?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  allowedLogouts?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  allowedWebOrigins?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  connections?: InputMaybe<AuthenticationProfileConnectionsOptionsInput>;
};

/** Users create input from avatar */
export type Avatar_UserCreateInput = {
  avatar?: InputMaybe<UsersAvatarRelationInput>;
  avatarId?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  roles?: InputMaybe<UsersRolesRelationInput>;
  status?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};

/** Users update input from avatar */
export type Avatar_UserUpdateInput = {
  data: UserUpdateInput;
  filter?: InputMaybe<UserKeyFilter>;
};

export type AwsSignInfoResponse = {
  __typename?: 'AwsSignInfoResponse';
  fields: Scalars['JSON']['output'];
  path: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type BigIntPredicateHaving = {
  AND?: InputMaybe<Array<BigIntPredicateHaving>>;
  OR?: InputMaybe<Array<BigIntPredicateHaving>>;
  equals?: InputMaybe<Scalars['BigInt']['input']>;
  gt?: InputMaybe<Scalars['BigInt']['input']>;
  gte?: InputMaybe<Scalars['BigInt']['input']>;
  in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  is_empty?: InputMaybe<Scalars['Boolean']['input']>;
  is_not_empty?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['BigInt']['input']>;
  lte?: InputMaybe<Scalars['BigInt']['input']>;
  not_equals?: InputMaybe<Scalars['BigInt']['input']>;
  not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export type BillingCurrentPlanResponse = {
  __typename?: 'BillingCurrentPlanResponse';
  displayName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  nextPlan?: Maybe<BillingNextPlanResponse>;
  paymentDate?: Maybe<Scalars['DateTime']['output']>;
  pdf?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<WorkspaceStatus>;
  trialEnd?: Maybe<Scalars['DateTime']['output']>;
};

export enum BillingDetailsOrigin {
  Member = 'member',
  Organization = 'organization',
  Workspace = 'workspace'
}

export type BillingDetailsResponse = {
  __typename?: 'BillingDetailsResponse';
  brand?: Maybe<Scalars['String']['output']>;
  expMonth?: Maybe<Scalars['Int']['output']>;
  expYear?: Maybe<Scalars['Int']['output']>;
  last4?: Maybe<Scalars['String']['output']>;
  origin: BillingDetailsOrigin;
};

export type BillingInvoiceItem = {
  __typename?: 'BillingInvoiceItem';
  amountDue?: Maybe<Scalars['Float']['output']>;
  amountPaid?: Maybe<Scalars['Float']['output']>;
  amountRemaining?: Maybe<Scalars['Float']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  endingBalance?: Maybe<Scalars['Float']['output']>;
  id: Scalars['ID']['output'];
  invoicePdf?: Maybe<Scalars['String']['output']>;
  number?: Maybe<Scalars['String']['output']>;
  organization?: Maybe<BillingInvoiceItemOrganizationInfo>;
  paid?: Maybe<Scalars['Boolean']['output']>;
  periodEnd?: Maybe<Scalars['DateTime']['output']>;
  periodStart?: Maybe<Scalars['DateTime']['output']>;
  plan?: Maybe<BillingInvoiceItemPlanInfo>;
  project?: Maybe<BillingInvoiceItemProjectInfo>;
  status?: Maybe<Scalars['String']['output']>;
  total?: Maybe<Scalars['Float']['output']>;
};

export type BillingInvoiceItemOrganizationInfo = {
  __typename?: 'BillingInvoiceItemOrganizationInfo';
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type BillingInvoiceItemPlanInfo = {
  __typename?: 'BillingInvoiceItemPlanInfo';
  displayName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type BillingInvoiceItemProjectInfo = {
  __typename?: 'BillingInvoiceItemProjectInfo';
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export enum BillingInvoicesListFilterType {
  Customer = 'CUSTOMER',
  Project = 'PROJECT'
}

/** BillingInvoicesListResponse output */
export type BillingInvoicesListResponse = {
  __typename?: 'BillingInvoicesListResponse';
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<BillingInvoiceItem>;
};

export type BillingLimitMetricItem = {
  __typename?: 'BillingLimitMetricItem';
  description?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  showPriority?: Maybe<Scalars['Int']['output']>;
  tooltip?: Maybe<Scalars['String']['output']>;
  unit?: Maybe<Scalars['String']['output']>;
};

export type BillingMetricOverageItem = {
  __typename?: 'BillingMetricOverageItem';
  value?: Maybe<Scalars['Float']['output']>;
  warning?: Maybe<Scalars['String']['output']>;
};

export type BillingMetricUsageItem = {
  __typename?: 'BillingMetricUsageItem';
  limitMetric?: Maybe<BillingLimitMetricItem>;
  overage?: Maybe<BillingMetricOverageItem>;
  value?: Maybe<Scalars['Float']['output']>;
};

export type BillingMetricUsageQuotaItem = {
  __typename?: 'BillingMetricUsageQuotaItem';
  limitMetric?: Maybe<BillingLimitMetricItem>;
  value?: Maybe<Scalars['Float']['output']>;
};

/** BillingMetricUsageQuotasListResponse output */
export type BillingMetricUsageQuotasListResponse = {
  __typename?: 'BillingMetricUsageQuotasListResponse';
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<BillingMetricUsageQuotaItem>;
};

export type BillingMetricUsagesListFilter = {
  entryDate: DateTimePredicate;
};

/** BillingMetricUsagesListResponse output */
export type BillingMetricUsagesListResponse = {
  __typename?: 'BillingMetricUsagesListResponse';
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<BillingMetricUsageItem>;
};

export type BillingNextPlanResponse = {
  __typename?: 'BillingNextPlanResponse';
  displayName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  pdf?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Int']['output']>;
};

export type BillingPlanBaseInfo = {
  __typename?: 'BillingPlanBaseInfo';
  description?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  isCustom?: Maybe<Scalars['Boolean']['output']>;
  isLegacy?: Maybe<Scalars['Boolean']['output']>;
  limitMetrics?: Maybe<Array<Maybe<BillingPlanLimitMetricItem>>>;
  name?: Maybe<Scalars['String']['output']>;
  pdf?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Int']['output']>;
};

export type BillingPlanLimitMetricItem = {
  __typename?: 'BillingPlanLimitMetricItem';
  displayName?: Maybe<Scalars['String']['output']>;
  hardLimit?: Maybe<Scalars['Float']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  overagePrice?: Maybe<Scalars['Int']['output']>;
  softLimit?: Maybe<Scalars['Float']['output']>;
};

/** BillingPlanUpdateMutationInput */
export type BillingPlanUpdateMutationInput = {
  planId: Scalars['ID']['input'];
  projectID: Scalars['ID']['input'];
};

export type BoolPredicate = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  is_empty?: InputMaybe<Scalars['Boolean']['input']>;
  is_not_empty?: InputMaybe<Scalars['Boolean']['input']>;
  not_equals?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BoolPredicateHaving = {
  AND?: InputMaybe<Array<BoolPredicateHaving>>;
  OR?: InputMaybe<Array<BoolPredicateHaving>>;
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  is_empty?: InputMaybe<Scalars['Boolean']['input']>;
  is_not_empty?: InputMaybe<Scalars['Boolean']['input']>;
  not_equals?: InputMaybe<Scalars['Boolean']['input']>;
};

/** ChangePasswordInput */
export type ChangePasswordInput = {
  authProfileId: Scalars['ID']['input'];
  email: Scalars['String']['input'];
  newPassword: Scalars['String']['input'];
  oldPassword: Scalars['String']['input'];
  refreshToken: Scalars['String']['input'];
};

/** Authentication Profile Attributes for Cognito */
export type CognitoAuthProfileAttributes = {
  __typename?: 'CognitoAuthProfileAttributes';
  clientAuthDomain?: Maybe<Scalars['String']['output']>;
};

/** Computed field mode */
export enum ComputedFieldMode {
  Stored = 'STORED',
  Virtual = 'VIRTUAL'
}

/** Custom Table Field Type */
export type CustomTableField = {
  __typename?: 'CustomTableField';
  computedMode?: Maybe<ComputedFieldMode>;
  defaultValue?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  expression?: Maybe<Scalars['String']['output']>;
  fieldType?: Maybe<FieldType>;
  fieldTypeAttributes?: Maybe<FieldTypeAttributes>;
  isList: Scalars['Boolean']['output'];
  isRequired: Scalars['Boolean']['output'];
  isUnique?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** Date Field Attributes */
export type DateFieldTypeAttributes = {
  __typename?: 'DateFieldTypeAttributes';
  format: Scalars['String']['output'];
};

export enum DatePartFunctionType {
  Date = 'DATE',
  Day = 'DAY',
  DayName = 'DAY_NAME',
  DayOfMonth = 'DAY_OF_MONTH',
  DayOfWeek = 'DAY_OF_WEEK',
  DayOfYear = 'DAY_OF_YEAR',
  Hour = 'HOUR',
  LastDay = 'LAST_DAY',
  Microsecond = 'MICROSECOND',
  Minute = 'MINUTE',
  Month = 'MONTH',
  MonthName = 'MONTH_NAME',
  Quarter = 'QUARTER',
  Second = 'SECOND',
  Time = 'TIME',
  Week = 'WEEK',
  WeekDay = 'WEEK_DAY',
  WeekOfYear = 'WEEK_OF_YEAR',
  Year = 'YEAR',
  YearWeek = 'YEAR_WEEK'
}

export type DatePredicateHaving = {
  AND?: InputMaybe<Array<DatePredicateHaving>>;
  OR?: InputMaybe<Array<DatePredicateHaving>>;
  equals?: InputMaybe<Scalars['Date']['input']>;
  gt?: InputMaybe<Scalars['Date']['input']>;
  gte?: InputMaybe<Scalars['Date']['input']>;
  in?: InputMaybe<Array<Scalars['Date']['input']>>;
  is_empty?: InputMaybe<Scalars['Boolean']['input']>;
  is_not_empty?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['Date']['input']>;
  lte?: InputMaybe<Scalars['Date']['input']>;
  not_equals?: InputMaybe<Scalars['Date']['input']>;
  not_in?: InputMaybe<Array<Scalars['Date']['input']>>;
};

export type DateRelativePredicateType = {
  op?: InputMaybe<RelativePredicateOpEnum>;
  unit?: InputMaybe<RelativePredicateUnitEnum>;
  value: Scalars['String']['input'];
};

export type DateRelativePredicates = {
  gt?: InputMaybe<DateRelativePredicateType>;
  gte?: InputMaybe<DateRelativePredicateType>;
  lt?: InputMaybe<DateRelativePredicateType>;
  lte?: InputMaybe<DateRelativePredicateType>;
};

export type DateTimePredicate = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  is_empty?: InputMaybe<Scalars['Boolean']['input']>;
  is_not_empty?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
  not_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  relative?: InputMaybe<DateRelativePredicates>;
};

export type DateTimePredicateHaving = {
  AND?: InputMaybe<Array<DateTimePredicateHaving>>;
  OR?: InputMaybe<Array<DateTimePredicateHaving>>;
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  is_empty?: InputMaybe<Scalars['Boolean']['input']>;
  is_not_empty?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
  not_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

/** Date Type Format Enum */
export enum DateTypeFormatEnum {
  Date = 'DATE',
  Datetime = 'DATETIME'
}

/** DeployDataResponse */
export type DeployDataResponse = {
  __typename?: 'DeployDataResponse';
  buildName: Scalars['String']['output'];
  uploadBuildUrl: Scalars['String']['output'];
  uploadMetaDataUrl: Scalars['String']['output'];
};

export enum DeployModeEnum {
  Full = 'FULL',
  Functions = 'FUNCTIONS',
  Migrations = 'MIGRATIONS',
  OnlyPlugins = 'ONLY_PLUGINS',
  OnlyProject = 'ONLY_PROJECT'
}

/** DeployOptions */
export type DeployOptions = {
  extensionNames?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  mode?: InputMaybe<DeployModeEnum>;
  pluginNames?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export enum DeployStatusEnum {
  Compiling = 'compiling',
  CompleteError = 'complete_error',
  CompleteSuccess = 'complete_success',
  Deploying = 'deploying',
  Initialize = 'initialize',
  Preparing = 'preparing'
}

/** DeployStatusResult */
export type DeployStatusResult = {
  __typename?: 'DeployStatusResult';
  message?: Maybe<Scalars['String']['output']>;
  status: DeployStatusEnum;
};

/** DeployingBuildInput */
export type DeployingBuildInput = {
  buildName: Scalars['String']['input'];
  options?: InputMaybe<DeployOptions>;
};

export type DeploymentAbItemResponse = {
  __typename?: 'DeploymentABItemResponse';
  dateDeploy?: Maybe<Scalars['DateTime']['output']>;
  statusDeploy?: Maybe<Scalars['String']['output']>;
  urlDeploy?: Maybe<Scalars['String']['output']>;
  userDeploy?: Maybe<SystemMemberAccountInfo>;
  versionDeploy?: Maybe<Scalars['String']['output']>;
  versionFrontEnd?: Maybe<Scalars['String']['output']>;
};

export type EnvironmentBackupItem = {
  __typename?: 'EnvironmentBackupItem';
  name: Scalars['String']['output'];
  size: Scalars['Float']['output'];
};

export type EnvironmentItem = {
  __typename?: 'EnvironmentItem';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

/** EnvironmentSetupInput */
export type EnvironmentSetupInput = {
  deleteLock?: InputMaybe<Scalars['Boolean']['input']>;
  introspection?: InputMaybe<Scalars['Boolean']['input']>;
};

export type EnvironmentVariable = {
  __typename?: 'EnvironmentVariable';
  _description?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<User>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** EnvironmentVariables create input */
export type EnvironmentVariableCreateInput = {
  name: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

/** EnvironmentVariables create many input */
export type EnvironmentVariableCreateManyInput = {
  name: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

/** EnvironmentVariables delete input */
export type EnvironmentVariableDeleteInput = {
  force?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type EnvironmentVariableFilter = {
  AND?: InputMaybe<Array<EnvironmentVariableFilter>>;
  OR?: InputMaybe<Array<EnvironmentVariableFilter>>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<DateTimePredicate>;
  createdBy?: InputMaybe<UserFilter>;
  deletedAt?: InputMaybe<IntPredicate>;
  id?: InputMaybe<IdPredicate>;
  name?: InputMaybe<StringPredicate>;
  updatedAt?: InputMaybe<DateTimePredicate>;
  value?: InputMaybe<StringPredicate>;
};

export type EnvironmentVariableGroupBy = {
  first?: InputMaybe<Scalars['Int']['input']>;
  having?: InputMaybe<Having>;
  last?: InputMaybe<Scalars['Int']['input']>;
  query: EnvironmentVariableGroupByQuery;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<GroupBySort>>;
};

export type EnvironmentVariableGroupByQuery = {
  _group?: InputMaybe<Array<GroupIdentifiersGroupByField>>;
  createdAt?: InputMaybe<Array<GroupByField>>;
  createdBy?: InputMaybe<UserGroupByQuery>;
  id?: InputMaybe<Array<GroupByField>>;
  name?: InputMaybe<Array<GroupByField>>;
  updatedAt?: InputMaybe<Array<GroupByField>>;
  value?: InputMaybe<Array<GroupByField>>;
};

export type EnvironmentVariableKeyFilter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** EnvironmentVariableListResponse output */
export type EnvironmentVariableListResponse = {
  __typename?: 'EnvironmentVariableListResponse';
  /** List items count */
  count: Scalars['Int']['output'];
  /** Aggregated items */
  groups: Array<GroupByResponse>;
  /** List items */
  items: Array<EnvironmentVariable>;
};

/** EnvironmentVariableManyResponse output */
export type EnvironmentVariableManyResponse = {
  __typename?: 'EnvironmentVariableManyResponse';
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<EnvironmentVariable>;
};

/** No longer supported. Use `sort` instead. */
export enum EnvironmentVariableOrderBy {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  ValueAsc = 'value_ASC',
  ValueDesc = 'value_DESC'
}

/** EnvironmentVariables subscription payload */
export type EnvironmentVariablePayload = {
  __typename?: 'EnvironmentVariablePayload';
  mutation: MutationType;
  node?: Maybe<EnvironmentVariable>;
  previousValues?: Maybe<EnvironmentVariable>;
  updatedFields?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type EnvironmentVariableSort = {
  createdAt?: InputMaybe<SortOrder>;
  createdBy?: InputMaybe<UserSort>;
  deletedAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  value?: InputMaybe<SortOrder>;
};

/** EnvironmentVariables subscription filter */
export type EnvironmentVariableSubscriptionFilter = {
  mutation_in?: InputMaybe<Array<InputMaybe<MutationType>>>;
  node?: InputMaybe<EnvironmentVariableFilter>;
  updatedFields?: InputMaybe<UpdatedFieldsFilter>;
};

/** EnvironmentVariables update input */
export type EnvironmentVariableUpdateByFilterInput = {
  name?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
  value?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
};

/** EnvironmentVariables update input */
export type EnvironmentVariableUpdateInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** Facebook connection params */
export type FacebookOptions = {
  __typename?: 'FacebookOptions';
  app_id: Scalars['String']['output'];
  app_secret: Scalars['String']['output'];
  enabled: Scalars['Boolean']['output'];
};

/** Facebook connection params input */
export type FacebookOptionsInput = {
  app_id: Scalars['String']['input'];
  app_secret: Scalars['String']['input'];
  enabled: Scalars['Boolean']['input'];
};

/** Field Data Features */
export type FieldDataFeatures = {
  __typename?: 'FieldDataFeatures';
  create: Scalars['Boolean']['output'];
  sort: Scalars['Boolean']['output'];
  update: Scalars['Boolean']['output'];
};

/** Field Schema Features */
export type FieldSchemaFeatures = {
  __typename?: 'FieldSchemaFeatures';
  delete: Scalars['Boolean']['output'];
  update: Scalars['Boolean']['output'];
};

/** Field types */
export enum FieldType {
  Date = 'DATE',
  File = 'FILE',
  Geo = 'GEO',
  Id = 'ID',
  Json = 'JSON',
  MissingRelation = 'MISSING_RELATION',
  Number = 'NUMBER',
  OneWayRelation = 'ONE_WAY_RELATION',
  Relation = 'RELATION',
  Smart = 'SMART',
  Switch = 'SWITCH',
  Text = 'TEXT',
  Uuid = 'UUID'
}

/** Field Type Attributes */
export type FieldTypeAttributes = DateFieldTypeAttributes | FileFieldTypeAttributes | GeoFieldTypeAttributes | MissingRelationFieldTypeAttributes | NumberFieldTypeAttributes | SmartFieldTypeAttributes | SwitchFieldTypeAttributes | TextFieldTypeAttributes | UuidFieldTypeAttributes;

/** Field Type Attributes Input */
export type FieldTypeAttributesInput = {
  autoIncrement?: InputMaybe<Scalars['Boolean']['input']>;
  currency?: InputMaybe<Scalars['String']['input']>;
  expiration?: InputMaybe<Scalars['Int']['input']>;
  fieldSize?: InputMaybe<Scalars['Int']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  isBigInt?: InputMaybe<Scalars['Boolean']['input']>;
  listOptions?: InputMaybe<Array<Scalars['String']['input']>>;
  maxSize?: InputMaybe<Scalars['Int']['input']>;
  maxValue?: InputMaybe<Scalars['Float']['input']>;
  minValue?: InputMaybe<Scalars['Float']['input']>;
  precision?: InputMaybe<Scalars['Int']['input']>;
  srid?: InputMaybe<Scalars['Int']['input']>;
  typeRestrictions?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type File = {
  __typename?: 'File';
  _description?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<User>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  /** No longer supported. Use `downloadUrl` instead. */
  downloadStorageUrl?: Maybe<Scalars['String']['output']>;
  downloadUrl?: Maybe<Scalars['String']['output']>;
  /** No longer supported. Use `system.fileUploadSignInfo.AwsSignInfoResponse.fields` instead. */
  fields?: Maybe<Scalars['JSON']['output']>;
  fileId?: Maybe<Scalars['String']['output']>;
  filename?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  meta?: Maybe<Scalars['JSON']['output']>;
  mods?: Maybe<Scalars['JSON']['output']>;
  previewUrl?: Maybe<Scalars['String']['output']>;
  provider?: Maybe<Scalars['String']['output']>;
  public?: Maybe<Scalars['Boolean']['output']>;
  settings_landingPageImage?: Maybe<SettingListResponse>;
  settings_menuBarLogo?: Maybe<SettingListResponse>;
  shareUrl?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** No longer supported */
  uploadUrl?: Maybe<Scalars['String']['output']>;
  /** No longer supported */
  uploaded?: Maybe<Scalars['Boolean']['output']>;
  users_avatar?: Maybe<UserListResponse>;
};


export type FileSettings_LandingPageImageArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<SettingFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<SettingGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<SettingOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<SettingSort>>;
};


export type FileSettings_MenuBarLogoArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<SettingFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<SettingGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<SettingOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<SettingSort>>;
};


export type FileUsers_AvatarArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<UserFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<UserGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<UserOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<UserSort>>;
};

/** Files create input */
export type FileCreateInput = {
  fileId?: InputMaybe<Scalars['String']['input']>;
  filename?: InputMaybe<Scalars['String']['input']>;
  meta?: InputMaybe<Scalars['JSON']['input']>;
  mods?: InputMaybe<Scalars['JSON']['input']>;
  public?: InputMaybe<Scalars['Boolean']['input']>;
  users_avatar?: InputMaybe<FilesUsers_AvatarRelationInput>;
};

/** Files create many input */
export type FileCreateManyInput = {
  fileId?: InputMaybe<Scalars['String']['input']>;
  filename?: InputMaybe<Scalars['String']['input']>;
  meta?: InputMaybe<Scalars['JSON']['input']>;
  mods?: InputMaybe<Scalars['JSON']['input']>;
  public?: InputMaybe<Scalars['Boolean']['input']>;
  users_avatar?: InputMaybe<FilesUsers_AvatarManyRelationInput>;
};

/** Files delete input */
export type FileDeleteInput = {
  force?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** File Field Attributes */
export type FileFieldTypeAttributes = {
  __typename?: 'FileFieldTypeAttributes';
  expiration?: Maybe<Scalars['Int']['output']>;
  format: Scalars['String']['output'];
  maxSize?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Field is deprecated */
  showTitle?: Maybe<Scalars['Boolean']['output']>;
  /** @deprecated Field is deprecated */
  showUrl?: Maybe<Scalars['Boolean']['output']>;
  typeRestrictions?: Maybe<Array<Scalars['String']['output']>>;
};

/** FileFieldsPermissions create input */
export type FileFieldsPermissions = {
  createdAt?: InputMaybe<Scalars['Boolean']['input']>;
  downloadUrl?: InputMaybe<Scalars['Boolean']['input']>;
  fields?: InputMaybe<Scalars['Boolean']['input']>;
  fileId?: InputMaybe<Scalars['Boolean']['input']>;
  filename?: InputMaybe<Scalars['Boolean']['input']>;
  meta?: InputMaybe<Scalars['Boolean']['input']>;
  mods?: InputMaybe<Scalars['Boolean']['input']>;
  provider?: InputMaybe<Scalars['Boolean']['input']>;
  public?: InputMaybe<Scalars['Boolean']['input']>;
  shareUrl?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['Boolean']['input']>;
  uploadUrl?: InputMaybe<Scalars['Boolean']['input']>;
  uploaded?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FileFilter = {
  AND?: InputMaybe<Array<FileFilter>>;
  OR?: InputMaybe<Array<FileFilter>>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<DateTimePredicate>;
  createdBy?: InputMaybe<UserFilter>;
  deletedAt?: InputMaybe<IntPredicate>;
  downloadUrl?: InputMaybe<StringPredicate>;
  fileId?: InputMaybe<StringPredicate>;
  filename?: InputMaybe<StringPredicate>;
  id?: InputMaybe<IdPredicate>;
  provider?: InputMaybe<StringPredicate>;
  public?: InputMaybe<BoolPredicate>;
  settings_landingPageImage?: InputMaybe<SettingRelationFilter>;
  settings_menuBarLogo?: InputMaybe<SettingRelationFilter>;
  shareUrl?: InputMaybe<StringPredicate>;
  updatedAt?: InputMaybe<DateTimePredicate>;
  uploadUrl?: InputMaybe<StringPredicate>;
  uploaded?: InputMaybe<BoolPredicate>;
  users_avatar?: InputMaybe<UserRelationFilter>;
};

export type FileGroupBy = {
  first?: InputMaybe<Scalars['Int']['input']>;
  having?: InputMaybe<Having>;
  last?: InputMaybe<Scalars['Int']['input']>;
  query: FileGroupByQuery;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<GroupBySort>>;
};

export type FileGroupByQuery = {
  _group?: InputMaybe<Array<GroupIdentifiersGroupByField>>;
  createdAt?: InputMaybe<Array<GroupByField>>;
  createdBy?: InputMaybe<UserGroupByQuery>;
  downloadUrl?: InputMaybe<Array<GroupByField>>;
  fields?: InputMaybe<Array<GroupByField>>;
  fileId?: InputMaybe<Array<GroupByField>>;
  filename?: InputMaybe<Array<GroupByField>>;
  id?: InputMaybe<Array<GroupByField>>;
  meta?: InputMaybe<Array<GroupByField>>;
  mods?: InputMaybe<Array<GroupByField>>;
  provider?: InputMaybe<Array<GroupByField>>;
  public?: InputMaybe<Array<GroupByField>>;
  settings_landingPageImage?: InputMaybe<SettingGroupByQuery>;
  settings_menuBarLogo?: InputMaybe<SettingGroupByQuery>;
  shareUrl?: InputMaybe<Array<GroupByField>>;
  updatedAt?: InputMaybe<Array<GroupByField>>;
  uploadUrl?: InputMaybe<Array<GroupByField>>;
  uploaded?: InputMaybe<Array<GroupByField>>;
  users_avatar?: InputMaybe<UserGroupByQuery>;
};

export type FileKeyFilter = {
  fileId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** FileListResponse output */
export type FileListResponse = {
  __typename?: 'FileListResponse';
  /** List items count */
  count: Scalars['Int']['output'];
  /** Aggregated items */
  groups: Array<GroupByResponse>;
  /** List items */
  items: Array<File>;
};

/** FileManyResponse output */
export type FileManyResponse = {
  __typename?: 'FileManyResponse';
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<File>;
};

/** No longer supported. Use `sort` instead. */
export enum FileOrderBy {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  DownloadUrlAsc = 'downloadUrl_ASC',
  DownloadUrlDesc = 'downloadUrl_DESC',
  FieldsAsc = 'fields_ASC',
  FieldsDesc = 'fields_DESC',
  FileIdAsc = 'fileId_ASC',
  FileIdDesc = 'fileId_DESC',
  FilenameAsc = 'filename_ASC',
  FilenameDesc = 'filename_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MetaAsc = 'meta_ASC',
  MetaDesc = 'meta_DESC',
  ModsAsc = 'mods_ASC',
  ModsDesc = 'mods_DESC',
  ProviderAsc = 'provider_ASC',
  ProviderDesc = 'provider_DESC',
  PublicAsc = 'public_ASC',
  PublicDesc = 'public_DESC',
  ShareUrlAsc = 'shareUrl_ASC',
  ShareUrlDesc = 'shareUrl_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  UploadUrlAsc = 'uploadUrl_ASC',
  UploadUrlDesc = 'uploadUrl_DESC',
  UploadedAsc = 'uploaded_ASC',
  UploadedDesc = 'uploaded_DESC'
}

/** Files subscription payload */
export type FilePayload = {
  __typename?: 'FilePayload';
  mutation: MutationType;
  node?: Maybe<File>;
  previousValues?: Maybe<File>;
  updatedFields?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type FileSort = {
  createdAt?: InputMaybe<SortOrder>;
  createdBy?: InputMaybe<UserSort>;
  deletedAt?: InputMaybe<SortOrder>;
  downloadUrl?: InputMaybe<SortOrder>;
  fileId?: InputMaybe<SortOrder>;
  filename?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  provider?: InputMaybe<SortOrder>;
  public?: InputMaybe<SortOrder>;
  shareUrl?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  uploadUrl?: InputMaybe<SortOrder>;
  uploaded?: InputMaybe<SortOrder>;
};

export type FileStackSignInfoResponse = {
  __typename?: 'FileStackSignInfoResponse';
  apiKey: Scalars['String']['output'];
  path: Scalars['String']['output'];
  policy: Scalars['String']['output'];
  signature: Scalars['String']['output'];
};

/** Files subscription filter */
export type FileSubscriptionFilter = {
  mutation_in?: InputMaybe<Array<InputMaybe<MutationType>>>;
  node?: InputMaybe<FileFilter>;
  updatedFields?: InputMaybe<UpdatedFieldsFilter>;
};

/** File Type Format Enum */
export enum FileTypeFormatEnum {
  File = 'FILE',
  Image = 'IMAGE'
}

/** Files update input */
export type FileUpdateByFilterInput = {
  downloadUrl?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
  fields?: InputMaybe<Array<InputMaybe<UpdateByFilterJsonInput>>>;
  fileId?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
  filename?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
  meta?: InputMaybe<Array<InputMaybe<UpdateByFilterJsonInput>>>;
  mods?: InputMaybe<Array<InputMaybe<UpdateByFilterJsonInput>>>;
  provider?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
  public?: InputMaybe<Array<InputMaybe<UpdateByFilterBooleanSwitchInput>>>;
  shareUrl?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
  uploadUrl?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
  uploaded?: InputMaybe<Array<InputMaybe<UpdateByFilterBooleanSwitchInput>>>;
};

/** Files update input */
export type FileUpdateInput = {
  fileId?: InputMaybe<Scalars['String']['input']>;
  filename?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  meta?: InputMaybe<Scalars['JSON']['input']>;
  mods?: InputMaybe<Scalars['JSON']['input']>;
  public?: InputMaybe<Scalars['Boolean']['input']>;
  users_avatar?: InputMaybe<FilesUsers_AvatarUpdateRelationInput>;
};

export type FileUploadInfoResponse = {
  __typename?: 'FileUploadInfoResponse';
  apiKey: Scalars['String']['output'];
  path: Scalars['String']['output'];
  policy: Scalars['String']['output'];
  signature: Scalars['String']['output'];
};

export type File_PermissionFilter = {
  AND?: InputMaybe<Array<File_PermissionFilter>>;
  OR?: InputMaybe<Array<File_PermissionFilter>>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<DateTimePredicate>;
  createdBy?: InputMaybe<User_PermissionFilter>;
  deletedAt?: InputMaybe<IntPredicate>;
  downloadUrl?: InputMaybe<StringPredicate>;
  fileId?: InputMaybe<StringPredicate>;
  filename?: InputMaybe<StringPredicate>;
  id?: InputMaybe<IdPredicate>;
  provider?: InputMaybe<StringPredicate>;
  public?: InputMaybe<BoolPredicate>;
  settings_landingPageImage?: InputMaybe<Setting_PermissionRelationFilter>;
  settings_menuBarLogo?: InputMaybe<Setting_PermissionRelationFilter>;
  shareUrl?: InputMaybe<StringPredicate>;
  updatedAt?: InputMaybe<DateTimePredicate>;
  uploadUrl?: InputMaybe<StringPredicate>;
  uploaded?: InputMaybe<BoolPredicate>;
  users_avatar?: InputMaybe<User_PermissionRelationFilter>;
};

/** Files relation input */
export type FilesUsers_AvatarManyRelationInput = {
  connect?: InputMaybe<Array<UserKeyFilter>>;
};

/** Files relation input */
export type FilesUsers_AvatarRelationInput = {
  connect?: InputMaybe<Array<UserKeyFilter>>;
  create?: InputMaybe<Array<InputMaybe<Avatar_UserCreateInput>>>;
};

/** Files relation input */
export type FilesUsers_AvatarUpdateRelationInput = {
  connect?: InputMaybe<Array<UserKeyFilter>>;
  create?: InputMaybe<Array<InputMaybe<Avatar_UserCreateInput>>>;
  disconnect?: InputMaybe<Array<UserKeyFilter>>;
  reconnect?: InputMaybe<Array<UserKeyFilter>>;
  update?: InputMaybe<Array<InputMaybe<Avatar_UserUpdateInput>>>;
};

export type FloatPredicateHaving = {
  AND?: InputMaybe<Array<FloatPredicateHaving>>;
  OR?: InputMaybe<Array<FloatPredicateHaving>>;
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  is_empty?: InputMaybe<Scalars['Boolean']['input']>;
  is_not_empty?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
  not_in?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type FrontendUtilizationAbResponse = {
  __typename?: 'FrontendUtilizationABResponse';
  CDN?: Maybe<Scalars['Boolean']['output']>;
  assets?: Maybe<Scalars['Int']['output']>;
  customStates?: Maybe<Scalars['Int']['output']>;
  functions?: Maybe<Scalars['Int']['output']>;
  layouts?: Maybe<Scalars['Int']['output']>;
  libraries?: Maybe<Scalars['Int']['output']>;
  pages?: Maybe<Scalars['Int']['output']>;
  requests?: Maybe<Scalars['Int']['output']>;
  resources?: Maybe<Scalars['Int']['output']>;
};

/** FunctionInfo */
export type FunctionInfo = {
  application?: Maybe<Application>;
  description?: Maybe<Scalars['String']['output']>;
  functionType: FunctionType;
  name: Scalars['String']['output'];
};

/** FunctionInfoFilter */
export type FunctionInfoFilter = {
  description?: InputMaybe<Scalars['String']['input']>;
  functionType?: InputMaybe<FunctionType>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** FunctionInfoOrderBy */
export enum FunctionInfoOrderBy {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  FunctionTypeAsc = 'functionType_ASC',
  FunctionTypeDesc = 'functionType_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC'
}

/** FunctionListResponse output */
export type FunctionListResponse = {
  __typename?: 'FunctionListResponse';
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<FunctionInfo>;
};

/** FunctionResolverInfo */
export type FunctionResolverInfo = FunctionInfo & {
  __typename?: 'FunctionResolverInfo';
  application?: Maybe<Application>;
  description?: Maybe<Scalars['String']['output']>;
  functionType: FunctionType;
  gqlType: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

/** FunctionTaskInfo */
export type FunctionTaskInfo = FunctionInfo & {
  __typename?: 'FunctionTaskInfo';
  application?: Maybe<Application>;
  description?: Maybe<Scalars['String']['output']>;
  functionType: FunctionType;
  name: Scalars['String']['output'];
  scheduleExpression?: Maybe<Scalars['String']['output']>;
};

/** FunctionTriggerInfo */
export type FunctionTriggerInfo = FunctionInfo & {
  __typename?: 'FunctionTriggerInfo';
  application?: Maybe<Application>;
  description?: Maybe<Scalars['String']['output']>;
  functionType: FunctionType;
  name: Scalars['String']['output'];
  operation: Scalars['String']['output'];
  tableName: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

/** FunctionType */
export enum FunctionType {
  Resolver = 'resolver',
  Schedule = 'schedule',
  Task = 'task',
  Trigger = 'trigger',
  Webhook = 'webhook'
}

/** FunctionWebhookInfo */
export type FunctionWebhookInfo = FunctionInfo & {
  __typename?: 'FunctionWebhookInfo';
  application?: Maybe<Application>;
  description?: Maybe<Scalars['String']['output']>;
  functionType: FunctionType;
  httpMethod: Scalars['String']['output'];
  name: Scalars['String']['output'];
  workspaceFullPath: Scalars['String']['output'];
  workspaceRelativePath: Scalars['String']['output'];
};

/** Geo Field Attributes */
export type GeoFieldTypeAttributes = {
  __typename?: 'GeoFieldTypeAttributes';
  format: Scalars['String']['output'];
  srid?: Maybe<Scalars['Int']['output']>;
};

/** Github connection params */
export type GithubOptions = {
  __typename?: 'GithubOptions';
  client_id: Scalars['String']['output'];
  client_secret: Scalars['String']['output'];
  enabled: Scalars['Boolean']['output'];
};

/** Github connection params input */
export type GithubOptionsInput = {
  client_id: Scalars['String']['input'];
  client_secret: Scalars['String']['input'];
  enabled: Scalars['Boolean']['input'];
};

/** Google connection params */
export type GoogleOptions = {
  __typename?: 'GoogleOptions';
  client_id: Scalars['String']['output'];
  client_secret: Scalars['String']['output'];
  enabled: Scalars['Boolean']['output'];
};

/** Google connection params input */
export type GoogleOptionsInput = {
  client_id: Scalars['String']['input'];
  client_secret: Scalars['String']['input'];
  enabled: Scalars['Boolean']['input'];
};

/** GraphQLCreateFileCustomInput */
export type GraphQlCreateFileCustomInput = {
  fileId?: InputMaybe<Scalars['String']['input']>;
  filename?: InputMaybe<Scalars['String']['input']>;
  public?: InputMaybe<Scalars['Boolean']['input']>;
};

/** GraphQLCreateFileItemInput */
export type GraphQlCreateFileItemInput = {
  create?: InputMaybe<GraphQlCreateFileCustomInput>;
};

/** GraphQLFileItemResponse */
export type GraphQlFileItemResponse = {
  __typename?: 'GraphQLFileItemResponse';
  downloadUrl?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};

export type GroupByField = {
  as?: InputMaybe<Scalars['String']['input']>;
  fn?: InputMaybe<Array<InputMaybe<GroupByFieldFunction>>>;
};

export type GroupByFieldFunction = {
  abs?: InputMaybe<Scalars['Boolean']['input']>;
  aggregate?: InputMaybe<AggregationFunctionType>;
  ascii?: InputMaybe<Scalars['Boolean']['input']>;
  bitLength?: InputMaybe<Scalars['Boolean']['input']>;
  ceil?: InputMaybe<Scalars['Boolean']['input']>;
  charLength?: InputMaybe<Scalars['Boolean']['input']>;
  crc32?: InputMaybe<Scalars['Boolean']['input']>;
  datePart?: InputMaybe<DatePartFunctionType>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  floor?: InputMaybe<Scalars['Boolean']['input']>;
  hex?: InputMaybe<Scalars['Boolean']['input']>;
  ifNull?: InputMaybe<Scalars['String']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  left?: InputMaybe<Scalars['Int']['input']>;
  length?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<PatternFunctionArguments>;
  locate?: InputMaybe<LocateFunctionArguments>;
  lower?: InputMaybe<Scalars['Boolean']['input']>;
  lpad?: InputMaybe<StringPadFunctionArguments>;
  ltrim?: InputMaybe<Scalars['Boolean']['input']>;
  mod?: InputMaybe<Scalars['Int']['input']>;
  notLike?: InputMaybe<PatternFunctionArguments>;
  nullIf?: InputMaybe<Scalars['String']['input']>;
  replace?: InputMaybe<ReplaceFunctionArguments>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
  right?: InputMaybe<Scalars['Int']['input']>;
  round?: InputMaybe<Scalars['Int']['input']>;
  rpad?: InputMaybe<StringPadFunctionArguments>;
  rtrim?: InputMaybe<Scalars['Boolean']['input']>;
  sign?: InputMaybe<Scalars['Boolean']['input']>;
  substring?: InputMaybe<SubstringFunctionArguments>;
  trim?: InputMaybe<TrimFunctionArguments>;
  truncate?: InputMaybe<Scalars['Int']['input']>;
  upper?: InputMaybe<Scalars['Boolean']['input']>;
};

export type GroupByResponse = {
  __typename?: 'GroupByResponse';
  ApiTokenGroup: ApiTokenListResponse;
  AuthenticationProfileGroup: AuthenticationProfileListResponse;
  BigInt?: Maybe<Scalars['BigInt']['output']>;
  Boolean?: Maybe<Scalars['Boolean']['output']>;
  Date?: Maybe<Scalars['Date']['output']>;
  DateTime?: Maybe<Scalars['DateTime']['output']>;
  EnvironmentVariableGroup: EnvironmentVariableListResponse;
  FileGroup: FileListResponse;
  Float?: Maybe<Scalars['Float']['output']>;
  GroupIds?: Maybe<Array<Scalars['ID']['output']>>;
  ID?: Maybe<Scalars['ID']['output']>;
  Int?: Maybe<Scalars['Int']['output']>;
  JSON?: Maybe<Scalars['JSON']['output']>;
  RoleGroup: RoleListResponse;
  String?: Maybe<Scalars['String']['output']>;
  TaskGroup: TaskListResponse;
  Task_userGroup: Task_UserListResponse;
  UserGroup: UserListResponse;
};


export type GroupByResponseApiTokenGroupArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ApiTokenFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<ApiTokenGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<ApiTokenOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ApiTokenSort>>;
};


export type GroupByResponseAuthenticationProfileGroupArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<AuthenticationProfileFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<AuthenticationProfileGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<AuthenticationProfileOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<AuthenticationProfileSort>>;
};


export type GroupByResponseEnvironmentVariableGroupArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<EnvironmentVariableFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<EnvironmentVariableGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<EnvironmentVariableOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<EnvironmentVariableSort>>;
};


export type GroupByResponseFileGroupArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<FileFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<FileGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<FileOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<FileSort>>;
};


export type GroupByResponseRoleGroupArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<RoleFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<RoleGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<RoleOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<RoleSort>>;
};


export type GroupByResponseTaskGroupArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<TaskFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<TaskGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<TaskOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<TaskSort>>;
};


export type GroupByResponseTask_UserGroupArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Task_UserFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<Task_UserGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<Task_UserOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Task_UserSort>>;
};


export type GroupByResponseUserGroupArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<UserFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<UserGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<UserOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<UserSort>>;
};

export type GroupBySort = {
  alias: Scalars['String']['input'];
  direction: SortOrder;
};

export type GroupIdentifiersGroupByField = {
  as: Scalars['String']['input'];
};

export type Having = {
  AND?: InputMaybe<Array<Having>>;
  OR?: InputMaybe<Array<Having>>;
  alias?: InputMaybe<Scalars['String']['input']>;
  bigint?: InputMaybe<BigIntPredicateHaving>;
  bool?: InputMaybe<BoolPredicateHaving>;
  date?: InputMaybe<DatePredicateHaving>;
  datetime?: InputMaybe<DateTimePredicateHaving>;
  float?: InputMaybe<FloatPredicateHaving>;
  id?: InputMaybe<IdPredicateHaving>;
  int?: InputMaybe<IntPredicateHaving>;
  string?: InputMaybe<StringPredicateHaving>;
};

export type IdPredicate = {
  contains?: InputMaybe<Scalars['ID']['input']>;
  ends_with?: InputMaybe<Scalars['ID']['input']>;
  equals?: InputMaybe<Scalars['ID']['input']>;
  gt?: InputMaybe<Scalars['ID']['input']>;
  gte?: InputMaybe<Scalars['ID']['input']>;
  in?: InputMaybe<Array<Scalars['ID']['input']>>;
  is_empty?: InputMaybe<Scalars['Boolean']['input']>;
  is_not_empty?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['ID']['input']>;
  lte?: InputMaybe<Scalars['ID']['input']>;
  not_contains?: InputMaybe<Scalars['ID']['input']>;
  not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  not_equals?: InputMaybe<Scalars['ID']['input']>;
  not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  starts_with?: InputMaybe<Scalars['ID']['input']>;
};

export type IdPredicateHaving = {
  AND?: InputMaybe<Array<IdPredicateHaving>>;
  OR?: InputMaybe<Array<IdPredicateHaving>>;
  contains?: InputMaybe<Scalars['ID']['input']>;
  ends_with?: InputMaybe<Scalars['ID']['input']>;
  equals?: InputMaybe<Scalars['ID']['input']>;
  gt?: InputMaybe<Scalars['ID']['input']>;
  gte?: InputMaybe<Scalars['ID']['input']>;
  in?: InputMaybe<Array<Scalars['ID']['input']>>;
  is_empty?: InputMaybe<Scalars['Boolean']['input']>;
  is_not_empty?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['ID']['input']>;
  lte?: InputMaybe<Scalars['ID']['input']>;
  not_contains?: InputMaybe<Scalars['ID']['input']>;
  not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  not_equals?: InputMaybe<Scalars['ID']['input']>;
  not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  starts_with?: InputMaybe<Scalars['ID']['input']>;
};

/** ImportedTable */
export type ImportedTable = {
  __typename?: 'ImportedTable';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

/** Inbox Events List Filter */
export type InboxEventsListFilter = {
  isCompleted?: InputMaybe<IntPredicate>;
};

/** Table Create Index Input */
export type IndexCreateInput = {
  columns: Array<TableIndexColumnInput>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  tableId: Scalars['ID']['input'];
  type: TableIndexType;
};

/** Table Delete Index Input */
export type IndexDeleteInput = {
  id: Scalars['ID']['input'];
};

/** Table Update Index Input */
export type IndexUpdateInput = {
  columns?: InputMaybe<Array<TableIndexColumnInput>>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<TableIndexType>;
};

export type IntPredicate = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  is_empty?: InputMaybe<Scalars['Boolean']['input']>;
  is_not_empty?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not_equals?: InputMaybe<Scalars['Int']['input']>;
  not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type IntPredicateHaving = {
  AND?: InputMaybe<Array<IntPredicateHaving>>;
  OR?: InputMaybe<Array<IntPredicateHaving>>;
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  is_empty?: InputMaybe<Scalars['Boolean']['input']>;
  is_not_empty?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not_equals?: InputMaybe<Scalars['Int']['input']>;
  not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type IntrospectionQueryResponse = {
  __typename?: 'IntrospectionQueryResponse';
  url: Scalars['String']['output'];
};

/** Invited By Name */
export type InvitedByName = {
  __typename?: 'InvitedByName';
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  workspaceName?: Maybe<Scalars['String']['output']>;
};

/** InvokeData */
export type InvokeData = {
  functionName: Scalars['String']['input'];
  inputArgs?: InputMaybe<Scalars['String']['input']>;
};

/** InvokeFunctionResponse */
export type InvokeFunctionResponse = {
  __typename?: 'InvokeFunctionResponse';
  responseData: Scalars['String']['output'];
};

export type LocateFunctionArguments = {
  pos?: InputMaybe<Scalars['Int']['input']>;
  str: Scalars['String']['input'];
};

/** LoginResponse */
export type LoginResponse = {
  __typename?: 'LoginResponse';
  auth?: Maybe<Auth>;
  success?: Maybe<Scalars['Boolean']['output']>;
  workspaces?: Maybe<Array<WorkspaceInfo>>;
};

/** MissingRelation */
export type MissingRelation = {
  __typename?: 'MissingRelation';
  table: Scalars['String']['output'];
};

/** MissingRelation Field Attributes */
export type MissingRelationFieldTypeAttributes = {
  __typename?: 'MissingRelationFieldTypeAttributes';
  missingTable: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  apiTokenCreate: ApiTokenResponse;
  apiTokenDelete?: Maybe<SuccessResponse>;
  apiTokenDeleteByFilter?: Maybe<SuccessResponse>;
  apiTokenDestroy?: Maybe<SuccessResponse>;
  apiTokenDestroyByFilter?: Maybe<SuccessResponse>;
  apiTokenRestore: ApiToken;
  apiTokenUpdate: ApiToken;
  apiTokenUpdateByFilter: ApiTokenManyResponse;
  /** @deprecated No longer supported. Use `system.applicationDelete` instead. */
  applicationDelete?: Maybe<SuccessResponse>;
  /** @deprecated No longer supported. Use `system.applicationInstall` instead. */
  applicationInstall?: Maybe<Application>;
  /** @deprecated No longer supported. Use `system.applicationUpdate` instead. */
  applicationUpdate?: Maybe<Application>;
  authenticationProfileCreate: AuthenticationProfile;
  authenticationProfileCreateMany: AuthenticationProfileManyResponse;
  authenticationProfileDelete?: Maybe<SuccessResponse>;
  authenticationProfileDeleteByFilter?: Maybe<SuccessResponse>;
  authenticationProfileDestroy?: Maybe<SuccessResponse>;
  authenticationProfileDestroyByFilter?: Maybe<SuccessResponse>;
  authenticationProfileRestore: AuthenticationProfile;
  authenticationProfileUpdate: AuthenticationProfile;
  authenticationProfileUpdateByFilter: AuthenticationProfileManyResponse;
  authenticationSettingsUpdate: AuthenticationSetting;
  /** @deprecated No longer supported. Use `system.billingPlanUpdate` instead. */
  billingPlanUpdate?: Maybe<BillingCurrentPlanResponse>;
  /** @deprecated No longer supported. Use `system.deploy` instead. */
  deploy?: Maybe<Scalars['Boolean']['output']>;
  environmentVariableCreate: EnvironmentVariable;
  environmentVariableCreateMany: EnvironmentVariableManyResponse;
  environmentVariableDelete?: Maybe<SuccessResponse>;
  environmentVariableDeleteByFilter?: Maybe<SuccessResponse>;
  environmentVariableDestroy?: Maybe<SuccessResponse>;
  environmentVariableDestroyByFilter?: Maybe<SuccessResponse>;
  environmentVariableRestore: EnvironmentVariable;
  environmentVariableUpdate: EnvironmentVariable;
  environmentVariableUpdateByFilter: EnvironmentVariableManyResponse;
  /** @deprecated No longer supported. Use `system.fieldCreate` instead. */
  fieldCreate: TableField;
  /** @deprecated No longer supported. Use `system.fieldDelete` instead. */
  fieldDelete: SuccessResponse;
  /** @deprecated No longer supported. Use `system.fieldUpdate` instead. */
  fieldUpdate: TableField;
  /** @deprecated No longer supported. Use `system.fieldUpdatePosition` instead. */
  fieldUpdatePosition: SuccessResponse;
  fileCreate: File;
  fileCreateMany: FileManyResponse;
  fileDelete?: Maybe<SuccessResponse>;
  fileDeleteByFilter?: Maybe<SuccessResponse>;
  fileDestroy?: Maybe<SuccessResponse>;
  fileDestroyByFilter?: Maybe<SuccessResponse>;
  fileRestore: File;
  fileUpdate: File;
  fileUpdateByFilter: FileManyResponse;
  indexCreate: TableIndex;
  indexDelete?: Maybe<SuccessResponse>;
  indexUpdate: TableIndex;
  /** @deprecated No longer supported. Use `system.invoke` instead. */
  invoke?: Maybe<InvokeFunctionResponse>;
  /** @deprecated No longer supported. Use `system.prepareDeploy` instead. */
  prepareDeploy: DeployDataResponse;
  roleCreate: Role;
  roleCreateMany: RoleManyResponse;
  roleDelete?: Maybe<SuccessResponse>;
  roleDeleteByFilter?: Maybe<SuccessResponse>;
  roleDestroy?: Maybe<SuccessResponse>;
  roleDestroyByFilter?: Maybe<SuccessResponse>;
  roleRestore: Role;
  roleUpdate: Role;
  roleUpdateByFilter: RoleManyResponse;
  sendInvitationTo8base?: Maybe<SuccessResponse>;
  settingsUpdate: Setting;
  system?: Maybe<SystemMutation>;
  /** @deprecated No longer supported. Use `system.tableCreate` instead. */
  tableCreate: Table;
  /** @deprecated No longer supported. Use `system.tableDelete` instead. */
  tableDelete: SuccessResponse;
  /** @deprecated No longer supported. Use `system.tableUpdate` instead. */
  tableUpdate: Table;
  taskCreate: Task;
  taskCreateMany: TaskManyResponse;
  taskDelete?: Maybe<SuccessResponse>;
  taskDeleteByFilter?: Maybe<SuccessResponse>;
  taskDestroy?: Maybe<SuccessResponse>;
  taskDestroyByFilter?: Maybe<SuccessResponse>;
  taskRestore: Task;
  taskUpdate: Task;
  taskUpdateByFilter: TaskManyResponse;
  task_userCreate: Task_User;
  task_userCreateMany: Task_UserManyResponse;
  task_userDelete?: Maybe<SuccessResponse>;
  task_userDeleteByFilter?: Maybe<SuccessResponse>;
  task_userDestroy?: Maybe<SuccessResponse>;
  task_userDestroyByFilter?: Maybe<SuccessResponse>;
  task_userRestore: Task_User;
  task_userUpdate: Task_User;
  task_userUpdateByFilter: Task_UserManyResponse;
  userChangePassword?: Maybe<SuccessResponse>;
  userCreate: User;
  userCreateMany: UserManyResponse;
  userDelete?: Maybe<SuccessResponse>;
  userDeleteByFilter?: Maybe<SuccessResponse>;
  userDestroy?: Maybe<SuccessResponse>;
  userDestroyByFilter?: Maybe<SuccessResponse>;
  userLogin?: Maybe<LoginResponse>;
  userPasswordForgot?: Maybe<SuccessResponse>;
  userPasswordForgotConfirm?: Maybe<SuccessResponse>;
  userRefreshToken?: Maybe<Auth>;
  userRestore: User;
  /** @deprecated No longer supported. Use `userSignUpWithToken` instead. */
  userSignUp: User;
  /** @deprecated No longer supported. Use `userVerificationEmailResend` instead. */
  userSignUpResend?: Maybe<SuccessResponse>;
  userSignUpWithPassword: User;
  userSignUpWithToken: User;
  userUpdate: User;
  userUpdateByFilter: UserManyResponse;
  userVerificationEmailResend?: Maybe<SuccessResponse>;
  /** @deprecated No longer supported. Use `system.viewCreate` instead. */
  viewCreate: Table;
  viewUpdate: Table;
  /** @deprecated No longer supported. Use `system.workspaceCreate` instead. */
  workspaceCreate?: Maybe<WorkspaceCreateResponse>;
  /** @deprecated No longer supported. Use `system.workspaceCreateAsync` instead. */
  workspaceCreateAsync?: Maybe<WorkspaceCreateResponse>;
  /** @deprecated No longer supported. Use `system.workspaceDelete` instead. */
  workspaceDelete?: Maybe<SuccessResponse>;
  /** @deprecated No longer supported. Use `system.workspaceLeave` instead. */
  workspaceLeave?: Maybe<SuccessResponse>;
  /** @deprecated No longer supported. Use `system.workspaceUpdate` instead. */
  workspaceUpdate?: Maybe<WorkspaceUpdateResponse>;
};


export type MutationApiTokenCreateArgs = {
  data: ApiTokenCreateInput;
};


export type MutationApiTokenDeleteArgs = {
  data?: InputMaybe<ApiTokenDeleteInput>;
  filter?: InputMaybe<ApiTokenKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationApiTokenDeleteByFilterArgs = {
  filter: ApiTokenFilter;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationApiTokenDestroyArgs = {
  filter?: InputMaybe<ApiTokenKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationApiTokenDestroyByFilterArgs = {
  filter: ApiTokenFilter;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationApiTokenRestoreArgs = {
  id: Scalars['String']['input'];
};


export type MutationApiTokenUpdateArgs = {
  data: ApiTokenUpdateInput;
  destroyDetached?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<ApiTokenKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationApiTokenUpdateByFilterArgs = {
  data: ApiTokenUpdateByFilterInput;
  filter?: InputMaybe<ApiTokenFilter>;
};


export type MutationApplicationDeleteArgs = {
  data: ApplicationDeleteMutationInput;
};


export type MutationApplicationInstallArgs = {
  data: ApplicationInstallInput;
};


export type MutationApplicationUpdateArgs = {
  data: ApplicationUpdateInput;
};


export type MutationAuthenticationProfileCreateArgs = {
  data: AuthenticationProfileCreateInput;
};


export type MutationAuthenticationProfileCreateManyArgs = {
  data: Array<InputMaybe<AuthenticationProfileCreateManyInput>>;
};


export type MutationAuthenticationProfileDeleteArgs = {
  data?: InputMaybe<AuthenticationProfileDeleteInput>;
  filter?: InputMaybe<AuthenticationProfileKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationAuthenticationProfileDeleteByFilterArgs = {
  filter: AuthenticationProfileFilter;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationAuthenticationProfileDestroyArgs = {
  filter?: InputMaybe<AuthenticationProfileKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationAuthenticationProfileDestroyByFilterArgs = {
  filter: AuthenticationProfileFilter;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationAuthenticationProfileRestoreArgs = {
  id: Scalars['String']['input'];
};


export type MutationAuthenticationProfileUpdateArgs = {
  data: AuthenticationProfileUpdateInput;
  destroyDetached?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<AuthenticationProfileKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationAuthenticationProfileUpdateByFilterArgs = {
  data: AuthenticationProfileUpdateByFilterInput;
  filter?: InputMaybe<AuthenticationProfileFilter>;
};


export type MutationAuthenticationSettingsUpdateArgs = {
  data: AuthenticationSettingUpdateInput;
};


export type MutationBillingPlanUpdateArgs = {
  data: BillingPlanUpdateMutationInput;
};


export type MutationDeployArgs = {
  data?: InputMaybe<DeployingBuildInput>;
};


export type MutationEnvironmentVariableCreateArgs = {
  data: EnvironmentVariableCreateInput;
};


export type MutationEnvironmentVariableCreateManyArgs = {
  data: Array<InputMaybe<EnvironmentVariableCreateManyInput>>;
};


export type MutationEnvironmentVariableDeleteArgs = {
  data?: InputMaybe<EnvironmentVariableDeleteInput>;
  filter?: InputMaybe<EnvironmentVariableKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationEnvironmentVariableDeleteByFilterArgs = {
  filter: EnvironmentVariableFilter;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationEnvironmentVariableDestroyArgs = {
  filter?: InputMaybe<EnvironmentVariableKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationEnvironmentVariableDestroyByFilterArgs = {
  filter: EnvironmentVariableFilter;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationEnvironmentVariableRestoreArgs = {
  id: Scalars['String']['input'];
};


export type MutationEnvironmentVariableUpdateArgs = {
  data: EnvironmentVariableUpdateInput;
  destroyDetached?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<EnvironmentVariableKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationEnvironmentVariableUpdateByFilterArgs = {
  data: EnvironmentVariableUpdateByFilterInput;
  filter?: InputMaybe<EnvironmentVariableFilter>;
};


export type MutationFieldCreateArgs = {
  data: TableFieldCreateInput;
};


export type MutationFieldDeleteArgs = {
  data: TableFieldDeleteInput;
};


export type MutationFieldUpdateArgs = {
  data: TableFieldUpdateInput;
};


export type MutationFieldUpdatePositionArgs = {
  data: TableFieldPositionUpdateInput;
};


export type MutationFileCreateArgs = {
  data: FileCreateInput;
};


export type MutationFileCreateManyArgs = {
  data: Array<InputMaybe<FileCreateManyInput>>;
};


export type MutationFileDeleteArgs = {
  data?: InputMaybe<FileDeleteInput>;
  filter?: InputMaybe<FileKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationFileDeleteByFilterArgs = {
  filter: FileFilter;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationFileDestroyArgs = {
  filter?: InputMaybe<FileKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationFileDestroyByFilterArgs = {
  filter: FileFilter;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationFileRestoreArgs = {
  id: Scalars['String']['input'];
};


export type MutationFileUpdateArgs = {
  data: FileUpdateInput;
  destroyDetached?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<FileKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationFileUpdateByFilterArgs = {
  data: FileUpdateByFilterInput;
  filter?: InputMaybe<FileFilter>;
};


export type MutationIndexCreateArgs = {
  data: IndexCreateInput;
};


export type MutationIndexDeleteArgs = {
  data: IndexDeleteInput;
};


export type MutationIndexUpdateArgs = {
  data: IndexUpdateInput;
};


export type MutationInvokeArgs = {
  data?: InputMaybe<InvokeData>;
};


export type MutationRoleCreateArgs = {
  data: RoleCreateInput;
};


export type MutationRoleCreateManyArgs = {
  data: Array<InputMaybe<RoleCreateManyInput>>;
};


export type MutationRoleDeleteArgs = {
  data?: InputMaybe<RoleDeleteInput>;
  filter?: InputMaybe<RoleKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationRoleDeleteByFilterArgs = {
  filter: RoleFilter;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationRoleDestroyArgs = {
  filter?: InputMaybe<RoleKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationRoleDestroyByFilterArgs = {
  filter: RoleFilter;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationRoleRestoreArgs = {
  id: Scalars['String']['input'];
};


export type MutationRoleUpdateArgs = {
  data: RoleUpdateInput;
  destroyDetached?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<RoleKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationRoleUpdateByFilterArgs = {
  data: RoleUpdateByFilterInput;
  filter?: InputMaybe<RoleFilter>;
};


export type MutationSendInvitationTo8baseArgs = {
  inviteEmail: Scalars['String']['input'];
};


export type MutationSettingsUpdateArgs = {
  data: SettingUpdateInput;
};


export type MutationTableCreateArgs = {
  data: TableCreateInput;
};


export type MutationTableDeleteArgs = {
  data: TableDeleteInput;
};


export type MutationTableUpdateArgs = {
  data: TableUpdateInput;
};


export type MutationTaskCreateArgs = {
  data: TaskCreateInput;
};


export type MutationTaskCreateManyArgs = {
  data: Array<InputMaybe<TaskCreateManyInput>>;
};


export type MutationTaskDeleteArgs = {
  data?: InputMaybe<TaskDeleteInput>;
  filter?: InputMaybe<TaskKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationTaskDeleteByFilterArgs = {
  filter: TaskFilter;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationTaskDestroyArgs = {
  filter?: InputMaybe<TaskKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationTaskDestroyByFilterArgs = {
  filter: TaskFilter;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationTaskRestoreArgs = {
  id: Scalars['String']['input'];
};


export type MutationTaskUpdateArgs = {
  data: TaskUpdateInput;
  destroyDetached?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<TaskKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationTaskUpdateByFilterArgs = {
  data: TaskUpdateByFilterInput;
  filter?: InputMaybe<TaskFilter>;
};


export type MutationTask_UserCreateArgs = {
  data: Task_UserCreateInput;
};


export type MutationTask_UserCreateManyArgs = {
  data: Array<InputMaybe<Task_UserCreateManyInput>>;
};


export type MutationTask_UserDeleteArgs = {
  data?: InputMaybe<Task_UserDeleteInput>;
  filter?: InputMaybe<Task_UserKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationTask_UserDeleteByFilterArgs = {
  filter: Task_UserFilter;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationTask_UserDestroyArgs = {
  filter?: InputMaybe<Task_UserKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationTask_UserDestroyByFilterArgs = {
  filter: Task_UserFilter;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationTask_UserRestoreArgs = {
  id: Scalars['String']['input'];
};


export type MutationTask_UserUpdateArgs = {
  data: Task_UserUpdateInput;
  destroyDetached?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Task_UserKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationTask_UserUpdateByFilterArgs = {
  data: Task_UserUpdateByFilterInput;
  filter?: InputMaybe<Task_UserFilter>;
};


export type MutationUserChangePasswordArgs = {
  data: ChangePasswordInput;
};


export type MutationUserCreateArgs = {
  data: UserCreateInput;
};


export type MutationUserCreateManyArgs = {
  data: Array<InputMaybe<UserCreateManyInput>>;
};


export type MutationUserDeleteArgs = {
  data?: InputMaybe<UserDeleteInput>;
  filter?: InputMaybe<UserKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUserDeleteByFilterArgs = {
  filter: UserFilter;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUserDestroyArgs = {
  filter?: InputMaybe<UserKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUserDestroyByFilterArgs = {
  filter: UserFilter;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUserLoginArgs = {
  data: UserLoginInput;
};


export type MutationUserPasswordForgotArgs = {
  data: PasswordForgotInput;
};


export type MutationUserPasswordForgotConfirmArgs = {
  data: PasswordForgotConfirmInput;
};


export type MutationUserRefreshTokenArgs = {
  data: RefreshTokenInput;
};


export type MutationUserRestoreArgs = {
  id: Scalars['String']['input'];
};


export type MutationUserSignUpArgs = {
  authProfileId?: InputMaybe<Scalars['ID']['input']>;
  user: UserCreateInput;
};


export type MutationUserSignUpResendArgs = {
  data: SignUpResendInput;
};


export type MutationUserSignUpWithPasswordArgs = {
  authProfileId?: InputMaybe<Scalars['ID']['input']>;
  password: Scalars['String']['input'];
  user: UserCreateInput;
};


export type MutationUserSignUpWithTokenArgs = {
  authProfileId?: InputMaybe<Scalars['ID']['input']>;
  user: UserCreateInput;
};


export type MutationUserUpdateArgs = {
  data: UserUpdateInput;
  destroyDetached?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<UserKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUserUpdateByFilterArgs = {
  data: UserUpdateByFilterInput;
  filter?: InputMaybe<UserFilter>;
};


export type MutationUserVerificationEmailResendArgs = {
  authProfileId?: InputMaybe<Scalars['ID']['input']>;
  data: VerificationEmailResendInput;
};


export type MutationViewCreateArgs = {
  data: ViewCreateInput;
};


export type MutationViewUpdateArgs = {
  data: ViewUpdateInput;
};


export type MutationWorkspaceCreateArgs = {
  data: WorkspaceCreateMutationInput;
};


export type MutationWorkspaceCreateAsyncArgs = {
  data: WorkspaceCreateMutationInput;
};


export type MutationWorkspaceDeleteArgs = {
  data: WorkspaceDeleteMutationInput;
};


export type MutationWorkspaceLeaveArgs = {
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationWorkspaceUpdateArgs = {
  data: WorkspaceUpdateMutationInput;
};

export enum MutationType {
  Create = 'create',
  Delete = 'delete',
  Destroy = 'destroy',
  Update = 'update'
}

export enum NotificationStatusType {
  Done = 'done'
}

/** Number Field Attributes */
export type NumberFieldTypeAttributes = {
  __typename?: 'NumberFieldTypeAttributes';
  autoIncrement?: Maybe<Scalars['Boolean']['output']>;
  currency?: Maybe<Scalars['String']['output']>;
  format: Scalars['String']['output'];
  isBigInt?: Maybe<Scalars['Boolean']['output']>;
  maxValue?: Maybe<Scalars['Float']['output']>;
  minValue?: Maybe<Scalars['Float']['output']>;
  precision?: Maybe<Scalars['Int']['output']>;
};

/** Number Type Format Enum */
export enum NumberTypeFormatEnum {
  Currency = 'CURRENCY',
  Fraction = 'FRACTION',
  Number = 'NUMBER',
  Percentage = 'PERCENTAGE',
  Scientific = 'SCIENTIFIC'
}

export type OrganizationUserInvitationResponse = {
  __typename?: 'OrganizationUserInvitationResponse';
  invitationId: Scalars['String']['output'];
};

/** PasswordForgotConfirmInput */
export type PasswordForgotConfirmInput = {
  authProfileId: Scalars['ID']['input'];
  code: Scalars['String']['input'];
  email: Scalars['String']['input'];
  newPassword: Scalars['String']['input'];
};

/** PasswordForgotInput */
export type PasswordForgotInput = {
  authProfileId: Scalars['ID']['input'];
  email: Scalars['String']['input'];
};

export type PatternFunctionArguments = {
  escape?: InputMaybe<Scalars['String']['input']>;
  pattern: Scalars['String']['input'];
};

export type Permission = {
  __typename?: 'Permission';
  _description?: Maybe<Scalars['String']['output']>;
  appId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<User>;
  permission?: Maybe<Scalars['JSON']['output']>;
  resource?: Maybe<Scalars['String']['output']>;
  resourceType?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Role>;
  roleId?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type PermissionFilter = {
  AND?: InputMaybe<Array<PermissionFilter>>;
  OR?: InputMaybe<Array<PermissionFilter>>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  appId?: InputMaybe<StringPredicate>;
  createdAt?: InputMaybe<DateTimePredicate>;
  createdBy?: InputMaybe<UserFilter>;
  deletedAt?: InputMaybe<IntPredicate>;
  resource?: InputMaybe<StringPredicate>;
  resourceType?: InputMaybe<StringPredicate>;
  role?: InputMaybe<RoleFilter>;
  roleId?: InputMaybe<StringPredicate>;
  updatedAt?: InputMaybe<DateTimePredicate>;
};

export type PermissionGroupByQuery = {
  _group?: InputMaybe<Array<GroupIdentifiersGroupByField>>;
  appId?: InputMaybe<Array<GroupByField>>;
  createdAt?: InputMaybe<Array<GroupByField>>;
  createdBy?: InputMaybe<UserGroupByQuery>;
  permission?: InputMaybe<Array<GroupByField>>;
  resource?: InputMaybe<Array<GroupByField>>;
  resourceType?: InputMaybe<Array<GroupByField>>;
  role?: InputMaybe<RoleGroupByQuery>;
  roleId?: InputMaybe<Array<GroupByField>>;
  updatedAt?: InputMaybe<Array<GroupByField>>;
};

/** Permission Filter */
export type PermissionInputFilter = {
  action?: InputMaybe<Scalars['String']['input']>;
  applicationName?: InputMaybe<Scalars['String']['input']>;
  resource?: InputMaybe<Scalars['String']['input']>;
  resourceType?: InputMaybe<PermissionResourceTypeEnum>;
};

/** PermissionListResponse output */
export type PermissionListResponse = {
  __typename?: 'PermissionListResponse';
  /** List items count */
  count: Scalars['Int']['output'];
  /** Aggregated items */
  groups: Array<GroupByResponse>;
  /** List items */
  items: Array<Permission>;
};

/** Permissions subscription payload */
export type PermissionPayload = {
  __typename?: 'PermissionPayload';
  mutation: MutationType;
  node?: Maybe<Permission>;
  previousValues?: Maybe<Permission>;
  updatedFields?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type PermissionRelationFilter = {
  every?: InputMaybe<PermissionFilter>;
  none?: InputMaybe<PermissionFilter>;
  some?: InputMaybe<PermissionFilter>;
};

export enum PermissionResourceTypeEnum {
  Custom = 'custom',
  Data = 'data'
}

/** Permissions subscription filter */
export type PermissionSubscriptionFilter = {
  mutation_in?: InputMaybe<Array<InputMaybe<MutationType>>>;
  node?: InputMaybe<PermissionFilter>;
  updatedFields?: InputMaybe<UpdatedFieldsFilter>;
};

export type Permission_PermissionFilter = {
  AND?: InputMaybe<Array<Permission_PermissionFilter>>;
  OR?: InputMaybe<Array<Permission_PermissionFilter>>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  appId?: InputMaybe<StringPredicate>;
  createdAt?: InputMaybe<DateTimePredicate>;
  createdBy?: InputMaybe<User_PermissionFilter>;
  deletedAt?: InputMaybe<IntPredicate>;
  resource?: InputMaybe<StringPredicate>;
  resourceType?: InputMaybe<StringPredicate>;
  role?: InputMaybe<Role_PermissionFilter>;
  roleId?: InputMaybe<StringPredicate>;
  updatedAt?: InputMaybe<DateTimePredicate>;
};

export type Permission_PermissionRelationFilter = {
  every?: InputMaybe<Permission_PermissionFilter>;
  none?: InputMaybe<Permission_PermissionFilter>;
  some?: InputMaybe<Permission_PermissionFilter>;
};

/** custom permissions input */
export type PermissionsCustom = {
  data?: InputMaybe<PermissionsCustomData>;
  logic?: InputMaybe<PermissionsCustomLogic>;
  settings?: InputMaybe<PermissionsCustomSettings>;
  users?: InputMaybe<PermissionsCustomUsers>;
};

export type PermissionsCustomData = {
  schemaManagement?: InputMaybe<PermissionsCustomDataSchemaManagement>;
  viewerAccess?: InputMaybe<PermissionsCustomDataViewerAccess>;
};

export type PermissionsCustomDataSchemaManagement = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsCustomDataViewerAccess = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsCustomLogic = {
  deploy?: InputMaybe<PermissionsCustomLogicDeploy>;
  invoke?: InputMaybe<PermissionsCustomLogicInvoke>;
  logs?: InputMaybe<PermissionsCustomLogicLogs>;
  view?: InputMaybe<PermissionsCustomLogicView>;
};

export type PermissionsCustomLogicDeploy = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsCustomLogicInvoke = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsCustomLogicLogs = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsCustomLogicView = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsCustomSettings = {
  workspaceAdministration?: InputMaybe<PermissionsCustomSettingsWorkspaceAdministration>;
};

export type PermissionsCustomSettingsWorkspaceAdministration = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsCustomUsers = {
  teamAdministration?: InputMaybe<PermissionsCustomUsersTeamAdministration>;
};

export type PermissionsCustomUsersTeamAdministration = {
  allow: Scalars['Boolean']['input'];
};

/** Schema tables permissions input */
export type PermissionsData = {
  Files?: InputMaybe<PermissionsDataFiles>;
  Roles?: InputMaybe<PermissionsDataRoles>;
  Task_user?: InputMaybe<PermissionsDataTask_User>;
  Tasks?: InputMaybe<PermissionsDataTasks>;
  Users?: InputMaybe<PermissionsDataUsers>;
};

export type PermissionsDataFiles = {
  create?: InputMaybe<PermissionsDataFilesCreate>;
  delete?: InputMaybe<PermissionsDataFilesDelete>;
  destroy?: InputMaybe<PermissionsDataFilesDestroy>;
  read?: InputMaybe<PermissionsDataFilesRead>;
  update?: InputMaybe<PermissionsDataFilesUpdate>;
};

export type PermissionsDataFilesCreate = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsDataFilesDelete = {
  allow: Scalars['Boolean']['input'];
  restore?: InputMaybe<Scalars['Boolean']['input']>;
  review?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PermissionsDataFilesDestroy = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsDataFilesRead = {
  allow: Scalars['Boolean']['input'];
  fields?: InputMaybe<FileFieldsPermissions>;
  filter?: InputMaybe<File_PermissionFilter>;
};

export type PermissionsDataFilesUpdate = {
  allow: Scalars['Boolean']['input'];
  fields?: InputMaybe<FileFieldsPermissions>;
  filter?: InputMaybe<File_PermissionFilter>;
};

export type PermissionsDataRoles = {
  create?: InputMaybe<PermissionsDataRolesCreate>;
  delete?: InputMaybe<PermissionsDataRolesDelete>;
  destroy?: InputMaybe<PermissionsDataRolesDestroy>;
  read?: InputMaybe<PermissionsDataRolesRead>;
  update?: InputMaybe<PermissionsDataRolesUpdate>;
};

export type PermissionsDataRolesCreate = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsDataRolesDelete = {
  allow: Scalars['Boolean']['input'];
  restore?: InputMaybe<Scalars['Boolean']['input']>;
  review?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PermissionsDataRolesDestroy = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsDataRolesRead = {
  allow: Scalars['Boolean']['input'];
  fields?: InputMaybe<RoleFieldsPermissions>;
  filter?: InputMaybe<Role_PermissionFilter>;
};

export type PermissionsDataRolesUpdate = {
  allow: Scalars['Boolean']['input'];
  fields?: InputMaybe<RoleFieldsPermissions>;
  filter?: InputMaybe<Role_PermissionFilter>;
};

export type PermissionsDataTask_User = {
  create?: InputMaybe<PermissionsDataTask_UserCreate>;
  delete?: InputMaybe<PermissionsDataTask_UserDelete>;
  destroy?: InputMaybe<PermissionsDataTask_UserDestroy>;
  read?: InputMaybe<PermissionsDataTask_UserRead>;
  update?: InputMaybe<PermissionsDataTask_UserUpdate>;
};

export type PermissionsDataTask_UserCreate = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsDataTask_UserDelete = {
  allow: Scalars['Boolean']['input'];
  restore?: InputMaybe<Scalars['Boolean']['input']>;
  review?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PermissionsDataTask_UserDestroy = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsDataTask_UserRead = {
  allow: Scalars['Boolean']['input'];
  fields?: InputMaybe<Task_UserFieldsPermissions>;
  filter?: InputMaybe<Task_User_PermissionFilter>;
};

export type PermissionsDataTask_UserUpdate = {
  allow: Scalars['Boolean']['input'];
  fields?: InputMaybe<Task_UserFieldsPermissions>;
  filter?: InputMaybe<Task_User_PermissionFilter>;
};

export type PermissionsDataTasks = {
  create?: InputMaybe<PermissionsDataTasksCreate>;
  delete?: InputMaybe<PermissionsDataTasksDelete>;
  destroy?: InputMaybe<PermissionsDataTasksDestroy>;
  read?: InputMaybe<PermissionsDataTasksRead>;
  update?: InputMaybe<PermissionsDataTasksUpdate>;
};

export type PermissionsDataTasksCreate = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsDataTasksDelete = {
  allow: Scalars['Boolean']['input'];
  restore?: InputMaybe<Scalars['Boolean']['input']>;
  review?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PermissionsDataTasksDestroy = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsDataTasksRead = {
  allow: Scalars['Boolean']['input'];
  fields?: InputMaybe<TaskFieldsPermissions>;
  filter?: InputMaybe<Task_PermissionFilter>;
};

export type PermissionsDataTasksUpdate = {
  allow: Scalars['Boolean']['input'];
  fields?: InputMaybe<TaskFieldsPermissions>;
  filter?: InputMaybe<Task_PermissionFilter>;
};

export type PermissionsDataUsers = {
  create?: InputMaybe<PermissionsDataUsersCreate>;
  delete?: InputMaybe<PermissionsDataUsersDelete>;
  destroy?: InputMaybe<PermissionsDataUsersDestroy>;
  read?: InputMaybe<PermissionsDataUsersRead>;
  update?: InputMaybe<PermissionsDataUsersUpdate>;
};

export type PermissionsDataUsersCreate = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsDataUsersDelete = {
  allow: Scalars['Boolean']['input'];
  restore?: InputMaybe<Scalars['Boolean']['input']>;
  review?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PermissionsDataUsersDestroy = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsDataUsersRead = {
  allow: Scalars['Boolean']['input'];
  fields?: InputMaybe<UserFieldsPermissions>;
  filter?: InputMaybe<User_PermissionFilter>;
};

export type PermissionsDataUsersUpdate = {
  allow: Scalars['Boolean']['input'];
  fields?: InputMaybe<UserFieldsPermissions>;
  filter?: InputMaybe<User_PermissionFilter>;
};

/** PermissionsInput create input */
export type PermissionsInput = {
  custom?: InputMaybe<PermissionsCustom>;
  data?: InputMaybe<PermissionsData>;
};

export type ProjectItemWs = {
  __typename?: 'ProjectItemWS';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<WorkspaceImage>;
  name: Scalars['String']['output'];
  region?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  apiToken?: Maybe<ApiToken>;
  apiTokensList: ApiTokenListResponse;
  /** @deprecated No longer supported. Use `system.application` instead. */
  application?: Maybe<Application>;
  /** @deprecated No longer supported. Use `system.applicationsList` instead. */
  applicationsList?: Maybe<ApplicationListResponse>;
  /** @deprecated No longer supported. Use `system.asyncSessionStatus` instead. */
  asyncSessionStatus?: Maybe<AsyncSessionStatusResponse>;
  authenticationProfile?: Maybe<AuthenticationProfile>;
  authenticationProfilesList: AuthenticationProfileListResponse;
  authenticationSettings?: Maybe<AuthenticationSetting>;
  /** @deprecated No longer supported. Use `system.billingCurrentPlan` instead. */
  billingCurrentPlan?: Maybe<BillingCurrentPlanResponse>;
  /** @deprecated No longer supported. Use `system.memberPaymentDetails, system.organizationPaymentDetails or system.workspacePaymentDetails` instead. */
  billingDetails?: Maybe<BillingDetailsResponse>;
  /** @deprecated No longer supported. Use `system.memberBillingHistory, system.organizationBillingHistory or system.workspaceBillingHistory` instead. */
  billingInvoicesList: BillingInvoicesListResponse;
  /** @deprecated No longer supported. Use `system.billingMetricUsageQuotasList` instead. */
  billingMetricUsageQuotasList: BillingMetricUsageQuotasListResponse;
  /** @deprecated No longer supported. Use `system.billingMetricUsagesList` instead. */
  billingMetricUsagesList: BillingMetricUsagesListResponse;
  companyName?: Maybe<Scalars['String']['output']>;
  /** @deprecated No longer supported. Use `system.deployStatus` instead. */
  deployStatus: DeployStatusResult;
  environmentVariable?: Maybe<EnvironmentVariable>;
  environmentVariablesList: EnvironmentVariableListResponse;
  file?: Maybe<File>;
  /** @deprecated No longer supported. Use `fileUploadSignInfo` instead. */
  fileUploadInfo?: Maybe<FileUploadInfoResponse>;
  filesList: FileListResponse;
  /** @deprecated No longer supported. Use `system.functionsList` instead. */
  functionsList?: Maybe<FunctionListResponse>;
  isAllowedCallbackURL?: Maybe<IsAllowedCallbackUrlQueryResponse>;
  /** @deprecated No longer supported. Use `system.logsList` instead. */
  logs?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  role?: Maybe<Role>;
  rolesList: RoleListResponse;
  settings?: Maybe<Setting>;
  system?: Maybe<SystemQuery>;
  /** @deprecated No longer supported. Use `system.table` instead. */
  table?: Maybe<Table>;
  /** @deprecated No longer supported. Use `system.tableField` instead. */
  tableField?: Maybe<TableField>;
  /** @deprecated No longer supported. Use `system.tablesList` instead. */
  tablesList: TableListResponse;
  task?: Maybe<Task>;
  task_user?: Maybe<Task_User>;
  task_usersList: Task_UserListResponse;
  tasksList: TaskListResponse;
  user?: Maybe<User>;
  userBillingConfiguration: UserBillingConfigurationResponse;
  /** @deprecated No longer supported. Use `system.userInvitationsList` instead. */
  userInvitationsList?: Maybe<UserInvitationList>;
  usersList: UserListResponse;
  viewDryRun?: Maybe<ViewDryRunOutput>;
  /** @deprecated No longer supported. Use `system.workspacesList` instead. */
  workspacesList?: Maybe<WorkspaceListResponse>;
};


export type QueryApiTokenArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryApiTokensListArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ApiTokenFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<ApiTokenGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<ApiTokenOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ApiTokenSort>>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryApplicationArgs = {
  id: Scalars['String']['input'];
};


export type QueryAsyncSessionStatusArgs = {
  sessionId: Scalars['String']['input'];
};


export type QueryAuthenticationProfileArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryAuthenticationProfilesListArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<AuthenticationProfileFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<AuthenticationProfileGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<AuthenticationProfileOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<AuthenticationProfileSort>>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryBillingCurrentPlanArgs = {
  organizationId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryBillingInvoicesListArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  by?: InputMaybe<BillingInvoicesListFilterType>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  projectId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryBillingMetricUsageQuotasListArgs = {
  organizationId?: InputMaybe<Scalars['ID']['input']>;
  projectId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryBillingMetricUsagesListArgs = {
  filter?: InputMaybe<BillingMetricUsagesListFilter>;
  organizationId?: InputMaybe<Scalars['ID']['input']>;
  projectId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryDeployStatusArgs = {
  buildName: Scalars['String']['input'];
};


export type QueryEnvironmentVariableArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryEnvironmentVariablesListArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<EnvironmentVariableFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<EnvironmentVariableGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<EnvironmentVariableOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<EnvironmentVariableSort>>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryFileArgs = {
  fileId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryFilesListArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<FileFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<FileGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<FileOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<FileSort>>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryFunctionsListArgs = {
  applicationId?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<FunctionInfoFilter>;
  orderBy?: InputMaybe<Array<InputMaybe<FunctionInfoOrderBy>>>;
};


export type QueryIsAllowedCallbackUrlArgs = {
  callbackURL: Scalars['String']['input'];
};


export type QueryLogsArgs = {
  applicationId?: InputMaybe<Scalars['String']['input']>;
  endTime?: InputMaybe<Scalars['DateTime']['input']>;
  functionName: Scalars['String']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  startTime?: InputMaybe<Scalars['DateTime']['input']>;
};


export type QueryRoleArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryRolesListArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<RoleFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<RoleGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<RoleOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<RoleSort>>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryTableArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTableFieldArgs = {
  id: Scalars['ID']['input'];
};


export type QueryTablesListArgs = {
  filter?: InputMaybe<TableListFilter>;
};


export type QueryTaskArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryTask_UserArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryTask_UsersListArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Task_UserFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<Task_UserGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<Task_UserOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Task_UserSort>>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryTasksListArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<TaskFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<TaskGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<TaskOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<TaskSort>>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryUserArgs = {
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryUserBillingConfigurationArgs = {
  filterPlanProjects?: InputMaybe<Scalars['Boolean']['input']>;
  kind?: InputMaybe<Scalars['String']['input']>;
  organizationId?: InputMaybe<Scalars['ID']['input']>;
  region?: InputMaybe<Scalars['String']['input']>;
};


export type QueryUsersListArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<UserFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<UserGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<UserOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<UserSort>>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryViewDryRunArgs = {
  sql: Scalars['String']['input'];
};

/** RefreshTokenInput */
export type RefreshTokenInput = {
  authProfileId?: InputMaybe<Scalars['ID']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  refreshToken: Scalars['String']['input'];
};

/** Relation */
export type Relation = {
  __typename?: 'Relation';
  refField?: Maybe<TableField>;
  refFieldDisplayName?: Maybe<Scalars['String']['output']>;
  refFieldIsList?: Maybe<Scalars['Boolean']['output']>;
  refFieldIsRequired?: Maybe<Scalars['Boolean']['output']>;
  refFieldName?: Maybe<Scalars['String']['output']>;
  refTable: Table;
  relationFieldName?: Maybe<Scalars['String']['output']>;
  relationTableName?: Maybe<Scalars['String']['output']>;
};

/** Relation Create Input */
export type RelationCreateInput = {
  refFieldDisplayName?: InputMaybe<Scalars['String']['input']>;
  refFieldIsList: Scalars['Boolean']['input'];
  refFieldIsRequired: Scalars['Boolean']['input'];
  refFieldName?: InputMaybe<Scalars['String']['input']>;
  refTableId: Scalars['ID']['input'];
};

/** Relation Update Input */
export type RelationUpdateInput = {
  refFieldDisplayName?: InputMaybe<Scalars['String']['input']>;
  refFieldIsList?: InputMaybe<Scalars['Boolean']['input']>;
  refFieldIsRequired?: InputMaybe<Scalars['Boolean']['input']>;
  refFieldName?: InputMaybe<Scalars['String']['input']>;
  refTableId?: InputMaybe<Scalars['ID']['input']>;
};

/** Relative Date Predicate Operation Enum */
export enum RelativePredicateOpEnum {
  Add = 'ADD',
  Sub = 'SUB'
}

/** Relative Date Predicate Unit Enum */
export enum RelativePredicateUnitEnum {
  Day = 'DAY',
  DayHour = 'DAY_HOUR',
  DayMicrosecond = 'DAY_MICROSECOND',
  DayMinute = 'DAY_MINUTE',
  DaySecond = 'DAY_SECOND',
  Hour = 'HOUR',
  HourMicrosecond = 'HOUR_MICROSECOND',
  HourMinute = 'HOUR_MINUTE',
  HourSecond = 'HOUR_SECOND',
  Microsecond = 'MICROSECOND',
  Minute = 'MINUTE',
  MinuteMicrosecond = 'MINUTE_MICROSECOND',
  MinuteSecond = 'MINUTE_SECOND',
  Month = 'MONTH',
  Quarter = 'QUARTER',
  Second = 'SECOND',
  SecondMicrosecond = 'SECOND_MICROSECOND',
  Week = 'WEEK',
  Year = 'YEAR',
  YearMonth = 'YEAR_MONTH'
}

export type ReplaceFunctionArguments = {
  from: Scalars['String']['input'];
  to: Scalars['String']['input'];
};

export type ResizeImageDirectiveCropOptions = {
  height: Scalars['Int']['input'];
  offsetX?: InputMaybe<Scalars['Int']['input']>;
  offsetY?: InputMaybe<Scalars['Int']['input']>;
  width: Scalars['Int']['input'];
};

export type ResizeImageDirectiveFlipOptions = {
  horizontally?: InputMaybe<Scalars['Boolean']['input']>;
  vertically?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ResizeImageDirectiveResizeOptions = {
  height?: InputMaybe<Scalars['Int']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type Role = {
  __typename?: 'Role';
  _description?: Maybe<Scalars['String']['output']>;
  apiTokens?: Maybe<ApiTokenListResponse>;
  authenticationProfiles?: Maybe<AuthenticationProfileListResponse>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<User>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  membersCount: Scalars['Int']['output'];
  name?: Maybe<Scalars['String']['output']>;
  permissions?: Maybe<PermissionListResponse>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  users?: Maybe<UserListResponse>;
};


export type RoleApiTokensArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ApiTokenFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<ApiTokenGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<ApiTokenOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ApiTokenSort>>;
};


export type RoleAuthenticationProfilesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<AuthenticationProfileFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<AuthenticationProfileGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<AuthenticationProfileOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<AuthenticationProfileSort>>;
};


export type RolePermissionsArgs = {
  filter?: InputMaybe<PermissionInputFilter>;
};


export type RoleUsersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<UserFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<UserGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<UserOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<UserSort>>;
};

/** Roles create input */
export type RoleCreateInput = {
  apiTokens?: InputMaybe<RolesApiTokensRelationInput>;
  authenticationProfiles?: InputMaybe<RolesAuthenticationProfilesRelationInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  permissions?: InputMaybe<PermissionsInput>;
  users?: InputMaybe<RolesUsersRelationInput>;
};

/** Roles create many input */
export type RoleCreateManyInput = {
  apiTokens?: InputMaybe<RolesApiTokensManyRelationInput>;
  authenticationProfiles?: InputMaybe<RolesAuthenticationProfilesManyRelationInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  users?: InputMaybe<RolesUsersManyRelationInput>;
};

/** Roles delete input */
export type RoleDeleteInput = {
  force?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** RoleFieldsPermissions create input */
export type RoleFieldsPermissions = {
  createdAt?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['Boolean']['input']>;
};

export type RoleFilter = {
  AND?: InputMaybe<Array<RoleFilter>>;
  OR?: InputMaybe<Array<RoleFilter>>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  apiTokens?: InputMaybe<ApiTokenRelationFilter>;
  authenticationProfiles?: InputMaybe<AuthenticationProfileRelationFilter>;
  createdAt?: InputMaybe<DateTimePredicate>;
  createdBy?: InputMaybe<UserFilter>;
  deletedAt?: InputMaybe<IntPredicate>;
  description?: InputMaybe<StringPredicate>;
  id?: InputMaybe<IdPredicate>;
  name?: InputMaybe<StringPredicate>;
  permissions?: InputMaybe<PermissionRelationFilter>;
  updatedAt?: InputMaybe<DateTimePredicate>;
  users?: InputMaybe<UserRelationFilter>;
};

export type RoleGroupBy = {
  first?: InputMaybe<Scalars['Int']['input']>;
  having?: InputMaybe<Having>;
  last?: InputMaybe<Scalars['Int']['input']>;
  query: RoleGroupByQuery;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<GroupBySort>>;
};

export type RoleGroupByQuery = {
  _group?: InputMaybe<Array<GroupIdentifiersGroupByField>>;
  apiTokens?: InputMaybe<ApiTokenGroupByQuery>;
  authenticationProfiles?: InputMaybe<AuthenticationProfileGroupByQuery>;
  createdAt?: InputMaybe<Array<GroupByField>>;
  createdBy?: InputMaybe<UserGroupByQuery>;
  description?: InputMaybe<Array<GroupByField>>;
  id?: InputMaybe<Array<GroupByField>>;
  name?: InputMaybe<Array<GroupByField>>;
  permissions?: InputMaybe<PermissionGroupByQuery>;
  updatedAt?: InputMaybe<Array<GroupByField>>;
  users?: InputMaybe<UserGroupByQuery>;
};

export type RoleKeyFilter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** RoleListResponse output */
export type RoleListResponse = {
  __typename?: 'RoleListResponse';
  /** List items count */
  count: Scalars['Int']['output'];
  /** Aggregated items */
  groups: Array<GroupByResponse>;
  /** List items */
  items: Array<Role>;
};

/** RoleManyResponse output */
export type RoleManyResponse = {
  __typename?: 'RoleManyResponse';
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<Role>;
};

/** No longer supported. Use `sort` instead. */
export enum RoleOrderBy {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SystemTypeAsc = 'systemType_ASC',
  SystemTypeDesc = 'systemType_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** Roles subscription payload */
export type RolePayload = {
  __typename?: 'RolePayload';
  mutation: MutationType;
  node?: Maybe<Role>;
  previousValues?: Maybe<Role>;
  updatedFields?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type RoleRelationFilter = {
  every?: InputMaybe<RoleFilter>;
  none?: InputMaybe<RoleFilter>;
  some?: InputMaybe<RoleFilter>;
};

export type RoleSort = {
  createdAt?: InputMaybe<SortOrder>;
  createdBy?: InputMaybe<UserSort>;
  deletedAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

/** Roles subscription filter */
export type RoleSubscriptionFilter = {
  mutation_in?: InputMaybe<Array<InputMaybe<MutationType>>>;
  node?: InputMaybe<RoleFilter>;
  updatedFields?: InputMaybe<UpdatedFieldsFilter>;
};

/** Roles update input */
export type RoleUpdateByFilterInput = {
  description?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
  name?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
  systemType?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
};

/** Roles update input */
export type RoleUpdateInput = {
  apiTokens?: InputMaybe<RolesApiTokensUpdateRelationInput>;
  authenticationProfiles?: InputMaybe<RolesAuthenticationProfilesUpdateRelationInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  permissions?: InputMaybe<PermissionsInput>;
  users?: InputMaybe<RolesUsersUpdateRelationInput>;
};

export type Role_PermissionFilter = {
  AND?: InputMaybe<Array<Role_PermissionFilter>>;
  OR?: InputMaybe<Array<Role_PermissionFilter>>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  apiTokens?: InputMaybe<ApiToken_PermissionRelationFilter>;
  authenticationProfiles?: InputMaybe<AuthenticationProfile_PermissionRelationFilter>;
  createdAt?: InputMaybe<DateTimePredicate>;
  createdBy?: InputMaybe<User_PermissionFilter>;
  deletedAt?: InputMaybe<IntPredicate>;
  description?: InputMaybe<StringPredicate>;
  id?: InputMaybe<IdPredicate>;
  name?: InputMaybe<StringPredicate>;
  permissions?: InputMaybe<Permission_PermissionRelationFilter>;
  updatedAt?: InputMaybe<DateTimePredicate>;
  users?: InputMaybe<User_PermissionRelationFilter>;
};

export type Role_PermissionRelationFilter = {
  every?: InputMaybe<Role_PermissionFilter>;
  none?: InputMaybe<Role_PermissionFilter>;
  some?: InputMaybe<Role_PermissionFilter>;
};

/** Roles relation input */
export type RolesApiTokensManyRelationInput = {
  connect?: InputMaybe<Array<ApiTokenKeyFilter>>;
};

/** Roles relation input */
export type RolesApiTokensRelationInput = {
  connect?: InputMaybe<Array<ApiTokenKeyFilter>>;
};

/** Roles relation input */
export type RolesApiTokensUpdateRelationInput = {
  connect?: InputMaybe<Array<ApiTokenKeyFilter>>;
  disconnect?: InputMaybe<Array<ApiTokenKeyFilter>>;
  reconnect?: InputMaybe<Array<ApiTokenKeyFilter>>;
  update?: InputMaybe<Array<InputMaybe<Roles_ApiTokenUpdateInput>>>;
};

/** Roles relation input */
export type RolesAuthenticationProfilesManyRelationInput = {
  connect?: InputMaybe<Array<AuthenticationProfileKeyFilter>>;
};

/** Roles relation input */
export type RolesAuthenticationProfilesRelationInput = {
  connect?: InputMaybe<Array<AuthenticationProfileKeyFilter>>;
  create?: InputMaybe<Array<InputMaybe<Roles_AuthenticationProfileCreateInput>>>;
};

/** Roles relation input */
export type RolesAuthenticationProfilesUpdateRelationInput = {
  connect?: InputMaybe<Array<AuthenticationProfileKeyFilter>>;
  create?: InputMaybe<Array<InputMaybe<Roles_AuthenticationProfileCreateInput>>>;
  disconnect?: InputMaybe<Array<AuthenticationProfileKeyFilter>>;
  reconnect?: InputMaybe<Array<AuthenticationProfileKeyFilter>>;
  update?: InputMaybe<Array<InputMaybe<Roles_AuthenticationProfileUpdateInput>>>;
};

/** Roles relation input */
export type RolesUsersManyRelationInput = {
  connect?: InputMaybe<Array<UserKeyFilter>>;
};

/** Roles relation input */
export type RolesUsersRelationInput = {
  connect?: InputMaybe<Array<UserKeyFilter>>;
  create?: InputMaybe<Array<InputMaybe<Roles_UserCreateInput>>>;
};

/** Roles relation input */
export type RolesUsersUpdateRelationInput = {
  connect?: InputMaybe<Array<UserKeyFilter>>;
  create?: InputMaybe<Array<InputMaybe<Roles_UserCreateInput>>>;
  disconnect?: InputMaybe<Array<UserKeyFilter>>;
  reconnect?: InputMaybe<Array<UserKeyFilter>>;
  update?: InputMaybe<Array<InputMaybe<Roles_UserUpdateInput>>>;
};

/** ApiTokens update input from roles */
export type Roles_ApiTokenUpdateInput = {
  data: ApiTokenUpdateInput;
  filter?: InputMaybe<ApiTokenKeyFilter>;
};

/** AuthenticationProfiles create input from roles */
export type Roles_AuthenticationProfileCreateInput = {
  audiences?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  clientId?: InputMaybe<Scalars['String']['input']>;
  databaseName?: InputMaybe<Scalars['String']['input']>;
  domain?: InputMaybe<Scalars['String']['input']>;
  managementDomain?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  roles?: InputMaybe<AuthenticationProfilesRolesRelationInput>;
  secret?: InputMaybe<Scalars['String']['input']>;
  selfSignUpEmailDomains?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  selfSignUpEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

/** AuthenticationProfiles update input from roles */
export type Roles_AuthenticationProfileUpdateInput = {
  data: AuthenticationProfileUpdateInput;
  filter?: InputMaybe<AuthenticationProfileKeyFilter>;
};

/** Users create input from roles */
export type Roles_UserCreateInput = {
  avatar?: InputMaybe<UsersAvatarRelationInput>;
  avatarId?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  roles?: InputMaybe<UsersRolesRelationInput>;
  status?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};

/** Users update input from roles */
export type Roles_UserUpdateInput = {
  data: UserUpdateInput;
  filter?: InputMaybe<UserKeyFilter>;
};

/** Schema Origin */
export type SchemaOrigin = {
  __typename?: 'SchemaOrigin';
  provider?: Maybe<Scalars['String']['output']>;
  type: SchemaOriginType;
};

/** Schema Origin Type Enum */
export enum SchemaOriginType {
  Local = 'LOCAL',
  Remote = 'REMOTE',
  View = 'VIEW'
}

export type Setting = {
  __typename?: 'Setting';
  _description?: Maybe<Scalars['String']['output']>;
  bgColor?: Maybe<Scalars['String']['output']>;
  buttonLinkColor?: Maybe<Scalars['String']['output']>;
  containerColor?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<User>;
  currency?: Maybe<Scalars['String']['output']>;
  dateFormat?: Maybe<Scalars['String']['output']>;
  landingPageImage?: Maybe<File>;
  landingPageImageId?: Maybe<Scalars['String']['output']>;
  language?: Maybe<Scalars['String']['output']>;
  leftNavColor?: Maybe<Scalars['String']['output']>;
  menuBarBGColor?: Maybe<Scalars['String']['output']>;
  menuBarIconsColor?: Maybe<Scalars['String']['output']>;
  menuBarLogo?: Maybe<File>;
  menuBarLogoId?: Maybe<Scalars['String']['output']>;
  passwordMinLength?: Maybe<Scalars['Int']['output']>;
  passwordRequireLowercase?: Maybe<Scalars['Boolean']['output']>;
  passwordRequireNumbers?: Maybe<Scalars['Boolean']['output']>;
  passwordRequireSpecial?: Maybe<Scalars['Boolean']['output']>;
  passwordRequireUppercase?: Maybe<Scalars['Boolean']['output']>;
  passwordUpdateInterval?: Maybe<Scalars['Int']['output']>;
  rememberDevice?: Maybe<Scalars['String']['output']>;
  timezone?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userInterfaceStyle?: Maybe<Scalars['String']['output']>;
  vanityUrl?: Maybe<Scalars['String']['output']>;
};

export type SettingFilter = {
  AND?: InputMaybe<Array<SettingFilter>>;
  OR?: InputMaybe<Array<SettingFilter>>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  bgColor?: InputMaybe<StringPredicate>;
  buttonLinkColor?: InputMaybe<StringPredicate>;
  containerColor?: InputMaybe<StringPredicate>;
  createdAt?: InputMaybe<DateTimePredicate>;
  createdBy?: InputMaybe<UserFilter>;
  currency?: InputMaybe<StringPredicate>;
  dateFormat?: InputMaybe<StringPredicate>;
  deletedAt?: InputMaybe<IntPredicate>;
  landingPageImage?: InputMaybe<FileFilter>;
  landingPageImageId?: InputMaybe<StringPredicate>;
  language?: InputMaybe<StringPredicate>;
  leftNavColor?: InputMaybe<StringPredicate>;
  menuBarBGColor?: InputMaybe<StringPredicate>;
  menuBarIconsColor?: InputMaybe<StringPredicate>;
  menuBarLogo?: InputMaybe<FileFilter>;
  menuBarLogoId?: InputMaybe<StringPredicate>;
  passwordMinLength?: InputMaybe<IntPredicate>;
  passwordRequireLowercase?: InputMaybe<BoolPredicate>;
  passwordRequireNumbers?: InputMaybe<BoolPredicate>;
  passwordRequireSpecial?: InputMaybe<BoolPredicate>;
  passwordRequireUppercase?: InputMaybe<BoolPredicate>;
  passwordUpdateInterval?: InputMaybe<IntPredicate>;
  rememberDevice?: InputMaybe<StringPredicate>;
  timezone?: InputMaybe<StringPredicate>;
  updatedAt?: InputMaybe<DateTimePredicate>;
  userInterfaceStyle?: InputMaybe<StringPredicate>;
  vanityUrl?: InputMaybe<StringPredicate>;
};

export type SettingGroupBy = {
  first?: InputMaybe<Scalars['Int']['input']>;
  having?: InputMaybe<Having>;
  last?: InputMaybe<Scalars['Int']['input']>;
  query: SettingGroupByQuery;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<GroupBySort>>;
};

export type SettingGroupByQuery = {
  _group?: InputMaybe<Array<GroupIdentifiersGroupByField>>;
  bgColor?: InputMaybe<Array<GroupByField>>;
  buttonLinkColor?: InputMaybe<Array<GroupByField>>;
  containerColor?: InputMaybe<Array<GroupByField>>;
  createdAt?: InputMaybe<Array<GroupByField>>;
  createdBy?: InputMaybe<UserGroupByQuery>;
  currency?: InputMaybe<Array<GroupByField>>;
  dateFormat?: InputMaybe<Array<GroupByField>>;
  landingPageImage?: InputMaybe<FileGroupByQuery>;
  landingPageImageId?: InputMaybe<Array<GroupByField>>;
  language?: InputMaybe<Array<GroupByField>>;
  leftNavColor?: InputMaybe<Array<GroupByField>>;
  menuBarBGColor?: InputMaybe<Array<GroupByField>>;
  menuBarIconsColor?: InputMaybe<Array<GroupByField>>;
  menuBarLogo?: InputMaybe<FileGroupByQuery>;
  menuBarLogoId?: InputMaybe<Array<GroupByField>>;
  passwordMinLength?: InputMaybe<Array<GroupByField>>;
  passwordRequireLowercase?: InputMaybe<Array<GroupByField>>;
  passwordRequireNumbers?: InputMaybe<Array<GroupByField>>;
  passwordRequireSpecial?: InputMaybe<Array<GroupByField>>;
  passwordRequireUppercase?: InputMaybe<Array<GroupByField>>;
  passwordUpdateInterval?: InputMaybe<Array<GroupByField>>;
  rememberDevice?: InputMaybe<Array<GroupByField>>;
  timezone?: InputMaybe<Array<GroupByField>>;
  updatedAt?: InputMaybe<Array<GroupByField>>;
  userInterfaceStyle?: InputMaybe<Array<GroupByField>>;
  vanityUrl?: InputMaybe<Array<GroupByField>>;
};

/** SettingListResponse output */
export type SettingListResponse = {
  __typename?: 'SettingListResponse';
  /** List items count */
  count: Scalars['Int']['output'];
  /** Aggregated items */
  groups: Array<GroupByResponse>;
  /** List items */
  items: Array<Setting>;
};

/** No longer supported. Use `sort` instead. */
export enum SettingOrderBy {
  BgColorAsc = 'bgColor_ASC',
  BgColorDesc = 'bgColor_DESC',
  ButtonLinkColorAsc = 'buttonLinkColor_ASC',
  ButtonLinkColorDesc = 'buttonLinkColor_DESC',
  ContainerColorAsc = 'containerColor_ASC',
  ContainerColorDesc = 'containerColor_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  CurrencyAsc = 'currency_ASC',
  CurrencyDesc = 'currency_DESC',
  DateFormatAsc = 'dateFormat_ASC',
  DateFormatDesc = 'dateFormat_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LandingPageImageIdAsc = 'landingPageImageId_ASC',
  LandingPageImageIdDesc = 'landingPageImageId_DESC',
  LanguageAsc = 'language_ASC',
  LanguageDesc = 'language_DESC',
  LeftNavColorAsc = 'leftNavColor_ASC',
  LeftNavColorDesc = 'leftNavColor_DESC',
  MenuBarBgColorAsc = 'menuBarBGColor_ASC',
  MenuBarBgColorDesc = 'menuBarBGColor_DESC',
  MenuBarIconsColorAsc = 'menuBarIconsColor_ASC',
  MenuBarIconsColorDesc = 'menuBarIconsColor_DESC',
  MenuBarLogoIdAsc = 'menuBarLogoId_ASC',
  MenuBarLogoIdDesc = 'menuBarLogoId_DESC',
  PasswordMinLengthAsc = 'passwordMinLength_ASC',
  PasswordMinLengthDesc = 'passwordMinLength_DESC',
  PasswordRequireLowercaseAsc = 'passwordRequireLowercase_ASC',
  PasswordRequireLowercaseDesc = 'passwordRequireLowercase_DESC',
  PasswordRequireNumbersAsc = 'passwordRequireNumbers_ASC',
  PasswordRequireNumbersDesc = 'passwordRequireNumbers_DESC',
  PasswordRequireSpecialAsc = 'passwordRequireSpecial_ASC',
  PasswordRequireSpecialDesc = 'passwordRequireSpecial_DESC',
  PasswordRequireUppercaseAsc = 'passwordRequireUppercase_ASC',
  PasswordRequireUppercaseDesc = 'passwordRequireUppercase_DESC',
  PasswordUpdateIntervalAsc = 'passwordUpdateInterval_ASC',
  PasswordUpdateIntervalDesc = 'passwordUpdateInterval_DESC',
  RememberDeviceAsc = 'rememberDevice_ASC',
  RememberDeviceDesc = 'rememberDevice_DESC',
  TimezoneAsc = 'timezone_ASC',
  TimezoneDesc = 'timezone_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  UserInterfaceStyleAsc = 'userInterfaceStyle_ASC',
  UserInterfaceStyleDesc = 'userInterfaceStyle_DESC',
  VanityUrlAsc = 'vanityUrl_ASC',
  VanityUrlDesc = 'vanityUrl_DESC'
}

/** Settings subscription payload */
export type SettingPayload = {
  __typename?: 'SettingPayload';
  mutation: MutationType;
  node?: Maybe<Setting>;
  previousValues?: Maybe<Setting>;
  updatedFields?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type SettingRelationFilter = {
  every?: InputMaybe<SettingFilter>;
  none?: InputMaybe<SettingFilter>;
  some?: InputMaybe<SettingFilter>;
};

export type SettingSort = {
  bgColor?: InputMaybe<SortOrder>;
  buttonLinkColor?: InputMaybe<SortOrder>;
  containerColor?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  createdBy?: InputMaybe<UserSort>;
  currency?: InputMaybe<SortOrder>;
  dateFormat?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  landingPageImage?: InputMaybe<FileSort>;
  landingPageImageId?: InputMaybe<SortOrder>;
  language?: InputMaybe<SortOrder>;
  leftNavColor?: InputMaybe<SortOrder>;
  menuBarBGColor?: InputMaybe<SortOrder>;
  menuBarIconsColor?: InputMaybe<SortOrder>;
  menuBarLogo?: InputMaybe<FileSort>;
  menuBarLogoId?: InputMaybe<SortOrder>;
  passwordMinLength?: InputMaybe<SortOrder>;
  passwordRequireLowercase?: InputMaybe<SortOrder>;
  passwordRequireNumbers?: InputMaybe<SortOrder>;
  passwordRequireSpecial?: InputMaybe<SortOrder>;
  passwordRequireUppercase?: InputMaybe<SortOrder>;
  passwordUpdateInterval?: InputMaybe<SortOrder>;
  rememberDevice?: InputMaybe<SortOrder>;
  timezone?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userInterfaceStyle?: InputMaybe<SortOrder>;
  vanityUrl?: InputMaybe<SortOrder>;
};

/** Settings subscription filter */
export type SettingSubscriptionFilter = {
  mutation_in?: InputMaybe<Array<InputMaybe<MutationType>>>;
  node?: InputMaybe<SettingFilter>;
  updatedFields?: InputMaybe<UpdatedFieldsFilter>;
};

/** Settings update input */
export type SettingUpdateInput = {
  bgColor?: InputMaybe<Scalars['String']['input']>;
  buttonLinkColor?: InputMaybe<Scalars['String']['input']>;
  containerColor?: InputMaybe<Scalars['String']['input']>;
  currency?: InputMaybe<Scalars['String']['input']>;
  dateFormat?: InputMaybe<Scalars['String']['input']>;
  landingPageImageId?: InputMaybe<Scalars['String']['input']>;
  language?: InputMaybe<Scalars['String']['input']>;
  leftNavColor?: InputMaybe<Scalars['String']['input']>;
  menuBarBGColor?: InputMaybe<Scalars['String']['input']>;
  menuBarIconsColor?: InputMaybe<Scalars['String']['input']>;
  menuBarLogoId?: InputMaybe<Scalars['String']['input']>;
  passwordMinLength?: InputMaybe<Scalars['Int']['input']>;
  passwordRequireLowercase?: InputMaybe<Scalars['Boolean']['input']>;
  passwordRequireNumbers?: InputMaybe<Scalars['Boolean']['input']>;
  passwordRequireSpecial?: InputMaybe<Scalars['Boolean']['input']>;
  passwordRequireUppercase?: InputMaybe<Scalars['Boolean']['input']>;
  passwordUpdateInterval?: InputMaybe<Scalars['Int']['input']>;
  rememberDevice?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
  userInterfaceStyle?: InputMaybe<Scalars['String']['input']>;
  vanityUrl?: InputMaybe<Scalars['String']['input']>;
};

export type Setting_PermissionFilter = {
  AND?: InputMaybe<Array<Setting_PermissionFilter>>;
  OR?: InputMaybe<Array<Setting_PermissionFilter>>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  bgColor?: InputMaybe<StringPredicate>;
  buttonLinkColor?: InputMaybe<StringPredicate>;
  containerColor?: InputMaybe<StringPredicate>;
  createdAt?: InputMaybe<DateTimePredicate>;
  createdBy?: InputMaybe<User_PermissionFilter>;
  currency?: InputMaybe<StringPredicate>;
  dateFormat?: InputMaybe<StringPredicate>;
  deletedAt?: InputMaybe<IntPredicate>;
  landingPageImage?: InputMaybe<File_PermissionFilter>;
  landingPageImageId?: InputMaybe<StringPredicate>;
  language?: InputMaybe<StringPredicate>;
  leftNavColor?: InputMaybe<StringPredicate>;
  menuBarBGColor?: InputMaybe<StringPredicate>;
  menuBarIconsColor?: InputMaybe<StringPredicate>;
  menuBarLogo?: InputMaybe<File_PermissionFilter>;
  menuBarLogoId?: InputMaybe<StringPredicate>;
  passwordMinLength?: InputMaybe<IntPredicate>;
  passwordRequireLowercase?: InputMaybe<BoolPredicate>;
  passwordRequireNumbers?: InputMaybe<BoolPredicate>;
  passwordRequireSpecial?: InputMaybe<BoolPredicate>;
  passwordRequireUppercase?: InputMaybe<BoolPredicate>;
  passwordUpdateInterval?: InputMaybe<IntPredicate>;
  rememberDevice?: InputMaybe<StringPredicate>;
  timezone?: InputMaybe<StringPredicate>;
  updatedAt?: InputMaybe<DateTimePredicate>;
  userInterfaceStyle?: InputMaybe<StringPredicate>;
  vanityUrl?: InputMaybe<StringPredicate>;
};

export type Setting_PermissionRelationFilter = {
  every?: InputMaybe<Setting_PermissionFilter>;
  none?: InputMaybe<Setting_PermissionFilter>;
  some?: InputMaybe<Setting_PermissionFilter>;
};

/** SignUpResendInput */
export type SignUpResendInput = {
  email: Scalars['String']['input'];
};

/** Smart Field Attributes */
export type SmartFieldTypeAttributes = {
  __typename?: 'SmartFieldTypeAttributes';
  format: Scalars['String']['output'];
  innerFields?: Maybe<Array<Maybe<CustomTableField>>>;
};

/** Smart Type Format Enum */
export enum SmartTypeFormatEnum {
  Address = 'ADDRESS',
  Phone = 'PHONE'
}

/** SortOrder */
export enum SortOrder {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type StringPadFunctionArguments = {
  len: Scalars['Int']['input'];
  str: Scalars['String']['input'];
};

export type StringPredicate = {
  contains?: InputMaybe<Scalars['String']['input']>;
  ends_with?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  is_empty?: InputMaybe<Scalars['Boolean']['input']>;
  is_not_empty?: InputMaybe<Scalars['Boolean']['input']>;
  not_contains?: InputMaybe<Scalars['String']['input']>;
  not_ends_with?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  not_starts_with?: InputMaybe<Scalars['String']['input']>;
  starts_with?: InputMaybe<Scalars['String']['input']>;
};

export type StringPredicateHaving = {
  AND?: InputMaybe<Array<StringPredicateHaving>>;
  OR?: InputMaybe<Array<StringPredicateHaving>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  ends_with?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  is_empty?: InputMaybe<Scalars['Boolean']['input']>;
  is_not_empty?: InputMaybe<Scalars['Boolean']['input']>;
  not_contains?: InputMaybe<Scalars['String']['input']>;
  not_ends_with?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  not_starts_with?: InputMaybe<Scalars['String']['input']>;
  starts_with?: InputMaybe<Scalars['String']['input']>;
};

export enum StringTrimMode {
  Both = 'BOTH',
  Leading = 'LEADING',
  Trailing = 'TRAILING'
}

export type Subscription = {
  __typename?: 'Subscription';
  ApiTokens?: Maybe<ApiTokenPayload>;
  AuthenticationProfiles?: Maybe<AuthenticationProfilePayload>;
  AuthenticationSettings?: Maybe<AuthenticationSettingPayload>;
  EnvironmentVariables?: Maybe<EnvironmentVariablePayload>;
  Files?: Maybe<FilePayload>;
  Permissions?: Maybe<PermissionPayload>;
  Roles?: Maybe<RolePayload>;
  Settings?: Maybe<SettingPayload>;
  Task_user?: Maybe<Task_UserPayload>;
  Tasks?: Maybe<TaskPayload>;
  Users?: Maybe<UserPayload>;
};


export type SubscriptionApiTokensArgs = {
  filter?: InputMaybe<ApiTokenSubscriptionFilter>;
};


export type SubscriptionAuthenticationProfilesArgs = {
  filter?: InputMaybe<AuthenticationProfileSubscriptionFilter>;
};


export type SubscriptionAuthenticationSettingsArgs = {
  filter?: InputMaybe<AuthenticationSettingSubscriptionFilter>;
};


export type SubscriptionEnvironmentVariablesArgs = {
  filter?: InputMaybe<EnvironmentVariableSubscriptionFilter>;
};


export type SubscriptionFilesArgs = {
  filter?: InputMaybe<FileSubscriptionFilter>;
};


export type SubscriptionPermissionsArgs = {
  filter?: InputMaybe<PermissionSubscriptionFilter>;
};


export type SubscriptionRolesArgs = {
  filter?: InputMaybe<RoleSubscriptionFilter>;
};


export type SubscriptionSettingsArgs = {
  filter?: InputMaybe<SettingSubscriptionFilter>;
};


export type SubscriptionTask_UserArgs = {
  filter?: InputMaybe<Task_UserSubscriptionFilter>;
};


export type SubscriptionTasksArgs = {
  filter?: InputMaybe<TaskSubscriptionFilter>;
};


export type SubscriptionUsersArgs = {
  filter?: InputMaybe<UserSubscriptionFilter>;
};

export type SubstringFunctionArguments = {
  len?: InputMaybe<Scalars['Int']['input']>;
  pos: Scalars['Int']['input'];
};

export type SuccessResponse = {
  __typename?: 'SuccessResponse';
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type SuccessWithMessageResponse = {
  __typename?: 'SuccessWithMessageResponse';
  message?: Maybe<Scalars['String']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

/** Switch Field Attributes */
export type SwitchFieldTypeAttributes = {
  __typename?: 'SwitchFieldTypeAttributes';
  format: Scalars['String']['output'];
  listOptions?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

/** Switch Type Format Enum */
export enum SwitchTypeFormatEnum {
  ActiveInactive = 'ACTIVE_INACTIVE',
  Custom = 'CUSTOM',
  HighLow = 'HIGH_LOW',
  OnOff = 'ON_OFF',
  TrueFalse = 'TRUE_FALSE',
  YesNo = 'YES_NO'
}

/** Application */
export type SystemApplication = {
  __typename?: 'SystemApplication';
  appType: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  status: SystemApplicationStatusEnum;
};

/** ApplicationDeleteMutationInput */
export type SystemApplicationDeleteMutationInput = {
  force?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
};

/** Application install input */
export type SystemApplicationInstallInput = {
  appType: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  status?: InputMaybe<SystemApplicationStatusEnum>;
};

/** SystemApplicationListResponse output */
export type SystemApplicationListResponse = {
  __typename?: 'SystemApplicationListResponse';
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<SystemApplication>;
};

/** Application Status Enum */
export enum SystemApplicationStatusEnum {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE'
}

/** Application update input */
export type SystemApplicationUpdateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<SystemApplicationStatusEnum>;
};

export type SystemAsyncSessionStatusResponse = {
  __typename?: 'SystemAsyncSessionStatusResponse';
  result?: Maybe<Scalars['JSON']['output']>;
  status: Scalars['String']['output'];
};

export type SystemAuthProfile = {
  __typename?: 'SystemAuthProfile';
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type SystemAuthenticationInfo = {
  __typename?: 'SystemAuthenticationInfo';
  authProfile?: Maybe<Array<Maybe<SystemAuthProfile>>>;
  environmentId?: Maybe<Scalars['String']['output']>;
  environmentName?: Maybe<Scalars['String']['output']>;
};

export type SystemBackendUtilizationResponse = {
  __typename?: 'SystemBackendUtilizationResponse';
  authProfiles?: Maybe<Scalars['Int']['output']>;
  databaseRows?: Maybe<Scalars['Int']['output']>;
  field?: Maybe<Scalars['Int']['output']>;
  fileStorageSize?: Maybe<Scalars['Int']['output']>;
  functions?: Maybe<Scalars['Int']['output']>;
  roles?: Maybe<Scalars['Int']['output']>;
  tables?: Maybe<Scalars['Int']['output']>;
};

export type SystemBillingCurrentPlanResponse = {
  __typename?: 'SystemBillingCurrentPlanResponse';
  displayName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  nextPlan?: Maybe<SystemBillingNextPlanResponse>;
  paymentDate?: Maybe<Scalars['DateTime']['output']>;
  pdf?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<SystemWorkspaceStatus>;
  trialEnd?: Maybe<Scalars['DateTime']['output']>;
};

export enum SystemBillingDetailsOrigin {
  Member = 'member',
  Organization = 'organization',
  Workspace = 'workspace'
}

export type SystemBillingDetailsResponse = {
  __typename?: 'SystemBillingDetailsResponse';
  brand?: Maybe<Scalars['String']['output']>;
  expMonth?: Maybe<Scalars['Int']['output']>;
  expYear?: Maybe<Scalars['Int']['output']>;
  last4?: Maybe<Scalars['String']['output']>;
  origin: SystemBillingDetailsOrigin;
};

export type SystemBillingInvoiceItem = {
  __typename?: 'SystemBillingInvoiceItem';
  amountDue?: Maybe<Scalars['Float']['output']>;
  amountPaid?: Maybe<Scalars['Float']['output']>;
  amountRemaining?: Maybe<Scalars['Float']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  endingBalance?: Maybe<Scalars['Float']['output']>;
  id: Scalars['ID']['output'];
  invoicePdf?: Maybe<Scalars['String']['output']>;
  number?: Maybe<Scalars['String']['output']>;
  organization?: Maybe<SystemBillingInvoiceItemOrganizationInfo>;
  paid?: Maybe<Scalars['Boolean']['output']>;
  periodEnd?: Maybe<Scalars['DateTime']['output']>;
  periodStart?: Maybe<Scalars['DateTime']['output']>;
  plan?: Maybe<SystemBillingInvoiceItemPlanInfo>;
  project?: Maybe<SystemBillingInvoiceItemProjectInfo>;
  status?: Maybe<Scalars['String']['output']>;
  total?: Maybe<Scalars['Float']['output']>;
};

export type SystemBillingInvoiceItemOrganizationInfo = {
  __typename?: 'SystemBillingInvoiceItemOrganizationInfo';
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type SystemBillingInvoiceItemPlanInfo = {
  __typename?: 'SystemBillingInvoiceItemPlanInfo';
  displayName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type SystemBillingInvoiceItemProjectInfo = {
  __typename?: 'SystemBillingInvoiceItemProjectInfo';
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export enum SystemBillingInvoicesListFilterType {
  Customer = 'CUSTOMER',
  Project = 'PROJECT'
}

/** SystemBillingInvoicesListResponse output */
export type SystemBillingInvoicesListResponse = {
  __typename?: 'SystemBillingInvoicesListResponse';
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<SystemBillingInvoiceItem>;
};

export type SystemBillingLimitMetricItem = {
  __typename?: 'SystemBillingLimitMetricItem';
  description?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  showPriority?: Maybe<Scalars['Int']['output']>;
  tooltip?: Maybe<Scalars['String']['output']>;
  unit?: Maybe<Scalars['String']['output']>;
};

export type SystemBillingMetricOverageItem = {
  __typename?: 'SystemBillingMetricOverageItem';
  value?: Maybe<Scalars['Float']['output']>;
  warning?: Maybe<Scalars['String']['output']>;
};

export type SystemBillingMetricUsageItem = {
  __typename?: 'SystemBillingMetricUsageItem';
  limitMetric?: Maybe<SystemBillingLimitMetricItem>;
  overage?: Maybe<SystemBillingMetricOverageItem>;
  value?: Maybe<Scalars['Float']['output']>;
};

export type SystemBillingMetricUsageQuotaItem = {
  __typename?: 'SystemBillingMetricUsageQuotaItem';
  limitMetric?: Maybe<SystemBillingLimitMetricItem>;
  value?: Maybe<Scalars['Float']['output']>;
};

/** SystemBillingMetricUsageQuotasListResponse output */
export type SystemBillingMetricUsageQuotasListResponse = {
  __typename?: 'SystemBillingMetricUsageQuotasListResponse';
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<SystemBillingMetricUsageQuotaItem>;
};

export type SystemBillingMetricUsagesListFilter = {
  entryDate: DateTimePredicate;
};

/** SystemBillingMetricUsagesListResponse output */
export type SystemBillingMetricUsagesListResponse = {
  __typename?: 'SystemBillingMetricUsagesListResponse';
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<SystemBillingMetricUsageItem>;
};

export type SystemBillingNextPlanResponse = {
  __typename?: 'SystemBillingNextPlanResponse';
  displayName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  pdf?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Int']['output']>;
};

export type SystemBillingPlanBaseInfo = {
  __typename?: 'SystemBillingPlanBaseInfo';
  description?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  isCustom?: Maybe<Scalars['Boolean']['output']>;
  isLegacy?: Maybe<Scalars['Boolean']['output']>;
  limitMetrics?: Maybe<Array<Maybe<SystemBillingPlanLimitMetricItem>>>;
  name?: Maybe<Scalars['String']['output']>;
  pdf?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Int']['output']>;
};

export type SystemBillingPlanLimitMetricItem = {
  __typename?: 'SystemBillingPlanLimitMetricItem';
  displayName?: Maybe<Scalars['String']['output']>;
  hardLimit?: Maybe<Scalars['Float']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  overagePrice?: Maybe<Scalars['Int']['output']>;
  softLimit?: Maybe<Scalars['Float']['output']>;
};

/** BillingPlanUpdateMutationInput */
export type SystemBillingPlanUpdateMutationInput = {
  planId: Scalars['ID']['input'];
  projectID: Scalars['ID']['input'];
};

export enum SystemBranchEnvironmentMode {
  Full = 'FULL',
  System = 'SYSTEM'
}

export type SystemCacheEvictResponse = {
  __typename?: 'SystemCacheEvictResponse';
  evicted: Array<Maybe<Scalars['String']['output']>>;
};

/** Ci Commit Mode */
export enum SystemCiCommitMode {
  Full = 'FULL',
  OnlyMigrations = 'ONLY_MIGRATIONS',
  OnlyProject = 'ONLY_PROJECT'
}

/** Ci Status */
export type SystemCiStatusOutput = {
  __typename?: 'SystemCiStatusOutput';
  migrations?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  status: Scalars['String']['output'];
};

/** CloudLogs Entry */
export type SystemCloudLogsEntry = {
  __typename?: 'SystemCloudLogsEntry';
  message?: Maybe<Scalars['String']['output']>;
  timestamp?: Maybe<Scalars['DateTime']['output']>;
};

/** Computed field mode */
export enum SystemComputedFieldMode {
  Stored = 'STORED',
  Virtual = 'VIRTUAL'
}

/** Custom Table Field Type */
export type SystemCustomTableField = {
  __typename?: 'SystemCustomTableField';
  computedMode?: Maybe<SystemComputedFieldMode>;
  defaultValue?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  expression?: Maybe<Scalars['String']['output']>;
  fieldType?: Maybe<SystemFieldType>;
  fieldTypeAttributes?: Maybe<SystemFieldTypeAttributes>;
  isList: Scalars['Boolean']['output'];
  isRequired: Scalars['Boolean']['output'];
  isUnique?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** Date Field Attributes */
export type SystemDateFieldTypeAttributes = {
  __typename?: 'SystemDateFieldTypeAttributes';
  format: Scalars['String']['output'];
};

/** Date Type Format Enum */
export enum SystemDateTypeFormatEnum {
  Date = 'DATE',
  Datetime = 'DATETIME'
}

/** DeployDataResponse */
export type SystemDeployDataResponse = {
  __typename?: 'SystemDeployDataResponse';
  buildName: Scalars['String']['output'];
  uploadBuildUrl: Scalars['String']['output'];
  uploadMetaDataUrl: Scalars['String']['output'];
};

export enum SystemDeployModeEnum {
  Full = 'FULL',
  Functions = 'FUNCTIONS',
  Migrations = 'MIGRATIONS',
  OnlyPlugins = 'ONLY_PLUGINS',
  OnlyProject = 'ONLY_PROJECT'
}

/** DeployOptions */
export type SystemDeployOptions = {
  extensionNames?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  mode?: InputMaybe<SystemDeployModeEnum>;
  pluginNames?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export enum SystemDeployStatusEnum {
  Compiling = 'compiling',
  CompleteError = 'complete_error',
  CompleteSuccess = 'complete_success',
  Deploying = 'deploying',
  Initialize = 'initialize',
  Preparing = 'preparing'
}

/** SystemDeployStatusResult */
export type SystemDeployStatusResult = {
  __typename?: 'SystemDeployStatusResult';
  message?: Maybe<Scalars['String']['output']>;
  status: SystemDeployStatusEnum;
};

/** DeployingBuildInput */
export type SystemDeployingBuildInput = {
  buildName: Scalars['String']['input'];
  options?: InputMaybe<SystemDeployOptions>;
};

export type SystemDeploymentAbItemResponse = {
  __typename?: 'SystemDeploymentABItemResponse';
  dateDeploy?: Maybe<Scalars['DateTime']['output']>;
  statusDeploy?: Maybe<Scalars['String']['output']>;
  urlDeploy?: Maybe<Scalars['String']['output']>;
  userDeploy?: Maybe<SystemMemberAccountInfo>;
  versionDeploy?: Maybe<Scalars['String']['output']>;
  versionFrontEnd?: Maybe<Scalars['String']['output']>;
};

export type SystemDeploymentProjectItemResponse = {
  __typename?: 'SystemDeploymentProjectItemResponse';
  dateDeploy?: Maybe<Scalars['DateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  statusDeploy?: Maybe<Scalars['String']['output']>;
  urlDeploy?: Maybe<Scalars['String']['output']>;
  versionDeploy?: Maybe<Scalars['String']['output']>;
  versionFrontEnd?: Maybe<Scalars['String']['output']>;
  workspaceId?: Maybe<Scalars['ID']['output']>;
};

/** SystemDeploymentProjectListResponse output */
export type SystemDeploymentProjectListResponse = {
  __typename?: 'SystemDeploymentProjectListResponse';
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<SystemDeploymentProjectItemResponse>;
};

/** SystemEnvironmentBackupListResponse output */
export type SystemEnvironmentBackupListResponse = {
  __typename?: 'SystemEnvironmentBackupListResponse';
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<EnvironmentBackupItem>;
};

export type SystemEnvironmentMember = {
  __typename?: 'SystemEnvironmentMember';
  avatar?: Maybe<SystemEnvironmentMemberAvatar>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['String']['output'];
  firstName?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  permissions?: Maybe<SystemEnvironmentMemberPermissionsList>;
  registeredAt?: Maybe<Scalars['DateTime']['output']>;
  roles?: Maybe<SystemEnvironmentMemberRolesList>;
  status: Scalars['String']['output'];
};

export type SystemEnvironmentMemberAvatar = {
  __typename?: 'SystemEnvironmentMemberAvatar';
  downloadUrl?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};

export type SystemEnvironmentMemberFilter = {
  email?: InputMaybe<Scalars['String']['input']>;
  workspaceId?: InputMaybe<Scalars['String']['input']>;
};

export type SystemEnvironmentMemberPermission = {
  __typename?: 'SystemEnvironmentMemberPermission';
  permission?: Maybe<Scalars['JSON']['output']>;
  resource?: Maybe<Scalars['String']['output']>;
  resourceType?: Maybe<Scalars['String']['output']>;
};

export type SystemEnvironmentMemberPermissionsList = {
  __typename?: 'SystemEnvironmentMemberPermissionsList';
  count: Scalars['Int']['output'];
  items?: Maybe<Array<SystemEnvironmentMemberPermission>>;
};

export type SystemEnvironmentMemberRole = {
  __typename?: 'SystemEnvironmentMemberRole';
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type SystemEnvironmentMemberRoleIdFilterPredicate = {
  equals?: InputMaybe<Scalars['ID']['input']>;
  not_equals?: InputMaybe<Scalars['ID']['input']>;
};

export type SystemEnvironmentMemberRolesList = {
  __typename?: 'SystemEnvironmentMemberRolesList';
  count: Scalars['Int']['output'];
  items?: Maybe<Array<SystemEnvironmentMemberRole>>;
};

export type SystemEnvironmentMemberUpdateData = {
  roles?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type SystemEnvironmentMembersFilter = {
  email: Scalars['String']['input'];
};

export type SystemEnvironmentMembersListFilter = {
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  roleId?: InputMaybe<SystemEnvironmentMemberRoleIdFilterPredicate>;
  workspaceId?: InputMaybe<Scalars['ID']['input']>;
};

/** SystemEnvironmentMembersListResponse output */
export type SystemEnvironmentMembersListResponse = {
  __typename?: 'SystemEnvironmentMembersListResponse';
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<SystemEnvironmentMember>;
};

export type SystemEnvironmentMembersListSort = {
  email?: InputMaybe<SortOrder>;
  firstName?: InputMaybe<SortOrder>;
  isOwner?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
};

export type SystemEnvironmentProjectItem = {
  __typename?: 'SystemEnvironmentProjectItem';
  fields?: Maybe<Scalars['String']['output']>;
  functions?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  tables?: Maybe<Scalars['String']['output']>;
  worksApiHost?: Maybe<Scalars['String']['output']>;
  workspaceId: Scalars['ID']['output'];
  workspaceName: Scalars['String']['output'];
};

export type SystemEnvironmentRoleBaseInfo = {
  __typename?: 'SystemEnvironmentRoleBaseInfo';
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type SystemEnvironmentRoleList = {
  __typename?: 'SystemEnvironmentRoleList';
  assignedRoles?: Maybe<Array<Maybe<SystemEnvironmentRoleBaseInfo>>>;
  environmentId: Scalars['String']['output'];
  environmentName: Scalars['String']['output'];
  exists?: Maybe<Scalars['Boolean']['output']>;
  roles?: Maybe<Array<Maybe<SystemEnvironmentRoleBaseInfo>>>;
};

export type SystemEnvironmentSettings = {
  __typename?: 'SystemEnvironmentSettings';
  deleteLock?: Maybe<Scalars['Boolean']['output']>;
  fileManagementProvider?: Maybe<SystemFileManagerProviderTypeEnum>;
  introspection?: Maybe<Scalars['Boolean']['output']>;
};

/** SystemEnvironmentsListResponse output */
export type SystemEnvironmentsListResponse = {
  __typename?: 'SystemEnvironmentsListResponse';
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<EnvironmentItem>;
};

/** SystemEnvironmentsProjectListResponse output */
export type SystemEnvironmentsProjectListResponse = {
  __typename?: 'SystemEnvironmentsProjectListResponse';
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<SystemEnvironmentProjectItem>;
};

/** Field Data Features */
export type SystemFieldDataFeatures = {
  __typename?: 'SystemFieldDataFeatures';
  create: Scalars['Boolean']['output'];
  sort: Scalars['Boolean']['output'];
  update: Scalars['Boolean']['output'];
};

/** Field Schema Features */
export type SystemFieldSchemaFeatures = {
  __typename?: 'SystemFieldSchemaFeatures';
  delete: Scalars['Boolean']['output'];
  update: Scalars['Boolean']['output'];
};

/** Field types */
export enum SystemFieldType {
  Date = 'DATE',
  File = 'FILE',
  Geo = 'GEO',
  Id = 'ID',
  Json = 'JSON',
  MissingRelation = 'MISSING_RELATION',
  Number = 'NUMBER',
  OneWayRelation = 'ONE_WAY_RELATION',
  Relation = 'RELATION',
  Smart = 'SMART',
  Switch = 'SWITCH',
  Text = 'TEXT',
  Uuid = 'UUID'
}

/** Field Type Attributes */
export type SystemFieldTypeAttributes = SystemDateFieldTypeAttributes | SystemFileFieldTypeAttributes | SystemGeoFieldTypeAttributes | SystemMissingRelationFieldTypeAttributes | SystemNumberFieldTypeAttributes | SystemSmartFieldTypeAttributes | SystemSwitchFieldTypeAttributes | SystemTextFieldTypeAttributes | SystemUuidFieldTypeAttributes;

/** Field Type Attributes Input */
export type SystemFieldTypeAttributesInput = {
  autoIncrement?: InputMaybe<Scalars['Boolean']['input']>;
  currency?: InputMaybe<Scalars['String']['input']>;
  expiration?: InputMaybe<Scalars['Int']['input']>;
  fieldSize?: InputMaybe<Scalars['Int']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  isBigInt?: InputMaybe<Scalars['Boolean']['input']>;
  listOptions?: InputMaybe<Array<Scalars['String']['input']>>;
  maxSize?: InputMaybe<Scalars['Int']['input']>;
  maxValue?: InputMaybe<Scalars['Float']['input']>;
  minValue?: InputMaybe<Scalars['Float']['input']>;
  precision?: InputMaybe<Scalars['Int']['input']>;
  srid?: InputMaybe<Scalars['Int']['input']>;
  typeRestrictions?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type SystemFileBaseInfo = {
  __typename?: 'SystemFileBaseInfo';
  downloadUrl?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};

/** File Field Attributes */
export type SystemFileFieldTypeAttributes = {
  __typename?: 'SystemFileFieldTypeAttributes';
  expiration?: Maybe<Scalars['Int']['output']>;
  format: Scalars['String']['output'];
  maxSize?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Field is deprecated */
  showTitle?: Maybe<Scalars['Boolean']['output']>;
  /** @deprecated Field is deprecated */
  showUrl?: Maybe<Scalars['Boolean']['output']>;
  typeRestrictions?: Maybe<Array<Scalars['String']['output']>>;
};

export enum SystemFileManagerProviderTypeEnum {
  Aws = 'aws',
  Filestack = 'filestack',
  Uploadcare = 'uploadcare'
}

/** File Type Format Enum */
export enum SystemFileTypeFormatEnum {
  File = 'FILE',
  Image = 'IMAGE'
}

/** FileUploadByUrlInput */
export type SystemFileUploadByUrlInput = {
  url: Scalars['String']['input'];
};

/** FileUploadByUrlResponse */
export type SystemFileUploadByUrlResponse = {
  __typename?: 'SystemFileUploadByUrlResponse';
  fileId: Scalars['String']['output'];
  meta: Scalars['JSON']['output'];
};

export type SystemFileUploadSignInfo = AwsSignInfoResponse | FileStackSignInfoResponse | UploadcareSignInfoResponse;

export type SystemFrontendUtilizationAbResponse = {
  __typename?: 'SystemFrontendUtilizationABResponse';
  CDN?: Maybe<Scalars['Boolean']['output']>;
  assets?: Maybe<Scalars['Int']['output']>;
  customStates?: Maybe<Scalars['Int']['output']>;
  functions?: Maybe<Scalars['Int']['output']>;
  layouts?: Maybe<Scalars['Int']['output']>;
  libraries?: Maybe<Scalars['Int']['output']>;
  pages?: Maybe<Scalars['Int']['output']>;
  requests?: Maybe<Scalars['Int']['output']>;
  resources?: Maybe<Scalars['Int']['output']>;
};

export type SystemFrontendUtilizationResponse = {
  __typename?: 'SystemFrontendUtilizationResponse';
  assets?: Maybe<Scalars['Int']['output']>;
  customStates?: Maybe<Scalars['Int']['output']>;
  functions?: Maybe<Scalars['Int']['output']>;
  layouts?: Maybe<Scalars['Int']['output']>;
  libraries?: Maybe<Scalars['Int']['output']>;
  pages?: Maybe<Scalars['Int']['output']>;
  requests?: Maybe<Scalars['Int']['output']>;
  resources?: Maybe<Scalars['Int']['output']>;
};

/** FunctionInfo */
export type SystemFunctionInfo = {
  application?: Maybe<SystemApplication>;
  description?: Maybe<Scalars['String']['output']>;
  functionType: SystemFunctionType;
  name: Scalars['String']['output'];
};

/** FunctionInfoFilter */
export type SystemFunctionInfoFilter = {
  description?: InputMaybe<Scalars['String']['input']>;
  functionType?: InputMaybe<SystemFunctionType>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** FunctionInfoOrderBy */
export enum SystemFunctionInfoOrderBy {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  FunctionTypeAsc = 'functionType_ASC',
  FunctionTypeDesc = 'functionType_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC'
}

/** SystemFunctionListResponse output */
export type SystemFunctionListResponse = {
  __typename?: 'SystemFunctionListResponse';
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<SystemFunctionInfo>;
};

/** FunctionResolverInfo */
export type SystemFunctionResolverInfo = SystemFunctionInfo & {
  __typename?: 'SystemFunctionResolverInfo';
  application?: Maybe<SystemApplication>;
  description?: Maybe<Scalars['String']['output']>;
  functionType: SystemFunctionType;
  gqlType: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

/** FunctionTaskInfo */
export type SystemFunctionTaskInfo = SystemFunctionInfo & {
  __typename?: 'SystemFunctionTaskInfo';
  application?: Maybe<SystemApplication>;
  description?: Maybe<Scalars['String']['output']>;
  functionType: SystemFunctionType;
  name: Scalars['String']['output'];
  scheduleExpression?: Maybe<Scalars['String']['output']>;
};

/** FunctionTriggerInfo */
export type SystemFunctionTriggerInfo = SystemFunctionInfo & {
  __typename?: 'SystemFunctionTriggerInfo';
  application?: Maybe<SystemApplication>;
  description?: Maybe<Scalars['String']['output']>;
  functionType: SystemFunctionType;
  name: Scalars['String']['output'];
  operation: Scalars['String']['output'];
  tableName: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

/** FunctionType */
export enum SystemFunctionType {
  Resolver = 'resolver',
  Schedule = 'schedule',
  Task = 'task',
  Trigger = 'trigger',
  Webhook = 'webhook'
}

/** FunctionWebhookInfo */
export type SystemFunctionWebhookInfo = SystemFunctionInfo & {
  __typename?: 'SystemFunctionWebhookInfo';
  application?: Maybe<SystemApplication>;
  description?: Maybe<Scalars['String']['output']>;
  functionType: SystemFunctionType;
  httpMethod: Scalars['String']['output'];
  name: Scalars['String']['output'];
  workspaceFullPath: Scalars['String']['output'];
  workspaceRelativePath: Scalars['String']['output'];
};

/** Diff Environment Input */
export type SystemGenerateEnvironmentOutput = {
  __typename?: 'SystemGenerateEnvironmentOutput';
  url?: Maybe<Scalars['String']['output']>;
};

/** Geo Field Attributes */
export type SystemGeoFieldTypeAttributes = {
  __typename?: 'SystemGeoFieldTypeAttributes';
  format: Scalars['String']['output'];
  srid?: Maybe<Scalars['Int']['output']>;
};

export type SystemInboxEventDetailsUnion = SystemInboxEventEnvironmentInvitationDetails | SystemInboxEventNotificationDetailsType | SystemInboxEventOrganizationInvitationDetails | SystemInboxEventProjectInvitationDetails;

export type SystemInboxEventEnvironmentInvitationDetails = {
  __typename?: 'SystemInboxEventEnvironmentInvitationDetails';
  environmentName?: Maybe<Scalars['String']['output']>;
  invitedBy?: Maybe<SystemInboxEventInvitedBy>;
  status?: Maybe<SystemInboxEventStatusEnum>;
  uuid?: Maybe<Scalars['String']['output']>;
  workspace?: Maybe<SystemInboxEventWorkspace>;
};

export type SystemInboxEventInvitedBy = {
  __typename?: 'SystemInboxEventInvitedBy';
  avatar?: Maybe<GraphQlFileItemResponse>;
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
};

export type SystemInboxEventItem = {
  __typename?: 'SystemInboxEventItem';
  createdAt: Scalars['DateTime']['output'];
  details?: Maybe<SystemInboxEventDetailsUnion>;
  id: Scalars['ID']['output'];
  isCompleted?: Maybe<Scalars['Boolean']['output']>;
  type?: Maybe<SystemInboxEventTypeEnum>;
};

export type SystemInboxEventNotificationDetailsType = {
  __typename?: 'SystemInboxEventNotificationDetailsType';
  details?: Maybe<Scalars['JSON']['output']>;
  kind?: Maybe<Scalars['String']['output']>;
};

export type SystemInboxEventOrganization = {
  __typename?: 'SystemInboxEventOrganization';
  avatar?: Maybe<GraphQlFileItemResponse>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
};

export type SystemInboxEventOrganizationInvitationDetails = {
  __typename?: 'SystemInboxEventOrganizationInvitationDetails';
  invitedBy?: Maybe<SystemInboxEventInvitedBy>;
  organization?: Maybe<SystemInboxEventOrganization>;
  status?: Maybe<SystemInboxEventStatusEnum>;
  uuid?: Maybe<Scalars['String']['output']>;
};

export type SystemInboxEventProject = {
  __typename?: 'SystemInboxEventProject';
  avatar?: Maybe<GraphQlFileItemResponse>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
};

export type SystemInboxEventProjectInvitationDetails = {
  __typename?: 'SystemInboxEventProjectInvitationDetails';
  invitedBy?: Maybe<SystemInboxEventInvitedBy>;
  project?: Maybe<SystemInboxEventProject>;
  status?: Maybe<SystemInboxEventStatusEnum>;
  uuid?: Maybe<Scalars['String']['output']>;
};

export enum SystemInboxEventStatusEnum {
  Accepted = 'accepted',
  Declined = 'declined',
  Sent = 'sent'
}

export enum SystemInboxEventTypeEnum {
  EnvironmentInvitation = 'EnvironmentInvitation',
  Notification = 'Notification',
  OrganizationInvitation = 'OrganizationInvitation',
  ProjectInvitation = 'ProjectInvitation'
}

export type SystemInboxEventWorkspace = {
  __typename?: 'SystemInboxEventWorkspace';
  apiHost?: Maybe<Scalars['String']['output']>;
  avatar?: Maybe<GraphQlFileItemResponse>;
  id: Scalars['ID']['output'];
  kind?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** SystemInboxEventsListResponse output */
export type SystemInboxEventsListResponse = {
  __typename?: 'SystemInboxEventsListResponse';
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<SystemInboxEventItem>;
};

/** Table Create Index Input */
export type SystemIndexCreateInput = {
  columns: Array<SystemTableIndexColumnInput>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  tableId: Scalars['ID']['input'];
  type: TableIndexType;
};

/** Table Delete Index Input */
export type SystemIndexDeleteInput = {
  id: Scalars['ID']['input'];
};

/** Table Update Index Input */
export type SystemIndexUpdateInput = {
  columns?: InputMaybe<Array<SystemTableIndexColumnInput>>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<TableIndexType>;
};

/** Invite members input */
export type SystemInviteMembersInput = {
  recipients: Array<SystemInviteRecipientInput>;
};

/** Invite recipient input */
export type SystemInviteRecipientInput = {
  email: Scalars['String']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  roles?: InputMaybe<Array<Scalars['ID']['input']>>;
};

/** Invited By Name */
export type SystemInvitedByName = {
  __typename?: 'SystemInvitedByName';
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  workspaceName?: Maybe<Scalars['String']['output']>;
};

/** InvokeData */
export type SystemInvokeData = {
  functionName: Scalars['String']['input'];
  inputArgs?: InputMaybe<Scalars['String']['input']>;
};

/** InvokeFunctionResponse */
export type SystemInvokeFunctionResponse = {
  __typename?: 'SystemInvokeFunctionResponse';
  responseData: Scalars['String']['output'];
};

/** LogsListFiltered Response */
export type SystemLogsListFilteredResponse = {
  __typename?: 'SystemLogsListFilteredResponse';
  count?: Maybe<Scalars['Int']['output']>;
  items?: Maybe<Array<Maybe<SystemCloudLogsEntry>>>;
  nextToken?: Maybe<Scalars['String']['output']>;
};

/**
 * Member - list of workspaces you are member of
 * Owner - list of workspaces you are owner of
 * OrganizationUser - list of organizations you are part of
 */
export type SystemMemberAccountDeleteDetails = {
  __typename?: 'SystemMemberAccountDeleteDetails';
  member?: Maybe<Array<Maybe<SystemOrganizationWorkspaceItem>>>;
  organizationUser?: Maybe<Array<Maybe<SystemOrganizationBaseItem>>>;
  owner?: Maybe<Array<Maybe<SystemOrganizationWorkspaceItem>>>;
};

export type SystemMemberAccountDeleteResponse = {
  __typename?: 'SystemMemberAccountDeleteResponse';
  details?: Maybe<SystemMemberAccountDeleteDetails>;
  success: Scalars['Boolean']['output'];
};

export type SystemMemberAccountInfo = {
  __typename?: 'SystemMemberAccountInfo';
  aboutMe?: Maybe<Scalars['String']['output']>;
  addressLine1?: Maybe<Scalars['String']['output']>;
  addressLine2?: Maybe<Scalars['String']['output']>;
  avatar?: Maybe<GraphQlFileItemResponse>;
  city?: Maybe<Scalars['String']['output']>;
  companyName?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['String']['output'];
  firstName?: Maybe<Scalars['String']['output']>;
  githubUsername?: Maybe<Scalars['String']['output']>;
  intendedUse?: Maybe<Scalars['String']['output']>;
  isDeveloper?: Maybe<Scalars['Boolean']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  learningMode?: Maybe<Scalars['Boolean']['output']>;
  linkedInUsername?: Maybe<Scalars['String']['output']>;
  projectDescription?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  timezone?: Maybe<Scalars['String']['output']>;
  twitterUsername?: Maybe<Scalars['String']['output']>;
  type?: Maybe<SystemUserType>;
  website?: Maybe<Scalars['String']['output']>;
  zipCode?: Maybe<Scalars['String']['output']>;
};

export type SystemMemberAccountUpsertDataInput = {
  aboutMe?: InputMaybe<Scalars['String']['input']>;
  addressLine1?: InputMaybe<Scalars['String']['input']>;
  addressLine2?: InputMaybe<Scalars['String']['input']>;
  avatar?: InputMaybe<GraphQlCreateFileItemInput>;
  city?: InputMaybe<Scalars['String']['input']>;
  companyName?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  githubUsername?: InputMaybe<Scalars['String']['input']>;
  intendedUse?: InputMaybe<Scalars['String']['input']>;
  isDeveloper?: InputMaybe<Scalars['Boolean']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  learningMode?: InputMaybe<Scalars['Boolean']['input']>;
  linkedInUsername?: InputMaybe<Scalars['String']['input']>;
  projectDescription?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
  twitterUsername?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<SystemUserType>;
  website?: InputMaybe<Scalars['String']['input']>;
  zipCode?: InputMaybe<Scalars['String']['input']>;
};

/** Member Invitation */
export type SystemMemberInvitation = {
  __typename?: 'SystemMemberInvitation';
  accepted?: Maybe<Scalars['Boolean']['output']>;
  acceptedOn?: Maybe<Scalars['DateTime']['output']>;
  apiHost?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  invitedBy?: Maybe<SystemInvitedByName>;
  isRegistered?: Maybe<Scalars['Boolean']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  resentOn?: Maybe<Scalars['DateTime']['output']>;
};

/** Member invitation accept input */
export type SystemMemberInvitationAcceptInput = {
  accepted: Scalars['Boolean']['input'];
  id: Scalars['String']['input'];
};

/** Member Invitation Accept Response */
export type SystemMemberInvitationAcceptResponse = {
  __typename?: 'SystemMemberInvitationAcceptResponse';
  success: Scalars['Boolean']['output'];
};

/** Cancel members invitations input */
export type SystemMemberInvitationCancelInput = {
  email: Scalars['String']['input'];
};

/** Resend member invitation input */
export type SystemMemberInvitationResendInput = {
  email: Scalars['ID']['input'];
};

export type SystemMemberInvitationsList = {
  __typename?: 'SystemMemberInvitationsList';
  count?: Maybe<Scalars['Int']['output']>;
  items?: Maybe<Array<Maybe<SystemMemberInvitation>>>;
};

/** MemberPaymentDetailsUpdateMutationInput */
export type SystemMemberPaymentDetailsUpdateMutationInput = {
  cardToken?: InputMaybe<Scalars['String']['input']>;
};

/** MissingRelation Field Attributes */
export type SystemMissingRelationFieldTypeAttributes = {
  __typename?: 'SystemMissingRelationFieldTypeAttributes';
  missingTable: Scalars['String']['output'];
};

export type SystemMutation = {
  __typename?: 'SystemMutation';
  applicationDelete?: Maybe<SuccessResponse>;
  applicationInstall?: Maybe<SystemApplication>;
  applicationUpdate?: Maybe<SystemApplication>;
  billingContextCacheEvict?: Maybe<SystemCacheEvictResponse>;
  billingPlanUpdate?: Maybe<SystemBillingCurrentPlanResponse>;
  ciCommit?: Maybe<AsyncSession>;
  ciInstall?: Maybe<SuccessResponse>;
  deploy?: Maybe<Scalars['Boolean']['output']>;
  environmentBackup?: Maybe<AsyncSession>;
  environmentBranch?: Maybe<AsyncSession>;
  environmentDelete?: Maybe<SuccessResponse>;
  environmentDeleteAsync?: Maybe<AsyncSession>;
  environmentMemberDelete: SuccessResponse;
  environmentMemberUpdate?: Maybe<SystemEnvironmentMember>;
  environmentRestore?: Maybe<AsyncSession>;
  environmentSetup?: Maybe<SuccessResponse>;
  fieldCreate: SystemTableField;
  fieldDelete: SuccessResponse;
  fieldUpdate: SystemTableField;
  fieldUpdatePosition: SuccessResponse;
  fileUploadByUrl: SystemFileUploadByUrlResponse;
  indexCreate: SystemTableIndex;
  indexDelete?: Maybe<SuccessResponse>;
  indexUpdate: SystemTableIndex;
  inviteMembers: Array<Maybe<SystemTeamInvitationDetails>>;
  invoke?: Maybe<SystemInvokeFunctionResponse>;
  memberAccountDelete?: Maybe<SystemMemberAccountDeleteResponse>;
  memberAccountUpsert?: Maybe<SystemMemberAccountInfo>;
  memberInvitationAccept: SystemMemberInvitationAcceptResponse;
  memberInvitationCancel?: Maybe<SuccessResponse>;
  memberInvitationResend?: Maybe<SuccessResponse>;
  memberPaymentDetailsUpdate?: Maybe<SystemPaymentDetailsResponse>;
  notificationUpdate?: Maybe<SuccessResponse>;
  organizationInviteUser?: Maybe<OrganizationUserInvitationResponse>;
  organizationInviteUserAccept?: Maybe<SuccessResponse>;
  organizationInviteUserCancel?: Maybe<SuccessResponse>;
  organizationPaymentDetailsUpdate?: Maybe<SystemPaymentDetailsResponse>;
  organizationProjectUserRemove?: Maybe<SuccessResponse>;
  organizationProjectUserShare?: Maybe<SuccessResponse>;
  organizationUpdate?: Maybe<SystemOrganizationItem>;
  organizationUserRemove?: Maybe<SuccessResponse>;
  organizationUserUpdate?: Maybe<SystemOrganizationUserInfo>;
  prepareDeploy: SystemDeployDataResponse;
  projectCreate?: Maybe<AsyncSession>;
  projectDelete?: Maybe<AsyncSession>;
  projectInviteUser?: Maybe<SystemProjectUserInvitationResponse>;
  projectInviteUserAccept?: Maybe<SuccessResponse>;
  projectInviteUserCancel?: Maybe<SuccessResponse>;
  projectUpdate?: Maybe<SystemProjectUpdateResponse>;
  projectUserRemove?: Maybe<SuccessResponse>;
  rolePermissionsCacheEvict?: Maybe<SystemCacheEvictResponse>;
  tableCreate: SystemTable;
  tableDelete: SuccessResponse;
  tableUpdate: SystemTable;
  viewCreate: SystemTable;
  viewUpdate: SystemTable;
  workspaceCreate?: Maybe<SystemWorkspaceCreateResponse>;
  workspaceCreateAsync?: Maybe<SystemWorkspaceCreateResponse>;
  workspaceDelete?: Maybe<SuccessResponse>;
  workspaceLeave?: Maybe<SuccessResponse>;
  workspaceUpdate?: Maybe<SystemWorkspaceUpdateResponse>;
};


export type SystemMutationApplicationDeleteArgs = {
  data: SystemApplicationDeleteMutationInput;
};


export type SystemMutationApplicationInstallArgs = {
  data: SystemApplicationInstallInput;
};


export type SystemMutationApplicationUpdateArgs = {
  data: SystemApplicationUpdateInput;
};


export type SystemMutationBillingContextCacheEvictArgs = {
  keys: Array<Scalars['String']['input']>;
  projectKeys: Array<Scalars['String']['input']>;
};


export type SystemMutationBillingPlanUpdateArgs = {
  data: SystemBillingPlanUpdateMutationInput;
};


export type SystemMutationCiCommitArgs = {
  build?: InputMaybe<Scalars['String']['input']>;
  migrationNames?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  mode?: InputMaybe<SystemCiCommitMode>;
};


export type SystemMutationDeployArgs = {
  data?: InputMaybe<SystemDeployingBuildInput>;
};


export type SystemMutationEnvironmentBackupArgs = {
  environmentName: Scalars['String']['input'];
};


export type SystemMutationEnvironmentBranchArgs = {
  mode?: InputMaybe<SystemBranchEnvironmentMode>;
  name: Scalars['String']['input'];
};


export type SystemMutationEnvironmentDeleteArgs = {
  environmentName: Scalars['String']['input'];
};


export type SystemMutationEnvironmentDeleteAsyncArgs = {
  environmentName: Scalars['String']['input'];
};


export type SystemMutationEnvironmentMemberDeleteArgs = {
  filter?: InputMaybe<SystemEnvironmentMembersFilter>;
};


export type SystemMutationEnvironmentMemberUpdateArgs = {
  data?: InputMaybe<SystemEnvironmentMemberUpdateData>;
  filter?: InputMaybe<SystemEnvironmentMembersFilter>;
};


export type SystemMutationEnvironmentRestoreArgs = {
  backup: Scalars['String']['input'];
  environmentName: Scalars['String']['input'];
};


export type SystemMutationEnvironmentSetupArgs = {
  data?: InputMaybe<EnvironmentSetupInput>;
};


export type SystemMutationFieldCreateArgs = {
  data: SystemTableFieldCreateInput;
};


export type SystemMutationFieldDeleteArgs = {
  data: SystemTableFieldDeleteInput;
};


export type SystemMutationFieldUpdateArgs = {
  data: SystemTableFieldUpdateInput;
};


export type SystemMutationFieldUpdatePositionArgs = {
  data: SystemTableFieldPositionUpdateInput;
};


export type SystemMutationFileUploadByUrlArgs = {
  data: SystemFileUploadByUrlInput;
};


export type SystemMutationIndexCreateArgs = {
  data: SystemIndexCreateInput;
};


export type SystemMutationIndexDeleteArgs = {
  data: SystemIndexDeleteInput;
};


export type SystemMutationIndexUpdateArgs = {
  data: SystemIndexUpdateInput;
};


export type SystemMutationInviteMembersArgs = {
  data: SystemInviteMembersInput;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type SystemMutationInvokeArgs = {
  data?: InputMaybe<SystemInvokeData>;
};


export type SystemMutationMemberAccountUpsertArgs = {
  data?: InputMaybe<SystemMemberAccountUpsertDataInput>;
};


export type SystemMutationMemberInvitationAcceptArgs = {
  data: SystemMemberInvitationAcceptInput;
};


export type SystemMutationMemberInvitationCancelArgs = {
  data: SystemMemberInvitationCancelInput;
};


export type SystemMutationMemberInvitationResendArgs = {
  data: SystemMemberInvitationResendInput;
};


export type SystemMutationMemberPaymentDetailsUpdateArgs = {
  data: SystemMemberPaymentDetailsUpdateMutationInput;
};


export type SystemMutationNotificationUpdateArgs = {
  id: Scalars['String']['input'];
  status: NotificationStatusType;
};


export type SystemMutationOrganizationInviteUserArgs = {
  email: Scalars['String']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  organizationId: Scalars['ID']['input'];
  projects?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  role: Scalars['String']['input'];
};


export type SystemMutationOrganizationInviteUserAcceptArgs = {
  invitationId: Scalars['String']['input'];
};


export type SystemMutationOrganizationInviteUserCancelArgs = {
  invitationId: Scalars['String']['input'];
};


export type SystemMutationOrganizationPaymentDetailsUpdateArgs = {
  data: SystemOrganizationPaymentDetailsUpdateMutationInput;
};


export type SystemMutationOrganizationProjectUserRemoveArgs = {
  email: Scalars['String']['input'];
  projectId: Scalars['ID']['input'];
};


export type SystemMutationOrganizationProjectUserShareArgs = {
  email: Scalars['String']['input'];
  projectId: Scalars['ID']['input'];
};


export type SystemMutationOrganizationUpdateArgs = {
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  image?: InputMaybe<GraphQlCreateFileItemInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<SystemOrganizationTypeEnum>;
};


export type SystemMutationOrganizationUserRemoveArgs = {
  email: Scalars['String']['input'];
  organizationId: Scalars['String']['input'];
};


export type SystemMutationOrganizationUserUpdateArgs = {
  email: Scalars['String']['input'];
  organizationId: Scalars['ID']['input'];
  role: Scalars['String']['input'];
};


export type SystemMutationProjectCreateArgs = {
  data: SystemProjectCreateMutationInput;
};


export type SystemMutationProjectDeleteArgs = {
  projectId: Scalars['ID']['input'];
};


export type SystemMutationProjectInviteUserArgs = {
  email: Scalars['String']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
  invitationId?: InputMaybe<Scalars['ID']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  projectId: Scalars['ID']['input'];
  role: Array<InputMaybe<Scalars['String']['input']>>;
  workspaceRoles?: InputMaybe<Array<InputMaybe<SystemProjectWorkspaceWithEnvironmentRolesInput>>>;
};


export type SystemMutationProjectInviteUserAcceptArgs = {
  invitationId: Scalars['String']['input'];
};


export type SystemMutationProjectInviteUserCancelArgs = {
  invitationId: Scalars['String']['input'];
};


export type SystemMutationProjectUpdateArgs = {
  data: SystemProjectUpdateMutationInput;
};


export type SystemMutationProjectUserRemoveArgs = {
  email: Scalars['String']['input'];
  projectId: Scalars['ID']['input'];
};


export type SystemMutationRolePermissionsCacheEvictArgs = {
  keys: Array<Scalars['String']['input']>;
};


export type SystemMutationTableCreateArgs = {
  data: SystemTableCreateInput;
};


export type SystemMutationTableDeleteArgs = {
  data: SystemTableDeleteInput;
};


export type SystemMutationTableUpdateArgs = {
  data: SystemTableUpdateInput;
};


export type SystemMutationViewCreateArgs = {
  data: SystemViewCreateInput;
};


export type SystemMutationViewUpdateArgs = {
  data: SystemViewUpdateInput;
};


export type SystemMutationWorkspaceCreateArgs = {
  data: SystemWorkspaceCreateMutationInput;
};


export type SystemMutationWorkspaceCreateAsyncArgs = {
  data: SystemWorkspaceCreateMutationInput;
};


export type SystemMutationWorkspaceDeleteArgs = {
  data: SystemWorkspaceDeleteMutationInput;
};


export type SystemMutationWorkspaceLeaveArgs = {
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type SystemMutationWorkspaceUpdateArgs = {
  data: SystemWorkspaceUpdateMutationInput;
};

/** Number Field Attributes */
export type SystemNumberFieldTypeAttributes = {
  __typename?: 'SystemNumberFieldTypeAttributes';
  autoIncrement?: Maybe<Scalars['Boolean']['output']>;
  currency?: Maybe<Scalars['String']['output']>;
  format: Scalars['String']['output'];
  isBigInt?: Maybe<Scalars['Boolean']['output']>;
  maxValue?: Maybe<Scalars['Float']['output']>;
  minValue?: Maybe<Scalars['Float']['output']>;
  precision?: Maybe<Scalars['Int']['output']>;
};

/** Number Type Format Enum */
export enum SystemNumberTypeFormatEnum {
  Currency = 'CURRENCY',
  Fraction = 'FRACTION',
  Number = 'NUMBER',
  Percentage = 'PERCENTAGE',
  Scientific = 'SCIENTIFIC'
}

export type SystemOrganizationBaseItem = {
  __typename?: 'SystemOrganizationBaseItem';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<SystemFileBaseInfo>;
  name: Scalars['String']['output'];
  type?: Maybe<SystemOrganizationTypeEnum>;
};

export type SystemOrganizationInvitation = {
  __typename?: 'SystemOrganizationInvitation';
  accepted?: Maybe<Scalars['Boolean']['output']>;
  email: Scalars['String']['output'];
  emailFrom: Scalars['String']['output'];
  firstName?: Maybe<Scalars['String']['output']>;
  firstNameFrom?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
  lastNameFrom?: Maybe<Scalars['String']['output']>;
  organization: SystemOrganizationBaseItem;
  role: Scalars['String']['output'];
};

export type SystemOrganizationItem = {
  __typename?: 'SystemOrganizationItem';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<SystemOrganizationItemImage>;
  name: Scalars['String']['output'];
  type?: Maybe<SystemOrganizationTypeEnum>;
  users?: Maybe<Array<Maybe<SystemOrganizationUserInfo>>>;
};

export type SystemOrganizationItemImage = {
  __typename?: 'SystemOrganizationItemImage';
  downloadUrl?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};

/** OrganizationPaymentDetailsUpdateMutationInput */
export type SystemOrganizationPaymentDetailsUpdateMutationInput = {
  cardToken: Scalars['String']['input'];
  organizationId: Scalars['ID']['input'];
};

export type SystemOrganizationProjectItem = {
  __typename?: 'SystemOrganizationProjectItem';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<SystemFileBaseInfo>;
  kind: Scalars['String']['output'];
  name: Scalars['String']['output'];
  organization?: Maybe<SystemOrganizationBaseItem>;
};

export enum SystemOrganizationTypeEnum {
  Agency = 'agency',
  Community = 'community',
  Company = 'company',
  Individual = 'individual'
}

export type SystemOrganizationUserInfo = {
  __typename?: 'SystemOrganizationUserInfo';
  avatar?: Maybe<GraphQlFileItemResponse>;
  email: Scalars['String']['output'];
  firstName?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
  projects?: Maybe<Array<Maybe<SystemOrganizationProjectItem>>>;
  role: Scalars['String']['output'];
  status: Scalars['String']['output'];
};

export type SystemOrganizationWorkspaceItem = {
  __typename?: 'SystemOrganizationWorkspaceItem';
  apiHost?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<SystemFileBaseInfo>;
  kind: Scalars['String']['output'];
  name: Scalars['String']['output'];
  organization?: Maybe<SystemOrganizationBaseItem>;
};

/** SystemOrganizationsListResponse output */
export type SystemOrganizationsListResponse = {
  __typename?: 'SystemOrganizationsListResponse';
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<SystemOrganizationBaseItem>;
};

export enum SystemPaymentDetailsOrigin {
  Member = 'member',
  Organization = 'organization',
  Workspace = 'workspace'
}

export enum SystemPaymentDetailsOriginProject {
  Member = 'member',
  Organization = 'organization',
  Workspace = 'workspace'
}

export type SystemPaymentDetailsProjectResponse = {
  __typename?: 'SystemPaymentDetailsProjectResponse';
  brand?: Maybe<Scalars['String']['output']>;
  expMonth?: Maybe<Scalars['Int']['output']>;
  expYear?: Maybe<Scalars['Int']['output']>;
  last4?: Maybe<Scalars['String']['output']>;
  origin?: Maybe<SystemPaymentDetailsOriginProject>;
};

export type SystemPaymentDetailsResponse = {
  __typename?: 'SystemPaymentDetailsResponse';
  brand?: Maybe<Scalars['String']['output']>;
  expMonth?: Maybe<Scalars['Int']['output']>;
  expYear?: Maybe<Scalars['Int']['output']>;
  last4?: Maybe<Scalars['String']['output']>;
  origin: SystemPaymentDetailsOrigin;
};

/** Diff Environment Input */
export type SystemPlanEnvironmentOutput = {
  __typename?: 'SystemPlanEnvironmentOutput';
  url?: Maybe<Scalars['String']['output']>;
};

/** ProjectCreateMutationInput */
export type SystemProjectCreateMutationInput = {
  authType?: InputMaybe<Scalars['String']['input']>;
  billingPlanId?: InputMaybe<Scalars['ID']['input']>;
  cardToken?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<GraphQlCreateFileItemInput>;
  kind?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  organizationId?: InputMaybe<Scalars['ID']['input']>;
};

export type SystemProjectImage = {
  __typename?: 'SystemProjectImage';
  downloadUrl?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};

/** SystemProjectInvitationListResponseItem output */
export type SystemProjectInvitationListResponseItem = {
  __typename?: 'SystemProjectInvitationListResponseItem';
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<SystemProjectInvitationResponseQuery>;
};

export type SystemProjectInvitationResponseQuery = {
  __typename?: 'SystemProjectInvitationResponseQuery';
  accepted?: Maybe<Scalars['Boolean']['output']>;
  email: Scalars['String']['output'];
  emailFrom: Scalars['String']['output'];
  firstName?: Maybe<Scalars['String']['output']>;
  firstNameFrom?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
  lastNameFrom?: Maybe<Scalars['String']['output']>;
  project: SystemProjectItemRespSingle;
  role?: Maybe<SystemRoleProjectListResponse>;
};

export type SystemProjectItemRespSingle = {
  __typename?: 'SystemProjectItemRespSingle';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<SystemProjectImage>;
  kind?: Maybe<Scalars['String']['output']>;
  lastAccess?: Maybe<Scalars['DateTime']['output']>;
  name: Scalars['String']['output'];
  nextPlan?: Maybe<SystemBillingNextPlanResponse>;
  organization?: Maybe<SystemOrganizationBaseItem>;
  owner?: Maybe<SystemMemberAccountInfo>;
  plan?: Maybe<SystemBillingCurrentPlanResponse>;
  projectUsers?: Maybe<SystemUserProjectListResponse>;
  region?: Maybe<Scalars['String']['output']>;
};

/** SystemProjectItemResponse output */
export type SystemProjectItemResponse = {
  __typename?: 'SystemProjectItemResponse';
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<SystemProjectItemRespSingle>;
};

export type SystemProjectItemWs = {
  __typename?: 'SystemProjectItemWS';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<SystemWorkspaceImage>;
  name: Scalars['String']['output'];
  region?: Maybe<Scalars['String']['output']>;
};

export type SystemProjectPlanResponse = {
  __typename?: 'SystemProjectPlanResponse';
  overagesPrice?: Maybe<Scalars['Float']['output']>;
  paymentDetail?: Maybe<SystemPaymentDetailsProjectResponse>;
  plan?: Maybe<SystemBillingCurrentPlanResponse>;
};

export type SystemProjectQuotasResponse = {
  __typename?: 'SystemProjectQuotasResponse';
  metricUsages?: Maybe<SystemBillingMetricUsagesListResponse>;
  metricUsagesQuotas?: Maybe<SystemBillingMetricUsageQuotasListResponse>;
};

/** ProjectUpdateMutationInput */
export type SystemProjectUpdateMutationInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  image?: InputMaybe<GraphQlCreateFileItemInput>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type SystemProjectUpdateResponse = {
  __typename?: 'SystemProjectUpdateResponse';
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  image?: Maybe<GraphQlFileItemResponse>;
  name?: Maybe<Scalars['String']['output']>;
};

export type SystemProjectUserDetailsResponse = {
  __typename?: 'SystemProjectUserDetailsResponse';
  authenticationInfo?: Maybe<Array<Maybe<SystemAuthenticationInfo>>>;
  backendUtilization?: Maybe<SystemBackendUtilizationResponse>;
  backendWorkspaces?: Maybe<SystemWorkspaceListResponse>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deploymentsProject?: Maybe<SystemDeploymentProjectListResponse>;
  description?: Maybe<Scalars['String']['output']>;
  environmentsProject?: Maybe<SystemEnvironmentsProjectListResponse>;
  frontendUtilization?: Maybe<SystemFrontendUtilizationResponse>;
  frontendWorkspaces?: Maybe<SystemWorkspaceListResponse>;
  id: Scalars['ID']['output'];
  image?: Maybe<SystemProjectImage>;
  kind: Scalars['String']['output'];
  lastAccess?: Maybe<Scalars['DateTime']['output']>;
  metricUsages?: Maybe<SystemBillingMetricUsagesListResponse>;
  metricUsagesQuotas?: Maybe<SystemBillingMetricUsageQuotasListResponse>;
  name: Scalars['String']['output'];
  nextPlan?: Maybe<SystemBillingNextPlanResponse>;
  organization?: Maybe<SystemOrganizationBaseItem>;
  overagesPrice?: Maybe<Scalars['Float']['output']>;
  owner?: Maybe<SystemMemberAccountInfo>;
  paymentDetail?: Maybe<SystemPaymentDetailsProjectResponse>;
  plan?: Maybe<SystemBillingCurrentPlanResponse>;
  projectUsers?: Maybe<SystemUserProjectListResponse>;
  region?: Maybe<Scalars['String']['output']>;
  teamMemberCount?: Maybe<Scalars['Int']['output']>;
};

export type SystemProjectUserInvitationResponse = {
  __typename?: 'SystemProjectUserInvitationResponse';
  invitationId: Scalars['String']['output'];
};

export type SystemProjectUserResponse = {
  __typename?: 'SystemProjectUserResponse';
  myProjects: SystemProjectItemResponse;
  sharedProjects: SystemProjectItemResponse;
};

/** environmentId to add to with roles (array of ids). */
export type SystemProjectWorkspaceEnvironmentRolesInput = {
  projectId: Scalars['String']['input'];
  roles?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type SystemProjectWorkspaceWithEnvironmentRolesInput = {
  environmentRoles?: InputMaybe<Array<InputMaybe<SystemProjectWorkspaceEnvironmentRolesInput>>>;
  workspaceId: Scalars['ID']['input'];
};

export type SystemQuery = {
  __typename?: 'SystemQuery';
  application?: Maybe<SystemApplication>;
  applicationsList?: Maybe<SystemApplicationListResponse>;
  asyncSessionStatus?: Maybe<SystemAsyncSessionStatusResponse>;
  billingCurrentPlan?: Maybe<SystemBillingCurrentPlanResponse>;
  /** @deprecated No longer supported. Use `system.memberPaymentDetails, system.organizationPaymentDetails or system.workspacePaymentDetails` instead. */
  billingDetails?: Maybe<SystemBillingDetailsResponse>;
  /** @deprecated No longer supported. Use `system.memberBillingHistory, system.organizationBillingHistory or system.workspaceBillingHistory` instead. */
  billingInvoicesList: SystemBillingInvoicesListResponse;
  billingMetricUsageQuotasList: SystemBillingMetricUsageQuotasListResponse;
  billingMetricUsagesList: SystemBillingMetricUsagesListResponse;
  ciGenerate?: Maybe<SystemGenerateEnvironmentOutput>;
  ciGenerateAsync?: Maybe<AsyncSession>;
  /** @deprecated No longer supported. Use `ciGenerate` instead. */
  ciPlan?: Maybe<SystemPlanEnvironmentOutput>;
  ciStatus?: Maybe<SystemCiStatusOutput>;
  deployStatus: SystemDeployStatusResult;
  environmentBackupsList?: Maybe<SystemEnvironmentBackupListResponse>;
  environmentMember?: Maybe<SystemEnvironmentMember>;
  environmentMembersList?: Maybe<SystemEnvironmentMembersListResponse>;
  environmentSettings?: Maybe<SystemEnvironmentSettings>;
  environmentsList?: Maybe<SystemEnvironmentsListResponse>;
  fileUploadSignInfo?: Maybe<SystemFileUploadSignInfo>;
  functionsList?: Maybe<SystemFunctionListResponse>;
  getEnvironmentRoles?: Maybe<Array<Maybe<SystemEnvironmentRoleList>>>;
  inboxEventsList?: Maybe<SystemInboxEventsListResponse>;
  introspection?: Maybe<IntrospectionQueryResponse>;
  /** @deprecated No longer supported. Use `system.logsList` instead. */
  logs?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** @deprecated No longer supported. Use `system.logsListFiltered` instead. */
  logsList?: Maybe<Array<Maybe<SystemCloudLogsEntry>>>;
  logsListFiltered?: Maybe<SystemLogsListFilteredResponse>;
  memberAccount?: Maybe<SystemMemberAccountInfo>;
  memberBillingHistory: SystemBillingInvoicesListResponse;
  memberInvitation?: Maybe<SystemMemberInvitation>;
  memberInvitationsList?: Maybe<SystemMemberInvitationsList>;
  memberPaymentDetails?: Maybe<SystemPaymentDetailsResponse>;
  organizationBillingHistory: SystemBillingInvoicesListResponse;
  organizationById?: Maybe<SystemOrganizationItem>;
  organizationInvitationById?: Maybe<SystemOrganizationInvitation>;
  organizationPaymentDetails?: Maybe<SystemPaymentDetailsResponse>;
  organizationsListByUser?: Maybe<SystemOrganizationsListResponse>;
  projectInfoDetails?: Maybe<SystemProjectUserDetailsResponse>;
  projectInvitationById?: Maybe<SystemProjectInvitationResponseQuery>;
  projectInvitationListQuery?: Maybe<SystemProjectInvitationListResponseItem>;
  projectPlan?: Maybe<SystemProjectPlanResponse>;
  projectQuotas?: Maybe<SystemProjectQuotasResponse>;
  projectsUserListQuery?: Maybe<SystemProjectUserResponse>;
  table?: Maybe<SystemTable>;
  tableField?: Maybe<SystemTableField>;
  tablesList: SystemTableListResponse;
  userBillingConfiguration: SystemUserBillingConfigurationResponse;
  userInvitationsList?: Maybe<SystemUserInvitationList>;
  viewDryRun?: Maybe<SystemViewDryRunOutput>;
  workspacePaymentDetails?: Maybe<SystemPaymentDetailsResponse>;
  workspacesFrontendList?: Maybe<SystemWorkspaceListResponse>;
  workspacesList?: Maybe<SystemWorkspaceListResponse>;
};


export type SystemQueryApplicationArgs = {
  id: Scalars['String']['input'];
};


export type SystemQueryAsyncSessionStatusArgs = {
  sessionId: Scalars['String']['input'];
};


export type SystemQueryBillingCurrentPlanArgs = {
  organizationId?: InputMaybe<Scalars['ID']['input']>;
};


export type SystemQueryBillingInvoicesListArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  by?: InputMaybe<SystemBillingInvoicesListFilterType>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  projectId?: InputMaybe<Scalars['ID']['input']>;
};


export type SystemQueryBillingMetricUsageQuotasListArgs = {
  organizationId?: InputMaybe<Scalars['ID']['input']>;
  projectId?: InputMaybe<Scalars['ID']['input']>;
};


export type SystemQueryBillingMetricUsagesListArgs = {
  filter?: InputMaybe<SystemBillingMetricUsagesListFilter>;
  organizationId?: InputMaybe<Scalars['ID']['input']>;
  projectId?: InputMaybe<Scalars['ID']['input']>;
};


export type SystemQueryCiGenerateArgs = {
  sourceEnvironmentId?: InputMaybe<Scalars['String']['input']>;
  tables?: InputMaybe<Array<Scalars['String']['input']>>;
  targetEnvironmentId?: InputMaybe<Scalars['String']['input']>;
};


export type SystemQueryCiGenerateAsyncArgs = {
  sourceEnvironmentId?: InputMaybe<Scalars['String']['input']>;
  tables?: InputMaybe<Array<Scalars['String']['input']>>;
  targetEnvironmentId?: InputMaybe<Scalars['String']['input']>;
};


export type SystemQueryCiPlanArgs = {
  sourceEnvironmentId?: InputMaybe<Scalars['String']['input']>;
  tables?: InputMaybe<Array<Scalars['String']['input']>>;
  targetEnvironmentId?: InputMaybe<Scalars['String']['input']>;
};


export type SystemQueryDeployStatusArgs = {
  buildName: Scalars['String']['input'];
};


export type SystemQueryEnvironmentBackupsListArgs = {
  environmentName?: InputMaybe<Scalars['String']['input']>;
};


export type SystemQueryEnvironmentMemberArgs = {
  filter?: InputMaybe<SystemEnvironmentMemberFilter>;
};


export type SystemQueryEnvironmentMembersListArgs = {
  filter?: InputMaybe<SystemEnvironmentMembersListFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<SystemEnvironmentMembersListSort>>;
};


export type SystemQueryEnvironmentsListArgs = {
  workspaceId?: InputMaybe<Scalars['String']['input']>;
};


export type SystemQueryFunctionsListArgs = {
  applicationId?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<SystemFunctionInfoFilter>;
  orderBy?: InputMaybe<Array<InputMaybe<SystemFunctionInfoOrderBy>>>;
};


export type SystemQueryGetEnvironmentRolesArgs = {
  email?: InputMaybe<Scalars['String']['input']>;
  workspaceId: Scalars['String']['input'];
};


export type SystemQueryInboxEventsListArgs = {
  filter?: InputMaybe<InboxEventsListFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type SystemQueryLogsArgs = {
  applicationId?: InputMaybe<Scalars['String']['input']>;
  endTime?: InputMaybe<Scalars['DateTime']['input']>;
  functionName: Scalars['String']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  startTime?: InputMaybe<Scalars['DateTime']['input']>;
};


export type SystemQueryLogsListArgs = {
  applicationId?: InputMaybe<Scalars['String']['input']>;
  endTime?: InputMaybe<Scalars['DateTime']['input']>;
  functionName: Scalars['String']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  startTime?: InputMaybe<Scalars['DateTime']['input']>;
};


export type SystemQueryLogsListFilteredArgs = {
  endTime?: InputMaybe<Scalars['DateTime']['input']>;
  filter?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  resource?: InputMaybe<Scalars['String']['input']>;
  startTime?: InputMaybe<Scalars['DateTime']['input']>;
  startToken?: InputMaybe<Scalars['String']['input']>;
};


export type SystemQueryMemberBillingHistoryArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  hideOrganizationInvoices?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type SystemQueryMemberInvitationArgs = {
  id: Scalars['String']['input'];
};


export type SystemQueryOrganizationBillingHistoryArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  hideWorkspaceInvoices?: InputMaybe<Scalars['Boolean']['input']>;
  organizationId: Scalars['ID']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type SystemQueryOrganizationByIdArgs = {
  organizationId: Scalars['String']['input'];
};


export type SystemQueryOrganizationInvitationByIdArgs = {
  invitationId: Scalars['String']['input'];
};


export type SystemQueryOrganizationPaymentDetailsArgs = {
  organizationId: Scalars['ID']['input'];
};


export type SystemQueryProjectInfoDetailsArgs = {
  projectId: Scalars['ID']['input'];
};


export type SystemQueryProjectInvitationByIdArgs = {
  invitationId: Scalars['String']['input'];
};


export type SystemQueryProjectInvitationListQueryArgs = {
  projectId: Scalars['ID']['input'];
};


export type SystemQueryProjectPlanArgs = {
  projectId: Scalars['ID']['input'];
};


export type SystemQueryProjectQuotasArgs = {
  projectId: Scalars['ID']['input'];
};


export type SystemQueryProjectsUserListQueryArgs = {
  organizationId?: InputMaybe<Scalars['ID']['input']>;
};


export type SystemQueryTableArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};


export type SystemQueryTableFieldArgs = {
  id: Scalars['ID']['input'];
};


export type SystemQueryTablesListArgs = {
  filter?: InputMaybe<SystemTableListFilter>;
};


export type SystemQueryUserBillingConfigurationArgs = {
  filterPlanProjects?: InputMaybe<Scalars['Boolean']['input']>;
  kind?: InputMaybe<Scalars['String']['input']>;
  organizationId?: InputMaybe<Scalars['ID']['input']>;
  region?: InputMaybe<Scalars['String']['input']>;
};


export type SystemQueryViewDryRunArgs = {
  sql: Scalars['String']['input'];
};


export type SystemQueryWorkspacePaymentDetailsArgs = {
  projectId?: InputMaybe<Scalars['ID']['input']>;
};

/** Relation */
export type SystemRelation = {
  __typename?: 'SystemRelation';
  refField?: Maybe<SystemTableField>;
  refFieldDisplayName?: Maybe<Scalars['String']['output']>;
  refFieldIsList?: Maybe<Scalars['Boolean']['output']>;
  refFieldIsRequired?: Maybe<Scalars['Boolean']['output']>;
  refFieldName?: Maybe<Scalars['String']['output']>;
  refTable: SystemTable;
  relationFieldName?: Maybe<Scalars['String']['output']>;
  relationTableName?: Maybe<Scalars['String']['output']>;
};

/** Relation Create Input */
export type SystemRelationCreateInput = {
  refFieldDisplayName?: InputMaybe<Scalars['String']['input']>;
  refFieldIsList: Scalars['Boolean']['input'];
  refFieldIsRequired: Scalars['Boolean']['input'];
  refFieldName?: InputMaybe<Scalars['String']['input']>;
  refTableId: Scalars['ID']['input'];
};

/** Relation Update Input */
export type SystemRelationUpdateInput = {
  refFieldDisplayName?: InputMaybe<Scalars['String']['input']>;
  refFieldIsList?: InputMaybe<Scalars['Boolean']['input']>;
  refFieldIsRequired?: InputMaybe<Scalars['Boolean']['input']>;
  refFieldName?: InputMaybe<Scalars['String']['input']>;
  refTableId?: InputMaybe<Scalars['ID']['input']>;
};

export type SystemRoleBaseProjectItem = {
  __typename?: 'SystemRoleBaseProjectItem';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

/** SystemRoleProjectListResponse output */
export type SystemRoleProjectListResponse = {
  __typename?: 'SystemRoleProjectListResponse';
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<SystemRoleBaseProjectItem>;
};

/** Schema Origin */
export type SystemSchemaOrigin = {
  __typename?: 'SystemSchemaOrigin';
  provider?: Maybe<Scalars['String']['output']>;
  type: SystemSchemaOriginType;
};

/** Schema Origin Type Enum */
export enum SystemSchemaOriginType {
  Local = 'LOCAL',
  Remote = 'REMOTE',
  View = 'VIEW'
}

/** Smart Field Attributes */
export type SystemSmartFieldTypeAttributes = {
  __typename?: 'SystemSmartFieldTypeAttributes';
  format: Scalars['String']['output'];
  innerFields?: Maybe<Array<Maybe<SystemCustomTableField>>>;
};

/** Smart Type Format Enum */
export enum SystemSmartTypeFormatEnum {
  Address = 'ADDRESS',
  Phone = 'PHONE'
}

/** Switch Field Attributes */
export type SystemSwitchFieldTypeAttributes = {
  __typename?: 'SystemSwitchFieldTypeAttributes';
  format: Scalars['String']['output'];
  listOptions?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

/** Switch Type Format Enum */
export enum SystemSwitchTypeFormatEnum {
  ActiveInactive = 'ACTIVE_INACTIVE',
  Custom = 'CUSTOM',
  HighLow = 'HIGH_LOW',
  OnOff = 'ON_OFF',
  TrueFalse = 'TRUE_FALSE',
  YesNo = 'YES_NO'
}

/** Table */
export type SystemTable = {
  __typename?: 'SystemTable';
  application?: Maybe<SystemApplication>;
  attributes?: Maybe<SystemTableAttributes>;
  dataFeatures: SystemTableDataFeatures;
  description?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  fields?: Maybe<Array<SystemTableField>>;
  fieldsForIndexing?: Maybe<Array<Maybe<SystemTableField>>>;
  id: Scalars['ID']['output'];
  indexes?: Maybe<Array<SystemTableIndex>>;
  isSystem: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  origin: SystemSchemaOrigin;
  schemaFeatures: SystemTableSchemaFeatures;
};

/** Table Attributes */
export type SystemTableAttributes = SystemViewAttributes;

/** Table Create Input */
export type SystemTableCreateInput = {
  applicationId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

/** Table Data Features */
export type SystemTableDataFeatures = {
  __typename?: 'SystemTableDataFeatures';
  create: Scalars['Boolean']['output'];
  delete: Scalars['Boolean']['output'];
  update: Scalars['Boolean']['output'];
};

/** Table Delete Input */
export type SystemTableDeleteInput = {
  id: Scalars['ID']['input'];
};

/** TableField */
export type SystemTableField = {
  __typename?: 'SystemTableField';
  computedMode?: Maybe<SystemComputedFieldMode>;
  dataFeatures: SystemFieldDataFeatures;
  defaultValue?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  expression?: Maybe<Scalars['String']['output']>;
  fieldType: SystemFieldType;
  fieldTypeAttributes?: Maybe<SystemFieldTypeAttributes>;
  id: Scalars['ID']['output'];
  isList: Scalars['Boolean']['output'];
  isMeta: Scalars['Boolean']['output'];
  isRequired: Scalars['Boolean']['output'];
  isSystem: Scalars['Boolean']['output'];
  isUnique?: Maybe<Scalars['Boolean']['output']>;
  name: Scalars['String']['output'];
  origin: SystemSchemaOrigin;
  relation?: Maybe<SystemRelation>;
  schemaFeatures: SystemFieldSchemaFeatures;
  table: SystemTable;
};

/** Table Field Create Input */
export type SystemTableFieldCreateInput = {
  computedMode?: InputMaybe<SystemComputedFieldMode>;
  defaultValue?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  expression?: InputMaybe<Scalars['String']['input']>;
  fieldType: SystemFieldType;
  fieldTypeAttributes?: InputMaybe<SystemFieldTypeAttributesInput>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
  initialValue?: InputMaybe<Scalars['String']['input']>;
  isList: Scalars['Boolean']['input'];
  isRequired: Scalars['Boolean']['input'];
  isUnique?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  position?: InputMaybe<Scalars['Int']['input']>;
  relation?: InputMaybe<SystemRelationCreateInput>;
  tableId: Scalars['ID']['input'];
};

/** Table Field Delete Input */
export type SystemTableFieldDeleteInput = {
  id: Scalars['ID']['input'];
};

/** Table Field Position Update Input */
export type SystemTableFieldPositionUpdateInput = {
  id: Scalars['ID']['input'];
  newPosition: Scalars['Int']['input'];
};

/** Table Field Update Input */
export type SystemTableFieldUpdateInput = {
  computedMode?: InputMaybe<SystemComputedFieldMode>;
  defaultValue?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  expression?: InputMaybe<Scalars['String']['input']>;
  fieldType?: InputMaybe<SystemFieldType>;
  fieldTypeAttributes?: InputMaybe<SystemFieldTypeAttributesInput>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
  initialValue?: InputMaybe<Scalars['String']['input']>;
  isList?: InputMaybe<Scalars['Boolean']['input']>;
  isRequired?: InputMaybe<Scalars['Boolean']['input']>;
  isUnique?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  relation?: InputMaybe<SystemRelationUpdateInput>;
};

/** Table Index */
export type SystemTableIndex = {
  __typename?: 'SystemTableIndex';
  columns?: Maybe<Array<SystemTableIndexColumn>>;
  id: Scalars['ID']['output'];
  isSystem: Scalars['Boolean']['output'];
  name?: Maybe<Scalars['String']['output']>;
  table: SystemTable;
  type: Scalars['String']['output'];
};

/** Table Index Column */
export type SystemTableIndexColumn = {
  __typename?: 'SystemTableIndexColumn';
  name: Scalars['String']['output'];
};

/** Table Index Column Input */
export type SystemTableIndexColumnInput = {
  name: Scalars['String']['input'];
};

/** Table List Application Filter */
export type SystemTableListApplicationFilter = {
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** Table List Filter */
export type SystemTableListFilter = {
  applications?: InputMaybe<Array<InputMaybe<SystemTableListApplicationFilter>>>;
  onlyUserTables?: InputMaybe<Scalars['Boolean']['input']>;
  tableNames?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** Table List Response */
export type SystemTableListResponse = {
  __typename?: 'SystemTableListResponse';
  count?: Maybe<Scalars['Int']['output']>;
  items?: Maybe<Array<Maybe<SystemTable>>>;
};

/** Table Schema Create Features */
export type SystemTableSchemaCreateFeatures = {
  __typename?: 'SystemTableSchemaCreateFeatures';
  DATE: Scalars['Boolean']['output'];
  FILE: Scalars['Boolean']['output'];
  GEO: Scalars['Boolean']['output'];
  ID: Scalars['Boolean']['output'];
  JSON: Scalars['Boolean']['output'];
  MISSING_RELATION: Scalars['Boolean']['output'];
  NUMBER: Scalars['Boolean']['output'];
  ONE_WAY_RELATION: Scalars['Boolean']['output'];
  RELATION: Scalars['Boolean']['output'];
  SMART: Scalars['Boolean']['output'];
  SWITCH: Scalars['Boolean']['output'];
  TEXT: Scalars['Boolean']['output'];
  UUID: Scalars['Boolean']['output'];
};

/** Table Schema Features */
export type SystemTableSchemaFeatures = {
  __typename?: 'SystemTableSchemaFeatures';
  computedFields: Scalars['Boolean']['output'];
  create: SystemTableSchemaCreateFeatures;
  update?: Maybe<SystemTableSchemaMetaFieldFeatures>;
};

/** Table Schema Meta Field Features */
export type SystemTableSchemaMetaFieldFeatures = {
  __typename?: 'SystemTableSchemaMetaFieldFeatures';
  displayName: Scalars['Boolean']['output'];
  name: Scalars['Boolean']['output'];
};

/** Table Update Input */
export type SystemTableUpdateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};

/** Team Invitation Details */
export type SystemTeamInvitationDetails = {
  __typename?: 'SystemTeamInvitationDetails';
  accepted?: Maybe<Scalars['Boolean']['output']>;
  acceptedOn?: Maybe<Scalars['DateTime']['output']>;
  apiHost?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  invitedBy?: Maybe<SystemInvitedByName>;
  isRegistered?: Maybe<Scalars['Boolean']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  resentOn?: Maybe<Scalars['DateTime']['output']>;
};

/** Text Field Attributes */
export type SystemTextFieldTypeAttributes = {
  __typename?: 'SystemTextFieldTypeAttributes';
  fieldSize?: Maybe<Scalars['Int']['output']>;
  format: Scalars['String']['output'];
};

/** Text Type Format Enum */
export enum SystemTextTypeFormatEnum {
  Ein = 'EIN',
  Email = 'EMAIL',
  Html = 'HTML',
  Markdown = 'MARKDOWN',
  Name = 'NAME',
  Unformatted = 'UNFORMATTED'
}

/** UUID Field Attributes */
export type SystemUuidFieldTypeAttributes = {
  __typename?: 'SystemUUIDFieldTypeAttributes';
  fieldSize?: Maybe<Scalars['Int']['output']>;
};

export type SystemUserBaseProjectItem = {
  __typename?: 'SystemUserBaseProjectItem';
  avatar?: Maybe<SystemProjectImage>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['String']['output'];
  firstName: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  lastName: Scalars['String']['output'];
};

export type SystemUserBillingConfigurationResponse = {
  __typename?: 'SystemUserBillingConfigurationResponse';
  availablePlans: Array<SystemBillingPlanBaseInfo>;
  /** @deprecated Flag is deprecated */
  isCancelSubscriptionAvailable: Scalars['Boolean']['output'];
  /** @deprecated Flag is deprecated */
  isFreePlanAvailable: Scalars['Boolean']['output'];
};

/** User Invitation Details */
export type SystemUserInvitationDetails = {
  __typename?: 'SystemUserInvitationDetails';
  accepted?: Maybe<Scalars['Boolean']['output']>;
  acceptedOn?: Maybe<Scalars['DateTime']['output']>;
  apiHost?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  invitedBy?: Maybe<SystemInvitedByName>;
  isRegistered?: Maybe<Scalars['Boolean']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  resentOn?: Maybe<Scalars['DateTime']['output']>;
};

/** User Invitation List */
export type SystemUserInvitationList = {
  __typename?: 'SystemUserInvitationList';
  count?: Maybe<Scalars['Int']['output']>;
  items?: Maybe<Array<Maybe<SystemUserInvitationDetails>>>;
};

export type SystemUserProjectItem = {
  __typename?: 'SystemUserProjectItem';
  role?: Maybe<SystemRoleProjectListResponse>;
  status?: Maybe<Scalars['String']['output']>;
  user?: Maybe<SystemUserBaseProjectItem>;
};

/** SystemUserProjectListResponse output */
export type SystemUserProjectListResponse = {
  __typename?: 'SystemUserProjectListResponse';
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<SystemUserProjectItem>;
};

/** User Type */
export enum SystemUserType {
  Agency = 'Agency',
  Corporation = 'Corporation',
  MyOwn = 'MyOwn',
  Team = 'Team'
}

/** View Attributes */
export type SystemViewAttributes = {
  __typename?: 'SystemViewAttributes';
  query?: Maybe<Scalars['String']['output']>;
};

/** View Create Input */
export type SystemViewCreateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  query: Scalars['String']['input'];
};

/** Dry Run Response for previewing SQL Views */
export type SystemViewDryRunOutput = {
  __typename?: 'SystemViewDryRunOutput';
  count?: Maybe<Scalars['Int']['output']>;
  items?: Maybe<Scalars['JSON']['output']>;
  timeMs?: Maybe<Scalars['Int']['output']>;
};

/** View Update Input */
export type SystemViewUpdateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
};

/** WorkspaceCreateMutationInput */
export type SystemWorkspaceCreateMutationInput = {
  authType?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<GraphQlCreateFileItemInput>;
  kind?: InputMaybe<SystemWorkspaceKind>;
  name: Scalars['String']['input'];
  organizationId?: InputMaybe<Scalars['ID']['input']>;
  profileId?: InputMaybe<Scalars['String']['input']>;
  projectId?: InputMaybe<Scalars['ID']['input']>;
};

export type SystemWorkspaceCreateResponse = {
  __typename?: 'SystemWorkspaceCreateResponse';
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  kind?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** WorkspaceDeleteMutationInput */
export type SystemWorkspaceDeleteMutationInput = {
  id: Scalars['ID']['input'];
};

export type SystemWorkspaceImage = {
  __typename?: 'SystemWorkspaceImage';
  downloadUrl?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};

export type SystemWorkspaceItem = {
  __typename?: 'SystemWorkspaceItem';
  apiHost?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<SystemWorkspaceImage>;
  is8BaseAuthEnabled?: Maybe<Scalars['Boolean']['output']>;
  isCiCdEnabled?: Maybe<Scalars['Boolean']['output']>;
  isOwner: Scalars['Boolean']['output'];
  kind?: Maybe<Scalars['String']['output']>;
  lastAccess?: Maybe<Scalars['DateTime']['output']>;
  lastDeployABInfo?: Maybe<SystemDeploymentAbItemResponse>;
  name: Scalars['String']['output'];
  nextPlan?: Maybe<SystemBillingNextPlanResponse>;
  organization?: Maybe<SystemOrganizationBaseItem>;
  owner?: Maybe<SystemMemberAccountInfo>;
  plan?: Maybe<SystemBillingCurrentPlanResponse>;
  project?: Maybe<SystemProjectItemWs>;
  region?: Maybe<Scalars['String']['output']>;
  summaryABInfo?: Maybe<SystemFrontendUtilizationAbResponse>;
  teamMemberCount?: Maybe<Scalars['Int']['output']>;
  webSocket?: Maybe<Scalars['String']['output']>;
};

/** Workspace Kind */
export enum SystemWorkspaceKind {
  Frontend = 'frontend',
  General = 'general'
}

/** SystemWorkspaceListResponse output */
export type SystemWorkspaceListResponse = {
  __typename?: 'SystemWorkspaceListResponse';
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<SystemWorkspaceItem>;
};

export enum SystemWorkspaceStatus {
  Active = 'active',
  Blocked = 'blocked',
  Canceled = 'canceled',
  Canceling = 'canceling',
  Pending = 'pending',
  Suspended = 'suspended'
}

/** WorkspaceUpdateMutationInput */
export type SystemWorkspaceUpdateMutationInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  image?: InputMaybe<GraphQlCreateFileItemInput>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type SystemWorkspaceUpdateResponse = {
  __typename?: 'SystemWorkspaceUpdateResponse';
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  image?: Maybe<GraphQlFileItemResponse>;
  name?: Maybe<Scalars['String']['output']>;
};

/** Table */
export type Table = {
  __typename?: 'Table';
  application?: Maybe<Application>;
  attributes?: Maybe<TableAttributes>;
  dataFeatures: TableDataFeatures;
  description?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  fields?: Maybe<Array<TableField>>;
  fieldsForIndexing?: Maybe<Array<Maybe<TableField>>>;
  id: Scalars['ID']['output'];
  indexes?: Maybe<Array<TableIndex>>;
  isSystem: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  origin: SchemaOrigin;
  schemaFeatures: TableSchemaFeatures;
};

/** Table Attributes */
export type TableAttributes = ViewAttributes;

/** Table Create Input */
export type TableCreateInput = {
  applicationId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

/** Table Data Features */
export type TableDataFeatures = {
  __typename?: 'TableDataFeatures';
  create: Scalars['Boolean']['output'];
  delete: Scalars['Boolean']['output'];
  update: Scalars['Boolean']['output'];
};

/** Table Delete Input */
export type TableDeleteInput = {
  id: Scalars['ID']['input'];
};

/** TableField */
export type TableField = {
  __typename?: 'TableField';
  computedMode?: Maybe<ComputedFieldMode>;
  dataFeatures: FieldDataFeatures;
  defaultValue?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  expression?: Maybe<Scalars['String']['output']>;
  fieldType: FieldType;
  fieldTypeAttributes?: Maybe<FieldTypeAttributes>;
  id: Scalars['ID']['output'];
  isList: Scalars['Boolean']['output'];
  isMeta: Scalars['Boolean']['output'];
  isRequired: Scalars['Boolean']['output'];
  isSystem: Scalars['Boolean']['output'];
  isUnique?: Maybe<Scalars['Boolean']['output']>;
  name: Scalars['String']['output'];
  origin: SchemaOrigin;
  relation?: Maybe<Relation>;
  schemaFeatures: FieldSchemaFeatures;
  table: Table;
};

/** Table Field Create Input */
export type TableFieldCreateInput = {
  computedMode?: InputMaybe<ComputedFieldMode>;
  defaultValue?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  expression?: InputMaybe<Scalars['String']['input']>;
  fieldType: FieldType;
  fieldTypeAttributes?: InputMaybe<FieldTypeAttributesInput>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
  initialValue?: InputMaybe<Scalars['String']['input']>;
  isList: Scalars['Boolean']['input'];
  isRequired: Scalars['Boolean']['input'];
  isUnique?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  position?: InputMaybe<Scalars['Int']['input']>;
  relation?: InputMaybe<RelationCreateInput>;
  tableId: Scalars['ID']['input'];
};

/** Table Field Delete Input */
export type TableFieldDeleteInput = {
  id: Scalars['ID']['input'];
};

/** Table Field Position Update Input */
export type TableFieldPositionUpdateInput = {
  id: Scalars['ID']['input'];
  newPosition: Scalars['Int']['input'];
};

/** Table Field Update Input */
export type TableFieldUpdateInput = {
  computedMode?: InputMaybe<ComputedFieldMode>;
  defaultValue?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  expression?: InputMaybe<Scalars['String']['input']>;
  fieldType?: InputMaybe<FieldType>;
  fieldTypeAttributes?: InputMaybe<FieldTypeAttributesInput>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
  initialValue?: InputMaybe<Scalars['String']['input']>;
  isList?: InputMaybe<Scalars['Boolean']['input']>;
  isRequired?: InputMaybe<Scalars['Boolean']['input']>;
  isUnique?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  relation?: InputMaybe<RelationUpdateInput>;
};

/** Table Index */
export type TableIndex = {
  __typename?: 'TableIndex';
  columns?: Maybe<Array<TableIndexColumn>>;
  id: Scalars['ID']['output'];
  isSystem: Scalars['Boolean']['output'];
  name?: Maybe<Scalars['String']['output']>;
  table: Table;
  type: Scalars['String']['output'];
};

/** Table Index Column */
export type TableIndexColumn = {
  __typename?: 'TableIndexColumn';
  name: Scalars['String']['output'];
};

/** Table Index Column Input */
export type TableIndexColumnInput = {
  name: Scalars['String']['input'];
};

export enum TableIndexType {
  Index = 'INDEX',
  Unique = 'UNIQUE'
}

/** Table List Application Filter */
export type TableListApplicationFilter = {
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** Table List Filter */
export type TableListFilter = {
  applications?: InputMaybe<Array<InputMaybe<TableListApplicationFilter>>>;
  onlyUserTables?: InputMaybe<Scalars['Boolean']['input']>;
  tableNames?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** Table List Response */
export type TableListResponse = {
  __typename?: 'TableListResponse';
  count?: Maybe<Scalars['Int']['output']>;
  items?: Maybe<Array<Maybe<Table>>>;
};

/** Table Schema Create Features */
export type TableSchemaCreateFeatures = {
  __typename?: 'TableSchemaCreateFeatures';
  DATE: Scalars['Boolean']['output'];
  FILE: Scalars['Boolean']['output'];
  GEO: Scalars['Boolean']['output'];
  ID: Scalars['Boolean']['output'];
  JSON: Scalars['Boolean']['output'];
  MISSING_RELATION: Scalars['Boolean']['output'];
  NUMBER: Scalars['Boolean']['output'];
  ONE_WAY_RELATION: Scalars['Boolean']['output'];
  RELATION: Scalars['Boolean']['output'];
  SMART: Scalars['Boolean']['output'];
  SWITCH: Scalars['Boolean']['output'];
  TEXT: Scalars['Boolean']['output'];
  UUID: Scalars['Boolean']['output'];
};

/** Table Schema Features */
export type TableSchemaFeatures = {
  __typename?: 'TableSchemaFeatures';
  computedFields: Scalars['Boolean']['output'];
  create: TableSchemaCreateFeatures;
  update?: Maybe<TableSchemaMetaFieldFeatures>;
};

/** Table Schema Meta Field Features */
export type TableSchemaMetaFieldFeatures = {
  __typename?: 'TableSchemaMetaFieldFeatures';
  displayName: Scalars['Boolean']['output'];
  name: Scalars['Boolean']['output'];
};

/** Table Update Input */
export type TableUpdateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Task = {
  __typename?: 'Task';
  _description?: Maybe<Scalars['String']['output']>;
  assigned?: Maybe<Scalars['String']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<User>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  id_task?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user_created?: Maybe<Scalars['String']['output']>;
};

/** Tasks create input */
export type TaskCreateInput = {
  assigned?: InputMaybe<Scalars['String']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id_task?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Scalars['String']['input']>;
};

/** Tasks create many input */
export type TaskCreateManyInput = {
  assigned?: InputMaybe<Scalars['String']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id_task?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Scalars['String']['input']>;
};

/** Tasks delete input */
export type TaskDeleteInput = {
  force?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** TaskFieldsPermissions create input */
export type TaskFieldsPermissions = {
  assigned?: InputMaybe<Scalars['Boolean']['input']>;
  content?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<Scalars['Boolean']['input']>;
  email?: InputMaybe<Scalars['Boolean']['input']>;
  id_task?: InputMaybe<Scalars['Boolean']['input']>;
  status?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['Boolean']['input']>;
  user_created?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TaskFilter = {
  AND?: InputMaybe<Array<TaskFilter>>;
  OR?: InputMaybe<Array<TaskFilter>>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  assigned?: InputMaybe<StringPredicate>;
  content?: InputMaybe<StringPredicate>;
  createdAt?: InputMaybe<DateTimePredicate>;
  createdBy?: InputMaybe<UserFilter>;
  deletedAt?: InputMaybe<IntPredicate>;
  email?: InputMaybe<StringPredicate>;
  id?: InputMaybe<IdPredicate>;
  id_task?: InputMaybe<StringPredicate>;
  status?: InputMaybe<StringPredicate>;
  title?: InputMaybe<StringPredicate>;
  updatedAt?: InputMaybe<DateTimePredicate>;
  user_created?: InputMaybe<StringPredicate>;
};

export type TaskGroupBy = {
  first?: InputMaybe<Scalars['Int']['input']>;
  having?: InputMaybe<Having>;
  last?: InputMaybe<Scalars['Int']['input']>;
  query: TaskGroupByQuery;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<GroupBySort>>;
};

export type TaskGroupByQuery = {
  _group?: InputMaybe<Array<GroupIdentifiersGroupByField>>;
  assigned?: InputMaybe<Array<GroupByField>>;
  content?: InputMaybe<Array<GroupByField>>;
  createdAt?: InputMaybe<Array<GroupByField>>;
  createdBy?: InputMaybe<UserGroupByQuery>;
  email?: InputMaybe<Array<GroupByField>>;
  id?: InputMaybe<Array<GroupByField>>;
  id_task?: InputMaybe<Array<GroupByField>>;
  status?: InputMaybe<Array<GroupByField>>;
  title?: InputMaybe<Array<GroupByField>>;
  updatedAt?: InputMaybe<Array<GroupByField>>;
  user_created?: InputMaybe<Array<GroupByField>>;
};

export type TaskKeyFilter = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** TaskListResponse output */
export type TaskListResponse = {
  __typename?: 'TaskListResponse';
  /** List items count */
  count: Scalars['Int']['output'];
  /** Aggregated items */
  groups: Array<GroupByResponse>;
  /** List items */
  items: Array<Task>;
};

/** TaskManyResponse output */
export type TaskManyResponse = {
  __typename?: 'TaskManyResponse';
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<Task>;
};

/** No longer supported. Use `sort` instead. */
export enum TaskOrderBy {
  AssignedAsc = 'assigned_ASC',
  AssignedDesc = 'assigned_DESC',
  ContentAsc = 'content_ASC',
  ContentDesc = 'content_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IdTaskAsc = 'id_task_ASC',
  IdTaskDesc = 'id_task_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  UserCreatedAsc = 'user_created_ASC',
  UserCreatedDesc = 'user_created_DESC'
}

/** Tasks subscription payload */
export type TaskPayload = {
  __typename?: 'TaskPayload';
  mutation: MutationType;
  node?: Maybe<Task>;
  previousValues?: Maybe<Task>;
  updatedFields?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type TaskSort = {
  assigned?: InputMaybe<SortOrder>;
  content?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  createdBy?: InputMaybe<UserSort>;
  deletedAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  id_task?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user_created?: InputMaybe<SortOrder>;
};

/** Tasks subscription filter */
export type TaskSubscriptionFilter = {
  mutation_in?: InputMaybe<Array<InputMaybe<MutationType>>>;
  node?: InputMaybe<TaskFilter>;
  updatedFields?: InputMaybe<UpdatedFieldsFilter>;
};

/** Tasks update input */
export type TaskUpdateByFilterInput = {
  assigned?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
  content?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
  email?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
  id_task?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
  status?: InputMaybe<Array<InputMaybe<UpdateByFilterStringSwitchInput>>>;
  title?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
  user_created?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
};

/** Tasks update input */
export type TaskUpdateInput = {
  assigned?: InputMaybe<Scalars['String']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_task?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Scalars['String']['input']>;
};

export type Task_PermissionFilter = {
  AND?: InputMaybe<Array<Task_PermissionFilter>>;
  OR?: InputMaybe<Array<Task_PermissionFilter>>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  assigned?: InputMaybe<StringPredicate>;
  content?: InputMaybe<StringPredicate>;
  createdAt?: InputMaybe<DateTimePredicate>;
  createdBy?: InputMaybe<User_PermissionFilter>;
  deletedAt?: InputMaybe<IntPredicate>;
  email?: InputMaybe<StringPredicate>;
  id?: InputMaybe<IdPredicate>;
  id_task?: InputMaybe<StringPredicate>;
  status?: InputMaybe<StringPredicate>;
  title?: InputMaybe<StringPredicate>;
  updatedAt?: InputMaybe<DateTimePredicate>;
  user_created?: InputMaybe<StringPredicate>;
};

export type Task_User = {
  __typename?: 'Task_user';
  _description?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<User>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};

/** Task_user create input */
export type Task_UserCreateInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

/** Task_user create many input */
export type Task_UserCreateManyInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

/** Task_user delete input */
export type Task_UserDeleteInput = {
  force?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** Task_userFieldsPermissions create input */
export type Task_UserFieldsPermissions = {
  createdAt?: InputMaybe<Scalars['Boolean']['input']>;
  email?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['Boolean']['input']>;
  username?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Task_UserFilter = {
  AND?: InputMaybe<Array<Task_UserFilter>>;
  OR?: InputMaybe<Array<Task_UserFilter>>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<DateTimePredicate>;
  createdBy?: InputMaybe<UserFilter>;
  deletedAt?: InputMaybe<IntPredicate>;
  email?: InputMaybe<StringPredicate>;
  id?: InputMaybe<IdPredicate>;
  updatedAt?: InputMaybe<DateTimePredicate>;
  username?: InputMaybe<StringPredicate>;
};

export type Task_UserGroupBy = {
  first?: InputMaybe<Scalars['Int']['input']>;
  having?: InputMaybe<Having>;
  last?: InputMaybe<Scalars['Int']['input']>;
  query: Task_UserGroupByQuery;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<GroupBySort>>;
};

export type Task_UserGroupByQuery = {
  _group?: InputMaybe<Array<GroupIdentifiersGroupByField>>;
  createdAt?: InputMaybe<Array<GroupByField>>;
  createdBy?: InputMaybe<UserGroupByQuery>;
  email?: InputMaybe<Array<GroupByField>>;
  id?: InputMaybe<Array<GroupByField>>;
  updatedAt?: InputMaybe<Array<GroupByField>>;
  username?: InputMaybe<Array<GroupByField>>;
};

export type Task_UserKeyFilter = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** Task_userListResponse output */
export type Task_UserListResponse = {
  __typename?: 'Task_userListResponse';
  /** List items count */
  count: Scalars['Int']['output'];
  /** Aggregated items */
  groups: Array<GroupByResponse>;
  /** List items */
  items: Array<Task_User>;
};

/** Task_userManyResponse output */
export type Task_UserManyResponse = {
  __typename?: 'Task_userManyResponse';
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<Task_User>;
};

/** No longer supported. Use `sort` instead. */
export enum Task_UserOrderBy {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  UsernameAsc = 'username_ASC',
  UsernameDesc = 'username_DESC'
}

/** Task_user subscription payload */
export type Task_UserPayload = {
  __typename?: 'Task_userPayload';
  mutation: MutationType;
  node?: Maybe<Task_User>;
  previousValues?: Maybe<Task_User>;
  updatedFields?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type Task_UserSort = {
  createdAt?: InputMaybe<SortOrder>;
  createdBy?: InputMaybe<UserSort>;
  deletedAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
};

/** Task_user subscription filter */
export type Task_UserSubscriptionFilter = {
  mutation_in?: InputMaybe<Array<InputMaybe<MutationType>>>;
  node?: InputMaybe<Task_UserFilter>;
  updatedFields?: InputMaybe<UpdatedFieldsFilter>;
};

/** Task_user update input */
export type Task_UserUpdateByFilterInput = {
  email?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
  username?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
};

/** Task_user update input */
export type Task_UserUpdateInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type Task_User_PermissionFilter = {
  AND?: InputMaybe<Array<Task_User_PermissionFilter>>;
  OR?: InputMaybe<Array<Task_User_PermissionFilter>>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<DateTimePredicate>;
  createdBy?: InputMaybe<User_PermissionFilter>;
  deletedAt?: InputMaybe<IntPredicate>;
  email?: InputMaybe<StringPredicate>;
  id?: InputMaybe<IdPredicate>;
  updatedAt?: InputMaybe<DateTimePredicate>;
  username?: InputMaybe<StringPredicate>;
};

/** Text Field Attributes */
export type TextFieldTypeAttributes = {
  __typename?: 'TextFieldTypeAttributes';
  fieldSize?: Maybe<Scalars['Int']['output']>;
  format: Scalars['String']['output'];
};

/** Text Type Format Enum */
export enum TextTypeFormatEnum {
  Ein = 'EIN',
  Email = 'EMAIL',
  Html = 'HTML',
  Markdown = 'MARKDOWN',
  Name = 'NAME',
  Unformatted = 'UNFORMATTED'
}

export type TrimFunctionArguments = {
  mode?: InputMaybe<StringTrimMode>;
  str: Scalars['String']['input'];
};

/** UUID Field Attributes */
export type UuidFieldTypeAttributes = {
  __typename?: 'UUIDFieldTypeAttributes';
  fieldSize?: Maybe<Scalars['Int']['output']>;
};

export type UpdateByFilterBooleanSwitchInput = {
  invert?: InputMaybe<Scalars['Boolean']['input']>;
  set?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateByFilterJsonInput = {
  set?: InputMaybe<Scalars['JSON']['input']>;
};

export type UpdateByFilterListStringInput = {
  insert?: InputMaybe<UpdateByFilterListStringInsertOperationInput>;
  push?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  remove?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  removeValue?: InputMaybe<Scalars['String']['input']>;
  set?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  swap?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  unshift?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UpdateByFilterListStringInsertOperationInput = {
  start: Scalars['Int']['input'];
  values: Array<Scalars['String']['input']>;
};

export type UpdateByFilterStringInput = {
  postfix?: InputMaybe<Scalars['String']['input']>;
  prefix?: InputMaybe<Scalars['String']['input']>;
  set?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateByFilterStringSwitchInput = {
  set?: InputMaybe<Scalars['String']['input']>;
};

/** UpdatedFieldsFilter */
export type UpdatedFieldsFilter = {
  contains?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  every?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UploadcareSignInfoResponse = {
  __typename?: 'UploadcareSignInfoResponse';
  expire: Scalars['String']['output'];
  publicKey: Scalars['String']['output'];
  signature: Scalars['String']['output'];
};

export type User = {
  __typename?: 'User';
  _description?: Maybe<Scalars['String']['output']>;
  avatar?: Maybe<File>;
  avatarId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<User>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  is8base?: Maybe<Scalars['Boolean']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  origin?: Maybe<Scalars['String']['output']>;
  permissions?: Maybe<UserPermissionList>;
  roles?: Maybe<RoleListResponse>;
  status?: Maybe<Scalars['String']['output']>;
  timezone?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type UserPermissionsArgs = {
  filter?: InputMaybe<PermissionInputFilter>;
};


export type UserRolesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<RoleFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<RoleGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<RoleOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<RoleSort>>;
};

export type UserBillingConfigurationResponse = {
  __typename?: 'UserBillingConfigurationResponse';
  availablePlans: Array<BillingPlanBaseInfo>;
  /** @deprecated Flag is deprecated */
  isCancelSubscriptionAvailable: Scalars['Boolean']['output'];
  /** @deprecated Flag is deprecated */
  isFreePlanAvailable: Scalars['Boolean']['output'];
};

/** Users create input */
export type UserCreateInput = {
  avatar?: InputMaybe<UsersAvatarRelationInput>;
  avatarId?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  roles?: InputMaybe<UsersRolesRelationInput>;
  status?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};

/** Users create many input */
export type UserCreateManyInput = {
  avatar?: InputMaybe<UsersAvatarManyRelationInput>;
  avatarId?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  roles?: InputMaybe<UsersRolesManyRelationInput>;
  status?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};

/** Users delete input */
export type UserDeleteInput = {
  force?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** UserFieldsPermissions create input */
export type UserFieldsPermissions = {
  avatarId?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<Scalars['Boolean']['input']>;
  email?: InputMaybe<Scalars['Boolean']['input']>;
  firstName?: InputMaybe<Scalars['Boolean']['input']>;
  is8base?: InputMaybe<Scalars['Boolean']['input']>;
  lastName?: InputMaybe<Scalars['Boolean']['input']>;
  origin?: InputMaybe<Scalars['Boolean']['input']>;
  status?: InputMaybe<Scalars['Boolean']['input']>;
  timezone?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserFilter = {
  AND?: InputMaybe<Array<UserFilter>>;
  OR?: InputMaybe<Array<UserFilter>>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  avatar?: InputMaybe<FileFilter>;
  avatarId?: InputMaybe<StringPredicate>;
  createdAt?: InputMaybe<DateTimePredicate>;
  createdBy?: InputMaybe<UserFilter>;
  deletedAt?: InputMaybe<IntPredicate>;
  email?: InputMaybe<StringPredicate>;
  firstName?: InputMaybe<StringPredicate>;
  id?: InputMaybe<IdPredicate>;
  is8base?: InputMaybe<BoolPredicate>;
  is_self?: InputMaybe<Scalars['Boolean']['input']>;
  lastName?: InputMaybe<StringPredicate>;
  not_self?: InputMaybe<Scalars['Boolean']['input']>;
  origin?: InputMaybe<StringPredicate>;
  roles?: InputMaybe<RoleRelationFilter>;
  status?: InputMaybe<StringPredicate>;
  timezone?: InputMaybe<StringPredicate>;
  updatedAt?: InputMaybe<DateTimePredicate>;
};

export type UserGroupBy = {
  first?: InputMaybe<Scalars['Int']['input']>;
  having?: InputMaybe<Having>;
  last?: InputMaybe<Scalars['Int']['input']>;
  query: UserGroupByQuery;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<GroupBySort>>;
};

export type UserGroupByQuery = {
  _group?: InputMaybe<Array<GroupIdentifiersGroupByField>>;
  avatar?: InputMaybe<FileGroupByQuery>;
  avatarId?: InputMaybe<Array<GroupByField>>;
  createdAt?: InputMaybe<Array<GroupByField>>;
  createdBy?: InputMaybe<UserGroupByQuery>;
  email?: InputMaybe<Array<GroupByField>>;
  firstName?: InputMaybe<Array<GroupByField>>;
  id?: InputMaybe<Array<GroupByField>>;
  is8base?: InputMaybe<Array<GroupByField>>;
  lastName?: InputMaybe<Array<GroupByField>>;
  origin?: InputMaybe<Array<GroupByField>>;
  roles?: InputMaybe<RoleGroupByQuery>;
  status?: InputMaybe<Array<GroupByField>>;
  timezone?: InputMaybe<Array<GroupByField>>;
  updatedAt?: InputMaybe<Array<GroupByField>>;
};

/** User Invitation Details */
export type UserInvitationDetails = {
  __typename?: 'UserInvitationDetails';
  accepted?: Maybe<Scalars['Boolean']['output']>;
  acceptedOn?: Maybe<Scalars['DateTime']['output']>;
  apiHost?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  invitedBy?: Maybe<InvitedByName>;
  isRegistered?: Maybe<Scalars['Boolean']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  resentOn?: Maybe<Scalars['DateTime']['output']>;
};

/** User Invitation List */
export type UserInvitationList = {
  __typename?: 'UserInvitationList';
  count?: Maybe<Scalars['Int']['output']>;
  items?: Maybe<Array<Maybe<UserInvitationDetails>>>;
};

export type UserKeyFilter = {
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** UserListResponse output */
export type UserListResponse = {
  __typename?: 'UserListResponse';
  /** List items count */
  count: Scalars['Int']['output'];
  /** Aggregated items */
  groups: Array<GroupByResponse>;
  /** List items */
  items: Array<User>;
};

/** UserLoginInput */
export type UserLoginInput = {
  authProfileId?: InputMaybe<Scalars['ID']['input']>;
  email: Scalars['String']['input'];
  fromInvitation?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
};

/** UserManyResponse output */
export type UserManyResponse = {
  __typename?: 'UserManyResponse';
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<User>;
};

/** No longer supported. Use `sort` instead. */
export enum UserOrderBy {
  AvatarIdAsc = 'avatarId_ASC',
  AvatarIdDesc = 'avatarId_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  FirstNameAsc = 'firstName_ASC',
  FirstNameDesc = 'firstName_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  Is8baseAsc = 'is8base_ASC',
  Is8baseDesc = 'is8base_DESC',
  IsOwnerAsc = 'isOwner_ASC',
  IsOwnerDesc = 'isOwner_DESC',
  LastNameAsc = 'lastName_ASC',
  LastNameDesc = 'lastName_DESC',
  OriginAsc = 'origin_ASC',
  OriginDesc = 'origin_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  TimezoneAsc = 'timezone_ASC',
  TimezoneDesc = 'timezone_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** Users subscription payload */
export type UserPayload = {
  __typename?: 'UserPayload';
  mutation: MutationType;
  node?: Maybe<User>;
  previousValues?: Maybe<User>;
  updatedFields?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

/** User Permission */
export type UserPermission = {
  __typename?: 'UserPermission';
  permission?: Maybe<Scalars['JSON']['output']>;
  resource?: Maybe<Scalars['String']['output']>;
  resourceType?: Maybe<Scalars['String']['output']>;
};

/** User Permission List */
export type UserPermissionList = {
  __typename?: 'UserPermissionList';
  count: Scalars['Int']['output'];
  items?: Maybe<Array<UserPermission>>;
};

export type UserRelationFilter = {
  every?: InputMaybe<UserFilter>;
  none?: InputMaybe<UserFilter>;
  some?: InputMaybe<UserFilter>;
};

export type UserSort = {
  avatar?: InputMaybe<FileSort>;
  avatarId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  createdBy?: InputMaybe<UserSort>;
  deletedAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  firstName?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  is8base?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  origin?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  timezone?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

/** Users subscription filter */
export type UserSubscriptionFilter = {
  mutation_in?: InputMaybe<Array<InputMaybe<MutationType>>>;
  node?: InputMaybe<UserFilter>;
  updatedFields?: InputMaybe<UpdatedFieldsFilter>;
};

/** Users update input */
export type UserUpdateByFilterInput = {
  avatarId?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
  email?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
  firstName?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
  is8base?: InputMaybe<Array<InputMaybe<UpdateByFilterBooleanSwitchInput>>>;
  isOwner?: InputMaybe<Array<InputMaybe<UpdateByFilterBooleanSwitchInput>>>;
  lastName?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
  origin?: InputMaybe<Array<InputMaybe<UpdateByFilterStringSwitchInput>>>;
  status?: InputMaybe<Array<InputMaybe<UpdateByFilterStringSwitchInput>>>;
  timezone?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
};

/** Users update input */
export type UserUpdateInput = {
  avatar?: InputMaybe<UsersAvatarUpdateRelationInput>;
  avatarId?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  roles?: InputMaybe<UsersRolesUpdateRelationInput>;
  status?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};

export type User_PermissionFilter = {
  AND?: InputMaybe<Array<User_PermissionFilter>>;
  OR?: InputMaybe<Array<User_PermissionFilter>>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  avatar?: InputMaybe<File_PermissionFilter>;
  avatarId?: InputMaybe<StringPredicate>;
  createdAt?: InputMaybe<DateTimePredicate>;
  createdBy?: InputMaybe<User_PermissionFilter>;
  deletedAt?: InputMaybe<IntPredicate>;
  email?: InputMaybe<StringPredicate>;
  firstName?: InputMaybe<StringPredicate>;
  id?: InputMaybe<IdPredicate>;
  is8base?: InputMaybe<BoolPredicate>;
  is_self?: InputMaybe<Scalars['Boolean']['input']>;
  lastName?: InputMaybe<StringPredicate>;
  not_self?: InputMaybe<Scalars['Boolean']['input']>;
  origin?: InputMaybe<StringPredicate>;
  roles?: InputMaybe<Role_PermissionRelationFilter>;
  status?: InputMaybe<StringPredicate>;
  timezone?: InputMaybe<StringPredicate>;
  updatedAt?: InputMaybe<DateTimePredicate>;
};

export type User_PermissionRelationFilter = {
  every?: InputMaybe<User_PermissionFilter>;
  none?: InputMaybe<User_PermissionFilter>;
  some?: InputMaybe<User_PermissionFilter>;
};

/** Users relation input */
export type UsersAvatarManyRelationInput = {
  connect?: InputMaybe<FileKeyFilter>;
};

/** Users relation input */
export type UsersAvatarRelationInput = {
  connect?: InputMaybe<FileKeyFilter>;
  create?: InputMaybe<Users_Avatar_FileCreateInput>;
};

/** Users relation input */
export type UsersAvatarUpdateRelationInput = {
  connect?: InputMaybe<FileKeyFilter>;
  create?: InputMaybe<Users_Avatar_FileCreateInput>;
  disconnect?: InputMaybe<FileKeyFilter>;
  reconnect?: InputMaybe<FileKeyFilter>;
  update?: InputMaybe<Users_Avatar_FileUpdateInput>;
};

/** Users relation input */
export type UsersRolesManyRelationInput = {
  connect?: InputMaybe<Array<RoleKeyFilter>>;
};

/** Users relation input */
export type UsersRolesRelationInput = {
  connect?: InputMaybe<Array<RoleKeyFilter>>;
  create?: InputMaybe<Array<InputMaybe<Users_RoleCreateInput>>>;
};

/** Users relation input */
export type UsersRolesUpdateRelationInput = {
  connect?: InputMaybe<Array<RoleKeyFilter>>;
  create?: InputMaybe<Array<InputMaybe<Users_RoleCreateInput>>>;
  disconnect?: InputMaybe<Array<RoleKeyFilter>>;
  reconnect?: InputMaybe<Array<RoleKeyFilter>>;
  update?: InputMaybe<Array<InputMaybe<Users_RoleUpdateInput>>>;
};

/** Roles create input from users */
export type Users_RoleCreateInput = {
  apiTokens?: InputMaybe<RolesApiTokensRelationInput>;
  authenticationProfiles?: InputMaybe<RolesAuthenticationProfilesRelationInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  permissions?: InputMaybe<PermissionsInput>;
  users?: InputMaybe<RolesUsersRelationInput>;
};

/** Roles update input from users */
export type Users_RoleUpdateInput = {
  data: RoleUpdateInput;
  filter?: InputMaybe<RoleKeyFilter>;
};

/** Files create input from users_avatar */
export type Users_Avatar_FileCreateInput = {
  fileId?: InputMaybe<Scalars['String']['input']>;
  filename?: InputMaybe<Scalars['String']['input']>;
  meta?: InputMaybe<Scalars['JSON']['input']>;
  mods?: InputMaybe<Scalars['JSON']['input']>;
  public?: InputMaybe<Scalars['Boolean']['input']>;
  users_avatar?: InputMaybe<FilesUsers_AvatarRelationInput>;
};

/** Files update input from users_avatar */
export type Users_Avatar_FileUpdateInput = {
  fileId?: InputMaybe<Scalars['String']['input']>;
  filename?: InputMaybe<Scalars['String']['input']>;
  meta?: InputMaybe<Scalars['JSON']['input']>;
  mods?: InputMaybe<Scalars['JSON']['input']>;
  public?: InputMaybe<Scalars['Boolean']['input']>;
  users_avatar?: InputMaybe<FilesUsers_AvatarUpdateRelationInput>;
};

/** VerificationEmailResendInput */
export type VerificationEmailResendInput = {
  email: Scalars['String']['input'];
};

/** View Attributes */
export type ViewAttributes = {
  __typename?: 'ViewAttributes';
  query?: Maybe<Scalars['String']['output']>;
};

/** View Create Input */
export type ViewCreateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  query: Scalars['String']['input'];
};

/** Dry Run Response for previewing SQL Views */
export type ViewDryRunOutput = {
  __typename?: 'ViewDryRunOutput';
  count?: Maybe<Scalars['Int']['output']>;
  items?: Maybe<Scalars['JSON']['output']>;
  timeMs?: Maybe<Scalars['Int']['output']>;
};

/** View Update Input */
export type ViewUpdateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
};

/** WorkspaceCreateMutationInput */
export type WorkspaceCreateMutationInput = {
  authType?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<GraphQlCreateFileItemInput>;
  kind?: InputMaybe<WorkspaceKind>;
  name: Scalars['String']['input'];
  organizationId?: InputMaybe<Scalars['ID']['input']>;
  profileId?: InputMaybe<Scalars['String']['input']>;
  projectId?: InputMaybe<Scalars['ID']['input']>;
};

export type WorkspaceCreateResponse = {
  __typename?: 'WorkspaceCreateResponse';
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  kind?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** WorkspaceDeleteMutationInput */
export type WorkspaceDeleteMutationInput = {
  id: Scalars['ID']['input'];
};

export type WorkspaceImage = {
  __typename?: 'WorkspaceImage';
  downloadUrl?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};

/** LoginResponseWorkspace name and id */
export type WorkspaceInfo = {
  __typename?: 'WorkspaceInfo';
  name?: Maybe<Scalars['String']['output']>;
  workspace?: Maybe<Scalars['ID']['output']>;
};

export type WorkspaceItem = {
  __typename?: 'WorkspaceItem';
  apiHost?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<WorkspaceImage>;
  is8BaseAuthEnabled?: Maybe<Scalars['Boolean']['output']>;
  isCiCdEnabled?: Maybe<Scalars['Boolean']['output']>;
  isOwner: Scalars['Boolean']['output'];
  kind?: Maybe<Scalars['String']['output']>;
  lastAccess?: Maybe<Scalars['DateTime']['output']>;
  lastDeployABInfo?: Maybe<DeploymentAbItemResponse>;
  name: Scalars['String']['output'];
  nextPlan?: Maybe<BillingNextPlanResponse>;
  organization?: Maybe<SystemOrganizationBaseItem>;
  owner?: Maybe<SystemMemberAccountInfo>;
  plan?: Maybe<BillingCurrentPlanResponse>;
  project?: Maybe<ProjectItemWs>;
  region?: Maybe<Scalars['String']['output']>;
  summaryABInfo?: Maybe<FrontendUtilizationAbResponse>;
  teamMemberCount?: Maybe<Scalars['Int']['output']>;
  webSocket?: Maybe<Scalars['String']['output']>;
};

/** Workspace Kind */
export enum WorkspaceKind {
  Frontend = 'frontend',
  General = 'general'
}

/** WorkspaceListResponse output */
export type WorkspaceListResponse = {
  __typename?: 'WorkspaceListResponse';
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<WorkspaceItem>;
};

export enum WorkspaceStatus {
  Active = 'active',
  Blocked = 'blocked',
  Canceled = 'canceled',
  Canceling = 'canceling',
  Pending = 'pending',
  Suspended = 'suspended'
}

/** WorkspaceUpdateMutationInput */
export type WorkspaceUpdateMutationInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  image?: InputMaybe<GraphQlCreateFileItemInput>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type WorkspaceUpdateResponse = {
  __typename?: 'WorkspaceUpdateResponse';
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  image?: Maybe<GraphQlFileItemResponse>;
  name?: Maybe<Scalars['String']['output']>;
};

export type IsAllowedCallbackUrlQueryResponse = {
  __typename?: 'isAllowedCallbackURLQueryResponse';
  isEnabled: Scalars['Boolean']['output'];
};
