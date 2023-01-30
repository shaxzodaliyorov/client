import React, { useEffect } from "react";
import "./ui.css";
import { AiOutlineSend } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import Comments from "../Services/project/Comments";
import { useState } from "react";
import { useSelector } from "react-redux";
const CommentsModal = ({ setCommitShow, defaultId }) => {
  const [post, setPost] = useState("");
  const [result, setResult] = useState([]);
  const { user,logined} = useSelector((state) => state.LoginSlice);
  const [loading, setLoading] = useState(false);
  const GetCommit = async () => {
    setLoading(true);
    const data = await Comments.GET(defaultId);
    setResult(data);
    setLoading(false);
  };

  const CommentPost = async () => {
    const Commentdata = { comment: post, user: user.email };
    const data = await Comments.POST(defaultId, Commentdata);
    GetCommit();
    setPost("");
  };

  useEffect(() => {
    GetCommit();
  }, []);

  return (
    <>
      <div className="CommentModal">
        <h1 className="text-center text-white text-lg my-2">Comments</h1>
        <div className="CommentContent py-2 px-2 ">
          {!result.length ? (
            <p className="text-center text-[#fff] text-[17px]">
              {loading ? "Loading..." : "No Posts"}
            </p>
          ) : (
            ""
          )}
          {result.map((item, index) => {
            return (
              <div
                className="w-[100%] flex justify-between px-1 py-2 bg-[#3d3d3d] rounded-[3px] items-center my-2"
                key={index}
              >
                <div className="w-[10%] h-[100%] flex justify-center items-center mx-2">
                  <CgProfile size={"1.7rem"} color="#fff" />
                </div>
                <div className="w-[90%] h-[100%]">
                  <h1 className="text-[18px]" style={{ color: "#5da6f8" }}>
                    {item.user}
                  </h1>
                  <p className="text-[#fff] text-[13px]">{item.comment}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="w-[100%] flex justify-between Create_comments px-4 py-2">
          <input
            type="text"
            placeholder="Add Cooments"
            value={post}
            onChange={(e) => setPost(e.target.value)}
          />
          <button className="mx-2" onClick={CommentPost} disabled={!logined} >
            <AiOutlineSend size={"2rem"} color="#fff" />
          </button>
        </div>
      </div>
      <div className="BlurCommit" onClick={() => setCommitShow(false)}></div>
    </>
  );
};

export default CommentsModal;
