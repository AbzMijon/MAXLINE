import Button from '../../Components/Registartion/Button/Button';
import RegistrForm from '../../Components/Registartion/Form/RegistrForm';
import registrationBG from '../../assets/imgs/registrationBG.jpg';
import logo from '../../assets/imgs/logo.png';
import registrationGold from '../../assets/imgs/registrationGold.png';
import registrationBlueGold from '../../assets/imgs/registrationBlueGold.png';
import zeusImg from '../../assets/imgs/olympus.png';
import styles from './registrationPage.module.scss';
import FreespinsBlock from '../../Components/Registartion/FreespinsBlock/FreespinsBlock';
import registrationSphere from '../../assets/imgs/registrationSphere.png';

export default function RegistrationPage() {
    return (
        <section className={styles.registartionPage}>
            <img src={registrationBG} alt="" className={styles.registartionPage__bgWrapper} />
            <img src={registrationSphere} alt="" className={styles.registartionPage__sphere} />
            <div className={styles.registartionPage__container}>
                <div className={styles.registartionPage__registrAside}>
                    <RegistrForm />
                </div>
                <div className={styles.registartionPage__logo}>
                    <img src={logo} alt="" />
                </div>
                <div className={styles.registartionPage__freespins}>
                    <FreespinsBlock />
                </div>
                <img src={registrationBlueGold} alt="" className={styles.registartionPage__blueGold} />
                <img src={registrationGold} alt="" className={styles.registartionPage__gold} />
                <img src={zeusImg} alt="" className={styles.registartionPage__zeus} />
                <div className={styles.registartionPage__blueBlur}></div>
                <div className={styles.registartionPage__purpleBlur}></div>
            </div>
        </section>
    )
}