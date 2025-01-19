import Card from "../Ui/Card";
import { BsFillFolderFill } from "react-icons/bs";
import { AiFillNotification } from "react-icons/ai";
import { GiLindenLeaf } from "react-icons/gi";
import { PiListChecksFill } from "react-icons/pi";


const CardFolder = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        gap: "20px"
      }}
    >
      <Card 
        textColor = 'white'
        backGround = '#FF7452'
        icon = {<BsFillFolderFill style={{color: '#FF7452', width: '30px', height: '30px'}}/>}
        bigText = "Project Manager"
        smallText = "Keeps task in order, deadlines in track, and team members alinged with Trello"
      />
      <Card 
        textColor = 'white'
        backGround = '#2684FF'
        icon = {<AiFillNotification style={{color: '#2684FF', width: '30px', height: '30px'}}/>}
        bigText = "Meetings"
        smallText = "Empower your team meetings to be more productive, empowering, and dare we say—fun."
      />
      <Card 
        textColor = 'white'
        backGround = '#57D9A3'
        icon = {<GiLindenLeaf style={{color: '#57D9A3', width: '30px', height: '30px'}}/>}
        bigText = "Onboarding"
        smallText = "Onboarding to a new company or project is a snap with Trello’s visual layout of to-do’s, resources, and progress tracking."
      />
      <Card 
        textColor = 'white'
        backGround = '#FFC400'
        icon = {<PiListChecksFill style={{color: '#FFC400', width: '30px', height: '30px'}}/>}
        bigText = "Task Managment"
        smallText = "Use Trello to track, manage, complete, and bring tasks together like the pieces of a puzzle, and make your team's projects a cohesive success every time."
      />
    </div>
  );
};

export default CardFolder;
