import { Pipe } from "@angular/core";
import { OrderByPipe } from "./order-by";

// tslint:disable use-pipe-transform-interface
@Pipe({ name: "orderByImpure", pure: false })
export class OrderByImpurePipe extends OrderByPipe {}
