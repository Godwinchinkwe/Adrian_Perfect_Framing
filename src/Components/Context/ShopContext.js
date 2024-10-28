import React, {createContext} from "react";
import all_product from "../Assets/all_product"
// import data from "../Assets/all_product"


export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
    const contextValue = {all_product};
    // const contextValue2 = {data};

    return(
      <ShopContext.Provider value={contextValue}>
        {props.children}
      </ShopContext.Provider>
    )
}

export default ShopContextProvider;