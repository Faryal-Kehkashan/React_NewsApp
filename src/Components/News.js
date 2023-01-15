import React, { Component } from "react";
import News1 from "./NewsItems/News1.js";

export default class News extends Component {
  render() {
    return (
      <div className="container my-5">
        <h2 className="text-center my-5 mx-5">News - Top Headlines</h2>
        <div className="row">
          <div className="col-md-4">
            <News1 title="Jeremy Clarkson criticised for ‘exceptionally stupid’ tweet about heatwave" discription="Extreme weather conditions are hitting much of western Europe this week" url = "https://static.independent.co.uk/2022/07/15/15/SEI114753368.jpg?quality=75&width=1200&auto=webp"/>
          </div>
          <div className="col-md-4">
            <News1 title="Fires scorch France and Spain as temperature-related deaths soar in European heat wave" discription="Reduced services will be in place, and trains will travel slower to reduce risk of tracks buckling" url = "https://static.independent.co.uk/2022/07/18/08/newFile-2.jpg?quality=75&width=1200&auto=webp" />
          </div>
          <div className="col-md-4">
            <News1 title="UK weather - live: Trains cancelled and people urged to stay home as 42C heat forecast" discription="The scorching temperatures have reached as far north as Britain, where its weather agency has issued its first-ever " url = "https://assets1.cbsnewsstatic.com/hub/i/r/2022/07/18/23ac0a10-e92c-417f-8387-d3f3e8989483/thumbnail/1200x630/3ac68bba3cdc06a5f539ab0be31b3e14/ap22198712806630.jpg"/>
          </div>
        </div>
      </div>
    );
  }
}
