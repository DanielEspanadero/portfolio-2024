import { BookStyled } from "./BookStyled";

export const Book = () => {
  return (
    <BookStyled>
      <h1 className="title">
        GUÍA PARA APRENDER A PROGRAMAR: Desde Cero Hasta tu Primer Empleo
      </h1>
      <div className="img-text-container">
        <img
          className="with-book"
          src="/public/images/guia para aprender a programar.jpg"
          alt="guía para aprender a programar"
        />
        <div className="text-container">
          <p className="why-buy">¿Por qué deberías comprar este libro?</p>
          <p className="text-book">
            Comenzar en el mundo de la programación puede ser desafiante, pero
            hacerlo con una guía escrita por alguien que ha logrado encontrar su
            primer empleo de forma autodidacta cómo Daniel Españadero, marca la
            diferencia. Este libro no solo ofrece un camino claro y efectivo
            para aprender a programar, sino que también brinda estrategias
            prácticas para destacar en el competitivo mercado laboral
            tecnológico. Desde elegir el lenguaje de programación adecuado hasta
            crear un portafolio impactante y preparar entrevistas laborales,
            esta guía está diseñada para ayudarte a superar los obstáculos
            iniciales y alcanzar tu meta de conseguir tu primer empleo como
            programador, respaldado por la experiencia real y los consejos de un
            experto que ha recorrido ese mismo camino con éxito.
          </p>
        </div>
      </div>
      <div className="btn-container">
        <a
          className="fancy"
          href="https://www.amazon.es/GU%C3%8DA-PARA-APRENDER-PROGRAMAR-Primer/dp/B0CRPPD8CJ"
          target="_BLANK"
        >
          <span className="top-key"></span>
          <span className="text">Buy Now</span>
          <span className="bottom-key-1"></span>
          <span className="bottom-key-2"></span>
        </a>
      </div>
      <p className="score">
        Recuerda puntuarlo en Amazon ⭐️⭐️⭐️⭐️⭐️ para que este libro pueda
        llegar a más personas.
      </p>
    </BookStyled>
  );
};
