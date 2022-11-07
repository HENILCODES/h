import React from "react";
import { Manu } from "./ManuFooter";
import "./CSS/home.css";

export default function HomePage() {

  return (
    <>
      <Manu Home="True" />
      <div className="after_manu">
        <div className="containt">
          <div className="web_detail text-center">
            <h1>
              Hello Welcome To My Website. This Web-site in You Can easy to See
              Program & Source Code.
            </h1>
          </div>
        </div>
        <div className="tabgroup">
          <div className="letest_blc">
            <h1> Latest Program Uploaded</h1>
            <h3 className="textColor">
              <i className="bi bi-forward"></i> HTML
            </h3>
            <h2>
              <a href="html.html#PH10" target="blank">
                # 10 calculator Project.<i className="bi bi-file-code"></i>
              </a>
            </h2>

            <h3 className="textColor">
              <i className="bi bi-forward"></i> Project
            </h3>
            <h2>
              {" "}
              <a href="PROJECT/Number_Gase/" target="blank">
                {" "}
                Number Guessing <i className="bi bi-eye-fill"></i>
              </a>
            </h2>
          </div>

          <div className="other_pl">
            <h1> Drive Link </h1>
            <div className="Link">
              <ul>
                <a
                  href="https://drive.google.com/drive/folders/11sO07hRSX5HpSzUSlDL8xndqBnK_nKq8?usp=sharing"
                  target="blank"
                >
                  {" "}
                  Assignment File{" "}
                </a>
                <a
                  href="https://drive.google.com/drive/folders/1GMhtcaWCaGAfe7F1qwJa4WhPlVOJyLZM?usp=sharing"
                  target="blank"
                >
                  {" "}
                  College Books{" "}
                </a>
                <a
                  href="https://drive.google.com/drive/folders/1qeoesLjrnpcnln0g2qGzrgAjMdytFrQ3"
                  target="blank"
                >
                  {" "}
                  Coding File
                </a>
                <a
                  href="https://drive.google.com/drive/folders/1rlXg6JYlY6Nk3aAVEOmUfPY0iWYpbO1A?usp=sharing"
                  target="blank"
                >
                  {" "}
                  Programming Book{" "}
                </a>
                <a
                  href="https://drive.google.com/drive/folders/1uQBS7WGsdGOYEftefRHNhEqUBStd-qyR?usp=sharing"
                  target="blank"
                >
                  Desktop Software{" "}
                </a>
              </ul>
            </div>
          </div>
        </div>
        <div className="just_fun">
          <h1> Just For Fun</h1>
          <div className="data">
            <h3>
              <i className="bi bi-forward"></i>{" "}
              <a href="https://henilcode.rf.gd/Code/" target="blank">
                Commands List
              </a>{" "}
              <i className="bi bi-eye-fill"></i>
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}
