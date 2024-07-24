import style from "../assets/css/apptitle.module.css";
import Notification from "./Notification";

const AppTitle = () => {
  return (
    <div className={style.titlebox}>
      <h1 className={style.h1}>+WishLists <Notification/></h1>
     

    </div>
  );
};

export default AppTitle;
