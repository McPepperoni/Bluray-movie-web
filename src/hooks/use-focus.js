import { useRef } from "react";

export default function useFocus() {
  const htmlElRef = useRef(null);
  const setFocus = () => {
    !(htmlElRef.current === document.activeElement)
      ? htmlElRef.current && htmlElRef.current.focus()
      : htmlElRef.current && htmlElRef.current.blur();
  };

  return [htmlElRef, setFocus];
}
