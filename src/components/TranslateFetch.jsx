import React, { useRef, useEffect } from "react";

const TranslateFetch = () => {
  const googleTranslateRef = useRef();

  useEffect(() => {
    // Initialize the Google Translate Element
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          layout: google.translate.TranslateElement.InlineLayout.VERTICAL,
          includedLanguages: "ja,zh-CN,en",
        },
        googleTranslateRef.current
      );
    };
  }, []);

  return( <div ref={googleTranslateRef}></div>);
};

export default TranslateFetch;
