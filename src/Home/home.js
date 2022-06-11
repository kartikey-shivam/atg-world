import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
// import "bootstrap/dist/css/bootstrap.css";
import Bgimg1 from "./../assets/bgimg1.png";
import Bgimg2 from "./../assets/bgimg2.png";
import Bgimg3 from "./../assets/bgimg3.png";
import Share from "./../assets/logo/share.svg";
import Calender from "./../assets/logo/calender.svg";
import Location from "./../assets/logo/location.svg";
import Bag from "./../assets/logo/bag.svg";
import Grp from "./../assets/logo/grp.svg";
import Arrow from "./../assets/logo/down.svg";
import Dot from "./../assets/logo/dots.svg";
import Edit from "./../assets/logo/edit.svg";
import Info from "./../assets/logo/info.svg";
function Post(props) {
  return (
    <div className="post_con">
      <img className="post-img" src={props.img} />
      <div className="post-content">
        <p className="post-content_type">{props.type}</p>
        <div className="dot-con">
          <h3 className="post-content_heading">{props.heading}</h3>
          <div className="dot-con_img">
            {" "}
            <img src={Dot} />
          </div>
        </div>
        <p className={props.toggle}>{props.statement}</p>
        <div className={props.tagType}>
          <div className="tagType_part1">
            <p className="tagType-par">
              {" "}
              <img src={props.logo} /> {props.info1}
            </p>
            <p className="tagType-par">
              <img src={Location} />
              {props.location}
            </p>
          </div>
          <div className="tagType_part2">
            <button className={props.btnClass}>{props.btn}</button>
          </div>
        </div>
      </div>
      <div className="post-con_user">
        <div className="post_user">
          <div className={props.up}></div>
          <div className="post_user-name">{props.name}</div>
        </div>
        <div className="post_tag">
          <p className="post_views">1.4k views</p>
          <div className="share-btn">
            <img src={Share} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default function Home() {
  const { groupStatus, user } = useSelector((state) => state.custom);
  console.log(groupStatus, "heyt");
  const dispatch = useDispatch();

  return (
    <div>
      <div className="container-fluid-ex">
        <div className=" ">
          <div></div>
          <div></div>
        </div>
        <div className="title_con">
          <h4 className="title_head">Computer Engineering</h4>
          <p className="title_par">142,765 Computer Engineers follow this</p>
        </div>
      </div>
      <section className="section">
        <div className="container-fluid section-nav">
          <div className="section-nav1">
            <button className="section-nav_btn section-nav_btn-active">
              All Posts(32)
            </button>
            <button className="section-nav_btn">Article</button>
            <button className="section-nav_btn">Event</button>
            <button className="section-nav_btn">Education</button>
            <button className="section-nav_btn">Job</button>
          </div>
          <div className="section-nav2 container-fluid">
            <button className=" section-nav_btn section-nav_btn-active">
              All Posts(328)
            </button>
          </div>
          <div className="section-nav-btns">
            <button className="section-nav_secbtn">
              Write a Post <img src={Arrow} />
            </button>
            <button
              className="section-nav_terbtn"
              onClick={dispatch({ type: "updateGroupStatus" })}
            >
              <img src={Grp} />
              Join Groups
            </button>
          </div>
        </div>
        <div className="sub-sec">
          <div>
            <Post
              type="✍️Article"
              img={Bgimg1}
              heading="What if regular brands had regular fonts? Meet RegulaBrands!"
              statement="I’ve worked in UX for the better part of a decade. F.."
              name="Sarthak Kamra"
              up="post_user-img1"
              toggle="post-content_statement-true"
              tagType="post-content_tagType-false"
            />
            <Post
              type=" 🔬️ Education "
              img={Bgimg2}
              heading="Tax Benefits for Investment under National Pension Scheme launched by Government"
              statement="I’ve worked in UX for the better part of a decade. F.."
              up="post_user-img2"
              name="Sarah West"
              toggle="post-content_statement-true"
              tagType="post-content_tagType-false"
            />
            <Post
              type="🗓️ Meetup"
              img={Bgimg3}
              heading="Finance & Investment Elite Social Mixer @Lujiazui"
              statement="I’ve worked in UX for the better part of a decade. F.."
              up="post_user-img3"
              name="Ronal Jones"
              toggle="post-content_statement-false"
              tagType="post-content_tagType-true"
              logo={Calender}
              info1="Fri, 12 Oct, 2018"
              location="Ahmedabad, India"
              btn="Visit Website"
              btnClass="tagType-btn1"
            />
            <Post
              type="💼️ Job "
              heading="Software Develope"
              statement="I’ve worked in UX for the better part of a decade. F.."
              up="post_user-img4"
              name="Joseph Gray"
              toggle="post-content_statement-false"
              tagType="post-content_tagType-true"
              logo={Bag}
              info1="Innovaccer Analytics Private Ltd."
              location="Noida, India"
              btn="Apply on Timesjobs"
              btnClass="tagType-btn2"
            />
          </div>
          {{ groupStatus } ? (
            <div className="sub-sec_right">
              <div className="sub-sec-location">
                <div>
                  <img src={Location} />
                  Noida, India
                </div>
                <div className="edit-logo">
                  <img src={Edit} />
                </div>
              </div>
              <div>
                <p className="sub-sec-statement">
                  <img src={Info} />
                  Your location will help us serve better and extend a
                  personalised experience.
                </p>
              </div>
            </div>
          ) : (
            <div>empty</div>
          )}
          ;
        </div>
      </section>
    </div>
  );
}
