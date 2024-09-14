// ReactDOM.render(<h1>my name is nishant </h1>, document.getElementById("root"))

// ReactDOM.render(<ul>
//     <li>item 1</li>
//     <li>item 2</li>
//     <li>item 3</li>
//     <li>item 4</li>
// </ul>,
//     document.getElementById("root")
// )

// function Navbar() {
//     return (
//         <nav className="navbar navbar-expand-lg navbar-light bg-light">
//             <a className="navbar-brand" href="#">Navbar</a>
//             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                 <span className="navbar-toggler-icon"></span>
//             </button>

//             <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                 <ul className="navbar-nav mr-auto">
//                     <li className="nav-item active">
//                         <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
//                     </li>
//                     <li className="nav-item">
//                         <a className="nav-link" href="#">Link</a>
//                     </li>
//                     <li className="nav-item dropdown">
//                         <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                             Dropdown
//                         </a>
//                         <div className="dropdown-menu" aria-labelledby="navbarDropdown">
//                             <a className="dropdown-item" href="#">Action</a>
//                             <a className="dropdown-item" href="#">Another action</a>
//                             <div className="dropdown-divider"></div>
//                             <a className="dropdown-item" href="#">Something else here</a>
//                         </div>
//                     </li>
//                     <li className="nav-item">
//                         <a className="nav-link disabled" href="#">Disabled</a>
//                     </li>
//                 </ul>
//                 <form className="form-inline my-2 my-lg-0">
//                     <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
//                     <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
//                 </form>
//             </div>
//         </nav>
//     )
// }

// function Maincontent() {
//     return (
//         <div className="container">
//             <div className="row">
//                 <div className="col-sm-4">
//                     <h1>Column 1</h1>
//                     <p>Some text..</p>
//                     <p>Some text..</p>
//                 </div>
//                 <div className="col-sm-4">
//                     <h1>Column 2</h1>
//                     <p>Some text..</p>
//                     <p>Some text..</p>
//                 </div>
//                 <div className="col-sm-4">
//                     <h1>Column 3</h1>
//                     <p>Some text..</p>
//                     <p>Some text..</p>
//                 </div>
//             </div>
//         </div>
//     )
// }

// ReactDOM.render(
//     <div>
//         <Navbar />
//         <Maincontent />
//     </div>,
//     document.getElementById("root"))

//challange
// const h1 = document.createElement("h1");
// h1.className = "header";
// h1.textContent = "Hello World";
// document.getElementById("root").appendChild(h1);
// console.log(h1);

// const element = <h1 className="header">This is JSX</h1>;
// console.log(element);

//JSX
//stands for JavaScript XML
// const page = (
//     <div>
//         <h1 className="header">This is JSX</h1>
//         <p>This is paragraph</p>
//     </div>
// )
// ReactDOM.render(
//     page,
//     document.getElementById("root"))

//challange
// import React from "react";
// import ReactDOM from "react-dom/client";

const navbar = (
    <nav>
        <h1>Website Name </h1>
        <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)
//this is not working in react 18
ReactDOM.render(
    navbar,
    document.getElementById("root")
)
// const root = ReactDOM.createRoot(document.getElementById("root")); // create root
// root.render(navbar);







