import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { ArrowLeft, Minus, Plus, Trash2 } from "lucide-react";

const OWNER_PHONE = "918855045587";

const CheckoutPage = () => {
  const navigate = useNavigate();
  const { items, customerInfo, updateQuantity, removeItem, getTotal, clearCart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState<"counter" | "online">("counter");
  const [orderPlaced, setOrderPlaced] = useState(false);

  const total = getTotal();

  const sendWhatsApp = () => {
    const itemLines = items
      .map((i) => `• ${i.name} x${i.quantity} — ₹${i.price * i.quantity}`)
      .join("\n");

    const message = `🧾 *New Order — Maati Bistro*

👤 *Name:* ${customerInfo.name}
🪑 *Table:* ${customerInfo.tableNumber}
${customerInfo.instructions ? `📝 *Instructions:* ${customerInfo.instructions}\n` : ""}
📋 *Order:*
${itemLines}

💰 *Total: ₹${total}*
💳 *Payment:* ${paymentMethod === "counter" ? "Pay at Counter" : "Online Payment"}

Thank you! 🙏`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${OWNER_PHONE}?text=${encoded}`, "_blank");
    setOrderPlaced(true);
    clearCart();
  };

  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center max-w-md mx-auto px-5">
        <div className="text-center animate-fade-in">
          <div className="text-6xl mb-4">🎉</div>
          <h1 className="text-2xl font-display font-bold text-foreground mb-2">Order Sent!</h1>
          <p className="text-muted-foreground text-sm mb-6">
            Your order has been sent to Maati Bistro via WhatsApp. Please wait for confirmation.
          </p>
          <button
            onClick={() => navigate("/")}
            className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition"
          >
            Place New Order
          </button>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center max-w-md mx-auto px-5">
        <div className="text-5xl mb-3">🛒</div>
        <p className="text-muted-foreground mb-4">Your cart is empty</p>
        <button onClick={() => navigate("/menu")} className="px-6 py-2.5 bg-primary text-primary-foreground rounded-lg font-semibold">
          Browse Menu
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background max-w-md mx-auto flex flex-col">
      {/* Header */}
      <div className="bg-primary px-4 py-3 flex items-center gap-3">
        <button onClick={() => navigate("/menu")}>
          <ArrowLeft className="w-5 h-5 text-primary-foreground" />
        </button>
        <h1 className="text-lg font-display font-bold text-primary-foreground">Your Order</h1>
      </div>

      <div className="flex-1 px-4 py-4 pb-40">
        {/* Customer info */}
        <div className="bg-card rounded-lg p-4 border border-border mb-4">
          <p className="text-sm text-foreground"><span className="font-semibold">Name:</span> {customerInfo.name}</p>
          <p className="text-sm text-foreground"><span className="font-semibold">Table:</span> {customerInfo.tableNumber}</p>
          {customerInfo.instructions && (
            <p className="text-sm text-muted-foreground mt-1">📝 {customerInfo.instructions}</p>
          )}
        </div>

        {/* Items */}
        <div className="space-y-2 mb-6">
          {items.map((item) => (
            <div key={item.id} className="flex items-center justify-between bg-card rounded-lg px-4 py-3 border border-border">
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">{item.name}</p>
                <p className="text-xs text-accent font-bold">₹{item.price} each</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1 bg-muted rounded-full px-1 py-0.5">
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="w-6 h-6 flex items-center justify-center text-foreground">
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-sm font-bold min-w-[16px] text-center text-foreground">{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="w-6 h-6 flex items-center justify-center text-foreground">
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
                <p className="text-sm font-bold text-foreground w-14 text-right">₹{item.price * item.quantity}</p>
                <button onClick={() => removeItem(item.id)} className="text-destructive">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Payment method */}
        <div className="mb-4">
          <h3 className="font-display font-semibold text-foreground mb-3">Payment Method</h3>
          <div className="space-y-2">
            <button
              onClick={() => setPaymentMethod("counter")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg border transition ${
                paymentMethod === "counter" ? "border-primary bg-primary/10" : "border-border bg-card"
              }`}
            >
              <span className="text-xl">🏪</span>
              <div className="text-left">
                <p className="text-sm font-semibold text-foreground">Pay at Counter</p>
                <p className="text-xs text-muted-foreground">Pay when you receive your order</p>
              </div>
            </button>
            <button
              onClick={() => setPaymentMethod("online")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg border transition ${
                paymentMethod === "online" ? "border-primary bg-primary/10" : "border-border bg-card"
              }`}
            >
              <span className="text-xl">📱</span>
              <div className="text-left">
                <p className="text-sm font-semibold text-foreground">Online Payment</p>
                <p className="text-xs text-muted-foreground">Pay via UPI / QR code</p>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-card border-t border-border px-4 py-4 z-30">
        <div className="flex items-center justify-between mb-3">
          <p className="text-foreground font-display font-semibold">Total Amount</p>
          <p className="text-xl font-bold text-accent">₹{total}</p>
        </div>
        <button
          onClick={sendWhatsApp}
          className="w-full py-3.5 bg-primary text-primary-foreground rounded-lg font-bold text-base hover:opacity-90 transition flex items-center justify-center gap-2"
        >
          <span>Order Now via WhatsApp</span>
          <span>📲</span>
        </button>
      </div>
    </div>
  );
};

export default CheckoutPage;
