import React from "react";

const ProfileSection = ({ children, title }) => {
  return (
    <section className="w-100 py-3">
      <h2 className="fs-5 text-center">{title}</h2>
      {children}
    </section>
  );
};

export default ProfileSection;
