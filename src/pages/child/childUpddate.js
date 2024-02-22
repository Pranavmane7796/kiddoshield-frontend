// import React, { useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import userService from "../../service/userService";
// import swal from "sweetalert";

// export default function Registration() {
//   const location = useLocation();
//   const { pdata, user } = location.state;
//   const [formdetails, setformdetails] = useState({
//     cid: "",
//     cfname: "",
//     age: "",
//     weight: "",
//     bloodgrp: "",
//     gender: "",
//     dob: "",
//   });
//   const navigate = useNavigate();
//   const addChild = (e) => {
//     e.preventDefault();
//     if (
//       // formdetails.cid === "" ||
//       formdetails.cfname === "" ||
//       formdetails.age === "" ||
//       formdetails.weight === "" ||
//       formdetails.bloodgrp === "" ||
//       formdetails.gender === "" ||
//       formdetails.dob === ""
//     ) {
//       c;
//       swal("pls fill all the fieds");
//       return;
//     }
//     userService
//       .registerChild(formdetails)
//       .then((res) => {
//         setformdetails({
//           cid: "",
//           cfname: "",
//           age: "",
//           weight: "",
//           bloodgrp: "",
//           gender: "",
//           dob: "",
//         });
//         swal("Registered successfull");
//         navigate("/ChildDashboard/2");
//       })
//       .catch((err) => {
//         alert("something went wrong");
//       });
//   };
//   return (
//     <>
//       <nav
//         className="navbar navbar-expand-lg navbar-light fixed-top "
//         id="navbar--id"
//         style={{ background: "rgb(240, 240, 240)" }}
//       >
//         <a href="/">
//           <img
//             src="/images/kidLogo.png"
//             alt="Logo"
//             className="nav__logo"
//             id="logo"
//           />
//         </a>
//       </nav>
//       <h1
//         id="header"
//         style={{
//           marginTop: "8%",
//           fontFamily: "black",
//           color: "#29293d",
//           fontSize: "40px",
//         }}
//         className="text-center"
//       >
//         <strong> KiddoShield</strong>
//       </h1>
//       <div className="card ">
//         <div className="card-body" style={{ marginTop: "2%" }}>
//           <h2 className="text-center" id="signUpheader">
//             <b style={{ fontSize: "80%" }}>Child Registration</b>
//           </h2>
//           <form>
//             <div class="container" style={{ marginTop: "1%" }}>
//               <div class="row">
//                 <div class="col-sm">
//                   <label for="fname">Child First name</label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="childname"
//                     aria-describedby="fname"
//                     placeholder="Enter your first name"
//                     value={formdetails.cfname}
//                     onChange={(event) => {
//                       setformdetails({
//                         ...formdetails,
//                         cfname: event.target.value,
//                       });
//                     }}
//                   />
//                   <label for="age">Weight</label>
//                   <input
//                     type="number"
//                     className="form-control"
//                     id="childweight"
//                     aria-describedby="emailHelp"
//                     placeholder="enter Weight of your child"
//                     value={formdetails.weight}
//                     onChange={(event) => {
//                       setformdetails({
//                         ...formdetails,
//                         weight: event.target.value,
//                       });
//                     }}
//                   />

//                   <label for="bloodGroup" style={{ paddingTop: "2%" }}>
//                     Blood Group :&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//                   </label>
//                   <select
//                     className="btn btn-outline-secondary rounded-pill"
//                     id="bloodGroup"
//                     name="bloodGroup"
//                     value={formdetails.bloodgrp}
//                     onChange={(event) => {
//                       setformdetails({
//                         ...formdetails,
//                         bloodgrp: event.target.value,
//                       });
//                     }}
//                   >
//                     <option>Select</option>
//                     <option value="A+">A+</option>
//                     <option value="A-">A-</option>
//                     <option value="B+">B+</option>
//                     <option value="B-">B-</option>
//                     <option value="AB+">AB+</option>
//                     <option value="AB-">AB-</option>
//                     <option value="O+">O+</option>
//                     <option value="O-">O-</option>
//                   </select>
//                 </div>
//                 <div class="col-sm">
//                   <label for="age">Age</label>
//                   <input
//                     type="number"
//                     className="form-control"
//                     id="childage"
//                     aria-describedby="emailHelp"
//                     placeholder="enter age of your child"
//                     value={formdetails.age}
//                     onChange={(event) => {
//                       setformdetails({
//                         ...formdetails,
//                         age: event.target.value,
//                       });
//                     }}
//                   />
//                   <label for="child-dob">DOB</label>
//                   <input
//                     type="date"
//                     className="form-control"
//                     id="child-dob"
//                     placeholder="Enter DOB"
//                     value={formdetails.dob}
//                     onChange={(event) => {
//                       setformdetails({
//                         ...formdetails,
//                         dob: event.target.value,
//                       });
//                     }}
//                   />
//                   <div className="gen" style={{ marginTop: "3%" }}>
//                     <label for="gender" style={{ paddingTop: "2%" }}>
//                       Gender :&nbsp; &nbsp;
//                     </label>
//                     <select
//                       className="btn btn-outline-secondary rounded-pill"
//                       id="gender"
//                       name="gender"
//                       value={formdetails.gender}
//                       onChange={(event) => {
//                         setformdetails({
//                           ...formdetails,
//                           gender: event.target.value,
//                         });
//                       }}
//                     >
//                       <option>Select</option>
//                       <option value="M">M</option>
//                       <option value="F">F</option>
//                     </select>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <button
//               type="submit"
//               className="btn btn-info rounded-pill "
//               id="signup"
//               onClick={addChild}
//             >
//               Register
//             </button>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// }

// {
// }
