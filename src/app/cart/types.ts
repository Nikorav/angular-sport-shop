
export type Cart<T> = {
  id: string;
  status: CartStatus;
  items: T[];
}

export enum CartStatus {
  ACTIVE = "active",
  PENDING = "pending",
  HISTORY = "history"
}
