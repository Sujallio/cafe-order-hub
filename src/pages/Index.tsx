import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import maatiCover from "@/assets/maati-cover.jpg";

const Index = () => {
  const navigate = useNavigate();
  const { setCustomerInfo } = useCart();
  const [name, setName] = useState("");
  const [tableNumber, setTableNumber] = useState("");
  const [instructions, setInstructions] = useState("");

  const handleStart = () => {
    if (!name.trim() || !tableNumber.trim()) return;
    setCustomerInfo({ name: name.trim(), tableNumber: tableNumber.trim(), instructions: instructions.trim() });
    navigate("/menu");
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-background">
      {/* Hero */}
      <div className="w-full max-w-md mx-auto">
        <div className="relative h-56 overflow-hidden rounded-b-3xl">
          <img src={maatiCover} alt="Maati Bistro" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent" />
          <div className="absolute bottom-4 left-0 right-0 text-center">
            <h1 className="text-3xl font-bold text-cream tracking-wide">MAATI | माती</h1>
            <p className="text-gold-light text-sm font-display italic mt-1">— Bistro —</p>
            <p className="text-cream/80 text-xs mt-1">From Our Soul To Your Heart</p>
          </div>
        </div>

        {/* Form */}
        <div className="px-5 pt-6 pb-10 animate-fade-in">
          <h2 className="text-xl font-display font-semibold text-foreground mb-1">Welcome!</h2>
          <p className="text-muted-foreground text-sm mb-6">Please fill in your details to start ordering.</p>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Your Name *</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                maxLength={50}
                className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Table Number *</label>
              <input
                type="text"
                value={tableNumber}
                onChange={(e) => setTableNumber(e.target.value)}
                placeholder="e.g. 5"
                maxLength={10}
                className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Special Instructions</label>
              <textarea
                value={instructions}
                onChange={(e) => setInstructions(e.target.value)}
                placeholder="Any allergies or preferences..."
                maxLength={200}
                rows={3}
                className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition resize-none"
              />
            </div>
          </div>

          <button
            onClick={handleStart}
            disabled={!name.trim() || !tableNumber.trim()}
            className="w-full mt-6 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold text-base transition hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            View Menu & Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
