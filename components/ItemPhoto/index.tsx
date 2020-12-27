import React from "react";
import Link from "next/link";
import {RootElement, Description, AuthorInfo, ActionBlock} from "./styles"
import {downloadPhoto} from "../../utils/config"
type Props = {
  key: string
  alt: string
  img: string
  userAvatar: string
  instagram: string
  userName: string
  id: string
}
const ItemPhoto = (props : Props) => (
  <RootElement>
    <a>
      <img alt={props.alt} src={props.img} />
    </a>
    <Description>
      <AuthorInfo>
        <img
          src={props.userAvatar}
          alt={props.userName}
          className="profile-img"
        />
        <h3>{props.userName}</h3>
        <span>{props.instagram !== null ? `@${props.instagram}` : ""}</span>
      </AuthorInfo>
      <ActionBlock>
        <img src="/images/favorite.svg" alt="like" />
        <Link href={`/photo/${props.id}`}>
          <img src="/images/maximize.svg" alt="maximize" />
        </Link>
        <img
          src="/images/download.svg"
          alt="download"
          onClick={downloadPhoto.bind(null, props.id)}
        />
      </ActionBlock>
    </Description>
  </RootElement>
);

const optimization = (prevProps: Props, nextProps: Props) => {
  if (prevProps.id === nextProps.id) return true
  return false
};

export default React.memo(ItemPhoto, optimization);
