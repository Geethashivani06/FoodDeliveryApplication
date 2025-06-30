import { useLocation, useNavigate } from "react-router-dom";

const Order = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const orderedItems = state?.orderedItems || [];
  const total = state?.total || "0.00";

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-bold text-center mb-6">🧾 Order Summary</h1>

      {orderedItems.length === 0 ? (
        <p className="text-center text-red-500">No order data found.</p>
      ) : (
        <>
          <table className="w-full mb-6 border-t text-sm sm:text-base">
            <thead>
              <tr className="text-left border-b">
                <th className="py-2">Item</th>
                <th className="py-2 text-right">Qty</th>
                <th className="py-2 text-right">Unit Price</th>
                <th className="py-2 text-right">Total</th>
              </tr>
            </thead>
            <tbody>
              {orderedItems.map((item, index) => {
                const unitPrice = (item.price || item.defaultPrice || 0) / 100;
                const totalPrice = unitPrice * item.quantity;
                return (
                  <tr key={index} className="border-b">
                    <td className="py-2">{item.name}</td>
                    <td className="py-2 text-right">{item.quantity}</td>
                    <td className="py-2 text-right">₹{unitPrice.toFixed(2)}</td>
                    <td className="py-2 text-right">₹{totalPrice.toFixed(2)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <div className="text-right text-xl font-bold text-green-800">
            Grand Total: ₹{total}
          </div>

          <div className="text-center mt-6">
            <button
              onClick={() => navigate("/home")}
              className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Back to Home
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Order;
