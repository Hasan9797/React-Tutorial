import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from './App';

// const News = (props) => {
//   return React.createElement("div", {}, [
//     React.createElement("h2", {}, props.name),
//     React.createElement("div", { className: "box" }, [
//       React.createElement("p", {}, props.extra),
//       React.createElement("p", {}, props.text),
//     ]),
//     React.createElement("div", { className: "square" }, [
//       React.createElement("h1", {}, props.header),
//     ]),
//   ]);
// };

// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("div", {}, [
//       React.createElement(News, {
//         name: "BBC News",
//         extra: 2020,
//         text: "Hasan Sa'dullaev",
//         header: "BigJob",
//       }),
//     ]),
//   ]);
// };
// ReactDOM.render(React.createElement(App), document.getElementById("root"))

// ### JSX da yozilishi va avzalligi /loyiha Code###
const News = ({name, extra, text, header}) => {
  return (
    <div>

      <h2>{name}</h2>
      <div className="box">
        <p>{extra}</p>
        <p>{text}</p>
      </div>

      <div className="square">
        <h1>{header}</h1>
      </div>

    </div>
  );
};

const App = () => {
  return <div>
    <News name="BBC News" extra="2020" text="Hasan Sa'dullaev" header="BigJob"/>
  </div>
  
  //Sof React /loyiha Code
  // return React.createElement("div", {}, [
  //   React.createElement("div", {}, [
  //     React.createElement(News, {
  //       name: "BBC News",
  //       extra: 2020,
  //       text: "Hasan Sa'dullaev",
  //       header: "BigJob",
  //     }),
  //   ]),
  // ]);
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
