import { Fragment } from "react";
import { ServiceCard2 } from "components/reuseable/service-cards";
// CUSTOM DATA
import { techServiceList } from "data/service";

export default function Services3() {
  return (
    <Fragment>
      <div className="row">
        <div className="col-md-10 col-lg-8 col-xl-7 col-xxl-6 mx-auto text-center">
          <h2 className="fs-15 text-uppercase text-muted mb-3 ">What We Do?</h2>
          <h3 className="display-4 mb-5 mb-10">A range of services specifically tailored to meet your needs.</h3>
        </div>
      </div>

      <div className="row gx-md-8 gy-8 text-center mb-14 mb-md-17">
        {techServiceList.map((item) => (
          <ServiceCard2 key={item.id} {...item} />
        ))}
      </div>
    </Fragment>
  );
}