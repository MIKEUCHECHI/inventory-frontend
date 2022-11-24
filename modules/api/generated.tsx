import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  bigint: any;
  bpchar: any;
  money: any;
  numeric: any;
  point: any;
  timestamptz: any;
  uuid: any;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

export type UserInfo = {
  __typename?: 'UserInfo';
  email: Scalars['String'];
  email_verified: Scalars['Boolean'];
  first_name: Scalars['String'];
  is_active: Scalars['Boolean'];
  last_name: Scalars['String'];
  phone_number?: Maybe<Scalars['String']>;
  profile_image?: Maybe<Scalars['String']>;
  roles: Array<Scalars['String']>;
};

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bigint']>;
  _gt?: InputMaybe<Scalars['bigint']>;
  _gte?: InputMaybe<Scalars['bigint']>;
  _in?: InputMaybe<Array<Scalars['bigint']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['bigint']>;
  _lte?: InputMaybe<Scalars['bigint']>;
  _neq?: InputMaybe<Scalars['bigint']>;
  _nin?: InputMaybe<Array<Scalars['bigint']>>;
};

/** Boolean expression to compare columns of type "bpchar". All fields are combined with logical 'AND'. */
export type Bpchar_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bpchar']>;
  _gt?: InputMaybe<Scalars['bpchar']>;
  _gte?: InputMaybe<Scalars['bpchar']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['bpchar']>;
  _in?: InputMaybe<Array<Scalars['bpchar']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['bpchar']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['bpchar']>;
  _lt?: InputMaybe<Scalars['bpchar']>;
  _lte?: InputMaybe<Scalars['bpchar']>;
  _neq?: InputMaybe<Scalars['bpchar']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['bpchar']>;
  _nin?: InputMaybe<Array<Scalars['bpchar']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['bpchar']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['bpchar']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['bpchar']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['bpchar']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['bpchar']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['bpchar']>;
};

/** columns and relationships of "category" */
export type Category = {
  __typename?: 'category';
  id: Scalars['Int'];
  image_uri: Scalars['String'];
  name: Scalars['String'];
};

/** aggregated selection of "category" */
export type Category_Aggregate = {
  __typename?: 'category_aggregate';
  aggregate?: Maybe<Category_Aggregate_Fields>;
  nodes: Array<Category>;
};

/** aggregate fields of "category" */
export type Category_Aggregate_Fields = {
  __typename?: 'category_aggregate_fields';
  avg?: Maybe<Category_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Category_Max_Fields>;
  min?: Maybe<Category_Min_Fields>;
  stddev?: Maybe<Category_Stddev_Fields>;
  stddev_pop?: Maybe<Category_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Category_Stddev_Samp_Fields>;
  sum?: Maybe<Category_Sum_Fields>;
  var_pop?: Maybe<Category_Var_Pop_Fields>;
  var_samp?: Maybe<Category_Var_Samp_Fields>;
  variance?: Maybe<Category_Variance_Fields>;
};


