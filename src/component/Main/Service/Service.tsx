import React from "react";
import {CardList}  from "/workspaces/my-react-app/card/CardList.tsx";

export const Service = (): React.ReactElement => {
   return (
     <section className="service container">
            <div className="service__square">
                <div className="service__circle circle-1"></div>
                <div className="service__circle circle-2"></div>
                <div className="service__circle circle-3"></div>
                <div className="service__circle circle-4"></div>
                <h2 className="service__title">Сервисы</h2>
            </div>

            <div className="service__card-container">

                <CardList/>
            </div>
        </section>
   )
}