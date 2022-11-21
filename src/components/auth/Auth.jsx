import "./Auth.scss";
import { useState, useEffect } from "react";
import Helmet from "react-helmet";
import Empty from "../common/isEmpty/Empty";
import Container from "../../container/Container";
import { useRent } from "../../context/rentProvider";
import { RiArrowLeftLine, RiArrowRightLine } from "react-icons/ri";

const Auth = () => {
  let progress = [];
  const data = useRent();
  const [circle, setCircle] = useState(4);
  const [current, setCurrent] = useState(0);
  const [width, setWidth] = useState(0);
  const hasCarRent = data.filter((d) => d.rentLen > 0);
  const activeForm = (index) => {
    if (current === index) return setCurrent(null);
    setCurrent(index);
  };

  for (let i = 0; i < circle; i++) {
    progress.push(
      <div
        key={i}
        className={
          i <= current
            ? "form-wrap__progress-steps pr-steps-active"
            : "form-wrap__progress-steps"
        }
      >
        {i + 1}
      </div>
    );
  }

  useEffect(() => {
    setWidth((100 / (circle - 1)) * current);
  }, [circle, current]);

  return (
    <Container>
      <Helmet>
        <title>ثبت درخواست</title>
      </Helmet>
      <div className="container">
        {hasCarRent.length === 0 ? (
          <Empty title={"لطفا یک ماشین را انتخاب کنید"} />
        ) : (
          <div className="form">
            <form action="" className="form-wrap">
              <h3 className="form-wrap__title">
                {" "}
                ثبت درخواست {hasCarRent[0].name}
              </h3>
              <div className="form-wrap__progress">
                <div
                  className="form-wrap__progress-line"
                  style={{ width: width + "%" }}
                ></div>
                {progress}
              </div>
              <div
                className={
                  current === 0
                    ? "form-wrap__steps steps-active"
                    : "form-wrap__steps"
                }
              >
                <div className="form-wrap__steps-group">
                  <label htmlFor="full">نام و نام خانوادگی</label>
                  <input type="text" name="full" id="full" />
                </div>
                <div className="form-wrap__steps-group">
                  <label htmlFor="email">ایمیل</label>
                  <input type="email" name="email" id="email" dir="ltr" />
                </div>
                <div className="form-wrap__steps-btn">
                  <a
                    className="form-wrap__steps-btn__box next-btn"
                    onClick={() => activeForm((prevState) => prevState + 1)}
                  >
                    <span>بعدی</span>
                    <span className="form-wrap__steps-btn__box-icon">
                      <RiArrowLeftLine />
                    </span>
                  </a>
                </div>
              </div>
              <div
                className={
                  current === 1
                    ? "form-wrap__steps steps-active"
                    : "form-wrap__steps"
                }
              >
                <div className="form-wrap__steps-group">
                  <label htmlFor="phone">شماره تلفن</label>
                  <input type="text" name="phone" id="phone" dir="ltr" />
                </div>
                <div className="form-wrap__steps-group">
                  <label htmlFor="city">محل سکونت</label>
                  <input type="text" name="city" id="city" />
                </div>
                <div className="form-wrap__steps-btns">
                  <a
                    className="form-wrap__steps-btns__box perv-btn"
                    onClick={() => activeForm((prevState) => prevState - 1)}
                  >
                    <span className="form-wrap__steps-btn__box-icon">
                      <RiArrowRightLine />
                    </span>
                    <span>قبلی</span>
                  </a>
                  <a
                    className="form-wrap__steps-btns__box next-btn"
                    onClick={() => activeForm((prevState) => prevState + 1)}
                  >
                    <span>بعدی</span>
                    <span className="form-wrap__steps-btn__box-icon">
                      <RiArrowLeftLine />
                    </span>
                  </a>
                </div>
              </div>
              <div
                className={
                  current === 2
                    ? "form-wrap__steps steps-active"
                    : "form-wrap__steps"
                }
              >
                <div className="form-wrap__steps-group">
                  <label htmlFor="code">کد ملی</label>
                  <input type="text" name="code" id="code" dir="ltr" />
                </div>
                <div className="form-wrap__steps-group">
                  <label htmlFor="date">تاریخ تولد</label>
                  <input type="date" name="date" id="date" dir="ltr" />
                </div>
                <div className="form-wrap__steps-btns">
                  <a
                    className="form-wrap__steps-btns__box perv-btn"
                    onClick={() => activeForm((prevState) => prevState - 1)}
                  >
                    <span className="form-wrap__steps-btn__box-icon">
                      <RiArrowRightLine />
                    </span>
                    <span>قبلی</span>
                  </a>
                  <a
                    className="form-wrap__steps-btns__box next-btn"
                    onClick={() => activeForm((prevState) => prevState + 1)}
                  >
                    <span>بعدی</span>
                    <span className="form-wrap__steps-btn__box-icon">
                      <RiArrowLeftLine />
                    </span>
                  </a>
                </div>
              </div>
              <div
                className={
                  current === 3
                    ? "form-wrap__steps steps-active"
                    : "form-wrap__steps"
                }
              >
                <div className="form-wrap__steps-group">
                  <label htmlFor="cart">شماره گواهینامه</label>
                  <input type="text" name="cart" id="cart" dir="ltr" />
                </div>
                <div className="form-wrap__steps-group">
                  <label htmlFor="post">کد پستی</label>
                  <input type="text" name="post" id="post" dir="ltr" />
                </div>
                <div className="form-wrap__steps-btns">
                  <a
                    className="form-wrap__steps-btns__box perv-btn"
                    onClick={() => activeForm((prevState) => prevState - 1)}
                  >
                    <span className="form-wrap__steps-btn__box-icon">
                      <RiArrowRightLine />
                    </span>

                    <span>قبلی</span>
                  </a>
                  <a className="form-wrap__steps-btns__box">
                    <span>ثبت نام</span>
                    <span className="form-wrap__steps-btn__box-icon">
                      <RiArrowLeftLine />
                    </span>
                  </a>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    </Container>
  );
};

export default Auth;
