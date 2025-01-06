import { NavLink } from "react-router-dom";
import appStore2 from "../../assets/appStore2.png";
import appStore1 from '../../assets/appSTore1.png'
const ProjectsPage
 = () => {
  return (
    <div className="my-16">
      <div className="md:flex justify-between gap-6 mb-6 bg-white p-3 animate__animated animate__backInUp">
        <img
          className="w-full md:w-[260px] md:h-[200px] mx-auto"
          src={appStore1}
          alt=""
        />
        <div>
          <div className="md:flex justify-between items-center">
            <h3 className="text-3xl font-bold">CombatQuest</h3>
            <NavLink
              to="https://apps.apple.com/tt/app/combat-quest-archer-hero-rpg/id1558423382"
              target="_blank"
            >
              <button className="btn bg-pink-500 text-xl hover:bg-pink-600 text-white my-2 md:my-0">
                App Store
              </button>
            </NavLink>
          </div>
          <p className="text-xl font-semibold mb-1">Genre: Rogue-like / Action RPG</p>
          <p className="text-sm font-semibold">
            Combat Quest is a fantasy action in the RPG genre. This is a great
            duo of smooth gameplay and a fantasy world atmosphere with
            overcoming challenges. In Combat Quest the player can find
            mysterious artefacts and fight dynamic battles!
          </p>
        </div>
      </div>
      <div className="md:flex justify-between gap-6 bg-white p-3 animate__animated animate__backInDown">
        <img
          className="w-full md:w-[280px] md:h-[200px] mx-auto"
          src={appStore2}
          alt=""
        />
        <div>
          <div className="md:flex justify-between items-center">
            <h3 className="text-3xl font-bold">OneState</h3>
            <NavLink
              to="https://apps.apple.com/us/app/one-state-rp-role-play-online/id1597760047?platform=iphone"
              target="_blank"
            >
              <button className="btn bg-pink-500 text-xl hover:bg-pink-600 text-white my-2 md:my-0">
                App Store
              </button>
            </NavLink>
          </div>
          <p className="text-xl font-semibold mb-1">Genre: Role-Play</p>
          <p className="text-sm font-semibold">
            1St is the first mobile game in the Role Play genre. An open world
            in a realistic setting for the first time is implemented in a mobile
            version. We are moving fast and upbeat towards the realization of
            everyone’s dream: to hold a realistic open world in your hands where
            you can tune cars, run your own business, rob banks, start
            relationships, hang out, communicate and have fun on a new level!{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage
;
