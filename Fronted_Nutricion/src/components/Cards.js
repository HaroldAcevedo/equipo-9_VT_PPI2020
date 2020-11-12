import React from "react";

function Cards(props) {
  return (
    <div className="container">
      <div class="card-deck mb-3 text-center">
        {props.data.map((item, index) => {
          return (
            <div key={`pricing-${index}`} className="card mb-4 box-shadow">
              <div className="card-header">
                <h4 className="my-0 font-weight-normal">{item.priceType}</h4>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">
                  {item.cost} <small class="text-muted">/ Free</small>
                </h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>{item.users}</li>
                  <li>{item.storage}</li>
                  <li>{item.support}</li>
                  <li>{item.help}</li>
                </ul>
                <button
                  type="button"
                  class="btn btn-lg btn-block btn-outline-primary"
                >
                  {item.buttonInfo}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Cards;
