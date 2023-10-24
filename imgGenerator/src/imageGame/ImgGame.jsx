import "/D:/code playground/React/o7tasks/node_modules/bootstrap/dist/css/bootstrap.min.css";
import Images from "./Imgstore";
import "./ImgGame.css";
import { useState } from "react";
export default function ImgGame() {
  let [imgNum, setImgNum] = useState(0);

  function inputHandler(e) {
    var input = e.target.value;
    console.log(input);
    if (input > 10) {
      console.log(">>>>>>>>>>> number is greater than 10");
    } else {
      setImgNum(input);
      console.log("img", imgNum);
    }
  }
  // console.log('>>>>>>>>>>>', imgNum)
  var imgToShow = [...Images];
  imgToShow = Images.slice(0, imgNum);
  let imgToShowLen = imgToShow.length;
  let randomnumber = Math.floor(Math.random() * imgToShowLen);

  console.log(">>>>>>>>>>> images array", imgToShow);

  return (
    <>
      <div className="gamearea">
        <h1 className="heading">Img Generator</h1>

        <input
          id="in"
          type="number"
          className="input"
          onChange={inputHandler}
        />
        {imgToShowLen == 0 ? null : (
          <img src={imgToShow[randomnumber]} className="randomimg img-fluid" />
        )}

        <div className="imgbox">
          {imgToShow.map((event, index) => (
            <>
              <div className="imgcontainer">
                <img
                  className="img-fluid"
                  key={index}
                  src={event}
                  alt="bad request"
                />
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}
