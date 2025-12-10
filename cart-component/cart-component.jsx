import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 2rem;
`;

const Card = styled.div`
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-4px);
  }
`;

const CartSection = styled.div`
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const Button = styled.button`
  background: #6366f1;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 0.5rem;

  &:hover {
    background: #4f46e5;
  }
`;

const RemoveButton = styled(Button)`
  background: #ef4444;
  margin-left: 1rem;

  &:hover {
    background: #dc2626;
  }
`;

const QuantityButton = styled.button`
  background: #f8e80cff;
  color: white;
  border: none;
  padding: 0.25rem 0.75rem;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
  margin: 0 0.5rem;

  &:hover {
    background: #b12deeff;
  }

  &:disabled {
    background: #d1d5db;
    cursor: not-allowed;
  }
`;

const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #e5e7eb;
`;

const ShoppingCart = () => {
  // Sample products
  const products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Mouse", price: 500 },
    { id: 3, name: "Keyboard", price: 1500 },
    { id: 4, name: "Monitor", price: 15000 },
    { id: 5, name: "Headphones", price: 2000 },
    { id: 6, name: "Webcam", price: 3000 },
    { id: 7, name:"Bluetooth", price:2500}
  ];

  const [cart, setCart] = useState([]);

  // Add to cart
  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }

  };
  
  // Remove from cart
  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  // Increase quantity
  const increaseQuantity = (productId) => {
    setCart(
      cart.map((item) =>
        item.id === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // Decrease quantity
  const decreaseQuantity = (productId) => {
    setCart(
      cart.map((item) =>
        item.id === productId
          ? { ...item, quantity: Math.max(1, item.quantity - 1) }
          : item
      )
    );
  };

  // Calculate total
  const getTotal = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  return (
    <Container>
      <h1>Products</h1>
      <Grid>
        {products.map((product) => (
          <Card key={product.id}>
            <h3>{product.name}</h3>
            <p>₹{product.price}</p>
            <Button onClick={() => addToCart(product)}>Add to Cart</Button>
          </Card>
        ))}
      </Grid>

      <CartSection>
        <h2>Cart ({cart.length} items)</h2>
        {cart.length === 0 ? (
          <p>Cart is empty</p>
        ) : (
          <>
            {cart.map((item) => (
              <CartItem key={item.id}>
                <div>
                  <strong>{item.name}</strong>
                  <p>
                    ₹{item.price} × {item.quantity} = ₹
                    {item.price * item.quantity}
                  </p>
                  <QuantityContainer>
                    <QuantityButton 
                      onClick={() => decreaseQuantity(item.id)}
                      disabled={item.quantity === 1}
                    >
                      -
                    </QuantityButton>
                    <span>{item.quantity}</span>
                    <QuantityButton onClick={() => increaseQuantity(item.id)}>
                      +
                    </QuantityButton>
                  </QuantityContainer>
                </div>
                <RemoveButton onClick={() => removeFromCart(item.id)}>
                  Remove
                </RemoveButton>
              </CartItem>
            ))}
            <h3 style={{ marginTop: "1rem" }}>Total: ₹{getTotal()}</h3>
          </>
        )}
      </CartSection>
    </Container>
  );
};

export default ShoppingCart;