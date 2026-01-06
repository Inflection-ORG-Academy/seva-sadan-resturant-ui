import React, { useEffect, useState } from "react";
import TeamCard from "./TeamCard";
import TeamDetailsPopup from "./TeamDetailsPopup";
import { X } from "lucide-react";

const Team = () => {
  const [team, setTeam] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);

  const showTeamMemberDetails = (index) => {
    setCurrentIndex(index);
    setIsPopupOpen(true);
  };

  useEffect(() => {
    const getTeamDetails = async () => {
      try {
        const res = await fetch("http://localhost:3000/team");
        const data = await res.json();
        setTeam(data);
      } catch (err) {
        console.log(err);
      }
    };

    getTeamDetails();
  }, []);

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
