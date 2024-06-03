import React, { useEffect, useState } from "react";

function useDOMElement<T extends HTMLElement>(id: string) {
  const [element, setElement] = useState<T | null>(null);

  useEffect(() => {
    setElement(document.getElementById(id) as T);
  }, []);

  return element;
}

export default useDOMElement;
