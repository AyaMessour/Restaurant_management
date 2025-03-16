import { FaBirthdayCake, FaCreditCard, FaWalking } from "react-icons/fa";
import { IoMdListBox } from "react-icons/io";

export default function WaitlistAccess() {
  return (
    <div className="max-w-3xl  bg-white mx-auto space-y-6 p-6">
      <div className="border rounded-lg p-4 shadow-md">
        <div className="flex items-center space-x-3">
          <IoMdListBox className="text-xl text-red-500" />
          <h2 className="text-lg font-bold">WAITLIST ACCESS</h2>
        </div>
        <p className="mt-2 text-gray-600">
          To join our waitlist, kindly go to the OpenTable App and set an alert for the date and time you're requesting. The OpenTable App download may be required.
        </p>
      </div>

      <div className="border rounded-lg p-4 shadow-md">
        <div className="flex items-center space-x-3">
          <FaBirthdayCake className="text-xl text-red-500" />
          <h2 className="text-lg font-bold">BIRTHDAY DESSERT PROCEDURE</h2>
        </div>
        <p className="mt-2 text-gray-600">
          If you decide to purchase a dessert, the dessert will be served with a candle. Special Cake can be made; 72hrs notice required.
        </p>
      </div>

      <div className="border rounded-lg p-4 shadow-md">
        <div className="flex items-center space-x-3">
          <FaCreditCard className="text-xl text-red-500" />
          <h2 className="text-lg font-bold">CREDIT CARD POLICY</h2>
        </div>
        <p className="mt-2 text-gray-600">
          Credit card required to hold table for a party of 5 or more. You have until the day before to cancel. If you cancel or no-show on the day of, it is a $25.00 charge per person.
        </p>
      </div>

      <div className="border rounded-lg p-4 shadow-md">
        <div className="flex items-center space-x-3">
          <FaWalking className="text-xl text-red-500" />
          <h2 className="text-lg font-bold">WALK INS</h2>
        </div>
        <p className="mt-2 text-gray-600">
          Walk-ins are welcome, but reservations are strongly advised. Sushi Bar and Bar/Lounge are available on a walk-in basis. You will need to get your name on the in-house waitlist upon arrival.
        </p>
      </div>
    </div>
  );
}
