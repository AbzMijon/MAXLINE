import styles from './freespinsBlock.module.scss';
import fireLeftVideo from '../../../assets/gifs/fireLeft.webm';
import fireRightVideo from '../../../assets/gifs/fireRight.webm';
import freeSpinsBG from '../../../assets/imgs/freeSpinsBG.webp';
import fireLeftGIF from '../../../assets/gifs/fireLeft.gif';
import fireRightGIF from '../../../assets/gifs/fireRight.gif';

export default function FreespinsBlock() {
    return (
        <div className={styles.freespinsBlock}>
            <img 
                src={freeSpinsBG} 
                alt="" 
                className={styles.freespinsBlock__bg}
                loading="lazy"
            />
            
            <video
                autoPlay
                loop
                muted
                playsInline
                className={styles.freespinsBlock__fireLeft}
                aria-hidden="true"
            >
                <source src={fireLeftVideo} type="video/webm" />
                <img 
                    src={fireLeftGIF} 
                    alt="" 
                    className={styles.freespinsBlock__fireLeft}
                    loading="lazy"
                    decoding="async"
                />
            </video>
            <video
                autoPlay
                loop
                muted
                playsInline
                className={styles.freespinsBlock__fireRight}
                aria-hidden="true"
            >
                <source src={fireRightVideo} type="video/webm" />
                <img 
                    src={fireRightGIF} 
                    alt="" 
                    className={styles.freespinsBlock__fireRight}
                    loading="lazy"
                    decoding="async"
                />
            </video>
            <p className={styles.freespinsBlock__spinsCount}>200</p>
            <p className={styles.freespinsBlock__spinsText}>ФРИСПИНОВ</p>
            <p className={styles.freespinsBlock__spinsForRegistr}>ЗА РЕГИСТРАЦИЮ</p>
        </div>
    )
}