// // // // PowerEditForm.js
// // // import React, { useEffect, useState } from "react";
// // // import { useNavigate, useParams } from "react-router-dom";

// // // function PowerEditForm() {
// // //   const [{ data: power, errors, status }, setPower] = useState({
// // //     data: null,
// // //     errors: [],
// // //     status: "pending",
// // //   });
// // //   const [description, setDescription] = useState("");
// // //   const { id } = useParams();
// // //   const navigate = useNavigate();  // Use useNavigate instead of history

// // //   useEffect(() => {
// // //     fetch(`http://127.0.0.1:5555/powers/${id}`)
// // //       .then((r) => {
// // //         if (r.ok) {
// // //           r.json().then((power) => {
// // //             setPower({ data: power, errors: [], status: "resolved" });
// // //             setDescription(power.description);
// // //           });
// // //         } else {
// // //           r.json().then((err) =>
// // //             setPower({ data: null, errors: [err.error], status: "rejected" })
// // //           );
// // //         }
// // //       });
// // //   }, [id]);

// // //   if (status === "pending") return <h1>Loading...</h1>;

// // //   function handleSubmit(e) {
// // //     e.preventDefault();
// // //     fetch(`http://127.0.0.1:5555/powers/${power.id}`, {
// // //       method: "PATCH",
// // //       headers: {
// // //         "Content-Type": "application/json",
// // //       },
// // //       body: JSON.stringify({
// // //         description,
// // //       }),
// // //     }).then((r) => {
// // //       if (r.ok) {
// // //         navigate(`/powers/${power.id}`);  // Use navigate instead of history.push
// // //       } else {
// // //         r.json().then((err) =>
// // //           setPower({ data: power, errors: err.errors, status: "rejected" })
// // //         );
// // //       }
// // //     });
// // //   }

// // //   return (
// // //     <form onSubmit={handleSubmit}>
// // //       <h2>Editing {power.name}</h2>
// // //       <label htmlFor="description">Description:</label>
// // //       <textarea
// // //         id="description"
// // //         name="description"
// // //         rows="4"
// // //         value={description}
// // //         onChange={(e) => setDescription(e.target.value)}
// // //       />
// // //       {errors.length > 0
// // //         ? errors.map((err) => (
// // //             <p key={err} style={{ color: "red" }}>
// // //               {err}
// // //             </p>
// // //           ))
// // //         : null}
// // //       <button type="submit">Update Power</button>
// // //     </form>
// // //   );
// // // }

// // // export default PowerEditForm;


// // // PowerEditForm.js
// // import React, { useEffect, useState } from "react";
// // import { useNavigate, useParams } from "react-router-dom";

// // function PowerEditForm() {
// //   const [{ data: power, errors, status }, setPower] = useState({
// //     data: null,
// //     errors: [],
// //     status: "pending",
// //   });
// //   const [description, setDescription] = useState("");
// //   const { id } = useParams();
// //   const navigate = useNavigate();  // Use useNavigate instead of history

// //   useEffect(() => {
// //     fetch(`http://127.0.0.1:5555/powers/${id}`)
// //       .then((r) => {
// //         if (r.ok) {
// //           r.json().then((power) => {
// //             setPower({ data: power, errors: [], status: "resolved" });
// //             setDescription(power.description);
// //           });
// //         } else {
// //           r.json().then((err) =>
// //             setPower({ data: null, errors: [err.error], status: "rejected" })
// //           );
// //         }
// //       });
// //   }, [id]);

// //   if (status === "pending") return <h1>Loading...</h1>;

// //   function handleSubmit(e) {
// //     e.preventDefault();
// //     fetch(`http://127.0.0.1:5555/powers/${power.id}`, {
// //       method: "PATCH",
// //       headers: {
// //         "Content-Type": "application/json",
// //       },
// //       body: JSON.stringify({
// //         description,
// //       }),
// //     }).then((r) => {
// //       if (r.ok) {
// //         navigate(`/powers/${power.id}`);  // Use navigate instead of history.push
// //       } else {
// //         r.json().then((err) =>
// //           setPower({ data: power, errors: err.errors, status: "rejected" })
// //         );
// //       }
// //     });
// //   }

