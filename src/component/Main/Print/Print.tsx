import React from "react";

export const Print =(): React.ReactElement =>{
    return(
                <section className="print container">
            <div className="print__img-list">
                <div className="print__img-block">
                    <img src="img/icons/iso.png" alt="ISO" className="print__img"/>
                </div>
                <div className="print__img-block">
                    <img src="img/icons/iso.png" alt="ISO" className="print__img"/>
                </div>
                <div className="print__img-block">
                    <img src="img/pseb.png" alt="Пакестан" className="print__img"/>
                </div>
                <div className="print__img-block">
                    <img src="img/p@sha.png" alt="Паша" className="print__img"/>
                </div>
                <div className="print__img-block">
                    <img src="img/icons/secp.png" alt="Secp" className="print__img"/>
                </div>
            </div>
        </section>
    )
} 

