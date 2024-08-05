import { useState } from "react";

function App() {
  const denominations = [2000, 1000, 500, 200, 100, 50, 20, 10, 5, 2, 1];

  const [amount, setAmount] = useState(0);
  const [dispensedNotes, setDispensedNotes] = useState([]);

  const handleWithdraw = () => {
    let remainingAmount = amount;
    const dispensedNotes = [];


    denominations.forEach((denomination) => {

      // Count number of notes
      const count = Math.floor(remainingAmount / denomination);

      // update remaining amount and dispensed notes
      if (count > 0) {
        dispensedNotes.push({ denomination, count });
        remainingAmount -= count * denomination;
      }
    });
    setDispensedNotes(dispensedNotes);
    setAmount(0);
    console.log(dispensedNotes);
  };

  // Calculate total number of notes dispensed
  const totalNotesDispensed = dispensedNotes.reduce(
    (total, note) => total + note.count,
    0
  );

  return (
    <div>
      <h1>ATM Dispenser</h1>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(parseInt(e.target.value))}
      />
      <button onClick={handleWithdraw}>Withdraw</button>
      {dispensedNotes.map((note, index) => (
        <div key={index}>
          {note.count} notes of {note.denomination}
        </div>
      ))}
      <p>Total notes dispensed: {totalNotesDispensed}</p>
    </div>
  );
}

export default App;
