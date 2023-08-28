import { SelectedPage } from "../../share/types";
import { fromSelectedPageToPageId } from "../../utilities/utils";
import MySkillsText from "./MySkillsText";
import MySkillsImg from "./MySkillsImg";
import MySkillsExperience from "./MySkillsExperience";
import MySkillsInnovative from "./MySkillsInnovative";
import MySkillsImaginative from "./MySkillsImaginative";

const MySkills = () => {
  return (
    <section id={fromSelectedPageToPageId(SelectedPage.Skills)} className="pt-10 pb-24 mb-28">

      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">

        <MySkillsText />

        <MySkillsImg />

      </div>

      {/* SKILLS */}
      <div className="md:flex md:justify-between mt-16 gap-32">

        {/* EXPERIENCE */}
        <MySkillsExperience />

        {/* INNOVATIVE */}
        <MySkillsInnovative />

        {/* IMAGINATIVE */}
        <MySkillsImaginative />

      </div>

    </section>
  );
};

export default MySkills;
