import React from "react";
import "./index.css"
import magic from "./MagicEden.png"

function ContainerFooter() {
    return (
        <div className="contenedor">
            <div className="contenido-footer">
                <div className="rrss">
                    <a href="https://twitter.com/KittyCatsSOL" target="_blank"><i className="fa-brands fa-twitter fa-footer"></i></a>
                    <a href="#" target="_blank"><i className="fa-brands fa-discord fa-footer"></i></a>
                    <a href="https://magiceden.io/marketplace/daddy_cats" target="_blank"><img className="magic-eden-logo" src={magic}
                            alt="Buy a Daddy Cat on MagicEden" /></a>
                </div>

                <div className="condiciones-legales">
                    <a href="" className="terminos">Términos y Condiciones</a>
                    <a href="" className="privacidad">Condiciones legales y política de privacidad</a>
                    <a href="" className="cookies">Política de cookies</a>
                </div>

                <div className="copyright">
                    <p>© Daddy Cats 2022</p>
                </div>
            </div>
        </div>
    )
}

export { ContainerFooter }