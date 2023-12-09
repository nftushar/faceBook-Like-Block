import React, { useEffect, useState } from 'react';

function FbButton({ attributes }) {
    const { fbUrl, btnType, layout, clrScheme, size, shareOffOn,showFaces } = attributes;

    // console.log(shareOffOn);

    const [buttonHtml, setButtonHtml] = useState('');

    useEffect(() => {
        const fbWidth = 450;
        const fbHeight = 28;

        const buttonHtml = `<iframe name="f5e61e520d0ec4" width="${fbWidth}px" height="${fbHeight}px" data-testid="fb:like Facebook Social Plugin" title="fb:like Facebook Social Plugin" frameborder="10" allowtransparency="true" allowfullscreen="true" scrolling="no" allow="encrypted-media" 
        src="https://www.facebook.com/v2.10/plugins/like.php?action=${btnType}&app_id=&channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df1160b0232558e4%26domain%3Dlocalhost%26is_canvas%3Dfalse%26origin%3Dhttp%253A%252F%252Flocalhost%252Fffa86e1338ac3%26relation%3Dparent.parent&amp;color_scheme=${clrScheme}&amp;container_width=140&amp;href=${fbUrl}&amp;layout=${layout}&amp;locale=en_US&amp;sdk=joey&amp;share=${shareOffOn}&amp;show_faces=${showFaces}&amp;size=${size}" style="border: none; visibility: visible; width:${fbWidth}px; height: ${fbHeight}px;" class=""></iframe>`;

        setButtonHtml(buttonHtml);
    }, [layout, clrScheme, btnType, shareOffOn, showFaces]); // Include btnType in the dependency array
 


    return (
        <div className="fb-button-container">
            <div className="fb-like-button" dangerouslySetInnerHTML={{ __html: buttonHtml }}></div>
        </div>
    );
}

export default FbButton;
