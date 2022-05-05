import {Query, QueryFn} from "@angular/fire/compat/firestore";

export function getFirestoreCollectionQuery(conditions: Record<string, any>) {
  const query: QueryFn = (queryRef) => {
    let query:Query = queryRef;
    Object.keys(conditions).forEach(key => {
      const {condition, value} = conditions[key];
      query = query.where(key, condition, value);
      //query = query.where().where()
    });
    return query;
  }
  return query;
}
