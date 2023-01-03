import { Request, Response } from "express";
import OrderService from "../services/order.service";

class OrderController {
  constructor(private orderService = new OrderService()) {}

  public getAll = async (_req: Request, res: Response) => {
    const orders = await this.orderService.getAll();

    return orders.length > 0
      ? res.status(200).json(orders)
      : res.status(204).json();
  };
}

export default new OrderController();
