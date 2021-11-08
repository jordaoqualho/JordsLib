import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const FrontSearch = () => {
  const history = useHistory();
  const [termoDePesquisa, settermoDePesquisa] = useState("");
  const [data, setData] = useState([{}]);

  const helpData =
    data.length === 0 ? (
      <p>Nada encontrado!</p>
    ) : (
      data.map((row, i) => {
        return (
          <div
            className="tb"
            key={i}
            onClick={() => {
              history.push(`/help/question/${row.id}`);
            }}
          >
            <div className="tb-title">
              <h1>{row.titulo}</h1>
            </div>
          </div>
        );
      })
    );

  const doGetHelp = (termo) => {
    let arrayX = new Array(HelpData.length);
    if (termo === "") {
      setData(HelpData);
    } else {
      for (let i = 0; i < HelpData.length; i++) {
        let element = HelpData[i].titulo.toLowerCase();
        if (element.indexOf(termo.toLowerCase()) > -1) {
          arrayX[i] = HelpData[i];
        }
      }
      setData(arrayX);
    }
  };

  const handleSearchInputChange = async (event) => {
    settermoDePesquisa(event.target.value);
  };

  useEffect(() => {
    doGetHelp(termoDePesquisa);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [termoDePesquisa]);

  return (
    <>
      <div>
        <form>
          <input
            type="text"
            value={termoDePesquisa}
            placeholder="O que deseja buscar?"
            autoFocus
            onChange={handleSearchInputChange}
          />
        </form>
        {helpData}
      </div>
    </>
  );
};

export default FrontSearch;
