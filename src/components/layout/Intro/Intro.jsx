import "./Intro.scss";
import Google from "../../../assets/512x512.png";
import IoS from "../../../assets/ios.png";

const Intro = () => {
  return (
    <section className="intro">
      <div className="intro-container container">
        <div className="intro-container__detail">
          <h1>
            <span> نمایشگاه آنلاین </span>
            <br />
            برای اجاره خودرو
          </h1>
          <p>
            لورم ایپسوم متنی تصادفی برای
            <br />
            تولید کنندگان محتوا میباشد
          </p>
          <div className="intro-container__detail-images">
            <img src={Google} alt="google" />
            <img src={IoS} alt="ios" />
          </div>
        </div>
        <div className="intro-container__wrap">
          <form action="" className="intro-container__wrap-form">
            <div className="intro-container__wrap-form__box">
              <span>شهر</span>
              <input type="search" placeholder="شهر مورد نظر ..." />
            </div>
            <div className="intro-container__wrap-form__box">
              <span>از تاریخ</span>
              <input type="date" />
            </div>
            <div className="intro-container__wrap-form__box">
              <span>تا تاریخ</span>
              <input type="date" />
            </div>
            <div className="intro-container__wrap-form__btn">
              <span style={{ visibility: "hidden" }}>----</span>
              <input type="submit" value="جست و جو" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Intro;
