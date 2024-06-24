import { ReactNode } from "react";

const Container: React.FC<{
  children: ReactNode;
}> = ({ children }) => {
  return (
    <div className="flex h-full w-full justify-center">
      <div className="w-full max-w-[64rem] py-12">{children}</div>
    </div>
  );
};

export default Container;
