<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        // Add product_name to orders table
        Schema::table('orders', function (Blueprint $table) {
            $table->string('product_name')->nullable();
        });

        // Add product_name to order_items table
        Schema::table('order_items', function (Blueprint $table) {
            $table->string('product_name')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        // Remove product_name from orders table
        Schema::table('orders', function (Blueprint $table) {
            $table->dropColumn('product_name');
        });

        // Remove product_name from order_items table
        Schema::table('order_items', function (Blueprint $table) {
            $table->dropColumn('product_name');
        });
    }
};
