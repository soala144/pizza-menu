import React from "react";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="App">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
function Header() {
  return <h1>Soala Pizza Co.</h1>;
}

function Menu() {
  return (
    <div>
      <h1>Our Menu </h1>
      <Pizza />
      <Pizza />
      <Pizza />
      <Pizza />
      <Pizza />
      <Pizza />
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openingHours = 12;
  const closingHours = 22;
  const isOpen = hour <= closingHours && hour >= openingHours;
  console.log(isOpen);
  // if (hour <= closingHours && hour >= openingHours) alert("We're Open");
  // else alert("Sorry We're Closed");
  return (
    <footer>
      <p>{new Date().toLocaleTimeString()}. We are currently open</p>
    </footer>
  );
}

function Pizza() {
  return (
    <div>
      <img src="pizzas/spinaci.jpg" alt="" />
      <h1>Pizza Prosciutto</h1>
      <p>Tomato, mozarella, ham, aragula, and burrata cheese</p>
    </div>
  );
}

export default App;
