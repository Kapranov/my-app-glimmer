export interface Dict<T> {
  [index: string]: T;
}

declare let map: Dict<any>;
export default map;
