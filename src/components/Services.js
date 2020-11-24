import React, { Component } from "react";
import { FaCocktail, FaShuttleVan, FaBeer, FaHiking } from "react-icons/fa";
import Title from "../components/Title";
export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "free cooktails",
        info:
          " Lorem ipsum dolor sit amet consectectur adipisicing elit, corporis!",
      },
      {
        icon: <FaHiking />,
        title: "Emless hiking",
        info:
          " Lorem ipsum dolor sit amet consectectur adipisicing elit, corporis!",
      },
      {
        icon: <FaShuttleVan />,
        title: "free shuttle",
        info:
          " Lorem ipsum dolor sit amet consectectur adipisicing elit, corporis!",
      },
      {
        icon: <FaBeer />,
        title: "strongest Beer ",
        info:
          " Lorem ipsum dolor sit amet consectectur adipisicing elit, corporis!",
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
