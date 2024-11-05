import { Navbar } from "../components/Navbar";
import { Card } from "../components/Card";
import { Loading } from "../components/Loading";
import { useFetch } from "../hooks/useFetch";
import { Modal } from "../components/Modal";
import { useState } from "react";

export const ShopPage = () => {
  const { data, loading, error } = useFetch(
    "https://fakestoreapi.com/products"
  );
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleShowDetails = async (id) => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const product = await response.json();
    setSelectedProduct(product);

    const modal = document.getElementById("my_modal_1");

    if (modal) {
      modal.showModal();
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-wrap w-full justify-center gap-4 p-4">
        {loading ? (
          <div className="w-full h-screen flex items-center justify-center">
            <Loading />
          </div>
        ) : error ? (
          <p>{error}</p>
        ) : (
          data &&
          data.map((product) => (
            <Card
              key={product.id}
              title={product.title}
              image={product.image}
              price={`$${product.price}`}
              onShowDetails={() => handleShowDetails(product.id)}
            />
          ))
        )}
      </div>

      {selectedProduct && (
        <Modal
          title={selectedProduct.title}
          description={selectedProduct.description}
        />
      )}
    </>
  );
};
