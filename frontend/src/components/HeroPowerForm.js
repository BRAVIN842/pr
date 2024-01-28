// // // // HeroPowerForm.js
// // // import React, { useState, useEffect } from "react";
// // // import { useNavigate } from "react-router-dom";

// // // function HeroPowerForm() {
// // //   const [heroes, setHeroes] = useState([]);
// // //   const [powers, setPowers] = useState([]);
// // //   const [heroId, setHeroId] = useState("");
// // //   const [powerId, setPowerId] = useState("");
// // //   const [strength, setStrength] = useState("");
// // //   const [formErrors, setFormErrors] = useState([]);
// // //   const navigate = useNavigate();

// // //   useEffect(() => {
// // //     fetch("http://127.0.0.1:5555/heroes")
// // //       .then((r) => r.json())
// // //       .then(setHeroes);
// // //   }, []);

// // //   useEffect(() => {
// // //     fetch("http://127.0.0.1:5555/powers")
// // //       .then((r) => r.json())
// // //       .then(setPowers);
// // //   }, []);

// // //   function handleSubmit(e) {
// // //     e.preventDefault();
// // //     const formData = {
// // //       hero_id: heroId,
// // //       power_id: powerId,
// // //       strength,
// // //     };
// // //     fetch("http://127.0.0.1:5555/hero_powers", {
// // //       method: "POST",
// // //       headers: {
// // //         "Content-Type": "application/json",
// // //       },
// // //       body: JSON.stringify(formData),
// // //     }).then((r) => {
// // //       if (r.ok) {
// // //         navigate(`/heroes/${heroId}`);  // Use navigate instead of history.push
// // //       } else {
// // //         r.json().then((err) => setFormErrors(err.errors));
// // //       }
// // //     });
// // //   }

// // //   return (
// // //     <form onSubmit={handleSubmit}>
// // //       <label htmlFor="power_id">Power:</label>
// // //       <select
// // //         id="power_id"
// // //         name="power_id"
// // //         value={powerId}
// // //         onChange={(e) => setPowerId(e.target.value)}
// // //       >
// // //         <option value="">Select a power</option>
// // //         {powers.map((power) => (
// // //           <option key={power.id} value={power.id}>
// // //             {power.name}
// // //           </option>
// // //         ))}
// // //       </select>
// // //       <label htmlFor="hero_id">Hero:</label>
// // //       <select
// // //         id="hero_id"
// // //         name="hero_id"
// // //         value={heroId}
// // //         onChange={(e) => setHeroId(e.target.value)}
// // //       >
// // //         <option value="">Select a hero</option>
// // //         {heroes.map((hero) => (
// // //           <option key={hero.id} value={hero.id}>
// // //             {hero.name}
// // //           </option>
// // //         ))}
// // //       </select>
// // //       <label htmlFor="strength">Strength:</label>
// // //       <input
// // //         type="text"
// // //         id="strength"
// // //         name="strength"
// // //         value={strength}
// // //         onChange={(e) => setStrength(e.target.value)}
// // //       />
// // //       {formErrors.length > 0
// // //         ? formErrors.map((err) => (
// // //             <p key={err} style={{ color: "red" }}>
// // //               {err}
// // //             </p>
// // //           ))
// // //         : null}
// // //       <button type="submit">Add Hero Power</button>
// // //     </form>
// // //   );
// // // }

// // // export default HeroPowerForm;


// // import React, { useState, useEffect } from "react";
// // import { useNavigate } from "react-router-dom";

// // function HeroPowerForm() {
// //   const [heroes, setHeroes] = useState([]);
// //   const [powers, setPowers] = useState([]);
// //   const [heroId, setHeroId] = useState("");
// //   const [powerId, setPowerId] = useState("");
// //   const [strength, setStrength] = useState("");
// //   const [formErrors, setFormErrors] = useState([]);
// //   const [isLoading, setIsLoading] = useState(false);
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         setIsLoading(true);
// //         const heroesResponse = await fetch("http://127.0.0.1:5555/heroes");
// //         const powersResponse = await fetch("http://127.0.0.1:5555/powers");

// //         if (!heroesResponse.ok || !powersResponse.ok) {
// //           throw new Error("Failed to fetch data");
// //         }

// //         const heroesData = await heroesResponse.json();
// //         const powersData = await powersResponse.json();

// //         setHeroes(heroesData);
// //         setPowers(powersData);
// //       } catch (error) {
// //         console.error("Error fetching data:", error.message);
// //       } finally {
// //         setIsLoading(false);
// //       }
// //     };

// //     fetchData();

