import Topmenu from "../components/topmenu";
import { appStyle } from "./styles";

export default function Layout({ children }: React.PropsWithChildren<{}>) {
  return (
    <>
      <Topmenu />
      <div className="main">
        {children}
        <style jsx global>
          {appStyle}
        </style>
      </div>
    </>
  );
}
