import React, { useEffect, useState } from 'react';

function FbButton() {
    const [likeButtonHtml, setLikeButtonHtml] = useState('');
    const [shareButtonHtml, setShareButtonHtml] = useState('');

    useEffect(() => {
        const dynamicUrl = "https://www.facebook.com/profile.php?id=100076228742365";
        const dynamicLayout = "box_count";
        const dynamicColorscheme = "dark";
        const dynamicWidth = 250;
        const dynamicHeight = 60;

        const likeHtml = `<iframe src="https://www.facebook.com/plugins/like.php?href=${dynamicUrl}&layout=${dynamicLayout}&size=large&show_faces=false&action=like&font=verdana&colorscheme=${dynamicColorscheme}" allowtransparency="true" style="border: none; overflow: hidden; width: ${dynamicWidth}px; height: ${dynamicHeight}px;" frameborder="0" scrolling="no" data-width="${dynamicWidth}" data-height="${dynamicHeight}"></iframe>`;


        const shareHtml = `<iframe src="https://www.facebook.com/plugins/share_button.php?href=${dynamicUrl}&layout=button&size=large&colorscheme=${dynamicColorscheme}&width=100&height=30&appId=" style="border:none;overflow:hidden;width:${dynamicWidth}px;height:${dynamicHeight}px;" scrolling="no" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`;

        setLikeButtonHtml(likeHtml);
        setShareButtonHtml(shareHtml);
    }, []);

    return (
        <div className="fb-button-container">
            <div className="fb-like-button" dangerouslySetInnerHTML={{ __html: likeButtonHtml }}></div>
            <div className="fb-share-button" dangerouslySetInnerHTML={{ __html: shareButtonHtml }}></div>
        </div>
    );
}

export default FbButton;
