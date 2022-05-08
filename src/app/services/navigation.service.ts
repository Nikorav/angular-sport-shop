import {Injectable} from "@angular/core";

export enum LinkPath {
  PRODUCT = "product",
  PRODUCT_LIST = "productList",
  MAIN = "main",
  CART = "cart",
  AUTH = "auth",
  PROFILE = "profile",
  ACCOUNT = "account",
  PAYMENT = "payment"
}

export enum Routes {
  PRODUCT = "product",
  LIST = "list",
  MAIN = "main",
  CART = "cart",
  AUTH = "auth",
  PROFILE = "profile",
  ACCOUNT = "account",
  PAYMENT = "payment"
}

@Injectable({
  providedIn: "root"
})
export class NavigationService {

  private readonly routeMap: Record<LinkPath, string[]> = {
    [LinkPath.PRODUCT]: [Routes.MAIN, Routes.PRODUCT],
    [LinkPath.PRODUCT_LIST]: [Routes.MAIN, Routes.PRODUCT, Routes.LIST],
    [LinkPath.MAIN]: [Routes.MAIN],
    [LinkPath.CART]: [Routes.MAIN, Routes.CART],
    [LinkPath.AUTH]: [Routes.AUTH],
    [LinkPath.ACCOUNT]: [Routes.MAIN,Routes.ACCOUNT],
    [LinkPath.PROFILE]: [Routes.MAIN,Routes.ACCOUNT, Routes.PROFILE],
    [LinkPath.PAYMENT]: [Routes.MAIN,Routes.ACCOUNT, Routes.PAYMENT]
  }

  private buildLink(path: string[], id?: string) {
    let absolutePath = "/" + path.join("/");
    if (path.length === 1) {
      absolutePath += "/"
    }
    if (id) {
      absolutePath += "/" + id;
    }

    return absolutePath;
  }

  public getProductLink(productID: string): string {
    return this.buildLink(this.routeMap[LinkPath.PRODUCT], productID);
  }

  public getProductListLink(): string {
    return this.buildLink(this.routeMap[LinkPath.PRODUCT_LIST]);
  }

  public getMainLink(): string {
    return this.buildLink(this.routeMap[LinkPath.MAIN]);
  }

  public getCartLink(): string {
    return this.buildLink(this.routeMap[LinkPath.CART]);
  }

  public getAuthLink(): string {
    return this.buildLink(this.routeMap[LinkPath.AUTH]);
  }

  public getAccountLink(): string {
    return this.buildLink(this.routeMap[LinkPath.ACCOUNT]);
  }

  public getProfileLink(): string {
    return this.buildLink((this.routeMap[LinkPath.PROFILE]));
  }

  public getPaymentLink(): string {
    console.log(this.buildLink((this.routeMap[LinkPath.PAYMENT])));
    return this.buildLink((this.routeMap[LinkPath.PAYMENT]));
  }

}
