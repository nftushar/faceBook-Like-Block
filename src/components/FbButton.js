import React, { useEffect, useState } from 'react';

function FbButton({ attributes }) {
    const { fbUrl, layout, clrScheme, size, border } = attributes;

    // console.log(attributes.layout);
    const [likeButtonHtml, setLikeButtonHtml] = useState('');
    const [shareButtonHtml, setShareButtonHtml] = useState('');

    useEffect(() => {
        const Width = 85;
        const Height = 60;

        const likeHtml = `<iframe id="likeButton" src="https://www.facebook.com/plugins/like.php?href=${fbUrl}&layout=${layout}&size=${size}&show_faces=false&action=like&font=verdana&&amp;color_scheme=${clrScheme}"&amp;allowtransparency="true" style="border: none; overflow: hidden; width: ${Width}px; height: ${Height}px;" frameborder="10" scrolling="no" data-width="${Width}" data-height="${Height}"></iframe>`;

        const shareHtml = `<iframe id="shareButton" src="https://www.facebook.com/plugins/share_button.php?href=${fbUrl}&layout=${layout}&color_scheme=dark&amp;color_scheme=${clrScheme}&amp;width=100&height=30&appId=&amp;size=small&amp;size=${size}" style="border:none;overflow:hidden;width:${Width}px;height:${Height}px;" scrolling="no" data-width="${Width}" data-height="${Height}" frameborder="10" allowtransparency="true" allow="encrypted-media"></iframe>`;

        setLikeButtonHtml(likeHtml);
        setShareButtonHtml(shareHtml);
    }, [layout, clrScheme]);

    return (
        <div className="fb-button-container">
            <div className="fb-like-button" dangerouslySetInnerHTML={{ __html: likeButtonHtml }}></div>
            <div className="fb-share-button" dangerouslySetInnerHTML={{ __html: shareButtonHtml }}></div>
        </div>
    );
}

export default FbButton;
