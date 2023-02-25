import styles from './FormattedTime.module.scss';

const FormattedTime = ({ time }) => {
   
  var milliseconds = Math.floor((time % 1000) / 10),
    seconds = Math.floor((time / 1000) % 60),
    minutes = Math.floor((time / (1000 * 60)) % 60),
    hours = Math.floor((time / (1000 * 60 * 60)) % 24);  

    const formattedTime = [
      hours.toString().padStart(2, "0"),
      minutes.toString().padStart(2, "0"),
      seconds.toString().padStart(2, "0"),
    ].join(":");

    milliseconds=milliseconds.toString().padStart(2,"0");

    return (
    <div className={styles.timer}>
       {formattedTime}.{milliseconds}
    </div>
  );

};

export default FormattedTime;