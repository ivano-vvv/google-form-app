import React, { ReactElement } from "react";
import "./form.css";

export function Form(): ReactElement {
  return (
    <div className="form-container">
      <iframe
        className="form hidden-scroll"
        title="form"
        src="https://docs.google.com/forms/d/e/1FAIpQLScpTblH-NZgTvFnUfjq9wcxE7k7ZSHyarRJuQx4LV82klFiWg/viewform?embedded=true"
        frameBorder="0"
      >
        Загрузка…
      </iframe>
    </div>
  );
}
