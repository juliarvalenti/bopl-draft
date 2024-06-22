import { cva, VariantProps } from "class-variance-authority";

const skillButtonStyles = cva(
  [
    "aspect-square p-2 border-4 flex items-center justify-center rounded-full text-2xl hover:scale-105 transition-transform sway duration-75 ease-in-out",
  ],
  {
    variants: {
      playerIdx: {
        0: "border-blue-500 bg-blue-400",
        1: "border-red-500 bg-red-400",
      },
    },
  },
);

export const SkillButton: React.FC<SkillButtonProps> = ({ playerIdx = 0 }) => {
  return (
    <button className={skillButtonStyles({ playerIdx })}>
      <span className="text-2xl">🔥</span>
    </button>
  );
};

export interface SkillButtonProps
  extends VariantProps<typeof skillButtonStyles> {}

export default SkillButton;
