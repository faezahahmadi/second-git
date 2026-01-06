import './App.css';
import Badge from './components/Badge';
function App() {

  return (
    <div>
      <Badge course={"React"} week={1} topic={"Props"}></Badge>
      <Badge course={"HTML"} week={2} topic={"web development"}></Badge>
      <Badge course={"python"} week={1} topic={"varible"}></Badge>
      <Badge course={"Data Strucure"} week={2} topic={"Lists"}></Badge>
    </div>
  );

}

export default App
