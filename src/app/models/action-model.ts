import { Product } from "./product-model";
export enum ActionStatus{
    RECEIVED,    
    PROCESSING,    
    SHIPPED,       
    DELIVERED,
    CANCELLED
}
export class Action{
    id:number =0;
    product: Product = new Product();
    deliveryTime: Date = new Date();
    dateCreated: Date = new Date();
    clientId: number =0;
    status: ActionStatus = ActionStatus.RECEIVED;
}