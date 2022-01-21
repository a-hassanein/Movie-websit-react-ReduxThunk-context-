import { useContext } from "react";
import { langContext } from "./context/context";

import  {useState , useEffect } from "react";
// import {setLang}from "../store/actions/lang"

function ChangeLanguage() {
    const { contextLang, setContextLang } = useContext(langContext)
    const [lang, setlang] = useState(() => {
    const saved = localStorage.getItem("lang");
    const initialValue = JSON.parse(saved);
    if(initialValue != null){
      setContextLang(initialValue)
    }else {
      setContextLang("en")
    }
  });
useEffect(() => {
    localStorage.setItem("lang", JSON.stringify(contextLang));
  }, [contextLang]);

  return (
    <div>
      <button
        className="btn btn-outline-warning"
        onClick={() => setContextLang(contextLang === "ar" ? "en" : "ar")}
        style={{marginRight:"30px"}}
      >
        {contextLang}
      </button>
    </div>

  );
}

export default ChangeLanguage;