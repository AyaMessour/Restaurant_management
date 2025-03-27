import React from 'react';

const OrderConfirmation = ({ order, isLoading, error }) => {
    // Function to format price as currency
    const formatPrice = (price) => {
        const numericPrice = parseFloat(price);
        if (isNaN(numericPrice)) {
            return '$0.00'; // Fallback for invalid price
        }
        return `$${numericPrice.toFixed(2)}`;
    };

    // Display loading state
    if (isLoading) {
        return (
            <div className="order-confirmation p-6 text-center">
                <h1 className="text-3xl font-semibold mb-4">Loading Order Details...</h1>
                <p className="text-lg text-gray-600">Please wait while we fetch your order information.</p>
            </div>
        );
    }

    // Display error state
    if (error) {
        return (
            <div className="order-confirmation p-6 text-center">
                <h1 className="text-3xl font-semibold mb-4 text-red-600">Error Loading Order</h1>
                <p className="text-lg text-gray-600">{error}</p>
                <p className="text-sm text-gray-500">Please try again later or contact support.</p>
            </div>
        );
    }

    // Display if no order is found
    if (!order || !order.items || order.items.length === 0) {
        return (
            <div className="order-confirmation p-6 text-center">
                <h1 className="text-3xl font-semibold mb-4">No Order Found</h1>
                <p className="text-lg text-gray-600">It seems there are no items in this order.</p>
            </div>
        );
    }

    return (
        <div className="order-confirmation p-6 max-w-4xl mx-auto">
            <h1 className="text-3xl font-semibold text-center mb-4">Order Confirmation</h1>
            <p className="text-center text-lg mb-8 text-gray-600">Thank you for your order! We're processing it now.</p>
            
            <h2 className="text-2xl font-medium mb-4">Order Details</h2>
            
            <ul className="space-y-4">
                {order.items.map((item) => (
                    <li key={item.id} className="border-b pb-4">
                        <div className="flex items-center space-x-4">
                            {/* Product Image */}
                            <img src={item.product.image} alt={item.product.name} className="w-20 h-20 object-cover rounded-lg" />

                            
                            <div className="flex-1">
                                <div className="font-medium text-lg">{item.product.name}</div>
                                <div className="text-sm text-gray-600">
                                    {item.quantity} x {formatPrice(item.price)}
                                </div>
                            </div>
                            <div className="text-right">
                                <div className="text-lg font-semibold">
                                    Total: {formatPrice(item.quantity * item.price)}
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>

            <div className="total-price mt-6 p-4 bg-gray-100 rounded-md">
                <h3 className="text-xl font-bold">Total Price: {formatPrice(order.total_price)}</h3>
            </div>

          
        </div>
    );
};

export default OrderConfirmation;