import { debounce } from "functions/index";
import React, { useCallback, useEffect, useState } from "react";

const DebounceTest = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  useEffect(() => {
    debouncedSave(input);
  }, [input]);

  const debouncedSave = useCallback(
    // Com o debounce a chamada da Api será feita somente uma vez (após 1s)
    // independente de quantas chamadas a função "handleChange" for chamada
    debounce((input) => callApi(input), 1000),
    []
  );

  const callApi = (input) => {
    setResult(input);
    console.log("Chamou a api");
  };

  return (
    <>
      <div>
        <input type="text" onChange={handleChange} />
        <p>{result}</p>
      </div>
    </>
  );
};

export default DebounceTest;
