import React from "react";

const TeamCard = (props) => {
  return (
    <figure className="flex justify-center text-center border border-neutral-100 shadow p-2 rounded-2xl bg-red-100">
      <section>
        <img
          src={props.profilePic}
          alt={props.name}
          className="rounded-full h-40 w-40 object-cover"
        />
        <figcaption className="p-2">
          <h3 className="text-lg">{props.name}</h3>
          <p className="text-sm">{props.role}</p>
        </figcaption>
      </section>
    </figure>
  );
};

export default TeamCard;
