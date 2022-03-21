import Topmenu from "../components/topmenu";

export default function Layout({children}: React.PropsWithChildren<{}>) {
  return (
      <>
      <Topmenu/>
    <div>
        {children}
    </div>
    </>
  )
}