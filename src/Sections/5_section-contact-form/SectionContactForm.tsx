import { useState } from "react";
import Button from "../../components/layout/button/Button";
import { FlexContainer } from "../../components/layout/flex/FlexContainer";
import "./SectionContactForm.scss";

import vid1 from "../6_section-our-projects/mid.mp4";

import icon1 from "../2_section-steps/062ab54e-o-saas-benefit-icon-02.svg";
import icon2 from "../2_section-steps/433a1368-o-saas-benefit-icon-03.svg";
import icon3 from "../2_section-steps/ad2e7f73-o-saas-benefit-icon-01.svg";
import BackgroundVideo from "../6_section-our-projects/BackgroundVideo";
import { ISectionProps } from "../model";

interface ISectionContactFormProps extends ISectionProps {}

interface IUserInfoForm {
  userName: string;
  userEmail: string;
}

export function SectionContactForm(props: ISectionContactFormProps) {
  const [userInfo, setUserInfo] = useState({
    userEmail: "",
    userName: "",
  } as IUserInfoForm);
  const onDataChanged = (
    e: React.ChangeEvent<HTMLInputElement>,
    fieldName: keyof IUserInfoForm
  ) => {
    switch (fieldName) {
      case "userEmail":
        setUserInfo({
          ...userInfo,
          userEmail: e.target.value,
        });
        break;
      case "userName":
        setUserInfo({
          ...userInfo,
          userName: e.target.value,
        });
        break;
    }
  };

  const onSubmit = () => {
    console.log("send", userInfo);
    alert(
      `Ok fine, I will send Name=${userInfo.userName} on Email=${userInfo.userEmail}`
    );
    setUserInfo({
      userEmail: "",
      userName: "",
    });
  };

  return (
    <BackgroundVideo src={vid1}>
      <FlexContainer
        id={props.id}
        className="section-contact-form"
        flexDirection="row-reverse"
        justifyContent="flex-start"
        directionOnSmallScreen="column"
        gap="32px"
      >
        <FlexContainer
          className="side-form"
          flexDirection="column"
          justifyContent="space-evenly"
        >
          {/* info 1 */}
          <FlexContainer flexDirection="row" gap="14px">
            <img alt="icon1" src={icon1} />
            <FlexContainer flexDirection="column">
              <div className="title">E-COMMERCE</div>
              <div className="text">
                Maecenas varius nunc a odio ultrices, non consectetur nunc
                scelerisque. Mauris nec condimentum est, id eleifend orci.
              </div>
            </FlexContainer>
          </FlexContainer>
          {/* info 2 */}
          <FlexContainer flexDirection="row" gap="14px">
            <img alt="icon1" src={icon2} />
            <FlexContainer flexDirection="column">
              <div className="title">EMAIL SYSTEMS</div>
              <div className="text">
                Maecenas varius nunc a odio ultrices, non consectetur nunc
                scelerisque. Mauris nec condimentum est, id eleifend orci.
              </div>
            </FlexContainer>
          </FlexContainer>
          {/* info 3 */}
          <FlexContainer flexDirection="row" gap="14px">
            <img alt="icon1" src={icon3} />
            <FlexContainer flexDirection="column">
              <div className="title">VIDEO PRODUCTION</div>
              <div className="text">
                Maecenas varius nunc a odio ultrices, non consectetur nunc
                scelerisque. Mauris nec condimentum est, id eleifend orci.
              </div>
            </FlexContainer>
          </FlexContainer>
        </FlexContainer>
        <FlexContainer
          className="left-side-menu"
          flexDirection="column"
          justifyContent="space-evenly"
        >
          <h3 className="title">Interested In Our Services?</h3>
          <p className="info">
            Use the form headline and this subheader to describe the purpose of
            your form.
          </p>

          <label htmlFor="input-name">Name</label>
          <input
            className="form-input"
            id="input-name"
            placeholder="John Doe"
            type={"text"}
            value={userInfo.userName}
            onChange={(e) => onDataChanged(e, "userName")}
          />

          <label htmlFor="input-email">Email</label>
          <input
            id="input-email"
            className="form-input"
            placeholder="John.Doe@gmail.com"
            type={"email"}
            value={userInfo.userEmail}
            onChange={(e) => onDataChanged(e, "userEmail")}
          />

          <label htmlFor="input-subject">Subject</label>
          <input id="input-subject" className="form-input" type={"text"} />

          <label htmlFor="input-message">Message</label>
          <textarea id="input-message" className="form-input" rows={6} />

          <Button onClick={onSubmit}>Submit</Button>
        </FlexContainer>
      </FlexContainer>
    </BackgroundVideo>
  );
}
