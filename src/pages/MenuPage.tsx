import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { menuCategories } from "@/data/menu";
import { useCart } from "@/context/CartContext";
import { MenuItem } from "@/data/menu";
import { ShoppingCart, Plus, Minus } from "lucide-react";

const MenuPage = () => {
  const navigate = useNavigate();
  const { items, addItem, updateQuantity, getTotalItems, getTotal } = useCart();
  const [activeCategory, setActiveCategory] = useState(menuCategories[0].name);

  const getItemQuantity = (id: string) => {
    const item = items.find((i) => i.id === id);
    return item ? item.quantity : 0;
  };

  const handleAdd = (item: MenuItem) => addItem(item);
  const handleDecrease = (id: string) => {
    const qty = getItemQuantity(id);
    updateQuantity(id, qty - 1);
  };

  const totalItems = getTotalItems();

  return (
    <div className="min-h-screen bg-background max-w-md mx-auto flex flex-col">
      {/* Header */}
      <div className="sticky top-0 z-20 bg-primary px-4 py-3 flex items-center justify-between">
        <div>
          <h1 className="text-lg font-display font-bold text-primary-foreground">MAATI Bistro</h1>
          <p className="text-primary-foreground/70 text-xs">From Our Soul To Your Heart</p>
        </div>
        <button
          onClick={() => totalItems > 0 && navigate("/checkout")}
          className="relative p-2"
        >
          <ShoppingCart className="w-6 h-6 text-primary-foreground" />
          {totalItems > 0 && (
            <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </button>
      </div>

      {/* Category tabs */}
      <div className="sticky top-[52px] z-10 bg-card border-b border-border">
        <div className="flex overflow-x-auto gap-1 px-3 py-2 scrollbar-hide">
          {menuCategories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(cat.name)}
              className={`whitespace-nowrap px-3 py-1.5 rounded-full text-xs font-semibold transition ${
                activeCategory === cat.name
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground"
              }`}
            >
              {cat.icon} {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Items */}
      <div className="flex-1 px-4 py-4 pb-24">
        {menuCategories
          .filter((cat) => cat.name === activeCategory)
          .map((cat) => (
            <div key={cat.name}>
              <h2 className="text-lg font-display font-semibold text-foreground mb-3">
                {cat.icon} {cat.name}
              </h2>
              <div className="space-y-2">
                {cat.items.map((item) => {
                  const qty = getItemQuantity(item.id);
                  return (
                    <div
                      key={item.id}
                      className="flex items-center justify-between bg-card rounded-lg px-4 py-3 border border-border animate-fade-in"
                    >
                      <div>
                        <p className="font-medium text-foreground text-sm">{item.name}</p>
                        <p className="text-accent font-bold text-sm">₹{item.price}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        {qty > 0 ? (
                          <div className="flex items-center gap-2 bg-primary rounded-full px-1 py-0.5">
                            <button onClick={() => handleDecrease(item.id)} className="w-7 h-7 flex items-center justify-center text-primary-foreground">
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="text-primary-foreground font-bold text-sm min-w-[16px] text-center">{qty}</span>
                            <button onClick={() => handleAdd(item)} className="w-7 h-7 flex items-center justify-center text-primary-foreground">
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                        ) : (
                          <button
                            onClick={() => handleAdd(item)}
                            className="px-4 py-1.5 bg-primary text-primary-foreground rounded-full text-xs font-semibold hover:opacity-90 transition"
                          >
                            ADD
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
      </div>

      {/* Bottom bar */}
      {totalItems > 0 && (
        <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-primary px-4 py-3 flex items-center justify-between z-30">
          <div>
            <p className="text-primary-foreground font-bold text-sm">{totalItems} item(s)</p>
            <p className="text-primary-foreground/80 text-xs">₹{getTotal()}</p>
          </div>
          <button
            onClick={() => navigate("/checkout")}
            className="bg-accent text-accent-foreground px-6 py-2 rounded-full font-bold text-sm hover:opacity-90 transition"
          >
            View Cart →
          </button>
        </div>
      )}
    </div>
  );
};

export default MenuPage;
