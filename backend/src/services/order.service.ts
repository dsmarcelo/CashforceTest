import IOrder from "../interfaces/order.interface";
import OrderModel from "../models/order.model";

export default class OrderService {
  public model: OrderModel;

  constructor() {
    this.model = new OrderModel();
  }

  public async getAll(): Promise<IOrder[]> {
    const orders = await this.model.getAll();
    return orders as IOrder[];
  }
}
