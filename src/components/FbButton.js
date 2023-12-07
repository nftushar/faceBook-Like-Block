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

    const likeHtml = `<iframe src="https://www.facebook.com/plugins/like.php?href=${dynamicUrl}&layout=${dynamicLayout}&show_faces=false&action=like&font=verdana&colorscheme=${dynamicColorscheme}" allowtransparency="true" style="border: none; overflow: hidden; width: ${dynamicWidth}px; height: ${dynamicHeight}px;" frameborder="0" scrolling="no" data-width="${dynamicWidth}" data-height="${dynamicHeight}"></iframe>`;

    const shareHtml = `<iframe src="https://www.facebook.com/plugins/share_button.php?href=${dynamicUrl}&layout=button&size=large&width=100&height=30&appId=" width="100" height="30" style="border:none;overflow:hidden;" scrolling="no" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`;

    setLikeButtonHtml(likeHtml);
    setShareButtonHtml(shareHtml);
  }, []);

  return (
    <>
      <div className="button-container">
        <div className="like-button" dangerouslySetInnerHTML={{ __html: likeButtonHtml }}></div>
        <div className="share-button" dangerouslySetInnerHTML={{ __html: shareButtonHtml }}></div>
      </div>
    </>
  );
}

export default FbButton;