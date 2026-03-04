import RegistrForm from '../../Components/Registartion/Form/RegistrForm';
import registrationBG from '../../assets/imgs/registrationBG.webp';
import logo from '../../assets/imgs/logo.webp';
import registrationGold from '../../assets/imgs/registrationGold.webp';
import registrationBlueGold from '../../assets/imgs/registrationBlueGold.webp';
import zeusImg from '../../assets/imgs/olympus.webp';
import styles from './registrationPage.module.scss';
import FreespinsBlock from '../../Components/Registartion/FreespinsBlock/FreespinsBlock';
import registrationSphere from '../../assets/imgs/registrationSphere.webp';

export default function RegistrationPage() {
    return (
        <section className={styles.registartionPage}>
            <img src={registrationBG} alt="" className={styles.registartionPage__bgWrapper} />
            <img 
                src={registrationSphere} 
                alt="" 
                className={styles.registartionPage__sphere}
                loading="lazy"
                decoding="async"
            />
            <div className={styles.registartionPage__container}>
                <div className={styles.registartionPage__registrAside}>
                    <RegistrForm />
                </div>
                <div className={styles.registartionPage__logo}>
                    <img src={logo} alt="" loading="eager" />
                </div>
                <div className={styles.registartionPage__freespins}>
                    <FreespinsBlock />
                </div>
                <img 
                    src={registrationBlueGold} 
                    alt="" 
                    className={styles.registartionPage__blueGold}
                    loading="lazy"
                    decoding="async"
                />
                <img 
                    src={registrationGold} 
                    alt="" 
                    className={styles.registartionPage__gold} 
                    loading="lazy"
                    decoding="async" 
                />
                <img src={zeusImg} alt="" className={styles.registartionPage__zeus} loading="lazy" />
                <div className={styles.registartionPage__blueBlur}></div>
                <div className={styles.registartionPage__purpleBlur}></div>
            </div>
        </section>
    )
}