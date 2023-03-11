import React from "react";
import UtilityContext from "../../contexts/utility-context";

const UtilityContextProvider = (props) => {
  const utilityValues = {
    maxWidth: "992px",
  };
  return (
    <UtilityContext.Provider value={utilityValues}>
      {props.children}
    </UtilityContext.Provider>
  );
};

export default UtilityContextProvider;
