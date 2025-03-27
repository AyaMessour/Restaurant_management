import React from 'react';

const DashOrders = ({ orders }) => {
    return (
        <div>
            <h1>Admin Orders Dashboard</h1>
            <h2>Orders List</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Customer</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Total Price</th>
                        <th>Items</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order) => (
                        <tr key={order.id}>
                            <td>{order.id}</td>
                            <td>{order.first_name} {order.last_name}</td>
                            <td>{order.email}</td>
                            <td>{order.phone}</td>
                            <td>${order.total_price}</td>
                            <td>
                                <ul>
                                    {order.items.map((item) => (
                                        <li key={item.id}>
                                            {item.product.name} - {item.quantity} x ${item.price}
                                        </li>
                                    ))}
                                </ul>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DashOrders;
