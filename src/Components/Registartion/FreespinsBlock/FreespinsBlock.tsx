import styles from './freespinsBlock.module.scss';
import fireLeftGIF from '../../../assets/gifs/fireLeft.gif';
import fireRightGIF from '../../../assets/gifs/fireRight.gif';
import freeSpinsBG from '../../../assets/imgs/freeSpinsBG.png';

export default function FreespinsBlock() {
    return (
        <div className={styles.freespinsBlock}>
            <img src={freeSpinsBG} alt="" className={styles.freespinsBlock__bg} />
            <img
                src={fireLeftGIF} 
                alt="" 
                className={styles.freespinsBlock__fireLeft}
            />
            <img
                src={fireRightGIF} 
                alt=""
                className={styles.freespinsBlock__fireRight}
            />
            <p className={styles.freespinsBlock__spinsCount}>200</p>
            <p className={styles.freespinsBlock__spinsText}>ФРИСПИНОВ</p>
            <p className={styles.freespinsBlock__spinsForRegistr}>ЗА РЕГИСТРАЦИЮ</p>
        </div>
    )
}