// //   return (
// //     <form onSubmit={handleSubmit}>
// //       <h2>Editing {power.name}</h2>
// //       <label htmlFor="description">Description:</label>
// //       <textarea
// //         id="description"
// //         name="description"
// //         rows="4"
// //         value={description}
// //         onChange={(e) => setDescription(e.target.value)}
// //       />
// //       {power.errors.length > 0
// //         ? power.errors.map((err) => (
// //             <p key={err} style={{ color: "red" }}>
// //               {err}
// //             </p>
// //           ))
// //         : null}
// //       <button type="submit">Update Power</button>
// //     </form>
// //   );
// // }

// // export default PowerEditForm;


// // PowerEditForm.js
// import React, { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";

// function PowerEditForm() {
//   const [{ data: power, errors, status }, setPower] = useState({
//     data: null,
//     errors: [],
//     status: "pending",
//   });
//   const [description, setDescription] = useState("");
//   const { id } = useParams();
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetch(`http://127.0.0.1:5555/powers/${id}`)
//       .then((r) => {
//         if (r.ok) {
//           r.json().then((power) => {
//             setPower({ data: power, errors: [], status: "resolved" });
//             setDescription(power.description);
//           });
//         } else {
//           r.json().then((err) =>
//             setPower({ data: null, errors: [err.error], status: "rejected" })
//           );
//         }
//       });
//   }, [id]);

//   if (status === "pending") return <h1>Loading...</h1>;

//   function handleSubmit(e) {
//     e.preventDefault();
//     fetch(`http://127.0.0.1:5555/powers/${power.id}`, {
//       method: "PATCH",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         description,
//       }),
//     }).then((r) => {
//       if (r.ok) {
//         navigate(`/powers/${power.id}`);
//       } else {
//         r.json().then((err) =>
//           setPower({ data: power, errors: err.errors, status: "rejected" })
//         );
//       }
//     });
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Editing {power.name}</h2>
//       <label htmlFor="description">Description:</label>
//       <textarea
//         id="description"
//         name="description"
//         rows="4"
//         value={description}
//         onChange={(e) => setDescription(e.target.value)}
//       />
//       {errors.length > 0
//         ? errors.map((err) => (
//             <p key={err} style={{ color: "red" }}>
//               {err}
//             </p>
//           ))
//         : null}
//       <button type="submit">Update Power</button>
//     </form>
//   );
// }

// export default PowerEditForm;

// PowerEditForm.js
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function PowerEditForm() {
  const [{ data: power, errors, status }, setPower] = useState({
    data: null,
    errors: [],
    status: "pending",
  });
  const [description, setDescription] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://127.0.0.1:5555/powers/${id}`)
      .then((r) => {
        if (r.ok) {
          r.json().then((power) => {
            setPower({ data: power, errors: [], status: "resolved" });
            setDescription(power.description);
          });
        } else {
          r.json().then((err) =>
            setPower({ data: null, errors: [err.error], status: "rejected" })
          );
        }
      });
  }, [id]);

  if (status === "pending") return <h1>Loading...</h1>;

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`http://127.0.0.1:5555/powers/${power.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        description,
      }),
    }).then((r) => {
      if (r.ok) {
        navigate(`/powers/${power.id}`);
      } else {
        r.json().then((err) =>
          setPower({ data: power, errors: err.errors, status: "rejected" })
        );
      }
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Editing {power.name}</h2>
      <label htmlFor="description">Description:</label>
      <textarea
        id="description"
        name="description"
        rows="4"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      {errors.length > 0
        ? errors.map((err) => (
            <p key={err} style={{ color: "red" }}>
              {err}
            </p>
          ))
        : null}

      <button type="submit">Update Power</button>
    </form>
  );
}

export default PowerEditForm;