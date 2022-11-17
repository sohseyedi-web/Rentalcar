import "./About.scss";
import { RiMailSendLine } from "react-icons/ri";
import Car from "../../../assets/about-pic.png";

const About = () => {
  return (
    <>
      <section className="about">
        <div className="about-container container">
          <div className="about-container__details">
            <h4 className="about-container__details-title">درباره ما</h4>
            <p className="about-container__details-subtitle">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
              ستون و سطرآنچنان که لازم است
            </p>
            <p className="about-container__details-subtitle">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است
            </p>
          </div>
          <div className="about-container__image">
            <img src={Car} alt="rent" />
          </div>
        </div>
      </section>
      <section className="news">
        <div className="container news-container">
          <h3>برای آگاهی از جدیدترین اخبار ایمیل خود را وارد کنید</h3>
          <div className="news-container__box">
            <input type="email" placeholder="example@gmail.com" dir="ltr" />
            <button>
              <RiMailSendLine />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
