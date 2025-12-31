import React, { useEffect, useState } from "react";
import axios from "axios";
import { backendUrl, currency } from "../../App";
import { toast } from "react-toastify";
import { adminAssets } from "../../const/adminImagesAssets";

export const Orders = ({ token }) => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async (token) => {
    if (!token) {
      return null;
    }
    try {
      const response = await axios.post(
        backendUrl + "/api/order/list-all-orders",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        setOrders(response.data.orders.reverse());
      } else {
        toast.error(response.error.message);
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  const updateStatusHandler = async (e, orderId) => {
    try {
      const response = await axios.post(
        backendUrl + "/api/order/update-order-status",
        { orderId, status: e.target.value },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (response.status === 200) {
        await fetchAllOrders(token);
      }
    } catch (error) {
      console.error(error);
      toast.error(response.data.message);
    }
  };

  useEffect(() => {
    fetchAllOrders(token);
  }, [token]);

  return (
    <>
      <div>
        <h3>Order Page</h3>
        <div className="overflow-y-auto pr-2 max-h-[calc(100vh-var(--header-height)-4rem)]">
          {orders.map((order, index) => (
            <div
              className="grid grid-cols-1 sm:grid-cols-[0.5fr_2fr_1fr] lg:grid-cols-[0.5fr_2fr_1fr_1fr_1fr] gap-3 items-start border-2 border-gray-200 p-5 md:p-8 my-3 md:my-4 text-xs  sm:text-sm text-gray-700"
              key={index}
            >
              <img
                className="w-12"
                src={adminAssets.parcel_icon}
                alt="Parcel Icon"
              />
              <div>
                <div>
                  {order.items.map((item, index) => (
                    <p className="py-0.5" key={index}>
                      {item.name} x {item.quantity} <span>{item.size}</span>
                      {index !== order.items.length - 1 ? "," : ""}
                    </p>
                  ))}
                </div>
                <p className="mt-3 mb-2 font-medium">
                  {order.address.firstName + " " + order.address.lastName}
                </p>
                <div>
                  <p>{order.address.street + ","}</p>
                  <p>
                    {order.address.city +
                      ", " +
                      order.address.state +
                      ", " +
                      order.address.country +
                      ", " +
                      order.address.zipcode}
                  </p>
                </div>
                <p>{order.address.phone}</p>
              </div>
              <div>
                <p className="text-sm sm:text-[15px]">
                  Items : {order.items.length}
                </p>
                <p className="mt-3">Method : {order.paymentMethod}</p>
                <p>Payment : {order.payment ? "Done" : "Pending"}</p>
                <p>Date: {new Date(order.date).toLocaleDateString()}</p>
              </div>
              <p className="text-sm sm:text-[15px]">
                {currency} {order.amount}
              </p>
              <select
                onChange={(e) => updateStatusHandler(e, order._id)}
                value={order.status}
                className="p-2 font-semibold"
              >
                <option value="Order Placed">Order Placed</option>
                <option value="Packing">Packing</option>
                <option value="Shipped">Shipped</option>
                <option value="Out for Delivery">Out for Delivery</option>
                <option value="Delivered">Delivered</option>
              </select>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
