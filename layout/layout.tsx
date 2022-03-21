import Topmenu from "../components/topmenu";
import {appStyle} from "./styles"

export default function Layout({children}: React.PropsWithChildren<{}>) {
  return (
      <>
      <Topmenu/>
    <div>
        {children}
        <style jsx global>{
          `body{background-color: #18191A}`
          }
      </style>
    </div>
    </>
  )
}