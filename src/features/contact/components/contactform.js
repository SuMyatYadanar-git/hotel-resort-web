import React from "react";
import withMedia from "react-media-query-hoc/dist/with-media";

import MyInput from "../../../../src/tools/myInput";
import * as Colors from "../../../config/color.config";
import MyButton from "../../../../src/tools/myButton";

const ContactForm = props => {
  const { media } = props;
  return (
    <form className="py-2">
      <div className="d-flex flex-column flex-wrap justify-content-between py-3">
        <div className="d-flex flex-wrap py-2">
          <div className="flex-fill  p-1">
            <MyInput
              id={"name"}
              placeHolder={"Name"}
              style={{ fontColor: "#5A6367" }}
            />
          </div>
          <div className="flex-fill  p-1">
            <MyInput
              id={"email"}
              placeHolder={"Email"}
              style={{ fontColor: "#5A6367" }}
            />
          </div>
        </div>

        <div className="p-1 flex-fill py-2">
          <MyInput
            className=""
            id={"subject"}
            placeHolder={"Subject"}
            style={{ fontColor: "#5A6367" }}
          />
        </div>
        <div className="p-1 flex-fill py-2">
          <textarea
            id="message"
            placeholder="Your Message"
            style={{
              borderRadius: 0,
              fontSize: 12,
              fontColor: "#5A6367",
              maxHeight: "8rem",
              width: "100%",
              padding: 20,
              boxShadow:'none',
              border: `1px solid ${Colors.navbg}`
            }}
            onFocus={e =>
              (document.getElementById(
                "message"
              ).style.border = `2px solid ${Colors.textGold}`)
            }
          />
        </div>

        <div className=" p-1 py-2">
          <MyButton text={"Send"} width={media.desktop ? "50%" : "100%"} />
        </div>
      </div>
    </form>
  );
};
export default withMedia(ContactForm);
