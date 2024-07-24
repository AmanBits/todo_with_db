import style from '../assets/css/notification.module.css';
import myImage from '../assets/images/icons/bell-860.png'; 
const Notification = () => {
  return (
    <div className={style.notification}>
    <img src={myImage} alt=""/>
    <span className={style.badge}>0</span>
</div>
  );
};

export default Notification;
