import React, { useState } from "react";
import { X } from "lucide-react";

const TeamDetailsPopup = ({ team = {}, isPopupOpen, onClosePopup }) => {
  return (
    <section
      className={`${
        isPopupOpen ? "z-30" : "-z-30"
      } fixed inset-0 bg-black/70 flex justify-center items-center p-5 duration-1000`}
    >
      <figure
        className={`${
          isPopupOpen ? "scale-100" : "scale-0"
        } max-w-4xl bg-white h-2/3 flex gap-3 rounded-xl delay-200 duration-500 transition-all`}
      >
        <img
          src={team.profilePic}
          alt={team.name}
          className="h-full w-1/3 object-cover rounded-l-xl"
        />
        <figcaption className="py-3 relative">
          <p className="inline bg-green-400 rounded-full px-2 py-0.5">
            {team.role}
          </p>
          <h3 className="text-xl font-semibold py-1.5">{team.name}</h3>
          <p>
            Stay cool and stylish in this 2-piece cotton suit set, crafted from
            soft, breathable fabric for all-day comfort. Perfect for casual and
            office wear
            <br />
            Note: Colors may slightly vary due to lighting and screen settings.
            Wash care: Hand wash separately in cold water and dry in shade.
          </p>
          <button
            onClick={onClosePopup}
            className="absolute top-5 right-5 text-xl hover:cursor-pointer"
          >
            <X />
          </button>
        </figcaption>
      </figure>
    </section>
  );
};

export default TeamDetailsPopup;
