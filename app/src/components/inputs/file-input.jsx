"use client";

import { useRef } from "react";

export function FileInput(props) {
  const input = useRef();
  return (
    <div className="form-field file">
      <input ref={input} type="file" name={props.name} id={props.id} />
      <button onClick={() => input.current.click()} type="button">
        {props.label}
      </button>
    </div>
  );
}
