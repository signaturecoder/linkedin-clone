import React from "react";
import './Post.css';
import InputOption from "./InputOption";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";
import Avatar from "@material-ui/core/Avatar";

const Post = ({ profilePic, name, description, content }) => {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar src={profilePic} />
        <div className="post__info">
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
      </div>

      <div className="post__body">{content}</div>
      <div className="post__buttons">
        <InputOption Icon={ThumbUpAltOutlinedIcon} title="Like" color="gray" />
        <InputOption Icon={ChatOutlinedIcon} title="Comment" color="gray" />
        <InputOption Icon={ShareOutlinedIcon} title="Share" color="gray" />
        <InputOption Icon={SendOutlinedIcon} title="Send" color="gray" />
      </div>
    </div>
  );
};

export default Post;
