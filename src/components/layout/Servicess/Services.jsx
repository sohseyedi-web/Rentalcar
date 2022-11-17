import "./Services.scss";
import {
    RiMapPin2Fill,
  RiCalendarCheckLine,
  RiCalendarEventLine,
} from "react-icons/ri";

const Services = () => {
  return (
    <section className="services">
      <div className="services-container container">
        <p className="services-container__title">
          در سه مرحله و به آسانی از ما ماشین اجاره کنید
        </p>
        <div className="services-container__lists">
          <div className="services-container__lists-item">
            <div className="services-container__lists-item__icon">
              <RiMapPin2Fill size={34}/>
            </div>
            <h4 className="services-container__lists-item__title">
              یک مکان را انتخاب کنید
            </h4>
            <p className="services-container__lists-item__desc">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
              ستون و سطرآنچنان که لازم است
            </p>
          </div>
          <div className="services-container__lists-item">
            <div className="services-container__lists-item__icon">
              <RiCalendarEventLine size={34}/>
            </div>
            <h4 className="services-container__lists-item__title">
              تاریخ تحویل گرفتن
            </h4>
            <p className="services-container__lists-item__desc">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
              ستون و سطرآنچنان که لازم است
            </p>
          </div>
          <div className="services-container__lists-item">
            <div className="services-container__lists-item__icon">
                <RiCalendarCheckLine size={34}/>
            </div>
            <h4 className="services-container__lists-item__title">
              ماشین رزرو کن
            </h4>
            <p className="services-container__lists-item__desc">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
              ستون و سطرآنچنان که لازم است
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
