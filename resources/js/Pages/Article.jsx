

export default function WaitlistAccess() {
  return (
    <div className="max-w-5xl mx-auto mt-12 p-6">
      {/* Add the super bold h1 here */}
     

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-3xl bg-gradient-to-r from-slate-800 to-slate-800 bg-clip-text text-transparent font-bold">WAITLIST ACCESS</h2>
          <p className="mt-5 bg-gradient-to-r from-zinc-800 to-zinc-800 bg-clip-text text-transparent">
            To join our waitlist, kindly go to the OpenTable App and set an alert for the date and time you're requesting. The OpenTable App download may be required.
          </p>
        </div>

        <div>
          <h2 className="text-3xl bg-gradient-to-r from-slate-800 to-slate-800 bg-clip-text text-transparent font-bold">BIRTHDAY DESSERT PROCEDURE</h2>
          <p className="mt-5 bg-gradient-to-r from-zinc-800 to-zinc-800 bg-clip-text text-transparent ">
            If you decide to purchase a dessert, the dessert will be served with a candle. Special Cake can be made; 72hrs notice required.
          </p>
        </div>

        <div>
          <h2 className="text-3xl bg-gradient-to-r from-slate-800 to-slate-800 bg-clip-text text-transparent font-bold">CREDIT CARD POLICY</h2>
          <p className="mt-5 bg-gradient-to-r from-zinc-800 to-zinc-800 bg-clip-text text-transparent">
            Credit card required to hold table for a party of 5 or more. You have until the day before to cancel. If you cancel or no-show on the day of, it is a $25.00 charge per person.
          </p>
        </div>

        <div>
          <h2 className="text-3xl bg-gradient-to-r from-slate-800 to-slate-800 bg-clip-text text-transparent font-bold">WALK INS</h2>
          <p className="mt-5 bg-gradient-to-r from-zinc-800 to-zinc-800 bg-clip-text text-transparent ">
            Walk-ins are welcome, but reservations are strongly advised. Sushi Bar and Bar/Lounge are available on a walk-in basis. You will need to get your name on the in-house waitlist upon arrival.
          </p>
        </div>
      </div>
      
    </div>
  );
}