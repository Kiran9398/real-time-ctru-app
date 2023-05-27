import React, { useState, useRef, useEffect } from "react";
import Swal from "sweetalert2";

function Add({ employees, setEmployees, setIsAdding }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [salary, setSalary] = useState("");
  const [date, setDate] = useState("");

  const [errorFn, setErrorFn] = useState("");
  const [errorLn, setErrorLn] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorSalary, setErrorSalary] = useState("");
  const [errorDate, setErrorDate] = useState("");

  const textInput = useRef(null);
  useEffect(() => {
    textInput.current.focus();
  }, []);

  const firstNameHandler = (e) => {
    setFirstName(e.target.value);
    if (!firstName) {
      setErrorFn("*Firstname is required!");
    } else if (firstName.length >= 0) {
      setErrorFn("");
    }
  };
  const lastNameHandler = (e) => {
    setLastName(e.target.value);
    if (!lastName) {
      setErrorLn("*Lastname is required!");
    } else if (lastName.length >= 0) {
      setErrorLn("");
    }
  };
  const emailHandler = (e) => {
    setEmail(e.target.value);
    if (!email) {
      setErrorEmail("*Email is required!");
    } else if (email.length >= 0) {
      setErrorEmail("");
    }
  };
  const salaryHandler = (e) => {
    setSalary(e.target.value);
    if (!salary) {
      setErrorSalary("*Salary is required!");
    } else if (salary.length >= 0) {
      setErrorSalary("");
    }
  };

  const dateHandler = (e) => {
    setDate(e.target.value);
    if (!date) {
      setErrorDate("*Date is required!");
    } else if (date.length >= 0) {
      setErrorDate("");
    }
  };
  const handleAdd = (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !salary || !date) {
      return Swal.fire({
        icon: "error",
        title: "Error!",
        text: "All fields are required.",
        showConfirmButton: true,
      });
    }

    const id = employees.length + 1;
    const newEmployee = {
      id,
      firstName,
      lastName,
      email,
      salary,
      date,
    };
    employees.push(newEmployee);
    setEmployees(employees);
    setIsAdding(false);

    Swal.fire({
      icon: "success",
      title: "Added!",
      text: `${firstName} ${lastName}'s data has been Added.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="small-container">
      <form onSubmit={handleAdd}>
        <h1>Add Employee</h1>
        <label htmlFor="firstName">
          First Name<span>*</span>
        </label>
        <input
          id="firstName"
          type="text"
          ref={textInput}
          name="firstName"
          value={firstName}
          onBlur={() => {
            if (!firstName) {
              setErrorFn("*Firstname is required!");
            }
          }}
          onChange={firstNameHandler}
        />
        {errorFn && <p>{errorFn}</p>}
        <label htmlFor="lastName">
          Last Name<span>*</span>
        </label>
        <input
          id="lastName"
          type="text"
          name="lastName"
          value={lastName}
          onBlur={() => {
            if (!lastName) {
              setErrorLn("*Lastname is required!");
            }
          }}
          onChange={lastNameHandler}
        />
        {errorLn && <p>{errorLn}</p>}
        <label htmlFor="email">
          Email<span>*</span>
        </label>
        <input
          id="email"
          type="email"
          name="email"
          value={email}
          onBlur={() => {
            if (!email) {
              setErrorEmail("*Email is required!");
            }
          }}
          onChange={emailHandler}
        />
        {errorEmail && <p>{errorEmail}</p>}
        <label htmlFor="salary">
          Salary INR<span>*</span>
        </label>
        <input
          id="salary"
          type="number"
          name="salary"
          value={salary}
          onBlur={() => {
            if (!salary) {
              setErrorSalary("*Salary is required!");
            }
          }}
          onChange={salaryHandler}
        />
        {errorSalary && <p>{errorSalary}</p>}
        <label htmlFor="date">
          Date<span>*</span>
        </label>
        <input
          id="date"
          type="date"
          name="date"
          value={date}
          onBlur={() => {
            if (!date) {
              setErrorDate("*Date is required!");
            }
          }}
          onChange={dateHandler}
        />
        {errorDate && <p>{errorDate}</p>}
        <h6>(*) Mandetory fields.</h6>
        <div style={{ marginTop: "30px" }}>
          <input type="submit" value="Add" />
          <input
            style={{ marginLeft: "12px" }}
            className="muted-button"
            type="button"
            value="Cancel"
            onClick={() => setIsAdding(false)}
          />
        </div>
      </form>
    </div>
  );
}

export default Add;
