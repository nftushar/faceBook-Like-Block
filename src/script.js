import React from 'react';
import { createRoot } from 'react-dom';
import "./style.scss";
import Style from "./Style";
import FbButton from './components/FbButton';

document.addEventListener("DOMContentLoaded", () => {
    const mapEls = document.querySelectorAll(".wp-block-b-blocks-map-block");
    mapEls.forEach((mapEl) => {
        const attributes = JSON.parse(mapEl.dataset.attributes);
        const { cId } = attributes;

        createRoot(mapEl).render(
            <>
                <div id={`block-${cId}`} >
                    <Style attributes={attributes} clientId={cId} />
                    <FbButton attributes={attributes} clientId={cId} />
                </div>
            </>
        );

        mapEl?.removeAttribute("data-attributes");
    });
}); 