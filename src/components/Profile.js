import { useEffect, useState } from "react";

const Profile = () => {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("fn timer");
    }, 500);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div>
      <p>profile page functional component</p>
    </div>
  );
};

export default Profile;
