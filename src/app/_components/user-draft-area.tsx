import { cva, VariantProps } from "class-variance-authority";
import SkillButton from "./skill-button";

const userDraftAreaStyles = cva(
  ["h-full rounded-[4rem] border-8 p-8 shadow-xl"],
  {
    variants: {
      playerIdx: {
        0: "bg-blue-300 border-blue-700",
        1: "bg-red-300 border-red-700",
      },
    },
  },
);

const UserDraftArea: React.FC<UserDraftAreaProps> = ({ playerIdx = 0 }) => {
  return (
    <div
      className={userDraftAreaStyles({
        playerIdx,
      })}
    >
      <div className="grid grid-cols-3 gap-4">
        <SkillButton playerIdx={playerIdx} />
        <SkillButton playerIdx={playerIdx} />
        <SkillButton playerIdx={playerIdx} />

        <SkillButton playerIdx={playerIdx} />
        <SkillButton playerIdx={playerIdx} />
        <SkillButton playerIdx={playerIdx} />

        <SkillButton playerIdx={playerIdx} />
        <SkillButton playerIdx={playerIdx} />
        <SkillButton playerIdx={playerIdx} />

        <SkillButton playerIdx={playerIdx} />
        <SkillButton playerIdx={playerIdx} />
        <SkillButton playerIdx={playerIdx} />

        <SkillButton playerIdx={playerIdx} />
        <SkillButton playerIdx={playerIdx} />
        <SkillButton playerIdx={playerIdx} />

        <SkillButton playerIdx={playerIdx} />
        <SkillButton playerIdx={playerIdx} />
        <SkillButton playerIdx={playerIdx} />

        <SkillButton playerIdx={playerIdx} />
        <SkillButton playerIdx={playerIdx} />
        <SkillButton playerIdx={playerIdx} />

        <SkillButton playerIdx={playerIdx} />
        <SkillButton playerIdx={playerIdx} />
      </div>
    </div>
  );
};

interface UserDraftAreaProps extends VariantProps<typeof userDraftAreaStyles> {}

export default UserDraftArea;
