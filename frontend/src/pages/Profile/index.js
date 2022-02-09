import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

import { URL } from "../../serverUrl";
import { NavBar } from "../../components";
import "./style.css";

function Profile() {
  const userDetails = useSelector((state) => state.currentUser);
  const [compDetails, setCompDetails] = useState();

  useEffect(() => {
    const getCompetitionsAndScores = async () => {
      const response = await fetch(`${URL}/competitions/user_comps/`);
      const data = await response.json();
      console.log(data);
      setCompDetails(data);
    };
    getCompetitionsAndScores();
  }, []);

  // do this when auth server is fixed:
  //   const comps = compdetails.map((c) => {
  // return <p>{c.name}</p>
  //   })
  return (
    <div className="profile-page">
      <NavBar />
      <h1 id="nameTitle" className="profile-name">
        {userDetails.username}
      </h1>
      <Link to="/editprofile">
        <button className = "btn btn-lg btn-warning"id="editProfileButton">Edit Profile</button>
      </Link>
      <div id="competitionInfo">
        <h2 id="currentCompsTag" className="profile-name">
          Competitions {compDetails}
        </h2>
        <div className="competition-table">
          <h3> Futureproof</h3>
          <h3> 10</h3>
        </div>
        <div className="competition-table">
          <h3> Futureproof</h3>
          <h3> 10</h3>
        </div>
        <div className="competition-table">
          <h3> Futureproof</h3>
          <h3> 10</h3>
        </div>
        <div className="competition-table">
          <h3> Futureproof</h3>
          <h3> 10</h3>
        </div>
        <div className="competition-table">
          <h3> Futureproof</h3>
          <h3> 10</h3>
        </div>
              <div className="competition-table">
          <h3> Futureproof</h3>
          <h3> 10</h3>
        </div>
      </div>
      <Link to="/create-competition">
        <button id="create" className = "btn btn-lg btn-success">
          <span>Create a competition!</span>
        </button>
      </Link>
    </div>
  );
}

export default Profile;
