<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\Order;
use App\Models\OrderItem;
use App\Models\Product;
use Inertia\Inertia;
use Illuminate\Http\Request;

class CartController extends Controller
{
    /**
     * Display the user's cart.
     */
    public function index()
    {
        // Fetch cart items for the authenticated user with product details
        $cartItems = Cart::with('product')
            ->where('user_id', auth()->id())
            ->get();

        return Inertia::render('Cart', [
            'cartItems' => $cartItems,
        ]);
    }

    /**
     * Add a product to the cart.
     */
    public function addToCart(Request $request)
    {
        // Validate the request
        $request->validate([
            'product_id' => 'required|exists:products,id',
            'quantity' => 'nullable|integer|min:1',
        ]);
    
        // Find the product
        $product = Product::findOrFail($request->product_id);
    
        // Calculate the total price
        $totalPrice = $product->newPrice * ($request->quantity ?? 1);
    
        // Check if the product is already in the cart
        $cartItem = Cart::where('user_id', auth()->id())
            ->where('product_id', $product->id)
            ->first();
    
        if ($cartItem) {
            // Update the quantity and total price if the product is already in the cart
            $cartItem->quantity += $request->quantity ?? 1;
            $cartItem->total_price = $cartItem->quantity * $product->newPrice;
            $cartItem->save();
        } else {
            // Create a new cart item and store the total price
            Cart::create([
                'user_id' => auth()->id(),
                'product_id' => $product->id,
                'quantity' => $request->quantity ?? 1,
                'total_price' => $totalPrice,
            ]);
        }
    
        // Return a success response
        return redirect()->back()->with('success', 'Item added to cart!');
    }
    public function increaseQuantity($id)
{
    $cartItem = Cart::where('id', $id)->where('user_id', auth()->id())->first();
    
    if ($cartItem) {
        $cartItem->increment('quantity');
    }

    return redirect()->back();
}

public function decreaseQuantity($id)
{
    $cartItem = Cart::where('id', $id)->where('user_id', auth()->id())->first();

    if ($cartItem && $cartItem->quantity > 1) {
        $cartItem->decrement('quantity');
    } else {
        $cartItem->delete(); // Remove if quantity reaches zero
    }

    return redirect()->back();
}

    /**
     * Remove a product from the cart.
     */
    public function removeFromCart($id)
    {
        // Find the cart item by ID
        $cartItem = Cart::findOrFail($id);
    
        // Ensure the cart item belongs to the authenticated user
        if ($cartItem->user_id !== auth()->id()) {
            return redirect()->back()->with('error', 'Unauthorized action.');
        }
    
        // Delete the cart item
        $cartItem->delete();
    
        // Fetch the updated cart items for the authenticated user
        $cartItems = Cart::where('user_id', auth()->id())->get();
    
        // Calculate the updated total price of the cart
        $totalPrice = $cartItems->sum(function ($cartItem) {
            return $cartItem->quantity * $cartItem->product->newPrice;
        });
    
        // Return the updated cart to the Cart page via Inertia
        return Inertia::render('Cart', [
            'cartItems' => $cartItems,
            'totalPrice' => $totalPrice,
        ]);
    }

    public function checkout()
    {
        // Fetch cart items and total price for the authenticated user
        $cartItems = Cart::with('product')
            ->where('user_id', auth()->id())
            ->get();

        // Calculate the total price
        $totalPrice = $cartItems->sum(function ($cartItem) {
            return $cartItem->quantity * $cartItem->product->newPrice;
        });

        // Return the checkout view with cart items and total price
        return Inertia::render('Checkout', [
            'cartItems' => $cartItems,
            'totalPrice' => $totalPrice,
        ]);
    }

    /**
     * Place the order after checkout confirmation.
     */
    public function placeOrder(Request $request)
    {
        $request->validate([
            'firstName' => 'nullable|string|max:255',
            'lastName' => 'nullable|string|max:255',
            'email' => 'required|email',
            'phone' => 'required|string|max:20',
            'address' => 'required|string|max:255',
            'city' => 'required|string|max:255',
            'shippingMethod' => 'required|string|max:255',
            'paymentMethod' => 'required|string|max:255',
        ]);
    
        $order = Order::create([
            'user_id' => auth()->id(),
            'first_name' => $request->firstName,
            'last_name' => $request->lastName,
            'email' => $request->email,
            'phone' => $request->phone,
            'address' => $request->address,
            'apartment' => $request->apartment,
            'postal_code' => $request->postalCode,
            'city' => $request->city,
            'shipping_method' => $request->shippingMethod,
            'shipping_cost' => $request->shipping_cost ?? 0,
            'payment_method' => $request->paymentMethod,
            'total_price' => $request->total_price,
            'save_info' => $request->saveInfo ?? false,
            'subscribe_email' => $request->subscribeEmail ?? false,
            'subscribe_sms' => $request->subscribeSMS ?? false,
        ]);
    
        $cartItems = Cart::where('user_id', auth()->id())->get();
    
        foreach ($cartItems as $cartItem) {
            $order->items()->create([
                'product_id' => $cartItem->product_id,
                'quantity' => $cartItem->quantity,
                'price' => $cartItem->product->newPrice,
            ]);
        }
    
        // Empty cart
        Cart::where('user_id', auth()->id())->delete();
    
        return redirect()->route('orders.confirmation')->with('success', 'Order placed successfully!');
    }

    public function orderConfirmation()
    {
        // Fetch the latest order with its items and associated products
        $order = Order::where('user_id', auth()->id())
            ->latest()
            ->with(['items.product'])
            ->first();

        // Add full URL to product images
        $order->items->transform(function ($item) {
            $item->product->image_url = asset('storage/' . $item->product->image);
            return $item;
        });

        // Render the confirmation page with the order details
        return Inertia::render('OrderConfirmation', [
            'order' => $order,
        ]);
    }
}
