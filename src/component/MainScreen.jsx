import SelectBox from "./common/SelectBox";
import SearchBox from "./common/SearchBox";
import ArrivalDeparturesButton from "./common/ArrivalDeparturesButton";

function MainScreen() {
  return (
    <div className="w-4/5 h-screen items-center justify-center  ">
      <div className="flex flex-row items-center justify-center ">
        <SelectBox />
        <SearchBox />
      </div>

      <div className="flex flex-row items-center justify-center "> 
        <ArrivalDeparturesButton />
      </div>
      
    </div>
  );
}

export default MainScreen;
