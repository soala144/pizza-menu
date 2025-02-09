import React from "react";
import "./index.css";
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
    <div className="Container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
function Header() {
  return (
    <header className="header">
      <h1>Soala Pizza Co.</h1>;
    </header>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu </h2>
      <Pizza
        name="Pizza Spinachi"
        ingredients="Tomato, mozarella, ham, aragula, and burrata cheese"
        image="pizzas/spinaci.jpg"
        price={10}
      />
      <Pizza
        name="Pizza Funghi"
        ingredients="Tomato, mozarella, ham, aragula, and burrata cheese"
        image="pizzas/funghi.jpg"
        price={13}
      />
    </main>
  );
}
function Pizza(props) {
  return (
    <div className="pizza">
      <img src={props.image} alt={props.name} />
      <div>
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>
        <span>{props.price + 3}</span>
      </div>
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
    <footer className="footer">
      <p>{new Date().toLocaleTimeString()}. We are currently open</p>
    </footer>
  );
}

export default App;
