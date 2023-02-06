import { ReactNode } from "react";
import { Topbar } from "../../components";

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div>
      <Topbar />
      {children}
    </div>
  );
}
