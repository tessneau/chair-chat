import React, { useState } from "react";
import "./Profile.scss";

const Profile = ({ username, profile_picture }) => {

  const [show, setShow] = useState(false);

  return (
    <div className="profile" onClick={() => setShow(!show)}>
      <h3>{username}</h3>
      <div className="profile__picture">
        <img src={profile_picture} width="100" alt="chair_me" />
      </div>

      { show ?
        ( <div className="profile__bio">
          <h4>I'll support you</h4>
        </div> )
      : null }

    </div>
  );
};

export default Profile;
