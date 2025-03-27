import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';

const Checkout = ({ cartItems, totalPrice }) => {
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        apartment: '',
        postalCode: '',
        city: '',
        shippingMethod: '',
        paymentMethod: '',
        saveInfo: false,
        subscribeEmail: false,
        subscribeSMS: false,
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const shippingOptions = [
        { label: "Rabat-Salé, Temara - Gratuit", value: "Rabat-Salé, Temara", price: 0 },
        { label: "Tanger-Tétouan - Gratuit", value: "Tanger-Tétouan", price: 0 },
        { label: "Casablanca-Settat - 20,00 MAD", value: "Casablanca-Settat", price: 20 },
        { label: "Autres villes - 29,00 MAD", value: "Autres villes", price: 29 },
    ];

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm({
            ...form,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const shippingCost = shippingOptions.find(opt => opt.value === form.shippingMethod)?.price || 0;

        Inertia.post('/order', {
            ...form,
            total_price: totalPrice + shippingCost,
            shipping_cost: shippingCost,
            cartItems,
        });
    };

    return (
        <div className="max-w-6xl mx-auto py-10 px-4 grid md:grid-cols-3 gap-8">
            {/* Left: Cart Summary */}
            <aside className="md:col-span-1 space-y-6 bg-white p-4 rounded shadow-md">
                <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
                <div className="space-y-4">
                    {cartItems.map((item) => (
                        <div key={item.id} className="flex gap-4 border-b pb-4">
                          <img src={item.product.image} alt={item.product.name} className="w-20 h-20 object-cover rounded-lg" />

                            <div className="flex-1">
                                <h2 className="font-semibold">{item.product.name}</h2>
                                <p className="text-sm text-gray-600">{item.quantity} x {item.product.newPrice} $</p>
                                <p className="font-medium text-blue-600">Total: {(item.quantity * item.product.newPrice).toFixed(2)} $</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-lg font-bold text-right mt-4">
                    Total Items Price: <span className="text-green-600">{totalPrice.toFixed(2)} $</span>
                </div>
            </aside>

            {/* Right: Form */}
            <section className="md:col-span-2 space-y-8 bg-white p-6 rounded shadow-md">
                <h2 className="text-xl font-semibold">Delivery & Payment Info</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Contact */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input name="firstName" onChange={handleChange} value={form.firstName} type="text" placeholder="First Name (optional)" className="border p-2 rounded" />
                        <input name="lastName" onChange={handleChange} value={form.lastName} type="text" placeholder="Last Name" className="border p-2 rounded" />
                        <input name="email" onChange={handleChange} value={form.email} type="email" placeholder="Email" className="border p-2 rounded col-span-2" />
                        <input name="phone" onChange={handleChange} value={form.phone} type="text" placeholder="Phone" className="border p-2 rounded col-span-2" />
                    </div>

                    {/* Address */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input name="address" onChange={handleChange} value={form.address} type="text" placeholder="Address" className="border p-2 rounded col-span-2" />
                        <input name="apartment" onChange={handleChange} value={form.apartment} type="text" placeholder="Apartment (optional)" className="border p-2 rounded col-span-2" />
                        <input name="postalCode" onChange={handleChange} value={form.postalCode} type="text" placeholder="Postal Code (optional)" className="border p-2 rounded" />
                        <input name="city" onChange={handleChange} value={form.city} type="text" placeholder="City" className="border p-2 rounded" />
                    </div>

                    {/* Shipping Method */}
                    <div>
                        <label className="block font-medium mb-1">Shipping Method</label>
                        <select name="shippingMethod" onChange={handleChange} value={form.shippingMethod} className="w-full border p-2 rounded">
                            <option value="">Choose a shipping method</option>
                            {shippingOptions.map((option) => (
                                <option key={option.value} value={option.value}>{option.label}</option>
                            ))}
                        </select>
                    </div>

                    {/* Payment Method */}
                    <div>
                        <label className="block font-medium mb-1">Payment Method</label>
                        <div className="space-y-2">
                            <label className="flex items-center space-x-2">
                                <input type="radio" name="paymentMethod" value="payzone" onChange={handleChange} checked={form.paymentMethod === "payzone"} />
                                <span>Credit Card via Payzone</span>
                            </label>
                            <label className="flex items-center space-x-2">
                                <input type="radio" name="paymentMethod" value="cod" onChange={handleChange} checked={form.paymentMethod === "cod"} />
                                <span>Cash on Delivery</span>
                            </label>
                        </div>
                    </div>

                    {/* Checkboxes */}
                    <div className="space-y-2 text-sm">
                        <label className="flex items-center space-x-2">
                            <input name="saveInfo" type="checkbox" onChange={handleChange} checked={form.saveInfo} />
                            <span>Save info for next time</span>
                        </label>
                        <label className="flex items-center space-x-2">
                            <input name="subscribeEmail" type="checkbox" onChange={handleChange} checked={form.subscribeEmail} />
                            <span>Subscribe to email offers</span>
                        </label>
                        <label className="flex items-center space-x-2">
                            <input name="subscribeSMS" type="checkbox" onChange={handleChange} checked={form.subscribeSMS} />
                            <span>Subscribe to SMS offers</span>
                        </label>
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition disabled:opacity-50"
                    >
                        {isSubmitting ? "Processing Order..." : "Place Order"}
                    </button>
                </form>
            </section>
        </div>
    );
};

export default Checkout;
