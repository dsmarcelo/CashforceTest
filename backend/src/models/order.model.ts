import IOrder from "../interfaces/order.interface";

import sequelize from "../db";

export default class Order {
  public async getAll(): Promise<IOrder[]> {
    const q = `
    SELECT
      o.nNf,
      b.name AS buyer_name,
      o.emissionDate,
      o.value,
      o.orderStatusBuyer,
      p.name AS provider_name
    FROM
      orders AS o
          INNER JOIN
      buyers b ON o.buyerId = b.id
          INNER JOIN
      providers p ON o.providerId = p.id`;
    const [result] = await sequelize.query(q);
    return result as IOrder[];
  }
}