/** aggregate fields of "category" */
export type Category_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Category_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Category_Avg_Fields = {
  __typename?: 'category_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "category". All fields are combined with a logical 'AND'. */
export type Category_Bool_Exp = {
  _and?: InputMaybe<Array<Category_Bool_Exp>>;
  _not?: InputMaybe<Category_Bool_Exp>;
  _or?: InputMaybe<Array<Category_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  image_uri?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "category" */
export enum Category_Constraint {
  /** unique or primary key constraint on columns "id" */
  FoodCategoryPkey = 'food_category_pkey'
}

/** input type for incrementing numeric columns in table "category" */
export type Category_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "category" */
export type Category_Insert_Input = {
  id?: InputMaybe<Scalars['Int']>;
  image_uri?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Category_Max_Fields = {
  __typename?: 'category_max_fields';
  id?: Maybe<Scalars['Int']>;
  image_uri?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Category_Min_Fields = {
  __typename?: 'category_min_fields';
  id?: Maybe<Scalars['Int']>;
  image_uri?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "category" */
export type Category_Mutation_Response = {
  __typename?: 'category_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Category>;
};

/** on_conflict condition type for table "category" */
export type Category_On_Conflict = {
  constraint: Category_Constraint;
  update_columns?: Array<Category_Update_Column>;
  where?: InputMaybe<Category_Bool_Exp>;
};

/** Ordering options when selecting data from "category". */
export type Category_Order_By = {
  id?: InputMaybe<Order_By>;
  image_uri?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: category */
export type Category_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "category" */
export enum Category_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  ImageUri = 'image_uri',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "category" */
export type Category_Set_Input = {
  id?: InputMaybe<Scalars['Int']>;
  image_uri?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Category_Stddev_Fields = {
  __typename?: 'category_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Category_Stddev_Pop_Fields = {
  __typename?: 'category_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Category_Stddev_Samp_Fields = {
  __typename?: 'category_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "category" */
export type Category_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Category_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Category_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['Int']>;
  image_uri?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Category_Sum_Fields = {
  __typename?: 'category_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "category" */
export enum Category_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  ImageUri = 'image_uri',
  /** column name */
  Name = 'name'
}

export type Category_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Category_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Category_Set_Input>;
  where: Category_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Category_Var_Pop_Fields = {
  __typename?: 'category_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Category_Var_Samp_Fields = {
  __typename?: 'category_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Category_Variance_Fields = {
  __typename?: 'category_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** series of shops owned by one firm and selling the same goods */
export type Chain_Store = {
  __typename?: 'chain_store';
  chain_name: Scalars['String'];
  created_at: Scalars['timestamptz'];
  currency: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  featured_image_uri?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  logo_image_uri: Scalars['String'];
  nomnom_percentage: Scalars['numeric'];
  /** An array relationship */
  stores: Array<Store>;
  /** An aggregate relationship */
  stores_aggregate: Store_Aggregate;
  transaction_flow?: Maybe<Transaction_Flow_Enum>;
  updated_at: Scalars['timestamptz'];
  website?: Maybe<Scalars['String']>;
};


/** series of shops owned by one firm and selling the same goods */
export type Chain_StoreStoresArgs = {
  distinct_on?: InputMaybe<Array<Store_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Store_Order_By>>;
  where?: InputMaybe<Store_Bool_Exp>;
};


/** series of shops owned by one firm and selling the same goods */
export type Chain_StoreStores_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Store_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Store_Order_By>>;
  where?: InputMaybe<Store_Bool_Exp>;
};

/** aggregated selection of "chain_store" */
export type Chain_Store_Aggregate = {
  __typename?: 'chain_store_aggregate';
  aggregate?: Maybe<Chain_Store_Aggregate_Fields>;
  nodes: Array<Chain_Store>;
};

/** aggregate fields of "chain_store" */
export type Chain_Store_Aggregate_Fields = {
  __typename?: 'chain_store_aggregate_fields';
  avg?: Maybe<Chain_Store_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Chain_Store_Max_Fields>;
  min?: Maybe<Chain_Store_Min_Fields>;
  stddev?: Maybe<Chain_Store_Stddev_Fields>;
  stddev_pop?: Maybe<Chain_Store_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Chain_Store_Stddev_Samp_Fields>;
  sum?: Maybe<Chain_Store_Sum_Fields>;
  var_pop?: Maybe<Chain_Store_Var_Pop_Fields>;
  var_samp?: Maybe<Chain_Store_Var_Samp_Fields>;
  variance?: Maybe<Chain_Store_Variance_Fields>;
};


/** aggregate fields of "chain_store" */
export type Chain_Store_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Chain_Store_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Chain_Store_Avg_Fields = {
  __typename?: 'chain_store_avg_fields';
  nomnom_percentage?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "chain_store". All fields are combined with a logical 'AND'. */
export type Chain_Store_Bool_Exp = {
  _and?: InputMaybe<Array<Chain_Store_Bool_Exp>>;
  _not?: InputMaybe<Chain_Store_Bool_Exp>;
  _or?: InputMaybe<Array<Chain_Store_Bool_Exp>>;
  chain_name?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  currency?: InputMaybe<String_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  featured_image_uri?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  logo_image_uri?: InputMaybe<String_Comparison_Exp>;
  nomnom_percentage?: InputMaybe<Numeric_Comparison_Exp>;
  stores?: InputMaybe<Store_Bool_Exp>;
  stores_aggregate?: InputMaybe<Store_Aggregate_Bool_Exp>;
  transaction_flow?: InputMaybe<Transaction_Flow_Enum_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  website?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "chain_store" */
export enum Chain_Store_Constraint {
  /** unique or primary key constraint on columns "chain_name" */
  ChainStoreChainNameKey = 'chain_store_chain_name_key',
  /** unique or primary key constraint on columns "id" */
  ChainStorePkey = 'chain_store_pkey'
}

/** input type for incrementing numeric columns in table "chain_store" */
export type Chain_Store_Inc_Input = {
  nomnom_percentage?: InputMaybe<Scalars['numeric']>;
};

/** input type for inserting data into table "chain_store" */
export type Chain_Store_Insert_Input = {
  chain_name?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  currency?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  featured_image_uri?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  logo_image_uri?: InputMaybe<Scalars['String']>;
  nomnom_percentage?: InputMaybe<Scalars['numeric']>;
  stores?: InputMaybe<Store_Arr_Rel_Insert_Input>;
  transaction_flow?: InputMaybe<Transaction_Flow_Enum>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  website?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Chain_Store_Max_Fields = {
  __typename?: 'chain_store_max_fields';
  chain_name?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  currency?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  featured_image_uri?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  logo_image_uri?: Maybe<Scalars['String']>;
  nomnom_percentage?: Maybe<Scalars['numeric']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  website?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Chain_Store_Min_Fields = {
  __typename?: 'chain_store_min_fields';
  chain_name?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  currency?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  featured_image_uri?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  logo_image_uri?: Maybe<Scalars['String']>;
  nomnom_percentage?: Maybe<Scalars['numeric']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  website?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "chain_store" */
export type Chain_Store_Mutation_Response = {
  __typename?: 'chain_store_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Chain_Store>;
};

/** input type for inserting object relation for remote table "chain_store" */
export type Chain_Store_Obj_Rel_Insert_Input = {
  data: Chain_Store_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Chain_Store_On_Conflict>;
};

/** on_conflict condition type for table "chain_store" */
export type Chain_Store_On_Conflict = {
  constraint: Chain_Store_Constraint;
  update_columns?: Array<Chain_Store_Update_Column>;
  where?: InputMaybe<Chain_Store_Bool_Exp>;
};

/** Ordering options when selecting data from "chain_store". */
export type Chain_Store_Order_By = {
  chain_name?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  currency?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  featured_image_uri?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  logo_image_uri?: InputMaybe<Order_By>;
  nomnom_percentage?: InputMaybe<Order_By>;
  stores_aggregate?: InputMaybe<Store_Aggregate_Order_By>;
  transaction_flow?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  website?: InputMaybe<Order_By>;
};

/** primary key columns input for table: chain_store */
export type Chain_Store_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "chain_store" */
export enum Chain_Store_Select_Column {
  /** column name */
  ChainName = 'chain_name',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Currency = 'currency',
  /** column name */
  Description = 'description',
  /** column name */
  FeaturedImageUri = 'featured_image_uri',
  /** column name */
  Id = 'id',
  /** column name */
  LogoImageUri = 'logo_image_uri',
  /** column name */
  NomnomPercentage = 'nomnom_percentage',
  /** column name */
  TransactionFlow = 'transaction_flow',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Website = 'website'
}

/** input type for updating data in table "chain_store" */
export type Chain_Store_Set_Input = {
  chain_name?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  currency?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  featured_image_uri?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  logo_image_uri?: InputMaybe<Scalars['String']>;
  nomnom_percentage?: InputMaybe<Scalars['numeric']>;
  transaction_flow?: InputMaybe<Transaction_Flow_Enum>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  website?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Chain_Store_Stddev_Fields = {
  __typename?: 'chain_store_stddev_fields';
  nomnom_percentage?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Chain_Store_Stddev_Pop_Fields = {
  __typename?: 'chain_store_stddev_pop_fields';
  nomnom_percentage?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Chain_Store_Stddev_Samp_Fields = {
  __typename?: 'chain_store_stddev_samp_fields';
  nomnom_percentage?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "chain_store" */
export type Chain_Store_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Chain_Store_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Chain_Store_Stream_Cursor_Value_Input = {
  chain_name?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  currency?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  featured_image_uri?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  logo_image_uri?: InputMaybe<Scalars['String']>;
  nomnom_percentage?: InputMaybe<Scalars['numeric']>;
  transaction_flow?: InputMaybe<Transaction_Flow_Enum>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  website?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Chain_Store_Sum_Fields = {
  __typename?: 'chain_store_sum_fields';
  nomnom_percentage?: Maybe<Scalars['numeric']>;
};

/** update columns of table "chain_store" */
export enum Chain_Store_Update_Column {
  /** column name */
  ChainName = 'chain_name',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Currency = 'currency',
  /** column name */
  Description = 'description',
  /** column name */
  FeaturedImageUri = 'featured_image_uri',
  /** column name */
  Id = 'id',
  /** column name */
  LogoImageUri = 'logo_image_uri',
  /** column name */
  NomnomPercentage = 'nomnom_percentage',
  /** column name */
  TransactionFlow = 'transaction_flow',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Website = 'website'
}

export type Chain_Store_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Chain_Store_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Chain_Store_Set_Input>;
  where: Chain_Store_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Chain_Store_Var_Pop_Fields = {
  __typename?: 'chain_store_var_pop_fields';
  nomnom_percentage?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Chain_Store_Var_Samp_Fields = {
  __typename?: 'chain_store_var_samp_fields';
  nomnom_percentage?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Chain_Store_Variance_Fields = {
  __typename?: 'chain_store_variance_fields';
  nomnom_percentage?: Maybe<Scalars['Float']>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** columns and relationships of "discount" */
export type Discount = {
  __typename?: 'discount';
  amount: Scalars['money'];
  id: Scalars['Int'];
  item_id: Scalars['uuid'];
  type: Scalars['String'];
};

/** aggregated selection of "discount" */
export type Discount_Aggregate = {
  __typename?: 'discount_aggregate';
  aggregate?: Maybe<Discount_Aggregate_Fields>;
  nodes: Array<Discount>;
};

/** aggregate fields of "discount" */
export type Discount_Aggregate_Fields = {
  __typename?: 'discount_aggregate_fields';
  avg?: Maybe<Discount_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Discount_Max_Fields>;
  min?: Maybe<Discount_Min_Fields>;
  stddev?: Maybe<Discount_Stddev_Fields>;
  stddev_pop?: Maybe<Discount_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Discount_Stddev_Samp_Fields>;
  sum?: Maybe<Discount_Sum_Fields>;
  var_pop?: Maybe<Discount_Var_Pop_Fields>;
  var_samp?: Maybe<Discount_Var_Samp_Fields>;
  variance?: Maybe<Discount_Variance_Fields>;
};


/** aggregate fields of "discount" */
export type Discount_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Discount_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Discount_Avg_Fields = {
  __typename?: 'discount_avg_fields';
  amount?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "discount". All fields are combined with a logical 'AND'. */
export type Discount_Bool_Exp = {
  _and?: InputMaybe<Array<Discount_Bool_Exp>>;
  _not?: InputMaybe<Discount_Bool_Exp>;
  _or?: InputMaybe<Array<Discount_Bool_Exp>>;
  amount?: InputMaybe<Money_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  item_id?: InputMaybe<Uuid_Comparison_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "discount" */
export enum Discount_Constraint {
  /** unique or primary key constraint on columns "id" */
  DiscountPkey = 'discount_pkey'
}

/** input type for incrementing numeric columns in table "discount" */
export type Discount_Inc_Input = {
  amount?: InputMaybe<Scalars['money']>;
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "discount" */
export type Discount_Insert_Input = {
  amount?: InputMaybe<Scalars['money']>;
  id?: InputMaybe<Scalars['Int']>;
  item_id?: InputMaybe<Scalars['uuid']>;
  type?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Discount_Max_Fields = {
  __typename?: 'discount_max_fields';
  amount?: Maybe<Scalars['money']>;
  id?: Maybe<Scalars['Int']>;
  item_id?: Maybe<Scalars['uuid']>;
  type?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Discount_Min_Fields = {
  __typename?: 'discount_min_fields';
  amount?: Maybe<Scalars['money']>;
  id?: Maybe<Scalars['Int']>;
  item_id?: Maybe<Scalars['uuid']>;
  type?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "discount" */
export type Discount_Mutation_Response = {
  __typename?: 'discount_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Discount>;
};

/** input type for inserting object relation for remote table "discount" */
export type Discount_Obj_Rel_Insert_Input = {
  data: Discount_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Discount_On_Conflict>;
};

/** on_conflict condition type for table "discount" */
export type Discount_On_Conflict = {
  constraint: Discount_Constraint;
  update_columns?: Array<Discount_Update_Column>;
  where?: InputMaybe<Discount_Bool_Exp>;
};

/** Ordering options when selecting data from "discount". */
export type Discount_Order_By = {
  amount?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  item_id?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** primary key columns input for table: discount */
export type Discount_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "discount" */
export enum Discount_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  Id = 'id',
  /** column name */
  ItemId = 'item_id',
  /** column name */
  Type = 'type'
}

/** input type for updating data in table "discount" */
export type Discount_Set_Input = {
  amount?: InputMaybe<Scalars['money']>;
  id?: InputMaybe<Scalars['Int']>;
  item_id?: InputMaybe<Scalars['uuid']>;
  type?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Discount_Stddev_Fields = {
  __typename?: 'discount_stddev_fields';
  amount?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Discount_Stddev_Pop_Fields = {
  __typename?: 'discount_stddev_pop_fields';
  amount?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Discount_Stddev_Samp_Fields = {
  __typename?: 'discount_stddev_samp_fields';
  amount?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "discount" */
export type Discount_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Discount_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Discount_Stream_Cursor_Value_Input = {
  amount?: InputMaybe<Scalars['money']>;
  id?: InputMaybe<Scalars['Int']>;
  item_id?: InputMaybe<Scalars['uuid']>;
  type?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Discount_Sum_Fields = {
  __typename?: 'discount_sum_fields';
  amount?: Maybe<Scalars['money']>;
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "discount" */
export enum Discount_Update_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  Id = 'id',
  /** column name */
  ItemId = 'item_id',
  /** column name */
  Type = 'type'
}

export type Discount_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Discount_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Discount_Set_Input>;
  where: Discount_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Discount_Var_Pop_Fields = {
  __typename?: 'discount_var_pop_fields';
  amount?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Discount_Var_Samp_Fields = {
  __typename?: 'discount_var_samp_fields';
  amount?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Discount_Variance_Fields = {
  __typename?: 'discount_variance_fields';
  amount?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** Table to manage menu items */
export type Item = {
  __typename?: 'item';
  availability: Scalars['Boolean'];
  chain_store_id?: Maybe<Scalars['uuid']>;
  created_at: Scalars['timestamptz'];
  description: Scalars['String'];
  /** An object relationship */
  discount?: Maybe<Discount>;
  discount_id?: Maybe<Scalars['Int']>;
  food_type: Scalars['Int'];
  id: Scalars['uuid'];
  /** An array relationship */
  item_images: Array<Item_Image>;
  /** An aggregate relationship */
  item_images_aggregate: Item_Image_Aggregate;
  name: Scalars['String'];
  position?: Maybe<Scalars['Int']>;
  price: Scalars['money'];
  rating: Scalars['Int'];
  ref_id: Scalars['String'];
  size?: Maybe<Scalars['Int']>;
  store_id: Scalars['uuid'];
  /** An array relationship */
  tags: Array<Tags>;
  /** An aggregate relationship */
  tags_aggregate: Tags_Aggregate;
  total_available?: Maybe<Scalars['Int']>;
  updated_at: Scalars['timestamptz'];
};


/** Table to manage menu items */
export type ItemItem_ImagesArgs = {
  distinct_on?: InputMaybe<Array<Item_Image_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Item_Image_Order_By>>;
  where?: InputMaybe<Item_Image_Bool_Exp>;
};


/** Table to manage menu items */
export type ItemItem_Images_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Item_Image_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Item_Image_Order_By>>;
  where?: InputMaybe<Item_Image_Bool_Exp>;
};


/** Table to manage menu items */
export type ItemTagsArgs = {
  distinct_on?: InputMaybe<Array<Tags_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tags_Order_By>>;
  where?: InputMaybe<Tags_Bool_Exp>;
};


/** Table to manage menu items */
export type ItemTags_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tags_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tags_Order_By>>;
  where?: InputMaybe<Tags_Bool_Exp>;
};

/** aggregated selection of "item" */
export type Item_Aggregate = {
  __typename?: 'item_aggregate';
  aggregate?: Maybe<Item_Aggregate_Fields>;
  nodes: Array<Item>;
};

export type Item_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Item_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Item_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Item_Aggregate_Bool_Exp_Count>;
};

export type Item_Aggregate_Bool_Exp_Bool_And = {
  arguments: Item_Select_Column_Item_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Item_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Item_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Item_Select_Column_Item_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Item_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Item_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Item_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Item_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "item" */
export type Item_Aggregate_Fields = {
  __typename?: 'item_aggregate_fields';
  avg?: Maybe<Item_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Item_Max_Fields>;
  min?: Maybe<Item_Min_Fields>;
  stddev?: Maybe<Item_Stddev_Fields>;
  stddev_pop?: Maybe<Item_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Item_Stddev_Samp_Fields>;
  sum?: Maybe<Item_Sum_Fields>;
  var_pop?: Maybe<Item_Var_Pop_Fields>;
  var_samp?: Maybe<Item_Var_Samp_Fields>;
  variance?: Maybe<Item_Variance_Fields>;
};


/** aggregate fields of "item" */
export type Item_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Item_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "item" */
export type Item_Aggregate_Order_By = {
  avg?: InputMaybe<Item_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Item_Max_Order_By>;
  min?: InputMaybe<Item_Min_Order_By>;
  stddev?: InputMaybe<Item_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Item_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Item_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Item_Sum_Order_By>;
  var_pop?: InputMaybe<Item_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Item_Var_Samp_Order_By>;
  variance?: InputMaybe<Item_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "item" */
export type Item_Arr_Rel_Insert_Input = {
  data: Array<Item_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Item_On_Conflict>;
};

/** aggregate avg on columns */
export type Item_Avg_Fields = {
  __typename?: 'item_avg_fields';
  discount_id?: Maybe<Scalars['Float']>;
  food_type?: Maybe<Scalars['Float']>;
  position?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  rating?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  total_available?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "item" */
export type Item_Avg_Order_By = {
  discount_id?: InputMaybe<Order_By>;
  food_type?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  rating?: InputMaybe<Order_By>;
  size?: InputMaybe<Order_By>;
  total_available?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "item". All fields are combined with a logical 'AND'. */
export type Item_Bool_Exp = {
  _and?: InputMaybe<Array<Item_Bool_Exp>>;
  _not?: InputMaybe<Item_Bool_Exp>;
  _or?: InputMaybe<Array<Item_Bool_Exp>>;
  availability?: InputMaybe<Boolean_Comparison_Exp>;
  chain_store_id?: InputMaybe<Uuid_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  discount?: InputMaybe<Discount_Bool_Exp>;
  discount_id?: InputMaybe<Int_Comparison_Exp>;
  food_type?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  item_images?: InputMaybe<Item_Image_Bool_Exp>;
  item_images_aggregate?: InputMaybe<Item_Image_Aggregate_Bool_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  position?: InputMaybe<Int_Comparison_Exp>;
  price?: InputMaybe<Money_Comparison_Exp>;
  rating?: InputMaybe<Int_Comparison_Exp>;
  ref_id?: InputMaybe<String_Comparison_Exp>;
  size?: InputMaybe<Int_Comparison_Exp>;
  store_id?: InputMaybe<Uuid_Comparison_Exp>;
  tags?: InputMaybe<Tags_Bool_Exp>;
  tags_aggregate?: InputMaybe<Tags_Aggregate_Bool_Exp>;
  total_available?: InputMaybe<Int_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "item" */
export enum Item_Constraint {
  /** unique or primary key constraint on columns "id" */
  ItemPkey = 'item_pkey',
  /** unique or primary key constraint on columns "ref_id" */
  ItemRefIdKey = 'item_ref_id_key'
}

/** Food item images */
export type Item_Image = {
  __typename?: 'item_image';
  id: Scalars['Int'];
  image_uri: Scalars['String'];
  item_id: Scalars['uuid'];
};

/** aggregated selection of "item_image" */
export type Item_Image_Aggregate = {
  __typename?: 'item_image_aggregate';
  aggregate?: Maybe<Item_Image_Aggregate_Fields>;
  nodes: Array<Item_Image>;
};

export type Item_Image_Aggregate_Bool_Exp = {
  count?: InputMaybe<Item_Image_Aggregate_Bool_Exp_Count>;
};

export type Item_Image_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Item_Image_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Item_Image_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "item_image" */
export type Item_Image_Aggregate_Fields = {
  __typename?: 'item_image_aggregate_fields';
  avg?: Maybe<Item_Image_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Item_Image_Max_Fields>;
  min?: Maybe<Item_Image_Min_Fields>;
  stddev?: Maybe<Item_Image_Stddev_Fields>;
  stddev_pop?: Maybe<Item_Image_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Item_Image_Stddev_Samp_Fields>;
  sum?: Maybe<Item_Image_Sum_Fields>;
  var_pop?: Maybe<Item_Image_Var_Pop_Fields>;
  var_samp?: Maybe<Item_Image_Var_Samp_Fields>;
  variance?: Maybe<Item_Image_Variance_Fields>;
};


/** aggregate fields of "item_image" */
export type Item_Image_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Item_Image_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "item_image" */
export type Item_Image_Aggregate_Order_By = {
  avg?: InputMaybe<Item_Image_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Item_Image_Max_Order_By>;
  min?: InputMaybe<Item_Image_Min_Order_By>;
  stddev?: InputMaybe<Item_Image_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Item_Image_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Item_Image_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Item_Image_Sum_Order_By>;
  var_pop?: InputMaybe<Item_Image_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Item_Image_Var_Samp_Order_By>;
  variance?: InputMaybe<Item_Image_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "item_image" */
export type Item_Image_Arr_Rel_Insert_Input = {
  data: Array<Item_Image_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Item_Image_On_Conflict>;
};

/** aggregate avg on columns */
export type Item_Image_Avg_Fields = {
  __typename?: 'item_image_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "item_image" */
export type Item_Image_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "item_image". All fields are combined with a logical 'AND'. */
export type Item_Image_Bool_Exp = {
  _and?: InputMaybe<Array<Item_Image_Bool_Exp>>;
  _not?: InputMaybe<Item_Image_Bool_Exp>;
  _or?: InputMaybe<Array<Item_Image_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  image_uri?: InputMaybe<String_Comparison_Exp>;
  item_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "item_image" */
export enum Item_Image_Constraint {
  /** unique or primary key constraint on columns "id" */
  ItemImagePkey = 'item_image_pkey'
}

/** input type for incrementing numeric columns in table "item_image" */
export type Item_Image_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "item_image" */
export type Item_Image_Insert_Input = {
  id?: InputMaybe<Scalars['Int']>;
  image_uri?: InputMaybe<Scalars['String']>;
  item_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Item_Image_Max_Fields = {
  __typename?: 'item_image_max_fields';
  id?: Maybe<Scalars['Int']>;
  image_uri?: Maybe<Scalars['String']>;
  item_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "item_image" */
export type Item_Image_Max_Order_By = {
  id?: InputMaybe<Order_By>;
  image_uri?: InputMaybe<Order_By>;
  item_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Item_Image_Min_Fields = {
  __typename?: 'item_image_min_fields';
  id?: Maybe<Scalars['Int']>;
  image_uri?: Maybe<Scalars['String']>;
  item_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "item_image" */
export type Item_Image_Min_Order_By = {
  id?: InputMaybe<Order_By>;
  image_uri?: InputMaybe<Order_By>;
  item_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "item_image" */
export type Item_Image_Mutation_Response = {
  __typename?: 'item_image_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Item_Image>;
};

/** on_conflict condition type for table "item_image" */
export type Item_Image_On_Conflict = {
  constraint: Item_Image_Constraint;
  update_columns?: Array<Item_Image_Update_Column>;
  where?: InputMaybe<Item_Image_Bool_Exp>;
};

/** Ordering options when selecting data from "item_image". */
export type Item_Image_Order_By = {
  id?: InputMaybe<Order_By>;
  image_uri?: InputMaybe<Order_By>;
  item_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: item_image */
export type Item_Image_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "item_image" */
export enum Item_Image_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  ImageUri = 'image_uri',
  /** column name */
  ItemId = 'item_id'
}

/** input type for updating data in table "item_image" */
export type Item_Image_Set_Input = {
  id?: InputMaybe<Scalars['Int']>;
  image_uri?: InputMaybe<Scalars['String']>;
  item_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Item_Image_Stddev_Fields = {
  __typename?: 'item_image_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "item_image" */
export type Item_Image_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Item_Image_Stddev_Pop_Fields = {
  __typename?: 'item_image_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "item_image" */
export type Item_Image_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Item_Image_Stddev_Samp_Fields = {
  __typename?: 'item_image_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "item_image" */
export type Item_Image_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "item_image" */
export type Item_Image_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Item_Image_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Item_Image_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['Int']>;
  image_uri?: InputMaybe<Scalars['String']>;
  item_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate sum on columns */
export type Item_Image_Sum_Fields = {
  __typename?: 'item_image_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "item_image" */
export type Item_Image_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** update columns of table "item_image" */
export enum Item_Image_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  ImageUri = 'image_uri',
  /** column name */
  ItemId = 'item_id'
}

export type Item_Image_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Item_Image_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Item_Image_Set_Input>;
  where: Item_Image_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Item_Image_Var_Pop_Fields = {
  __typename?: 'item_image_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "item_image" */
export type Item_Image_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Item_Image_Var_Samp_Fields = {
  __typename?: 'item_image_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "item_image" */
export type Item_Image_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Item_Image_Variance_Fields = {
  __typename?: 'item_image_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "item_image" */
export type Item_Image_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** input type for incrementing numeric columns in table "item" */
export type Item_Inc_Input = {
  discount_id?: InputMaybe<Scalars['Int']>;
  food_type?: InputMaybe<Scalars['Int']>;
  position?: InputMaybe<Scalars['Int']>;
  price?: InputMaybe<Scalars['money']>;
  rating?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
  total_available?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "item" */
export type Item_Insert_Input = {
  availability?: InputMaybe<Scalars['Boolean']>;
  chain_store_id?: InputMaybe<Scalars['uuid']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  discount?: InputMaybe<Discount_Obj_Rel_Insert_Input>;
  discount_id?: InputMaybe<Scalars['Int']>;
  food_type?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['uuid']>;
  item_images?: InputMaybe<Item_Image_Arr_Rel_Insert_Input>;
  name?: InputMaybe<Scalars['String']>;
  position?: InputMaybe<Scalars['Int']>;
  price?: InputMaybe<Scalars['money']>;
  rating?: InputMaybe<Scalars['Int']>;
  ref_id?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Int']>;
  store_id?: InputMaybe<Scalars['uuid']>;
  tags?: InputMaybe<Tags_Arr_Rel_Insert_Input>;
  total_available?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Item_Max_Fields = {
  __typename?: 'item_max_fields';
  chain_store_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  discount_id?: Maybe<Scalars['Int']>;
  food_type?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['money']>;
  rating?: Maybe<Scalars['Int']>;
  ref_id?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  store_id?: Maybe<Scalars['uuid']>;
  total_available?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "item" */
export type Item_Max_Order_By = {
  chain_store_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  discount_id?: InputMaybe<Order_By>;
  food_type?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  rating?: InputMaybe<Order_By>;
  ref_id?: InputMaybe<Order_By>;
  size?: InputMaybe<Order_By>;
  store_id?: InputMaybe<Order_By>;
  total_available?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Item_Min_Fields = {
  __typename?: 'item_min_fields';
  chain_store_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  discount_id?: Maybe<Scalars['Int']>;
  food_type?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['money']>;
  rating?: Maybe<Scalars['Int']>;
  ref_id?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  store_id?: Maybe<Scalars['uuid']>;
  total_available?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "item" */
export type Item_Min_Order_By = {
  chain_store_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  discount_id?: InputMaybe<Order_By>;
  food_type?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  rating?: InputMaybe<Order_By>;
  ref_id?: InputMaybe<Order_By>;
  size?: InputMaybe<Order_By>;
  store_id?: InputMaybe<Order_By>;
  total_available?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "item" */
export type Item_Mutation_Response = {
  __typename?: 'item_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Item>;
};

/** on_conflict condition type for table "item" */
export type Item_On_Conflict = {
  constraint: Item_Constraint;
  update_columns?: Array<Item_Update_Column>;
  where?: InputMaybe<Item_Bool_Exp>;
};

/** Ordering options when selecting data from "item". */
export type Item_Order_By = {
  availability?: InputMaybe<Order_By>;
  chain_store_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  discount?: InputMaybe<Discount_Order_By>;
  discount_id?: InputMaybe<Order_By>;
  food_type?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  item_images_aggregate?: InputMaybe<Item_Image_Aggregate_Order_By>;
  name?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  rating?: InputMaybe<Order_By>;
  ref_id?: InputMaybe<Order_By>;
  size?: InputMaybe<Order_By>;
  store_id?: InputMaybe<Order_By>;
  tags_aggregate?: InputMaybe<Tags_Aggregate_Order_By>;
  total_available?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: item */
export type Item_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "item" */
export enum Item_Select_Column {
  /** column name */
  Availability = 'availability',
  /** column name */
  ChainStoreId = 'chain_store_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  DiscountId = 'discount_id',
  /** column name */
  FoodType = 'food_type',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Position = 'position',
  /** column name */
  Price = 'price',
  /** column name */
  Rating = 'rating',
  /** column name */
  RefId = 'ref_id',
  /** column name */
  Size = 'size',
  /** column name */
  StoreId = 'store_id',
  /** column name */
  TotalAvailable = 'total_available',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** select "item_aggregate_bool_exp_bool_and_arguments_columns" columns of table "item" */
export enum Item_Select_Column_Item_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Availability = 'availability'
}

/** select "item_aggregate_bool_exp_bool_or_arguments_columns" columns of table "item" */
export enum Item_Select_Column_Item_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Availability = 'availability'
}

/** input type for updating data in table "item" */
export type Item_Set_Input = {
  availability?: InputMaybe<Scalars['Boolean']>;
  chain_store_id?: InputMaybe<Scalars['uuid']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  discount_id?: InputMaybe<Scalars['Int']>;
  food_type?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  position?: InputMaybe<Scalars['Int']>;
  price?: InputMaybe<Scalars['money']>;
  rating?: InputMaybe<Scalars['Int']>;
  ref_id?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Int']>;
  store_id?: InputMaybe<Scalars['uuid']>;
  total_available?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Item_Stddev_Fields = {
  __typename?: 'item_stddev_fields';
  discount_id?: Maybe<Scalars['Float']>;
  food_type?: Maybe<Scalars['Float']>;
  position?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  rating?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  total_available?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "item" */
export type Item_Stddev_Order_By = {
  discount_id?: InputMaybe<Order_By>;
  food_type?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  rating?: InputMaybe<Order_By>;
  size?: InputMaybe<Order_By>;
  total_available?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Item_Stddev_Pop_Fields = {
  __typename?: 'item_stddev_pop_fields';
  discount_id?: Maybe<Scalars['Float']>;
  food_type?: Maybe<Scalars['Float']>;
  position?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  rating?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  total_available?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "item" */
export type Item_Stddev_Pop_Order_By = {
  discount_id?: InputMaybe<Order_By>;
  food_type?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  rating?: InputMaybe<Order_By>;
  size?: InputMaybe<Order_By>;
  total_available?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Item_Stddev_Samp_Fields = {
  __typename?: 'item_stddev_samp_fields';
  discount_id?: Maybe<Scalars['Float']>;
  food_type?: Maybe<Scalars['Float']>;
  position?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  rating?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  total_available?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "item" */
export type Item_Stddev_Samp_Order_By = {
  discount_id?: InputMaybe<Order_By>;
  food_type?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  rating?: InputMaybe<Order_By>;
  size?: InputMaybe<Order_By>;
  total_available?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "item" */
export type Item_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Item_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Item_Stream_Cursor_Value_Input = {
  availability?: InputMaybe<Scalars['Boolean']>;
  chain_store_id?: InputMaybe<Scalars['uuid']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  discount_id?: InputMaybe<Scalars['Int']>;
  food_type?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  position?: InputMaybe<Scalars['Int']>;
  price?: InputMaybe<Scalars['money']>;
  rating?: InputMaybe<Scalars['Int']>;
  ref_id?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Int']>;
  store_id?: InputMaybe<Scalars['uuid']>;
  total_available?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate sum on columns */
export type Item_Sum_Fields = {
  __typename?: 'item_sum_fields';
  discount_id?: Maybe<Scalars['Int']>;
  food_type?: Maybe<Scalars['Int']>;
  position?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['money']>;
  rating?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['Int']>;
  total_available?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "item" */
export type Item_Sum_Order_By = {
  discount_id?: InputMaybe<Order_By>;
  food_type?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  rating?: InputMaybe<Order_By>;
  size?: InputMaybe<Order_By>;
  total_available?: InputMaybe<Order_By>;
};

/** update columns of table "item" */
export enum Item_Update_Column {
  /** column name */
  Availability = 'availability',
  /** column name */
  ChainStoreId = 'chain_store_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  DiscountId = 'discount_id',
  /** column name */
  FoodType = 'food_type',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Position = 'position',
  /** column name */
  Price = 'price',
  /** column name */
  Rating = 'rating',
  /** column name */
  RefId = 'ref_id',
  /** column name */
  Size = 'size',
  /** column name */
  StoreId = 'store_id',
  /** column name */
  TotalAvailable = 'total_available',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Item_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Item_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Item_Set_Input>;
  where: Item_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Item_Var_Pop_Fields = {
  __typename?: 'item_var_pop_fields';
  discount_id?: Maybe<Scalars['Float']>;
  food_type?: Maybe<Scalars['Float']>;
  position?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  rating?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  total_available?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "item" */
export type Item_Var_Pop_Order_By = {
  discount_id?: InputMaybe<Order_By>;
  food_type?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  rating?: InputMaybe<Order_By>;
  size?: InputMaybe<Order_By>;
  total_available?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Item_Var_Samp_Fields = {
  __typename?: 'item_var_samp_fields';
  discount_id?: Maybe<Scalars['Float']>;
  food_type?: Maybe<Scalars['Float']>;
  position?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  rating?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  total_available?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "item" */
export type Item_Var_Samp_Order_By = {
  discount_id?: InputMaybe<Order_By>;
  food_type?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  rating?: InputMaybe<Order_By>;
  size?: InputMaybe<Order_By>;
  total_available?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Item_Variance_Fields = {
  __typename?: 'item_variance_fields';
  discount_id?: Maybe<Scalars['Float']>;
  food_type?: Maybe<Scalars['Float']>;
  position?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  rating?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  total_available?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "item" */
export type Item_Variance_Order_By = {
  discount_id?: InputMaybe<Order_By>;
  food_type?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  rating?: InputMaybe<Order_By>;
  size?: InputMaybe<Order_By>;
  total_available?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "money". All fields are combined with logical 'AND'. */
export type Money_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['money']>;
  _gt?: InputMaybe<Scalars['money']>;
  _gte?: InputMaybe<Scalars['money']>;
  _in?: InputMaybe<Array<Scalars['money']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['money']>;
  _lte?: InputMaybe<Scalars['money']>;
  _neq?: InputMaybe<Scalars['money']>;
  _nin?: InputMaybe<Array<Scalars['money']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "category" */
  delete_category?: Maybe<Category_Mutation_Response>;
  /** delete single row from the table: "category" */
  delete_category_by_pk?: Maybe<Category>;
  /** delete data from the table: "chain_store" */
  delete_chain_store?: Maybe<Chain_Store_Mutation_Response>;
  /** delete single row from the table: "chain_store" */
  delete_chain_store_by_pk?: Maybe<Chain_Store>;
  /** delete data from the table: "discount" */
  delete_discount?: Maybe<Discount_Mutation_Response>;
  /** delete single row from the table: "discount" */
  delete_discount_by_pk?: Maybe<Discount>;
  /** delete data from the table: "item" */
  delete_item?: Maybe<Item_Mutation_Response>;
  /** delete single row from the table: "item" */
  delete_item_by_pk?: Maybe<Item>;
  /** delete data from the table: "item_image" */
  delete_item_image?: Maybe<Item_Image_Mutation_Response>;
  /** delete single row from the table: "item_image" */
  delete_item_image_by_pk?: Maybe<Item_Image>;
  /** delete data from the table: "role" */
  delete_role?: Maybe<Role_Mutation_Response>;
  /** delete single row from the table: "role" */
  delete_role_by_pk?: Maybe<Role>;
  /** delete data from the table: "store" */
  delete_store?: Maybe<Store_Mutation_Response>;
  /** delete single row from the table: "store" */
  delete_store_by_pk?: Maybe<Store>;
  /** delete data from the table: "tags" */
  delete_tags?: Maybe<Tags_Mutation_Response>;
  /** delete single row from the table: "tags" */
  delete_tags_by_pk?: Maybe<Tags>;
  /** delete data from the table: "transaction_flow" */
  delete_transaction_flow?: Maybe<Transaction_Flow_Mutation_Response>;
  /** delete single row from the table: "transaction_flow" */
  delete_transaction_flow_by_pk?: Maybe<Transaction_Flow>;
  /** delete data from the table: "types" */
  delete_types?: Maybe<Types_Mutation_Response>;
  /** delete single row from the table: "types" */
  delete_types_by_pk?: Maybe<Types>;
  /** delete data from the table: "user" */
  delete_user?: Maybe<User_Mutation_Response>;
  /** delete single row from the table: "user" */
  delete_user_by_pk?: Maybe<User>;
  /** delete data from the table: "user_role" */
  delete_user_role?: Maybe<User_Role_Mutation_Response>;
  /** insert data into the table: "category" */
  insert_category?: Maybe<Category_Mutation_Response>;
  /** insert a single row into the table: "category" */
  insert_category_one?: Maybe<Category>;
  /** insert data into the table: "chain_store" */
  insert_chain_store?: Maybe<Chain_Store_Mutation_Response>;
  /** insert a single row into the table: "chain_store" */
  insert_chain_store_one?: Maybe<Chain_Store>;
  /** insert data into the table: "discount" */
  insert_discount?: Maybe<Discount_Mutation_Response>;
  /** insert a single row into the table: "discount" */
  insert_discount_one?: Maybe<Discount>;
  /** insert data into the table: "item" */
  insert_item?: Maybe<Item_Mutation_Response>;
  /** insert data into the table: "item_image" */
  insert_item_image?: Maybe<Item_Image_Mutation_Response>;
  /** insert a single row into the table: "item_image" */
  insert_item_image_one?: Maybe<Item_Image>;
  /** insert a single row into the table: "item" */
  insert_item_one?: Maybe<Item>;
  /** insert data into the table: "role" */
  insert_role?: Maybe<Role_Mutation_Response>;
  /** insert a single row into the table: "role" */
  insert_role_one?: Maybe<Role>;
  /** insert data into the table: "store" */
  insert_store?: Maybe<Store_Mutation_Response>;
  /** insert a single row into the table: "store" */
  insert_store_one?: Maybe<Store>;
  /** insert data into the table: "tags" */
  insert_tags?: Maybe<Tags_Mutation_Response>;
  /** insert a single row into the table: "tags" */
  insert_tags_one?: Maybe<Tags>;
  /** insert data into the table: "transaction_flow" */
  insert_transaction_flow?: Maybe<Transaction_Flow_Mutation_Response>;
  /** insert a single row into the table: "transaction_flow" */
  insert_transaction_flow_one?: Maybe<Transaction_Flow>;
  /** insert data into the table: "types" */
  insert_types?: Maybe<Types_Mutation_Response>;
  /** insert a single row into the table: "types" */
  insert_types_one?: Maybe<Types>;
  /** insert data into the table: "user" */
  insert_user?: Maybe<User_Mutation_Response>;
  /** insert a single row into the table: "user" */
  insert_user_one?: Maybe<User>;
  /** insert data into the table: "user_role" */
  insert_user_role?: Maybe<User_Role_Mutation_Response>;
  /** insert a single row into the table: "user_role" */
  insert_user_role_one?: Maybe<User_Role>;
  /** update data of the table: "category" */
  update_category?: Maybe<Category_Mutation_Response>;
  /** update single row of the table: "category" */
  update_category_by_pk?: Maybe<Category>;
  /** update multiples rows of table: "category" */
  update_category_many?: Maybe<Array<Maybe<Category_Mutation_Response>>>;
  /** update data of the table: "chain_store" */
  update_chain_store?: Maybe<Chain_Store_Mutation_Response>;
  /** update single row of the table: "chain_store" */
  update_chain_store_by_pk?: Maybe<Chain_Store>;
  /** update multiples rows of table: "chain_store" */
  update_chain_store_many?: Maybe<Array<Maybe<Chain_Store_Mutation_Response>>>;
  /** update data of the table: "discount" */
  update_discount?: Maybe<Discount_Mutation_Response>;
  /** update single row of the table: "discount" */
  update_discount_by_pk?: Maybe<Discount>;
  /** update multiples rows of table: "discount" */
  update_discount_many?: Maybe<Array<Maybe<Discount_Mutation_Response>>>;
  /** update data of the table: "item" */
  update_item?: Maybe<Item_Mutation_Response>;
  /** update single row of the table: "item" */
  update_item_by_pk?: Maybe<Item>;
  /** update data of the table: "item_image" */
  update_item_image?: Maybe<Item_Image_Mutation_Response>;
  /** update single row of the table: "item_image" */
  update_item_image_by_pk?: Maybe<Item_Image>;
  /** update multiples rows of table: "item_image" */
  update_item_image_many?: Maybe<Array<Maybe<Item_Image_Mutation_Response>>>;
  /** update multiples rows of table: "item" */
  update_item_many?: Maybe<Array<Maybe<Item_Mutation_Response>>>;
  /** update data of the table: "role" */
  update_role?: Maybe<Role_Mutation_Response>;
  /** update single row of the table: "role" */
  update_role_by_pk?: Maybe<Role>;
  /** update multiples rows of table: "role" */
  update_role_many?: Maybe<Array<Maybe<Role_Mutation_Response>>>;
  /** update data of the table: "store" */
  update_store?: Maybe<Store_Mutation_Response>;
  /** update single row of the table: "store" */
  update_store_by_pk?: Maybe<Store>;
  /** update multiples rows of table: "store" */
  update_store_many?: Maybe<Array<Maybe<Store_Mutation_Response>>>;
  /** update data of the table: "tags" */
  update_tags?: Maybe<Tags_Mutation_Response>;
  /** update single row of the table: "tags" */
  update_tags_by_pk?: Maybe<Tags>;
  /** update multiples rows of table: "tags" */
  update_tags_many?: Maybe<Array<Maybe<Tags_Mutation_Response>>>;
  /** update data of the table: "transaction_flow" */
  update_transaction_flow?: Maybe<Transaction_Flow_Mutation_Response>;
  /** update single row of the table: "transaction_flow" */
  update_transaction_flow_by_pk?: Maybe<Transaction_Flow>;
  /** update multiples rows of table: "transaction_flow" */
  update_transaction_flow_many?: Maybe<Array<Maybe<Transaction_Flow_Mutation_Response>>>;
  /** update data of the table: "types" */
  update_types?: Maybe<Types_Mutation_Response>;
  /** update single row of the table: "types" */
  update_types_by_pk?: Maybe<Types>;
  /** update multiples rows of table: "types" */
  update_types_many?: Maybe<Array<Maybe<Types_Mutation_Response>>>;
  /** update data of the table: "user" */
  update_user?: Maybe<User_Mutation_Response>;
  /** update single row of the table: "user" */
  update_user_by_pk?: Maybe<User>;
  /** update multiples rows of table: "user" */
  update_user_many?: Maybe<Array<Maybe<User_Mutation_Response>>>;
  /** update data of the table: "user_role" */
  update_user_role?: Maybe<User_Role_Mutation_Response>;
  /** update multiples rows of table: "user_role" */
  update_user_role_many?: Maybe<Array<Maybe<User_Role_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_CategoryArgs = {
  where: Category_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Category_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Chain_StoreArgs = {
  where: Chain_Store_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Chain_Store_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_DiscountArgs = {
  where: Discount_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Discount_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_ItemArgs = {
  where: Item_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Item_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Item_ImageArgs = {
  where: Item_Image_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Item_Image_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_RoleArgs = {
  where: Role_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Role_By_PkArgs = {
  id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootDelete_StoreArgs = {
  where: Store_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Store_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_TagsArgs = {
  where: Tags_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Tags_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Transaction_FlowArgs = {
  where: Transaction_Flow_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Transaction_Flow_By_PkArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_TypesArgs = {
  where: Types_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Types_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_UserArgs = {
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_User_RoleArgs = {
  where: User_Role_Bool_Exp;
};


/** mutation root */
export type Mutation_RootInsert_CategoryArgs = {
  objects: Array<Category_Insert_Input>;
  on_conflict?: InputMaybe<Category_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Category_OneArgs = {
  object: Category_Insert_Input;
  on_conflict?: InputMaybe<Category_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Chain_StoreArgs = {
  objects: Array<Chain_Store_Insert_Input>;
  on_conflict?: InputMaybe<Chain_Store_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Chain_Store_OneArgs = {
  object: Chain_Store_Insert_Input;
  on_conflict?: InputMaybe<Chain_Store_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_DiscountArgs = {
  objects: Array<Discount_Insert_Input>;
  on_conflict?: InputMaybe<Discount_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Discount_OneArgs = {
  object: Discount_Insert_Input;
  on_conflict?: InputMaybe<Discount_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ItemArgs = {
  objects: Array<Item_Insert_Input>;
  on_conflict?: InputMaybe<Item_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Item_ImageArgs = {
  objects: Array<Item_Image_Insert_Input>;
  on_conflict?: InputMaybe<Item_Image_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Item_Image_OneArgs = {
  object: Item_Image_Insert_Input;
  on_conflict?: InputMaybe<Item_Image_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Item_OneArgs = {
  object: Item_Insert_Input;
  on_conflict?: InputMaybe<Item_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_RoleArgs = {
  objects: Array<Role_Insert_Input>;
  on_conflict?: InputMaybe<Role_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Role_OneArgs = {
  object: Role_Insert_Input;
  on_conflict?: InputMaybe<Role_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_StoreArgs = {
  objects: Array<Store_Insert_Input>;
  on_conflict?: InputMaybe<Store_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Store_OneArgs = {
  object: Store_Insert_Input;
  on_conflict?: InputMaybe<Store_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_TagsArgs = {
  objects: Array<Tags_Insert_Input>;
  on_conflict?: InputMaybe<Tags_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tags_OneArgs = {
  object: Tags_Insert_Input;
  on_conflict?: InputMaybe<Tags_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Transaction_FlowArgs = {
  objects: Array<Transaction_Flow_Insert_Input>;
  on_conflict?: InputMaybe<Transaction_Flow_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Transaction_Flow_OneArgs = {
  object: Transaction_Flow_Insert_Input;
  on_conflict?: InputMaybe<Transaction_Flow_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_TypesArgs = {
  objects: Array<Types_Insert_Input>;
  on_conflict?: InputMaybe<Types_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Types_OneArgs = {
  object: Types_Insert_Input;
  on_conflict?: InputMaybe<Types_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UserArgs = {
  objects: Array<User_Insert_Input>;
  on_conflict?: InputMaybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_OneArgs = {
  object: User_Insert_Input;
  on_conflict?: InputMaybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_RoleArgs = {
  objects: Array<User_Role_Insert_Input>;
  on_conflict?: InputMaybe<User_Role_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Role_OneArgs = {
  object: User_Role_Insert_Input;
  on_conflict?: InputMaybe<User_Role_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_CategoryArgs = {
  _inc?: InputMaybe<Category_Inc_Input>;
  _set?: InputMaybe<Category_Set_Input>;
  where: Category_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Category_By_PkArgs = {
  _inc?: InputMaybe<Category_Inc_Input>;
  _set?: InputMaybe<Category_Set_Input>;
  pk_columns: Category_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Category_ManyArgs = {
  updates: Array<Category_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Chain_StoreArgs = {
  _inc?: InputMaybe<Chain_Store_Inc_Input>;
  _set?: InputMaybe<Chain_Store_Set_Input>;
  where: Chain_Store_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Chain_Store_By_PkArgs = {
  _inc?: InputMaybe<Chain_Store_Inc_Input>;
  _set?: InputMaybe<Chain_Store_Set_Input>;
  pk_columns: Chain_Store_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Chain_Store_ManyArgs = {
  updates: Array<Chain_Store_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_DiscountArgs = {
  _inc?: InputMaybe<Discount_Inc_Input>;
  _set?: InputMaybe<Discount_Set_Input>;
  where: Discount_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Discount_By_PkArgs = {
  _inc?: InputMaybe<Discount_Inc_Input>;
  _set?: InputMaybe<Discount_Set_Input>;
  pk_columns: Discount_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Discount_ManyArgs = {
  updates: Array<Discount_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_ItemArgs = {
  _inc?: InputMaybe<Item_Inc_Input>;
  _set?: InputMaybe<Item_Set_Input>;
  where: Item_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Item_By_PkArgs = {
  _inc?: InputMaybe<Item_Inc_Input>;
  _set?: InputMaybe<Item_Set_Input>;
  pk_columns: Item_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Item_ImageArgs = {
  _inc?: InputMaybe<Item_Image_Inc_Input>;
  _set?: InputMaybe<Item_Image_Set_Input>;
  where: Item_Image_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Item_Image_By_PkArgs = {
  _inc?: InputMaybe<Item_Image_Inc_Input>;
  _set?: InputMaybe<Item_Image_Set_Input>;
  pk_columns: Item_Image_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Item_Image_ManyArgs = {
  updates: Array<Item_Image_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Item_ManyArgs = {
  updates: Array<Item_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_RoleArgs = {
  _inc?: InputMaybe<Role_Inc_Input>;
  _set?: InputMaybe<Role_Set_Input>;
  where: Role_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Role_By_PkArgs = {
  _inc?: InputMaybe<Role_Inc_Input>;
  _set?: InputMaybe<Role_Set_Input>;
  pk_columns: Role_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Role_ManyArgs = {
  updates: Array<Role_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_StoreArgs = {
  _inc?: InputMaybe<Store_Inc_Input>;
  _set?: InputMaybe<Store_Set_Input>;
  where: Store_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Store_By_PkArgs = {
  _inc?: InputMaybe<Store_Inc_Input>;
  _set?: InputMaybe<Store_Set_Input>;
  pk_columns: Store_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Store_ManyArgs = {
  updates: Array<Store_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_TagsArgs = {
  _inc?: InputMaybe<Tags_Inc_Input>;
  _set?: InputMaybe<Tags_Set_Input>;
  where: Tags_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Tags_By_PkArgs = {
  _inc?: InputMaybe<Tags_Inc_Input>;
  _set?: InputMaybe<Tags_Set_Input>;
  pk_columns: Tags_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Tags_ManyArgs = {
  updates: Array<Tags_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Transaction_FlowArgs = {
  _set?: InputMaybe<Transaction_Flow_Set_Input>;
  where: Transaction_Flow_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Transaction_Flow_By_PkArgs = {
  _set?: InputMaybe<Transaction_Flow_Set_Input>;
  pk_columns: Transaction_Flow_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Transaction_Flow_ManyArgs = {
  updates: Array<Transaction_Flow_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_TypesArgs = {
  _inc?: InputMaybe<Types_Inc_Input>;
  _set?: InputMaybe<Types_Set_Input>;
  where: Types_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Types_By_PkArgs = {
  _inc?: InputMaybe<Types_Inc_Input>;
  _set?: InputMaybe<Types_Set_Input>;
  pk_columns: Types_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Types_ManyArgs = {
  updates: Array<Types_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_UserArgs = {
  _set?: InputMaybe<User_Set_Input>;
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_By_PkArgs = {
  _set?: InputMaybe<User_Set_Input>;
  pk_columns: User_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_ManyArgs = {
  updates: Array<User_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_User_RoleArgs = {
  _inc?: InputMaybe<User_Role_Inc_Input>;
  _set?: InputMaybe<User_Role_Set_Input>;
  where: User_Role_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_Role_ManyArgs = {
  updates: Array<User_Role_Updates>;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['numeric']>;
  _gt?: InputMaybe<Scalars['numeric']>;
  _gte?: InputMaybe<Scalars['numeric']>;
  _in?: InputMaybe<Array<Scalars['numeric']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['numeric']>;
  _lte?: InputMaybe<Scalars['numeric']>;
  _neq?: InputMaybe<Scalars['numeric']>;
  _nin?: InputMaybe<Array<Scalars['numeric']>>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** Boolean expression to compare columns of type "point". All fields are combined with logical 'AND'. */
export type Point_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['point']>;
  _gt?: InputMaybe<Scalars['point']>;
  _gte?: InputMaybe<Scalars['point']>;
  _in?: InputMaybe<Array<Scalars['point']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['point']>;
  _lte?: InputMaybe<Scalars['point']>;
  _neq?: InputMaybe<Scalars['point']>;
  _nin?: InputMaybe<Array<Scalars['point']>>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "category" */
  category: Array<Category>;
  /** fetch aggregated fields from the table: "category" */
  category_aggregate: Category_Aggregate;
  /** fetch data from the table: "category" using primary key columns */
  category_by_pk?: Maybe<Category>;
  /** fetch data from the table: "chain_store" */
  chain_store: Array<Chain_Store>;
  /** fetch aggregated fields from the table: "chain_store" */
  chain_store_aggregate: Chain_Store_Aggregate;
  /** fetch data from the table: "chain_store" using primary key columns */
  chain_store_by_pk?: Maybe<Chain_Store>;
  /** fetch data from the table: "discount" */
  discount: Array<Discount>;
  /** fetch aggregated fields from the table: "discount" */
  discount_aggregate: Discount_Aggregate;
  /** fetch data from the table: "discount" using primary key columns */
  discount_by_pk?: Maybe<Discount>;
  /** fetch data from the table: "item" */
  item: Array<Item>;
  /** fetch aggregated fields from the table: "item" */
  item_aggregate: Item_Aggregate;
  /** fetch data from the table: "item" using primary key columns */
  item_by_pk?: Maybe<Item>;
  /** fetch data from the table: "item_image" */
  item_image: Array<Item_Image>;
  /** fetch aggregated fields from the table: "item_image" */
  item_image_aggregate: Item_Image_Aggregate;
  /** fetch data from the table: "item_image" using primary key columns */
  item_image_by_pk?: Maybe<Item_Image>;
  /** Query to get user profile */
  profile?: Maybe<UserInfo>;
  /** fetch data from the table: "role" */
  role: Array<Role>;
  /** fetch aggregated fields from the table: "role" */
  role_aggregate: Role_Aggregate;
  /** fetch data from the table: "role" using primary key columns */
  role_by_pk?: Maybe<Role>;
  /** fetch data from the table: "store" */
  store: Array<Store>;
  /** fetch aggregated fields from the table: "store" */
  store_aggregate: Store_Aggregate;
  /** fetch data from the table: "store" using primary key columns */
  store_by_pk?: Maybe<Store>;
  /** An array relationship */
  tags: Array<Tags>;
  /** An aggregate relationship */
  tags_aggregate: Tags_Aggregate;
  /** fetch data from the table: "tags" using primary key columns */
  tags_by_pk?: Maybe<Tags>;
  /** fetch data from the table: "transaction_flow" */
  transaction_flow: Array<Transaction_Flow>;
  /** fetch aggregated fields from the table: "transaction_flow" */
  transaction_flow_aggregate: Transaction_Flow_Aggregate;
  /** fetch data from the table: "transaction_flow" using primary key columns */
  transaction_flow_by_pk?: Maybe<Transaction_Flow>;
  /** fetch data from the table: "types" */
  types: Array<Types>;
  /** fetch aggregated fields from the table: "types" */
  types_aggregate: Types_Aggregate;
  /** fetch data from the table: "types" using primary key columns */
  types_by_pk?: Maybe<Types>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
  /** fetch data from the table: "user_role" */
  user_role: Array<User_Role>;
  /** fetch aggregated fields from the table: "user_role" */
  user_role_aggregate: User_Role_Aggregate;
};


export type Query_RootCategoryArgs = {
  distinct_on?: InputMaybe<Array<Category_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Category_Order_By>>;
  where?: InputMaybe<Category_Bool_Exp>;
};


export type Query_RootCategory_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Category_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Category_Order_By>>;
  where?: InputMaybe<Category_Bool_Exp>;
};


export type Query_RootCategory_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootChain_StoreArgs = {
  distinct_on?: InputMaybe<Array<Chain_Store_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Chain_Store_Order_By>>;
  where?: InputMaybe<Chain_Store_Bool_Exp>;
};


export type Query_RootChain_Store_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Chain_Store_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Chain_Store_Order_By>>;
  where?: InputMaybe<Chain_Store_Bool_Exp>;
};


export type Query_RootChain_Store_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootDiscountArgs = {
  distinct_on?: InputMaybe<Array<Discount_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Discount_Order_By>>;
  where?: InputMaybe<Discount_Bool_Exp>;
};


export type Query_RootDiscount_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Discount_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Discount_Order_By>>;
  where?: InputMaybe<Discount_Bool_Exp>;
};


export type Query_RootDiscount_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootItemArgs = {
  distinct_on?: InputMaybe<Array<Item_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Item_Order_By>>;
  where?: InputMaybe<Item_Bool_Exp>;
};


export type Query_RootItem_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Item_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Item_Order_By>>;
  where?: InputMaybe<Item_Bool_Exp>;
};


export type Query_RootItem_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootItem_ImageArgs = {
  distinct_on?: InputMaybe<Array<Item_Image_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Item_Image_Order_By>>;
  where?: InputMaybe<Item_Image_Bool_Exp>;
};


export type Query_RootItem_Image_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Item_Image_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Item_Image_Order_By>>;
  where?: InputMaybe<Item_Image_Bool_Exp>;
};


export type Query_RootItem_Image_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootRoleArgs = {
  distinct_on?: InputMaybe<Array<Role_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Role_Order_By>>;
  where?: InputMaybe<Role_Bool_Exp>;
};


export type Query_RootRole_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Role_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Role_Order_By>>;
  where?: InputMaybe<Role_Bool_Exp>;
};


export type Query_RootRole_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Query_RootStoreArgs = {
  distinct_on?: InputMaybe<Array<Store_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Store_Order_By>>;
  where?: InputMaybe<Store_Bool_Exp>;
};


export type Query_RootStore_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Store_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Store_Order_By>>;
  where?: InputMaybe<Store_Bool_Exp>;
};


export type Query_RootStore_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootTagsArgs = {
  distinct_on?: InputMaybe<Array<Tags_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tags_Order_By>>;
  where?: InputMaybe<Tags_Bool_Exp>;
};


export type Query_RootTags_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tags_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tags_Order_By>>;
  where?: InputMaybe<Tags_Bool_Exp>;
};


export type Query_RootTags_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootTransaction_FlowArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Flow_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transaction_Flow_Order_By>>;
  where?: InputMaybe<Transaction_Flow_Bool_Exp>;
};


export type Query_RootTransaction_Flow_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Flow_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transaction_Flow_Order_By>>;
  where?: InputMaybe<Transaction_Flow_Bool_Exp>;
};


export type Query_RootTransaction_Flow_By_PkArgs = {
  value: Scalars['String'];
};


export type Query_RootTypesArgs = {
  distinct_on?: InputMaybe<Array<Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Types_Order_By>>;
  where?: InputMaybe<Types_Bool_Exp>;
};


export type Query_RootTypes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Types_Order_By>>;
  where?: InputMaybe<Types_Bool_Exp>;
};


export type Query_RootTypes_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootUserArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Query_RootUser_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Query_RootUser_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootUser_RoleArgs = {
  distinct_on?: InputMaybe<Array<User_Role_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Role_Order_By>>;
  where?: InputMaybe<User_Role_Bool_Exp>;
};


export type Query_RootUser_Role_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Role_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Role_Order_By>>;
  where?: InputMaybe<User_Role_Bool_Exp>;
};

/** Manage user role */
export type Role = {
  __typename?: 'role';
  description: Scalars['String'];
  id: Scalars['bigint'];
  name: Scalars['String'];
};

/** aggregated selection of "role" */
export type Role_Aggregate = {
  __typename?: 'role_aggregate';
  aggregate?: Maybe<Role_Aggregate_Fields>;
  nodes: Array<Role>;
};

/** aggregate fields of "role" */
export type Role_Aggregate_Fields = {
  __typename?: 'role_aggregate_fields';
  avg?: Maybe<Role_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Role_Max_Fields>;
  min?: Maybe<Role_Min_Fields>;
  stddev?: Maybe<Role_Stddev_Fields>;
  stddev_pop?: Maybe<Role_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Role_Stddev_Samp_Fields>;
  sum?: Maybe<Role_Sum_Fields>;
  var_pop?: Maybe<Role_Var_Pop_Fields>;
  var_samp?: Maybe<Role_Var_Samp_Fields>;
  variance?: Maybe<Role_Variance_Fields>;
};


/** aggregate fields of "role" */
export type Role_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Role_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Role_Avg_Fields = {
  __typename?: 'role_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "role". All fields are combined with a logical 'AND'. */
export type Role_Bool_Exp = {
  _and?: InputMaybe<Array<Role_Bool_Exp>>;
  _not?: InputMaybe<Role_Bool_Exp>;
  _or?: InputMaybe<Array<Role_Bool_Exp>>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "role" */
export enum Role_Constraint {
  /** unique or primary key constraint on columns "id" */
  RolePkey = 'role_pkey'
}

/** input type for incrementing numeric columns in table "role" */
export type Role_Inc_Input = {
  id?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "role" */
export type Role_Insert_Input = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['bigint']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Role_Max_Fields = {
  __typename?: 'role_max_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['bigint']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Role_Min_Fields = {
  __typename?: 'role_min_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['bigint']>;
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "role" */
export type Role_Mutation_Response = {
  __typename?: 'role_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Role>;
};

/** input type for inserting object relation for remote table "role" */
export type Role_Obj_Rel_Insert_Input = {
  data: Role_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Role_On_Conflict>;
};

/** on_conflict condition type for table "role" */
export type Role_On_Conflict = {
  constraint: Role_Constraint;
  update_columns?: Array<Role_Update_Column>;
  where?: InputMaybe<Role_Bool_Exp>;
};

/** Ordering options when selecting data from "role". */
export type Role_Order_By = {
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: role */
export type Role_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "role" */
export enum Role_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "role" */
export type Role_Set_Input = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['bigint']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Role_Stddev_Fields = {
  __typename?: 'role_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Role_Stddev_Pop_Fields = {
  __typename?: 'role_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Role_Stddev_Samp_Fields = {
  __typename?: 'role_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "role" */
export type Role_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Role_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Role_Stream_Cursor_Value_Input = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['bigint']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Role_Sum_Fields = {
  __typename?: 'role_sum_fields';
  id?: Maybe<Scalars['bigint']>;
};

/** update columns of table "role" */
export enum Role_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

export type Role_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Role_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Role_Set_Input>;
  where: Role_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Role_Var_Pop_Fields = {
  __typename?: 'role_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Role_Var_Samp_Fields = {
  __typename?: 'role_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Role_Variance_Fields = {
  __typename?: 'role_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** manage each store under chain_store */
export type Store = {
  __typename?: 'store';
  address: Scalars['String'];
  /** An object relationship */
  chain_store: Chain_Store;
  chain_store_id: Scalars['uuid'];
  city_id: Scalars['Int'];
  country_id: Scalars['Int'];
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  is_active: Scalars['Boolean'];
  /** An array relationship */
  items: Array<Item>;
  /** An aggregate relationship */
  items_aggregate: Item_Aggregate;
  latitude: Scalars['String'];
  locality?: Maybe<Scalars['String']>;
  location: Scalars['point'];
  longitude: Scalars['String'];
  phone_number: Scalars['String'];
  timezone: Scalars['bpchar'];
  updated_at: Scalars['timestamptz'];
  zipcode: Scalars['String'];
};


/** manage each store under chain_store */
export type StoreItemsArgs = {
  distinct_on?: InputMaybe<Array<Item_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Item_Order_By>>;
  where?: InputMaybe<Item_Bool_Exp>;
};


/** manage each store under chain_store */
export type StoreItems_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Item_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Item_Order_By>>;
  where?: InputMaybe<Item_Bool_Exp>;
};

/** aggregated selection of "store" */
export type Store_Aggregate = {
  __typename?: 'store_aggregate';
  aggregate?: Maybe<Store_Aggregate_Fields>;
  nodes: Array<Store>;
};

export type Store_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Store_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Store_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Store_Aggregate_Bool_Exp_Count>;
};

export type Store_Aggregate_Bool_Exp_Bool_And = {
  arguments: Store_Select_Column_Store_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Store_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Store_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Store_Select_Column_Store_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Store_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Store_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Store_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Store_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "store" */
export type Store_Aggregate_Fields = {
  __typename?: 'store_aggregate_fields';
  avg?: Maybe<Store_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Store_Max_Fields>;
  min?: Maybe<Store_Min_Fields>;
  stddev?: Maybe<Store_Stddev_Fields>;
  stddev_pop?: Maybe<Store_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Store_Stddev_Samp_Fields>;
  sum?: Maybe<Store_Sum_Fields>;
  var_pop?: Maybe<Store_Var_Pop_Fields>;
  var_samp?: Maybe<Store_Var_Samp_Fields>;
  variance?: Maybe<Store_Variance_Fields>;
};


/** aggregate fields of "store" */
export type Store_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Store_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "store" */
export type Store_Aggregate_Order_By = {
  avg?: InputMaybe<Store_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Store_Max_Order_By>;
  min?: InputMaybe<Store_Min_Order_By>;
  stddev?: InputMaybe<Store_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Store_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Store_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Store_Sum_Order_By>;
  var_pop?: InputMaybe<Store_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Store_Var_Samp_Order_By>;
  variance?: InputMaybe<Store_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "store" */
export type Store_Arr_Rel_Insert_Input = {
  data: Array<Store_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Store_On_Conflict>;
};

/** aggregate avg on columns */
export type Store_Avg_Fields = {
  __typename?: 'store_avg_fields';
  city_id?: Maybe<Scalars['Float']>;
  country_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "store" */
export type Store_Avg_Order_By = {
  city_id?: InputMaybe<Order_By>;
  country_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "store". All fields are combined with a logical 'AND'. */
export type Store_Bool_Exp = {
  _and?: InputMaybe<Array<Store_Bool_Exp>>;
  _not?: InputMaybe<Store_Bool_Exp>;
  _or?: InputMaybe<Array<Store_Bool_Exp>>;
  address?: InputMaybe<String_Comparison_Exp>;
  chain_store?: InputMaybe<Chain_Store_Bool_Exp>;
  chain_store_id?: InputMaybe<Uuid_Comparison_Exp>;
  city_id?: InputMaybe<Int_Comparison_Exp>;
  country_id?: InputMaybe<Int_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  is_active?: InputMaybe<Boolean_Comparison_Exp>;
  items?: InputMaybe<Item_Bool_Exp>;
  items_aggregate?: InputMaybe<Item_Aggregate_Bool_Exp>;
  latitude?: InputMaybe<String_Comparison_Exp>;
  locality?: InputMaybe<String_Comparison_Exp>;
  location?: InputMaybe<Point_Comparison_Exp>;
  longitude?: InputMaybe<String_Comparison_Exp>;
  phone_number?: InputMaybe<String_Comparison_Exp>;
  timezone?: InputMaybe<Bpchar_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  zipcode?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "store" */
export enum Store_Constraint {
  /** unique or primary key constraint on columns "id" */
  StorePkey = 'store_pkey'
}

/** input type for incrementing numeric columns in table "store" */
export type Store_Inc_Input = {
  city_id?: InputMaybe<Scalars['Int']>;
  country_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "store" */
export type Store_Insert_Input = {
  address?: InputMaybe<Scalars['String']>;
  chain_store?: InputMaybe<Chain_Store_Obj_Rel_Insert_Input>;
  chain_store_id?: InputMaybe<Scalars['uuid']>;
  city_id?: InputMaybe<Scalars['Int']>;
  country_id?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  is_active?: InputMaybe<Scalars['Boolean']>;
  items?: InputMaybe<Item_Arr_Rel_Insert_Input>;
  latitude?: InputMaybe<Scalars['String']>;
  locality?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<Scalars['point']>;
  longitude?: InputMaybe<Scalars['String']>;
  phone_number?: InputMaybe<Scalars['String']>;
  timezone?: InputMaybe<Scalars['bpchar']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  zipcode?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Store_Max_Fields = {
  __typename?: 'store_max_fields';
  address?: Maybe<Scalars['String']>;
  chain_store_id?: Maybe<Scalars['uuid']>;
  city_id?: Maybe<Scalars['Int']>;
  country_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  latitude?: Maybe<Scalars['String']>;
  locality?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['String']>;
  phone_number?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['bpchar']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  zipcode?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "store" */
export type Store_Max_Order_By = {
  address?: InputMaybe<Order_By>;
  chain_store_id?: InputMaybe<Order_By>;
  city_id?: InputMaybe<Order_By>;
  country_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  latitude?: InputMaybe<Order_By>;
  locality?: InputMaybe<Order_By>;
  longitude?: InputMaybe<Order_By>;
  phone_number?: InputMaybe<Order_By>;
  timezone?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  zipcode?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Store_Min_Fields = {
  __typename?: 'store_min_fields';
  address?: Maybe<Scalars['String']>;
  chain_store_id?: Maybe<Scalars['uuid']>;
  city_id?: Maybe<Scalars['Int']>;
  country_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  latitude?: Maybe<Scalars['String']>;
  locality?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['String']>;
  phone_number?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['bpchar']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  zipcode?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "store" */
export type Store_Min_Order_By = {
  address?: InputMaybe<Order_By>;
  chain_store_id?: InputMaybe<Order_By>;
  city_id?: InputMaybe<Order_By>;
  country_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  latitude?: InputMaybe<Order_By>;
  locality?: InputMaybe<Order_By>;
  longitude?: InputMaybe<Order_By>;
  phone_number?: InputMaybe<Order_By>;
  timezone?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  zipcode?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "store" */
export type Store_Mutation_Response = {
  __typename?: 'store_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Store>;
};

/** on_conflict condition type for table "store" */
export type Store_On_Conflict = {
  constraint: Store_Constraint;
  update_columns?: Array<Store_Update_Column>;
  where?: InputMaybe<Store_Bool_Exp>;
};

/** Ordering options when selecting data from "store". */
export type Store_Order_By = {
  address?: InputMaybe<Order_By>;
  chain_store?: InputMaybe<Chain_Store_Order_By>;
  chain_store_id?: InputMaybe<Order_By>;
  city_id?: InputMaybe<Order_By>;
  country_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_active?: InputMaybe<Order_By>;
  items_aggregate?: InputMaybe<Item_Aggregate_Order_By>;
  latitude?: InputMaybe<Order_By>;
  locality?: InputMaybe<Order_By>;
  location?: InputMaybe<Order_By>;
  longitude?: InputMaybe<Order_By>;
  phone_number?: InputMaybe<Order_By>;
  timezone?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  zipcode?: InputMaybe<Order_By>;
};

/** primary key columns input for table: store */
export type Store_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "store" */
export enum Store_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  ChainStoreId = 'chain_store_id',
  /** column name */
  CityId = 'city_id',
  /** column name */
  CountryId = 'country_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  IsActive = 'is_active',
  /** column name */
  Latitude = 'latitude',
  /** column name */
  Locality = 'locality',
  /** column name */
  Location = 'location',
  /** column name */
  Longitude = 'longitude',
  /** column name */
  PhoneNumber = 'phone_number',
  /** column name */
  Timezone = 'timezone',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Zipcode = 'zipcode'
}

/** select "store_aggregate_bool_exp_bool_and_arguments_columns" columns of table "store" */
export enum Store_Select_Column_Store_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  IsActive = 'is_active'
}

/** select "store_aggregate_bool_exp_bool_or_arguments_columns" columns of table "store" */
export enum Store_Select_Column_Store_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  IsActive = 'is_active'
}

/** input type for updating data in table "store" */
export type Store_Set_Input = {
  address?: InputMaybe<Scalars['String']>;
  chain_store_id?: InputMaybe<Scalars['uuid']>;
  city_id?: InputMaybe<Scalars['Int']>;
  country_id?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  is_active?: InputMaybe<Scalars['Boolean']>;
  latitude?: InputMaybe<Scalars['String']>;
  locality?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<Scalars['point']>;
  longitude?: InputMaybe<Scalars['String']>;
  phone_number?: InputMaybe<Scalars['String']>;
  timezone?: InputMaybe<Scalars['bpchar']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  zipcode?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Store_Stddev_Fields = {
  __typename?: 'store_stddev_fields';
  city_id?: Maybe<Scalars['Float']>;
  country_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "store" */
export type Store_Stddev_Order_By = {
  city_id?: InputMaybe<Order_By>;
  country_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Store_Stddev_Pop_Fields = {
  __typename?: 'store_stddev_pop_fields';
  city_id?: Maybe<Scalars['Float']>;
  country_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "store" */
export type Store_Stddev_Pop_Order_By = {
  city_id?: InputMaybe<Order_By>;
  country_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Store_Stddev_Samp_Fields = {
  __typename?: 'store_stddev_samp_fields';
  city_id?: Maybe<Scalars['Float']>;
  country_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "store" */
export type Store_Stddev_Samp_Order_By = {
  city_id?: InputMaybe<Order_By>;
  country_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "store" */
export type Store_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Store_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Store_Stream_Cursor_Value_Input = {
  address?: InputMaybe<Scalars['String']>;
  chain_store_id?: InputMaybe<Scalars['uuid']>;
  city_id?: InputMaybe<Scalars['Int']>;
  country_id?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  is_active?: InputMaybe<Scalars['Boolean']>;
  latitude?: InputMaybe<Scalars['String']>;
  locality?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<Scalars['point']>;
  longitude?: InputMaybe<Scalars['String']>;
  phone_number?: InputMaybe<Scalars['String']>;
  timezone?: InputMaybe<Scalars['bpchar']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  zipcode?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Store_Sum_Fields = {
  __typename?: 'store_sum_fields';
  city_id?: Maybe<Scalars['Int']>;
  country_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "store" */
export type Store_Sum_Order_By = {
  city_id?: InputMaybe<Order_By>;
  country_id?: InputMaybe<Order_By>;
};

/** update columns of table "store" */
export enum Store_Update_Column {
  /** column name */
  Address = 'address',
  /** column name */
  ChainStoreId = 'chain_store_id',
  /** column name */
  CityId = 'city_id',
  /** column name */
  CountryId = 'country_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  IsActive = 'is_active',
  /** column name */
  Latitude = 'latitude',
  /** column name */
  Locality = 'locality',
  /** column name */
  Location = 'location',
  /** column name */
  Longitude = 'longitude',
  /** column name */
  PhoneNumber = 'phone_number',
  /** column name */
  Timezone = 'timezone',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Zipcode = 'zipcode'
}

export type Store_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Store_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Store_Set_Input>;
  where: Store_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Store_Var_Pop_Fields = {
  __typename?: 'store_var_pop_fields';
  city_id?: Maybe<Scalars['Float']>;
  country_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "store" */
export type Store_Var_Pop_Order_By = {
  city_id?: InputMaybe<Order_By>;
  country_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Store_Var_Samp_Fields = {
  __typename?: 'store_var_samp_fields';
  city_id?: Maybe<Scalars['Float']>;
  country_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "store" */
export type Store_Var_Samp_Order_By = {
  city_id?: InputMaybe<Order_By>;
  country_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Store_Variance_Fields = {
  __typename?: 'store_variance_fields';
  city_id?: Maybe<Scalars['Float']>;
  country_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "store" */
export type Store_Variance_Order_By = {
  city_id?: InputMaybe<Order_By>;
  country_id?: InputMaybe<Order_By>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "category" */
  category: Array<Category>;
  /** fetch aggregated fields from the table: "category" */
  category_aggregate: Category_Aggregate;
  /** fetch data from the table: "category" using primary key columns */
  category_by_pk?: Maybe<Category>;
  /** fetch data from the table in a streaming manner: "category" */
  category_stream: Array<Category>;
  /** fetch data from the table: "chain_store" */
  chain_store: Array<Chain_Store>;
  /** fetch aggregated fields from the table: "chain_store" */
  chain_store_aggregate: Chain_Store_Aggregate;
  /** fetch data from the table: "chain_store" using primary key columns */
  chain_store_by_pk?: Maybe<Chain_Store>;
  /** fetch data from the table in a streaming manner: "chain_store" */
  chain_store_stream: Array<Chain_Store>;
  /** fetch data from the table: "discount" */
  discount: Array<Discount>;
  /** fetch aggregated fields from the table: "discount" */
  discount_aggregate: Discount_Aggregate;
  /** fetch data from the table: "discount" using primary key columns */
  discount_by_pk?: Maybe<Discount>;
  /** fetch data from the table in a streaming manner: "discount" */
  discount_stream: Array<Discount>;
  /** fetch data from the table: "item" */
  item: Array<Item>;
  /** fetch aggregated fields from the table: "item" */
  item_aggregate: Item_Aggregate;
  /** fetch data from the table: "item" using primary key columns */
  item_by_pk?: Maybe<Item>;
  /** fetch data from the table: "item_image" */
  item_image: Array<Item_Image>;
  /** fetch aggregated fields from the table: "item_image" */
  item_image_aggregate: Item_Image_Aggregate;
  /** fetch data from the table: "item_image" using primary key columns */
  item_image_by_pk?: Maybe<Item_Image>;
  /** fetch data from the table in a streaming manner: "item_image" */
  item_image_stream: Array<Item_Image>;
  /** fetch data from the table in a streaming manner: "item" */
  item_stream: Array<Item>;
  /** fetch data from the table: "role" */
  role: Array<Role>;
  /** fetch aggregated fields from the table: "role" */
  role_aggregate: Role_Aggregate;
  /** fetch data from the table: "role" using primary key columns */
  role_by_pk?: Maybe<Role>;
  /** fetch data from the table in a streaming manner: "role" */
  role_stream: Array<Role>;
  /** fetch data from the table: "store" */
  store: Array<Store>;
  /** fetch aggregated fields from the table: "store" */
  store_aggregate: Store_Aggregate;
  /** fetch data from the table: "store" using primary key columns */
  store_by_pk?: Maybe<Store>;
  /** fetch data from the table in a streaming manner: "store" */
  store_stream: Array<Store>;
  /** An array relationship */
  tags: Array<Tags>;
  /** An aggregate relationship */
  tags_aggregate: Tags_Aggregate;
  /** fetch data from the table: "tags" using primary key columns */
  tags_by_pk?: Maybe<Tags>;
  /** fetch data from the table in a streaming manner: "tags" */
  tags_stream: Array<Tags>;
  /** fetch data from the table: "transaction_flow" */
  transaction_flow: Array<Transaction_Flow>;
  /** fetch aggregated fields from the table: "transaction_flow" */
  transaction_flow_aggregate: Transaction_Flow_Aggregate;
  /** fetch data from the table: "transaction_flow" using primary key columns */
  transaction_flow_by_pk?: Maybe<Transaction_Flow>;
  /** fetch data from the table in a streaming manner: "transaction_flow" */
  transaction_flow_stream: Array<Transaction_Flow>;
  /** fetch data from the table: "types" */
  types: Array<Types>;
  /** fetch aggregated fields from the table: "types" */
  types_aggregate: Types_Aggregate;
  /** fetch data from the table: "types" using primary key columns */
  types_by_pk?: Maybe<Types>;
  /** fetch data from the table in a streaming manner: "types" */
  types_stream: Array<Types>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
  /** fetch data from the table: "user_role" */
  user_role: Array<User_Role>;
  /** fetch aggregated fields from the table: "user_role" */
  user_role_aggregate: User_Role_Aggregate;
  /** fetch data from the table in a streaming manner: "user_role" */
  user_role_stream: Array<User_Role>;
  /** fetch data from the table in a streaming manner: "user" */
  user_stream: Array<User>;
};


export type Subscription_RootCategoryArgs = {
  distinct_on?: InputMaybe<Array<Category_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Category_Order_By>>;
  where?: InputMaybe<Category_Bool_Exp>;
};


export type Subscription_RootCategory_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Category_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Category_Order_By>>;
  where?: InputMaybe<Category_Bool_Exp>;
};


export type Subscription_RootCategory_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootCategory_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Category_Stream_Cursor_Input>>;
  where?: InputMaybe<Category_Bool_Exp>;
};


export type Subscription_RootChain_StoreArgs = {
  distinct_on?: InputMaybe<Array<Chain_Store_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Chain_Store_Order_By>>;
  where?: InputMaybe<Chain_Store_Bool_Exp>;
};


export type Subscription_RootChain_Store_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Chain_Store_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Chain_Store_Order_By>>;
  where?: InputMaybe<Chain_Store_Bool_Exp>;
};


export type Subscription_RootChain_Store_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootChain_Store_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Chain_Store_Stream_Cursor_Input>>;
  where?: InputMaybe<Chain_Store_Bool_Exp>;
};


export type Subscription_RootDiscountArgs = {
  distinct_on?: InputMaybe<Array<Discount_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Discount_Order_By>>;
  where?: InputMaybe<Discount_Bool_Exp>;
};


export type Subscription_RootDiscount_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Discount_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Discount_Order_By>>;
  where?: InputMaybe<Discount_Bool_Exp>;
};


export type Subscription_RootDiscount_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootDiscount_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Discount_Stream_Cursor_Input>>;
  where?: InputMaybe<Discount_Bool_Exp>;
};


export type Subscription_RootItemArgs = {
  distinct_on?: InputMaybe<Array<Item_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Item_Order_By>>;
  where?: InputMaybe<Item_Bool_Exp>;
};


export type Subscription_RootItem_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Item_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Item_Order_By>>;
  where?: InputMaybe<Item_Bool_Exp>;
};


export type Subscription_RootItem_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootItem_ImageArgs = {
  distinct_on?: InputMaybe<Array<Item_Image_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Item_Image_Order_By>>;
  where?: InputMaybe<Item_Image_Bool_Exp>;
};


export type Subscription_RootItem_Image_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Item_Image_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Item_Image_Order_By>>;
  where?: InputMaybe<Item_Image_Bool_Exp>;
};


export type Subscription_RootItem_Image_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootItem_Image_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Item_Image_Stream_Cursor_Input>>;
  where?: InputMaybe<Item_Image_Bool_Exp>;
};


export type Subscription_RootItem_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Item_Stream_Cursor_Input>>;
  where?: InputMaybe<Item_Bool_Exp>;
};


export type Subscription_RootRoleArgs = {
  distinct_on?: InputMaybe<Array<Role_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Role_Order_By>>;
  where?: InputMaybe<Role_Bool_Exp>;
};


export type Subscription_RootRole_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Role_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Role_Order_By>>;
  where?: InputMaybe<Role_Bool_Exp>;
};


export type Subscription_RootRole_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Subscription_RootRole_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Role_Stream_Cursor_Input>>;
  where?: InputMaybe<Role_Bool_Exp>;
};


export type Subscription_RootStoreArgs = {
  distinct_on?: InputMaybe<Array<Store_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Store_Order_By>>;
  where?: InputMaybe<Store_Bool_Exp>;
};


export type Subscription_RootStore_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Store_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Store_Order_By>>;
  where?: InputMaybe<Store_Bool_Exp>;
};


export type Subscription_RootStore_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootStore_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Store_Stream_Cursor_Input>>;
  where?: InputMaybe<Store_Bool_Exp>;
};


export type Subscription_RootTagsArgs = {
  distinct_on?: InputMaybe<Array<Tags_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tags_Order_By>>;
  where?: InputMaybe<Tags_Bool_Exp>;
};


export type Subscription_RootTags_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tags_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tags_Order_By>>;
  where?: InputMaybe<Tags_Bool_Exp>;
};


export type Subscription_RootTags_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootTags_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Tags_Stream_Cursor_Input>>;
  where?: InputMaybe<Tags_Bool_Exp>;
};


export type Subscription_RootTransaction_FlowArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Flow_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transaction_Flow_Order_By>>;
  where?: InputMaybe<Transaction_Flow_Bool_Exp>;
};


export type Subscription_RootTransaction_Flow_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Flow_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transaction_Flow_Order_By>>;
  where?: InputMaybe<Transaction_Flow_Bool_Exp>;
};


export type Subscription_RootTransaction_Flow_By_PkArgs = {
  value: Scalars['String'];
};


export type Subscription_RootTransaction_Flow_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Transaction_Flow_Stream_Cursor_Input>>;
  where?: InputMaybe<Transaction_Flow_Bool_Exp>;
};


export type Subscription_RootTypesArgs = {
  distinct_on?: InputMaybe<Array<Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Types_Order_By>>;
  where?: InputMaybe<Types_Bool_Exp>;
};


export type Subscription_RootTypes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Types_Order_By>>;
  where?: InputMaybe<Types_Bool_Exp>;
};


export type Subscription_RootTypes_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootTypes_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Types_Stream_Cursor_Input>>;
  where?: InputMaybe<Types_Bool_Exp>;
};


export type Subscription_RootUserArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Subscription_RootUser_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Subscription_RootUser_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootUser_RoleArgs = {
  distinct_on?: InputMaybe<Array<User_Role_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Role_Order_By>>;
  where?: InputMaybe<User_Role_Bool_Exp>;
};


export type Subscription_RootUser_Role_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Role_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Role_Order_By>>;
  where?: InputMaybe<User_Role_Bool_Exp>;
};


export type Subscription_RootUser_Role_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<User_Role_Stream_Cursor_Input>>;
  where?: InputMaybe<User_Role_Bool_Exp>;
};


export type Subscription_RootUser_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<User_Stream_Cursor_Input>>;
  where?: InputMaybe<User_Bool_Exp>;
};

/** columns and relationships of "tags" */
export type Tags = {
  __typename?: 'tags';
  id: Scalars['Int'];
  item_id: Scalars['uuid'];
  name: Scalars['String'];
};

/** aggregated selection of "tags" */
export type Tags_Aggregate = {
  __typename?: 'tags_aggregate';
  aggregate?: Maybe<Tags_Aggregate_Fields>;
  nodes: Array<Tags>;
};

export type Tags_Aggregate_Bool_Exp = {
  count?: InputMaybe<Tags_Aggregate_Bool_Exp_Count>;
};

export type Tags_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Tags_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Tags_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "tags" */
export type Tags_Aggregate_Fields = {
  __typename?: 'tags_aggregate_fields';
  avg?: Maybe<Tags_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Tags_Max_Fields>;
  min?: Maybe<Tags_Min_Fields>;
  stddev?: Maybe<Tags_Stddev_Fields>;
  stddev_pop?: Maybe<Tags_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Tags_Stddev_Samp_Fields>;
  sum?: Maybe<Tags_Sum_Fields>;
  var_pop?: Maybe<Tags_Var_Pop_Fields>;
  var_samp?: Maybe<Tags_Var_Samp_Fields>;
  variance?: Maybe<Tags_Variance_Fields>;
};


/** aggregate fields of "tags" */
export type Tags_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Tags_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "tags" */
export type Tags_Aggregate_Order_By = {
  avg?: InputMaybe<Tags_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Tags_Max_Order_By>;
  min?: InputMaybe<Tags_Min_Order_By>;
  stddev?: InputMaybe<Tags_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Tags_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Tags_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Tags_Sum_Order_By>;
  var_pop?: InputMaybe<Tags_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Tags_Var_Samp_Order_By>;
  variance?: InputMaybe<Tags_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "tags" */
export type Tags_Arr_Rel_Insert_Input = {
  data: Array<Tags_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Tags_On_Conflict>;
};

/** aggregate avg on columns */
export type Tags_Avg_Fields = {
  __typename?: 'tags_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "tags" */
export type Tags_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "tags". All fields are combined with a logical 'AND'. */
export type Tags_Bool_Exp = {
  _and?: InputMaybe<Array<Tags_Bool_Exp>>;
  _not?: InputMaybe<Tags_Bool_Exp>;
  _or?: InputMaybe<Array<Tags_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  item_id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "tags" */
export enum Tags_Constraint {
  /** unique or primary key constraint on columns "id" */
  TagsPkey = 'tags_pkey'
}

/** input type for incrementing numeric columns in table "tags" */
export type Tags_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "tags" */
export type Tags_Insert_Input = {
  id?: InputMaybe<Scalars['Int']>;
  item_id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Tags_Max_Fields = {
  __typename?: 'tags_max_fields';
  id?: Maybe<Scalars['Int']>;
  item_id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "tags" */
export type Tags_Max_Order_By = {
  id?: InputMaybe<Order_By>;
  item_id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Tags_Min_Fields = {
  __typename?: 'tags_min_fields';
  id?: Maybe<Scalars['Int']>;
  item_id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "tags" */
export type Tags_Min_Order_By = {
  id?: InputMaybe<Order_By>;
  item_id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "tags" */
export type Tags_Mutation_Response = {
  __typename?: 'tags_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Tags>;
};

/** on_conflict condition type for table "tags" */
export type Tags_On_Conflict = {
  constraint: Tags_Constraint;
  update_columns?: Array<Tags_Update_Column>;
  where?: InputMaybe<Tags_Bool_Exp>;
};

/** Ordering options when selecting data from "tags". */
export type Tags_Order_By = {
  id?: InputMaybe<Order_By>;
  item_id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: tags */
export type Tags_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "tags" */
export enum Tags_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  ItemId = 'item_id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "tags" */
export type Tags_Set_Input = {
  id?: InputMaybe<Scalars['Int']>;
  item_id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Tags_Stddev_Fields = {
  __typename?: 'tags_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "tags" */
export type Tags_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Tags_Stddev_Pop_Fields = {
  __typename?: 'tags_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "tags" */
export type Tags_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Tags_Stddev_Samp_Fields = {
  __typename?: 'tags_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "tags" */
export type Tags_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "tags" */
export type Tags_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Tags_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Tags_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['Int']>;
  item_id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Tags_Sum_Fields = {
  __typename?: 'tags_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "tags" */
export type Tags_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** update columns of table "tags" */
export enum Tags_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  ItemId = 'item_id',
  /** column name */
  Name = 'name'
}

export type Tags_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Tags_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Tags_Set_Input>;
  where: Tags_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Tags_Var_Pop_Fields = {
  __typename?: 'tags_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "tags" */
export type Tags_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Tags_Var_Samp_Fields = {
  __typename?: 'tags_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "tags" */
export type Tags_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Tags_Variance_Fields = {
  __typename?: 'tags_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "tags" */
export type Tags_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "transaction_flow" */
export type Transaction_Flow = {
  __typename?: 'transaction_flow';
  description?: Maybe<Scalars['String']>;
  value: Scalars['String'];
};

/** aggregated selection of "transaction_flow" */
export type Transaction_Flow_Aggregate = {
  __typename?: 'transaction_flow_aggregate';
  aggregate?: Maybe<Transaction_Flow_Aggregate_Fields>;
  nodes: Array<Transaction_Flow>;
};

/** aggregate fields of "transaction_flow" */
export type Transaction_Flow_Aggregate_Fields = {
  __typename?: 'transaction_flow_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Transaction_Flow_Max_Fields>;
  min?: Maybe<Transaction_Flow_Min_Fields>;
};


/** aggregate fields of "transaction_flow" */
export type Transaction_Flow_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Transaction_Flow_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "transaction_flow". All fields are combined with a logical 'AND'. */
export type Transaction_Flow_Bool_Exp = {
  _and?: InputMaybe<Array<Transaction_Flow_Bool_Exp>>;
  _not?: InputMaybe<Transaction_Flow_Bool_Exp>;
  _or?: InputMaybe<Array<Transaction_Flow_Bool_Exp>>;
  description?: InputMaybe<String_Comparison_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "transaction_flow" */
export enum Transaction_Flow_Constraint {
  /** unique or primary key constraint on columns "value" */
  TransactionFlowPkey = 'transaction_flow_pkey'
}

export enum Transaction_Flow_Enum {
  /** Transaction will be manage and monitor by the chain store */
  Chain = 'chain',
  /** All transaction manage by individual store */
  Store = 'store'
}

/** Boolean expression to compare columns of type "transaction_flow_enum". All fields are combined with logical 'AND'. */
export type Transaction_Flow_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Transaction_Flow_Enum>;
  _in?: InputMaybe<Array<Transaction_Flow_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Transaction_Flow_Enum>;
  _nin?: InputMaybe<Array<Transaction_Flow_Enum>>;
};

/** input type for inserting data into table "transaction_flow" */
export type Transaction_Flow_Insert_Input = {
  description?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Transaction_Flow_Max_Fields = {
  __typename?: 'transaction_flow_max_fields';
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Transaction_Flow_Min_Fields = {
  __typename?: 'transaction_flow_min_fields';
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "transaction_flow" */
export type Transaction_Flow_Mutation_Response = {
  __typename?: 'transaction_flow_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Transaction_Flow>;
};

/** on_conflict condition type for table "transaction_flow" */
export type Transaction_Flow_On_Conflict = {
  constraint: Transaction_Flow_Constraint;
  update_columns?: Array<Transaction_Flow_Update_Column>;
  where?: InputMaybe<Transaction_Flow_Bool_Exp>;
};

/** Ordering options when selecting data from "transaction_flow". */
export type Transaction_Flow_Order_By = {
  description?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: transaction_flow */
export type Transaction_Flow_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "transaction_flow" */
export enum Transaction_Flow_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "transaction_flow" */
export type Transaction_Flow_Set_Input = {
  description?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "transaction_flow" */
export type Transaction_Flow_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Transaction_Flow_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Transaction_Flow_Stream_Cursor_Value_Input = {
  description?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** update columns of table "transaction_flow" */
export enum Transaction_Flow_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value'
}

export type Transaction_Flow_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Transaction_Flow_Set_Input>;
  where: Transaction_Flow_Bool_Exp;
};

/** columns and relationships of "types" */
export type Types = {
  __typename?: 'types';
  icon_uri: Scalars['String'];
  id: Scalars['Int'];
  type: Scalars['String'];
};

/** aggregated selection of "types" */
export type Types_Aggregate = {
  __typename?: 'types_aggregate';
  aggregate?: Maybe<Types_Aggregate_Fields>;
  nodes: Array<Types>;
};

/** aggregate fields of "types" */
export type Types_Aggregate_Fields = {
  __typename?: 'types_aggregate_fields';
  avg?: Maybe<Types_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Types_Max_Fields>;
  min?: Maybe<Types_Min_Fields>;
  stddev?: Maybe<Types_Stddev_Fields>;
  stddev_pop?: Maybe<Types_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Types_Stddev_Samp_Fields>;
  sum?: Maybe<Types_Sum_Fields>;
  var_pop?: Maybe<Types_Var_Pop_Fields>;
  var_samp?: Maybe<Types_Var_Samp_Fields>;
  variance?: Maybe<Types_Variance_Fields>;
};


/** aggregate fields of "types" */
export type Types_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Types_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Types_Avg_Fields = {
  __typename?: 'types_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "types". All fields are combined with a logical 'AND'. */
export type Types_Bool_Exp = {
  _and?: InputMaybe<Array<Types_Bool_Exp>>;
  _not?: InputMaybe<Types_Bool_Exp>;
  _or?: InputMaybe<Array<Types_Bool_Exp>>;
  icon_uri?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "types" */
export enum Types_Constraint {
  /** unique or primary key constraint on columns "id" */
  FoodTypePkey = 'food_type_pkey'
}

/** input type for incrementing numeric columns in table "types" */
export type Types_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "types" */
export type Types_Insert_Input = {
  icon_uri?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  type?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Types_Max_Fields = {
  __typename?: 'types_max_fields';
  icon_uri?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Types_Min_Fields = {
  __typename?: 'types_min_fields';
  icon_uri?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "types" */
export type Types_Mutation_Response = {
  __typename?: 'types_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Types>;
};

/** on_conflict condition type for table "types" */
export type Types_On_Conflict = {
  constraint: Types_Constraint;
  update_columns?: Array<Types_Update_Column>;
  where?: InputMaybe<Types_Bool_Exp>;
};

/** Ordering options when selecting data from "types". */
export type Types_Order_By = {
  icon_uri?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** primary key columns input for table: types */
export type Types_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "types" */
export enum Types_Select_Column {
  /** column name */
  IconUri = 'icon_uri',
  /** column name */
  Id = 'id',
  /** column name */
  Type = 'type'
}

/** input type for updating data in table "types" */
export type Types_Set_Input = {
  icon_uri?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  type?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Types_Stddev_Fields = {
  __typename?: 'types_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Types_Stddev_Pop_Fields = {
  __typename?: 'types_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Types_Stddev_Samp_Fields = {
  __typename?: 'types_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "types" */
export type Types_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Types_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Types_Stream_Cursor_Value_Input = {
  icon_uri?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  type?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Types_Sum_Fields = {
  __typename?: 'types_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "types" */
export enum Types_Update_Column {
  /** column name */
  IconUri = 'icon_uri',
  /** column name */
  Id = 'id',
  /** column name */
  Type = 'type'
}

export type Types_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Types_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Types_Set_Input>;
  where: Types_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Types_Var_Pop_Fields = {
  __typename?: 'types_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Types_Var_Samp_Fields = {
  __typename?: 'types_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Types_Variance_Fields = {
  __typename?: 'types_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** user table */
export type User = {
  __typename?: 'user';
  created_at: Scalars['timestamptz'];
  email: Scalars['String'];
  email_verified: Scalars['Boolean'];
  first_name: Scalars['String'];
  id: Scalars['uuid'];
  is_active: Scalars['Boolean'];
  last_name: Scalars['String'];
  password?: Maybe<Scalars['String']>;
  phone_number?: Maybe<Scalars['String']>;
  profile_image?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  refresh_token?: Maybe<Scalars['String']>;
  updated_at: Scalars['timestamptz'];
  /** An array relationship */
  user_roles: Array<User_Role>;
  /** An aggregate relationship */
  user_roles_aggregate: User_Role_Aggregate;
};


/** user table */
export type UserUser_RolesArgs = {
  distinct_on?: InputMaybe<Array<User_Role_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Role_Order_By>>;
  where?: InputMaybe<User_Role_Bool_Exp>;
};


/** user table */
export type UserUser_Roles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Role_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Role_Order_By>>;
  where?: InputMaybe<User_Role_Bool_Exp>;
};

/** aggregated selection of "user" */
export type User_Aggregate = {
  __typename?: 'user_aggregate';
  aggregate?: Maybe<User_Aggregate_Fields>;
  nodes: Array<User>;
};

/** aggregate fields of "user" */
export type User_Aggregate_Fields = {
  __typename?: 'user_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<User_Max_Fields>;
  min?: Maybe<User_Min_Fields>;
};


/** aggregate fields of "user" */
export type User_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
export type User_Bool_Exp = {
  _and?: InputMaybe<Array<User_Bool_Exp>>;
  _not?: InputMaybe<User_Bool_Exp>;
  _or?: InputMaybe<Array<User_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  email_verified?: InputMaybe<Boolean_Comparison_Exp>;
  first_name?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  is_active?: InputMaybe<Boolean_Comparison_Exp>;
  last_name?: InputMaybe<String_Comparison_Exp>;
  password?: InputMaybe<String_Comparison_Exp>;
  phone_number?: InputMaybe<String_Comparison_Exp>;
  profile_image?: InputMaybe<String_Comparison_Exp>;
  provider?: InputMaybe<String_Comparison_Exp>;
  refresh_token?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user_roles?: InputMaybe<User_Role_Bool_Exp>;
  user_roles_aggregate?: InputMaybe<User_Role_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "user" */
export enum User_Constraint {
  /** unique or primary key constraint on columns "email" */
  UserEmailKey = 'user_email_key',
  /** unique or primary key constraint on columns "id" */
  UserPkey = 'user_pkey'
}

/** input type for inserting data into table "user" */
export type User_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  email?: InputMaybe<Scalars['String']>;
  email_verified?: InputMaybe<Scalars['Boolean']>;
  first_name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  is_active?: InputMaybe<Scalars['Boolean']>;
  last_name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  phone_number?: InputMaybe<Scalars['String']>;
  profile_image?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  refresh_token?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_roles?: InputMaybe<User_Role_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type User_Max_Fields = {
  __typename?: 'user_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  last_name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  phone_number?: Maybe<Scalars['String']>;
  profile_image?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  refresh_token?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type User_Min_Fields = {
  __typename?: 'user_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  last_name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  phone_number?: Maybe<Scalars['String']>;
  profile_image?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  refresh_token?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "user" */
export type User_Mutation_Response = {
  __typename?: 'user_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User>;
};

/** on_conflict condition type for table "user" */
export type User_On_Conflict = {
  constraint: User_Constraint;
  update_columns?: Array<User_Update_Column>;
  where?: InputMaybe<User_Bool_Exp>;
};

/** Ordering options when selecting data from "user". */
export type User_Order_By = {
  created_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  email_verified?: InputMaybe<Order_By>;
  first_name?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_active?: InputMaybe<Order_By>;
  last_name?: InputMaybe<Order_By>;
  password?: InputMaybe<Order_By>;
  phone_number?: InputMaybe<Order_By>;
  profile_image?: InputMaybe<Order_By>;
  provider?: InputMaybe<Order_By>;
  refresh_token?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_roles_aggregate?: InputMaybe<User_Role_Aggregate_Order_By>;
};

/** primary key columns input for table: user */
export type User_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** columns and relationships of "user_role" */
export type User_Role = {
  __typename?: 'user_role';
  /** An object relationship */
  role: Role;
  role_id: Scalars['bigint'];
  user_id: Scalars['uuid'];
};

/** aggregated selection of "user_role" */
export type User_Role_Aggregate = {
  __typename?: 'user_role_aggregate';
  aggregate?: Maybe<User_Role_Aggregate_Fields>;
  nodes: Array<User_Role>;
};

export type User_Role_Aggregate_Bool_Exp = {
  count?: InputMaybe<User_Role_Aggregate_Bool_Exp_Count>;
};

export type User_Role_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<User_Role_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<User_Role_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "user_role" */
export type User_Role_Aggregate_Fields = {
  __typename?: 'user_role_aggregate_fields';
  avg?: Maybe<User_Role_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<User_Role_Max_Fields>;
  min?: Maybe<User_Role_Min_Fields>;
  stddev?: Maybe<User_Role_Stddev_Fields>;
  stddev_pop?: Maybe<User_Role_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<User_Role_Stddev_Samp_Fields>;
  sum?: Maybe<User_Role_Sum_Fields>;
  var_pop?: Maybe<User_Role_Var_Pop_Fields>;
  var_samp?: Maybe<User_Role_Var_Samp_Fields>;
  variance?: Maybe<User_Role_Variance_Fields>;
};


/** aggregate fields of "user_role" */
export type User_Role_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Role_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "user_role" */
export type User_Role_Aggregate_Order_By = {
  avg?: InputMaybe<User_Role_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<User_Role_Max_Order_By>;
  min?: InputMaybe<User_Role_Min_Order_By>;
  stddev?: InputMaybe<User_Role_Stddev_Order_By>;
  stddev_pop?: InputMaybe<User_Role_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<User_Role_Stddev_Samp_Order_By>;
  sum?: InputMaybe<User_Role_Sum_Order_By>;
  var_pop?: InputMaybe<User_Role_Var_Pop_Order_By>;
  var_samp?: InputMaybe<User_Role_Var_Samp_Order_By>;
  variance?: InputMaybe<User_Role_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "user_role" */
export type User_Role_Arr_Rel_Insert_Input = {
  data: Array<User_Role_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<User_Role_On_Conflict>;
};

/** aggregate avg on columns */
export type User_Role_Avg_Fields = {
  __typename?: 'user_role_avg_fields';
  role_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "user_role" */
export type User_Role_Avg_Order_By = {
  role_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "user_role". All fields are combined with a logical 'AND'. */
export type User_Role_Bool_Exp = {
  _and?: InputMaybe<Array<User_Role_Bool_Exp>>;
  _not?: InputMaybe<User_Role_Bool_Exp>;
  _or?: InputMaybe<Array<User_Role_Bool_Exp>>;
  role?: InputMaybe<Role_Bool_Exp>;
  role_id?: InputMaybe<Bigint_Comparison_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "user_role" */
export enum User_Role_Constraint {
  /** unique or primary key constraint on columns "role_id", "user_id" */
  UserRoleUserIdRoleIdKey = 'user_role_user_id_role_id_key'
}

/** input type for incrementing numeric columns in table "user_role" */
export type User_Role_Inc_Input = {
  role_id?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "user_role" */
export type User_Role_Insert_Input = {
  role?: InputMaybe<Role_Obj_Rel_Insert_Input>;
  role_id?: InputMaybe<Scalars['bigint']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type User_Role_Max_Fields = {
  __typename?: 'user_role_max_fields';
  role_id?: Maybe<Scalars['bigint']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "user_role" */
export type User_Role_Max_Order_By = {
  role_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type User_Role_Min_Fields = {
  __typename?: 'user_role_min_fields';
  role_id?: Maybe<Scalars['bigint']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "user_role" */
export type User_Role_Min_Order_By = {
  role_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "user_role" */
export type User_Role_Mutation_Response = {
  __typename?: 'user_role_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User_Role>;
};

/** on_conflict condition type for table "user_role" */
export type User_Role_On_Conflict = {
  constraint: User_Role_Constraint;
  update_columns?: Array<User_Role_Update_Column>;
  where?: InputMaybe<User_Role_Bool_Exp>;
};

/** Ordering options when selecting data from "user_role". */
export type User_Role_Order_By = {
  role?: InputMaybe<Role_Order_By>;
  role_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** select columns of table "user_role" */
export enum User_Role_Select_Column {
  /** column name */
  RoleId = 'role_id',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "user_role" */
export type User_Role_Set_Input = {
  role_id?: InputMaybe<Scalars['bigint']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type User_Role_Stddev_Fields = {
  __typename?: 'user_role_stddev_fields';
  role_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "user_role" */
export type User_Role_Stddev_Order_By = {
  role_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type User_Role_Stddev_Pop_Fields = {
  __typename?: 'user_role_stddev_pop_fields';
  role_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "user_role" */
export type User_Role_Stddev_Pop_Order_By = {
  role_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type User_Role_Stddev_Samp_Fields = {
  __typename?: 'user_role_stddev_samp_fields';
  role_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "user_role" */
export type User_Role_Stddev_Samp_Order_By = {
  role_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "user_role" */
export type User_Role_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: User_Role_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type User_Role_Stream_Cursor_Value_Input = {
  role_id?: InputMaybe<Scalars['bigint']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate sum on columns */
export type User_Role_Sum_Fields = {
  __typename?: 'user_role_sum_fields';
  role_id?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "user_role" */
export type User_Role_Sum_Order_By = {
  role_id?: InputMaybe<Order_By>;
};

/** update columns of table "user_role" */
export enum User_Role_Update_Column {
  /** column name */
  RoleId = 'role_id',
  /** column name */
  UserId = 'user_id'
}

export type User_Role_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<User_Role_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<User_Role_Set_Input>;
  where: User_Role_Bool_Exp;
};

/** aggregate var_pop on columns */
export type User_Role_Var_Pop_Fields = {
  __typename?: 'user_role_var_pop_fields';
  role_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "user_role" */
export type User_Role_Var_Pop_Order_By = {
  role_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type User_Role_Var_Samp_Fields = {
  __typename?: 'user_role_var_samp_fields';
  role_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "user_role" */
export type User_Role_Var_Samp_Order_By = {
  role_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type User_Role_Variance_Fields = {
  __typename?: 'user_role_variance_fields';
  role_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "user_role" */
export type User_Role_Variance_Order_By = {
  role_id?: InputMaybe<Order_By>;
};

/** select columns of table "user" */
export enum User_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  EmailVerified = 'email_verified',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  IsActive = 'is_active',
  /** column name */
  LastName = 'last_name',
  /** column name */
  Password = 'password',
  /** column name */
  PhoneNumber = 'phone_number',
  /** column name */
  ProfileImage = 'profile_image',
  /** column name */
  Provider = 'provider',
  /** column name */
  RefreshToken = 'refresh_token',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "user" */
export type User_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  email?: InputMaybe<Scalars['String']>;
  email_verified?: InputMaybe<Scalars['Boolean']>;
  first_name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  is_active?: InputMaybe<Scalars['Boolean']>;
  last_name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  phone_number?: InputMaybe<Scalars['String']>;
  profile_image?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  refresh_token?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** Streaming cursor of the table "user" */
export type User_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: User_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type User_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  email?: InputMaybe<Scalars['String']>;
  email_verified?: InputMaybe<Scalars['Boolean']>;
  first_name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  is_active?: InputMaybe<Scalars['Boolean']>;
  last_name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  phone_number?: InputMaybe<Scalars['String']>;
  profile_image?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  refresh_token?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "user" */
export enum User_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  EmailVerified = 'email_verified',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  IsActive = 'is_active',
  /** column name */
  LastName = 'last_name',
  /** column name */
  Password = 'password',
  /** column name */
  PhoneNumber = 'phone_number',
  /** column name */
  ProfileImage = 'profile_image',
  /** column name */
  Provider = 'provider',
  /** column name */
  RefreshToken = 'refresh_token',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type User_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<User_Set_Input>;
  where: User_Bool_Exp;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

export type ProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type ProfileQuery = { __typename?: 'query_root', profile?: { __typename?: 'UserInfo', first_name: string, is_active: boolean, last_name: string, phone_number?: string | null, profile_image?: string | null, email_verified: boolean, email: string } | null };

export type UpdateProfileMutationVariables = Exact<{
  firstName: Scalars['String'];
  phoneNumber: Scalars['String'];
  lastName: Scalars['String'];
  profileImage: Scalars['String'];
}>;


export type UpdateProfileMutation = { __typename?: 'mutation_root', update_user?: { __typename?: 'user_mutation_response', affected_rows: number } | null };


export const ProfileDocument = gql`
    query Profile {
  profile {
    first_name
    is_active
    last_name
    phone_number
    profile_image
    email_verified
    email
  }
}
    `;

export function useProfileQuery(options?: Omit<Urql.UseQueryArgs<ProfileQueryVariables>, 'query'>) {
  return Urql.useQuery<ProfileQuery, ProfileQueryVariables>({ query: ProfileDocument, ...options });
};
export const UpdateProfileDocument = gql`
    mutation UpdateProfile($firstName: String!, $phoneNumber: String!, $lastName: String!, $profileImage: String!) {
  update_user(
    _set: {first_name: $firstName, last_name: $lastName, phone_number: $phoneNumber, profile_image: $profileImage}
    where: {}
  ) {
    affected_rows
  }
}
    `;

export function useUpdateProfileMutation() {
  return Urql.useMutation<UpdateProfileMutation, UpdateProfileMutationVariables>(UpdateProfileDocument);
};