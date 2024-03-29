// "use client";
// import { useState } from "react";
// import { IoClose } from "react-icons/io5";
// import Button from "../Button";

// const Modal = ({ isOpen, onClose }) => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     phoneNumber: "",
//     email: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({ ...prevData, [name]: value }));
//     console.log(formData);
//   };

//   return (
//     <>
//       {isOpen && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black  bg-opacity-50">
//           <div className="bg-white p-8 rounded-lg  flex flex-col w-fit">
//             <div className="flex justify-between mb-4 space-x-20 items-center">
//               <h2 className="text-2xl font-bold ">Enter Your Information</h2>
//               <IoClose
//                 className=" cursor-pointer "
//                 size={24}
//                 onClick={onClose}
//               />
//             </div>
//             <input
//               type="text"
//               name="firstName"
//               value={formData.firstName}
//               onChange={handleChange}
//               placeholder="First Name"
//               className="input mb-4 focus:outline-none border-2 border-gray-200 rounded-md p-2"
//             />
//             <input
//               type="text"
//               name="lastName"
//               value={formData.lastName}
//               onChange={handleChange}
//               placeholder="Last Name"
//               className="input mb-4 focus:outline-none border-2 border-gray-200 rounded-md p-2"
//             />
//             <input
//               type="tel"
//               name="phoneNumber"
//               value={formData.phoneNumber}
//               onChange={handleChange}
//               placeholder="Phone Number"
//               className="input mb-4 focus:outline-none border-2 border-gray-200 rounded-md p-2"
//             />
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               placeholder="Email"
//               className="input mb-4 focus:outline-none border-2 border-gray-200 rounded-md p-2"
//             />
//             <Button
//               className={"!px-10 w-2/3 font-bold !bg-black mx-auto"}
//               onClick={() => {
//                 setFormData({
//                   firstName: "",
//                   lastName: "",
//                   phoneNumber: "",
//                   email: "",
//                 }),
//                   onClose();
//               }}
//             >
//               Download Now
//             </Button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Modal;

import { useState } from "react";
import { IoClose } from "react-icons/io5";
import Button from "../Button";
import { Link } from "@mui/material";

const Modal = ({ isOpen, onClose , href }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
  });
  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    phoneNumber: false,
    email: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    let error = false;
    switch (name) {
      case "firstName":
        error = !/^[a-zA-Z]+$/.test(value); // Regex for letters only
        break;
      case "lastName":
        error = !/^[a-zA-Z]+$/.test(value); // Regex for letters only
        break;
      case "phoneNumber":
        error = !/^\d+$/.test(value); // Regex for digits only
        break;
      case "email":
        error = !/^\S+@\S+\.\S+$/.test(value); // Regex for email format
        break;
      default:
        break;
    }
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
  };

  const handleDownload = () => {
    // Validate if all fields are filled and regex patterns are satisfied
    const { firstName, lastName, phoneNumber, email } = formData;
    if (!firstName || !lastName || !phoneNumber || !email) {
      setErrors({
        firstName: !firstName,
        lastName: !lastName,
        phoneNumber: !phoneNumber,
        email: !email,
      });
    } else if (
      !/^[a-zA-Z]+$/.test(firstName) ||
      !/^[a-zA-Z]+$/.test(lastName) ||
      !/^\d+$/.test(phoneNumber) ||
      !/^\S+@\S+\.\S+$/.test(email)
    ) {
      setErrors({
        firstName: !/^[a-zA-Z]+$/.test(firstName),
        lastName: !/^[a-zA-Z]+$/.test(lastName),
        phoneNumber: !/^\d+$/.test(phoneNumber),
        email: !/^\S+@\S+\.\S+$/.test(email),
      });
    } else {
      console.log("Downloading...");
      setFormData({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
      });
      onClose();
    }
  };

  return (
    <>
      {isOpen && (
        <div className=" fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg flex flex-col m-5 w-fit">
            <div className="flex justify-between mb-4 space-x-20 items-center">
              <h2 className="text-2xl font-bold">Enter Your Information</h2>
              <IoClose className="cursor-pointer" size={24} onClick={onClose} />
            </div>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="* First Name"
              className={`input mb-4 focus:outline-none focus:border-green border-2 border-gray-200 rounded-md p-2 ${
                errors.firstName ? "border-red-500" : ""
              }`}
            />
            {errors.firstName && (
              <p className="text-red-500 mb-2">
                First Name is required and should contain letters only
              </p>
            )}
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="* Last Name"
              className={`input mb-4 focus:outline-none focus:border-green border-2 border-gray-200 rounded-md p-2 ${
                errors.lastName ? "border-red-500" : ""
              }`}
            />
            {errors.lastName && (
              <p className="text-red-500 mb-2">
                Last Name is required and should contain letters only
              </p>
            )}
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="* Email"
              className={`input mb-4 focus:outline-none focus:border-green border-2 border-gray-200 rounded-md p-2 ${
                errors.email ? "border-red-500" : ""
              }`}
            />
            {errors.email && (
              <p className="text-red-500 mb-2">
                Email is required and should be in valid format
              </p>
            )}
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="* Phone Number"
              className={`input mb-4 focus:outline-none focus:border-green border-2 border-gray-200 rounded-md p-2 ${
                errors.phoneNumber ? "border-red-500" : ""
              }`}
            />
            {errors.phoneNumber && (
              <p className="text-red-500 mb-2">
                Phone Number is required and should contain digits only
              </p>
            )}

            <Button
              className={`!px-10 w-2/3 font-bold !bg-black mx-auto ${
                Object.values(errors).some((error) => error)
                  ? "cursor-not-allowed opacity-50"
                  : ""
              }`}
              onClick={handleDownload}
              disabled={Object.values(errors).some((error) => error)}
            >
           <Link href={href} className="no-underline text-white" download target="_blank">
             Download Now
            </Link>
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
