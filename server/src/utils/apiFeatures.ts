import { Document, Query } from "mongoose";
import Book from "../modals/booksModal.js";

interface QueryString {
  page?: string;
  limit?: string;
  sort?: string;
  fields?: string;
  Done?: string;
  createdAt?: string;
  [key: string]: any;
}

export class ApiFeatures<T extends Document> {
  query: Query<T[], T>;
  queryString: QueryString;
  hasMore: Boolean = false;

  constructor(query: Query<T[], T>, queryString: QueryString) {
    this.query = query;
    this.queryString = queryString;
  }

  filter(): this {
    let filterObj: String | { [key: string]: any } = {};
    const excludingFields = ["sort", "page", "limit", "fields"];
    const shallowCopyQuery = { ...this.queryString };

    excludingFields.forEach((field) => delete shallowCopyQuery[field]);

    const operatorFields = ["gt", "gte", "lt", "lte", "in"];
    filterObj = JSON.stringify(shallowCopyQuery);
    operatorFields.forEach((operator) => {
      filterObj = filterObj.replace(
        new RegExp(`\\b(${operator})\\b`, "g"),
        (match: string) => `$${match}`
      );
    });

    filterObj = JSON.parse(filterObj as string);

    console.log(filterObj);

    this.query = this.query.find(filterObj);

    return this;
  }

  sort(): this {
    this.query = this.query.sort("Done -createdAt");
    return this;
  }

  paginate(): this {
    const page = Number(this.queryString.page) || 1;
    const limit = Number(this.queryString.limit) || 10;
    const skip = (page - 1) * limit;
    this.query = this.query.skip(skip).limit(limit);
    return this;
  }
}
