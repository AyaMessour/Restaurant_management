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
     // database/migrations/xxxx_xx_xx_create_orders_table.php

Schema::create('orders', function (Blueprint $table) {
    $table->id();
    $table->foreignId('user_id')->constrained()->onDelete('cascade');
    $table->string('first_name')->nullable();
    $table->string('last_name')->nullable();
    $table->string('email');
    $table->string('phone');
    $table->string('address');
    $table->string('apartment')->nullable();
    $table->string('postal_code')->nullable();
    $table->string('city');
    $table->string('shipping_method');
    $table->decimal('shipping_cost', 8, 2);
    $table->string('payment_method');
    $table->decimal('total_price', 10, 2);
    $table->boolean('save_info')->default(false);
    $table->boolean('subscribe_email')->default(false);
    $table->boolean('subscribe_sms')->default(false);
    $table->timestamps();
});

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('orders');
    }
};
