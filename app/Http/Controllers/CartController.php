<?php

namespace App\Http\Controllers;

use App\Models\Cart;

use App\Models\Product;

use Illuminate\Http\Request;
use Inertia\Inertia;

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

        // Check if the product is already in the cart
        $cartItem = Cart::where('user_id', auth()->id())
            ->where('product_id', $product->id)
            ->first();

        if ($cartItem) {
            // Update the quantity if the product is already in the cart
            $cartItem->quantity += $request->quantity ?? 1;
            $cartItem->save();
        } else {
            // Create a new cart item if the product is not in the cart
            Cart::create([
                'user_id' => auth()->id(),
                'product_id' => $product->id,
                'quantity' => $request->quantity ?? 1,
            ]);
        }

        // Return a success response
        return redirect()->back()->with('success', 'Item added to cart!');
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

        // Return the updated cart to the Cart page via Inertia
        return Inertia::render('Cart', [
            'cartItems' => $cartItems,
        ]);
    }
}