// //     // Cleanup function
// //     return () => {
// //       // Perform any cleanup if needed
// //     };
// //   }, []);

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     const formData = {
// //       hero_id: heroId,
// //       power_id: powerId,
// //       strength,
// //     };

// //     try {
// //       setIsLoading(true);
// //       const response = await fetch("http://127.0.0.1:5555/hero_powers", {
// //         method: "POST",
// //         headers: {
// //           "Content-Type": "application/json",
// //         },
// //         body: JSON.stringify(formData),
// //       });

// //       if (response.ok) {
// //         navigate(`/heroes/${heroId}`);
// //       } else {
// //         const errorData = await response.json();
// //         setFormErrors(errorData.errors);
// //       }
// //     } catch (error) {
// //       console.error("Error submitting form:", error.message);
// //     } finally {
// //       setIsLoading(false);
// //     }
// //   };

// //   return (
// //     <form onSubmit={handleSubmit}>
// //       <label htmlFor="power_id">Power:</label>
// //       <select
// //         id="power_id"
// //         name="power_id"
// //         value={powerId}
// //         onChange={(e) => setPowerId(e.target.value)}
// //       >
// //         <option value="">Select a power</option>
// //         {powers.map((power) => (
// //           <option key={power.id} value={power.id}>
// //             {power.name}
// //           </option>
// //         ))}
// //       </select>
// //       <label htmlFor="hero_id">Hero:</label>
// //       <select
// //         id="hero_id"
// //         name="hero_id"
// //         value={heroId}
// //         onChange={(e) => setHeroId(e.target.value)}
// //       >
// //         <option value="">Select a hero</option>
// //         {heroes.map((hero) => (
// //           <option key={hero.id} value={hero.id}>
// //             {hero.name}
// //           </option>
// //         ))}
// //       </select>
// //       <label htmlFor="strength">Strength:</label>
// //       <input
// //         type="text"
// //         id="strength"
// //         name="strength"
// //         value={strength}
// //         onChange={(e) => setStrength(e.target.value)}
// //       />
// //       {formErrors.length > 0 &&
// //         formErrors.map((err) => (
// //           <p key={err} style={{ color: "red" }}>
// //             {err}
// //           </p>
// //         ))}
// //       <button type="submit" disabled={isLoading}>
// //         {isLoading ? "Adding Hero Power..." : "Add Hero Power"}
// //       </button>
// //     </form>
// //   );
// // }

// // export default HeroPowerForm;

// // HeroPowerForm.js
// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// function HeroPowerForm() {
//   const [heroes, setHeroes] = useState([]);
//   const [powers, setPowers] = useState([]);
//   const [heroId, setHeroId] = useState("");
//   const [powerId, setPowerId] = useState("");
//   const [strength, setStrength] = useState("");
//   const [formErrors, setFormErrors] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetch("http://127.0.0.1:5555/heroes")
//       .then((r) => r.json())
//       .then(setHeroes);
//   }, []);

//   useEffect(() => {
//     fetch("http://127.0.0.1:5555/powers")
//       .then((r) => r.json())
//       .then(setPowers);
//   }, []);

//   function handleSubmit(e) {
//     e.preventDefault();
//     const formData = {
//       hero_id: heroId,
//       power_id: powerId,
//       strength,
//     };
//     fetch("http://127.0.0.1:5555/hero_powers", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(formData),
//     }).then((r) => {
//       if (r.ok) {
//         navigate(`/heroes/${heroId}`);
//       } else {
//         r.json().then((err) => setFormErrors(err.errors));
//       }
//     });
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <label htmlFor="power_id">Power:</label>
//       <select
//         id="power_id"
//         name="power_id"
//         value={powerId}
//         onChange={(e) => setPowerId(e.target.value)}
//       >
//         <option value="">Select a power</option>
//         {powers.map((power) => (
//           <option key={power.id} value={power.id}>
//             {power.name}
//           </option>
//         ))}
//       </select>
//       <label htmlFor="hero_id">Hero:</label>
//       <select
//         id="hero_id"
//         name="hero_id"
//         value={heroId}
//         onChange={(e) => setHeroId(e.target.value)}
//       >
//         <option value="">Select a hero</option>
//         {heroes.map((hero) => (
//           <option key={hero.id} value={hero.id}>
//             {hero.name}
//           </option>
//         ))}
//       </select>
//       <label htmlFor="strength">Strength:</label>
//       <input
//         type="text"
//         id="strength"
//         name="strength"
//         value={strength}
//         onChange={(e) => setStrength(e.target.value)}
//       />
//       {formErrors.length > 0
//         ? formErrors.map((err) => (
//             <p key={err} style={{ color: "red" }}>
//               {err}
//             </p>
//           ))
//         : null}
//       <button type="submit">Add Hero Power</button>
//     </form>
//   );
// }

// export default HeroPowerForm;

// HeroPowerForm.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function HeroPowerForm() {
  const [heroes, setHeroes] = useState([]);
  const [powers, setPowers] = useState([]);
  const [heroId, setHeroId] = useState("");
  const [powerId, setPowerId] = useState("");
  const [strength, setStrength] = useState("");
  const [formErrors, setFormErrors] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://127.0.0.1:5555/heroes")
      .then((r) => r.json())
      .then(setHeroes);
  }, []);

  useEffect(() => {
    fetch("http://127.0.0.1:5555/powers")
      .then((r) => r.json())
      .then(setPowers);
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    const formData = {
      hero_id: heroId,
      power_id: powerId,
      strength,
    };

    fetch("http://127.0.0.1:5555/hero_powers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((r) => {
      if (r.ok) {
        navigate(`/heroes/${heroId}`);
      } else {
        r.json().then((err) => setFormErrors(err.errors));
      }
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="power_id">Power:</label>
      <select
        id="power_id"
        name="power_id"
        value={powerId}
        onChange={(e) => setPowerId(e.target.value)}
      >
        <option value="">Select a power</option>
        {powers.map((power) => (
          <option key={power.id} value={power.id}>
            {power.name}
          </option>
        ))}
      </select>

      <label htmlFor="hero_id">Hero:</label>
      <select
        id="hero_id"
        name="hero_id"
        value={heroId}
        onChange={(e) => setHeroId(e.target.value)}
      >
        <option value="">Select a hero</option>
        {heroes.map((hero) => (
          <option key={hero.id} value={hero.id}>
            {hero.name}
          </option>
        ))}
      </select>

      <label htmlFor="strength">Strength:</label>
      <input
        type="text"
        id="strength"
        name="strength"
        value={strength}
        onChange={(e) => setStrength(e.target.value)}
      />

      {formErrors.length > 0
        ? formErrors.map((err) => (
            <p key={err} style={{ color: "red" }}>
              {err}
            </p>
          ))
        : null}

      <button type="submit">Add Hero Power</button>
    </form>
  );
}

export default HeroPowerForm;
