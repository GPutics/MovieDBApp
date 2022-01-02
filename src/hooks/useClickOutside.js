import { useEffect, useRef } from "react";

export let useClickOutside = (handler) => {

    let domNode = useRef();
  
    useEffect(() => {
      let maybeHandler = (event) => {
        if (!domNode.current.contains(event.taget)) {
          handler();
        }
      };
      document.addEventListener("mousedown", handler);
      return () => {
        document.removeEventListener("mousedown", handler);
      };
    }, );
  
    return domNode;
  };