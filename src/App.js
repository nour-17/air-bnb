import React from "react";
import Nav from "./components/Nav";
import "./styles.css"
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data.js";

export default function App(){    
    const cards = data.map(item=>(
        <Card
            key = {item.id}
            {...item}
        />
    ))
    return(
    <div className="container">
        <Nav />
        <Hero />
        <section className="card-list">
            {cards} 
        </section>
    </div>)
}

