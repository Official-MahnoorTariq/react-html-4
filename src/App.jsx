import Heading from "./components/Heading";
import RowEight from "./components/RowEight";
import RowFive from "./components/RowFive";
import RowFour from "./components/RowFour";
import RowNine from "./components/RowNine";
import RowOne from "./components/RowOne";
import RowSeven from "./components/RowSeven";
import RowSix from "./components/RowSix";
import RowThree from "./components/RowThree";
import RowTwo from "./components/RowTwo";
import Title from "./components/Title";

export default function App(){
    return(
        <>
         <Title/>
        <Heading/>
          <main>
        <div>
            <table border={1}>
                <RowOne/>
                <RowTwo/>
                <RowThree/>
                <RowFour/>
                <RowFive/>
                <RowSix/>
                <RowSeven/>
                <RowEight/>
                <RowNine/>               
                
            </table>
        </div>
      </main>
       
        </>
    );
}