<form action="{{ route('reservations.update', $reservation->id) }}" method="POST">
    @csrf
    @method('PUT')

    <div>
        <label for="first_name">First Name</label>
        <input type="text" name="first_name" value="{{ $reservation->first_name }}" required>
    </div>

    <div>
        <label for="last_name">Last Name</label>
        <input type="text" name="last_name" value="{{ $reservation->last_name }}" required>
    </div>

    <!-- Add other fields similarly -->

    <button type="submit">Update Reservation</button>
</form>
