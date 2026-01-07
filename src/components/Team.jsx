import React, { useState } from "react";
import TeamCard from "./TeamCard";
import TeamDetailsPopup from "./TeamDetailsPopup";
import { useInView } from "../hooks/UseInView";
import AnimatedLayout from "./AnimatedLayout";

const Team = () => {
  const { ref, isVisible } = useInView();

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
      {/* <div
        ref={ref}
        className={`transition-all duration-800 ease-out
 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
      > */}
      <AnimatedLayout>
        <section className="mt-24 text-center max-w-3xl mx-auto py-5">
          <h2 className="text-3xl font-semibold mb-6">
            More Than a Restaurant
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We are a place where families gather, friends celebrate, and
            memories are created over delicious food. Thank you for being a part
            of our story — we can’t wait to serve you.
          </p>
        </section>
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
      </AnimatedLayout>
      {/* </div> */}
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
