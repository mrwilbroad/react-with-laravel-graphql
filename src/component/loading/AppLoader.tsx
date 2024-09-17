import React from "react";
import { HashLoader } from "react-spinners";

const AppLoader = () => {

  return (
    <div className="position-absolute start-0 end-0 bottom-0 text-center top-0 m-auto vh-100  vw-100 d-flex justify-content-center">
      <section className="m-auto">
        <HashLoader size={100} color="#13ce13" speedMultiplier={1} />
      </section>
    </div>
  );
};

export default React.memo(AppLoader);
