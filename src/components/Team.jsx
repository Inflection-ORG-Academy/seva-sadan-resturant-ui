import React, { useState } from "react";
import TeamCard from "./TeamCard";
import TeamDetailsPopup from "./TeamDetailsPopup";

const Team = () => {
  const [team, setTeam] = useState([
    {
      name: "Jackquline",
      role: "chef",
      profilePic:
        "https://www.totaljobs.com/advice/wp-content/uploads/Sous-Chef-job-description_5719402.jpg",
    },
    {
      name: "Dhaka",
      role: "chef",
      profilePic:
        "https://www.escoffier.edu/wp-content/uploads/2023/11/Escoffier-graduate-Trenin-Nubiru-stands-proudly-smiling-in-an-Escoffier-kitchen-768.jpg",
    },
    {
      name: "Shree",
      role: "chef",
      profilePic:
        "https://media.istockphoto.com/id/956600100/vector/chef-woman-gesturing-ok.jpg?s=612x612&w=0&k=20&c=ZIGRIbmSgMZRuywZ59JJBgEaDmeVeWmpyFjoUU1iry4=",
    },
    {
      name: "Katrina Kaif",
      role: "waiter",
      profilePic:
        "https://t4.ftcdn.net/jpg/07/01/92/29/360_F_701922920_55nhF9l3H3Wpwdsy29XvxFueJUcmlbfj.jpg",
    },
    {
      name: "Ravina Tandan",
      role: "waiter",
      profilePic:
        "https://st2.depositphotos.com/1029150/9318/i/950/depositphotos_93182900-stock-photo-indian-woman-chef.jpg",
    },
  ]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);

  const showTeamMemberDetails = (index) => {
    setCurrentIndex(index);
    setIsPopupOpen(true);
  };

  return (
    <div>
      <h1 className="text-center py-5 text-3xl font-semibold">Meet our Team</h1>

      <section className="flex justify-center gap-3 flex-wrap w-full">
        {team.map((team, index) => (
          <TeamCard
            key={index}
            name={team.name}
            role={team.role}
            profilePic={team.profilePic}
            onShowTeamMemberDetails={showTeamMemberDetails}
            index={index}
          />
        ))}
      </section>

      {/* Custom Popup */}

      <TeamDetailsPopup
        team={team[currentIndex]}
        isPopupOpen={isPopupOpen}
        onClosePopup={() => {
          setIsPopupOpen(false);
        }}
      />
    </div>
  );
};

export default Team;
