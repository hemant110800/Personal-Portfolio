import { useState, useEffect } from "react";

const Header = () => {
  const [activeTab, setActive] = useState("Home");

  const handleTabChange = e => {
    console.log(e.target.innerText);
    setActive(e.target.innerText);
  };

  useEffect(() => {
    let routeList = window.location.href.split("/");
    // console.log(routeList);
    let currPage = routeList[routeList.length - 1].substr(1);
    // console.log(currPage);
    if (currPage === "") setActive("Home");
    else setActive(currPage);
  }, []);

  return (
    <div className="h-[50px] flex flex-row justify-between items-center py-3 z-10">
      <div className="text-4xl font-bold font-sons text-violet-900">
        Hemant Bhati
      </div>
      <div className="flex flex-row float-right gap-8">
        <a
          href="#Home"
          // active = {true}
          className={`text-purple-800 hover:underline hover:font-bold ${activeTab ===
            "Home" && "font-bold underline"}`}
        >
          <div onClick={handleTabChange}>Home</div>
        </a>
        <a
          href="#Skills"
          className={`text-purple-800 hover:underline hover:font-bold ${(activeTab ===
            "Skills"|| activeTab==="skills") && "font-bold underline"}`}
        >
          <div onClick={handleTabChange}>Skills</div>
        </a>
        <a
          href="#Projects"
          className={`text-purple-800 hover:underline hover:font-bold ${activeTab ===
            "Projects" && "font-bold underline"}`}
        >
          <div onClick={handleTabChange}>Projects</div>
        </a>
        <a
          href="#Contact"
          className={`text-purple-800 hover:underline hover:font-bold ${activeTab ===
            "Contact" && "font-bold underline"}`}
        >
          <div onClick={handleTabChange}>Contact</div>
        </a>
      </div>
    </div>
  );
};

export default Header;
