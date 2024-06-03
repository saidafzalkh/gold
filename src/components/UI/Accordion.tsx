import React from "react";
import classNames from 'classnames';

interface AccordionProps {
  data: { title: string; data: string | React.ReactElement }[];
  className?: string;
}

function Accordion({ data, className }: AccordionProps) {
  return (
    <div className="accordion accordion-icon-collapse" id="kt_accordion">
      {data.map((dataItem, idx) => (
        <div className="mb-5" key={dataItem.title}>
          <div
            className={classNames("accordion-header py-3 d-flex collapsed")}
            data-bs-toggle="collapse"
            data-bs-target={`#kt_accordion_3_item_${idx}`}
          >
            <span className="accordion-icon">
              <i className="ki-duotone ki-plus-square fs-3 accordion-icon-off">
                <span className="path1"></span>
                <span className="path2"></span>
                <span className="path3"></span>
              </i>
              <i className="ki-duotone ki-minus-square fs-3 accordion-icon-on">
                <span className="path1 text-warning"></span>
                <span className="path2 text-warning"></span>
              </i>
            </span>
            <h3 className="fs-4 fw-semibold mb-0 ms-4">
              {dataItem.title}
            </h3>
          </div>

          <div
            id={`kt_accordion_3_item_${idx}`}
            className={classNames("fs-6 collapse ps-10")}
            data-bs-parent="#kt_accordion"
          >
            {dataItem.data}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Accordion;
