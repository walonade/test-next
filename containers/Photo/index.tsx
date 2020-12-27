import { ComponentProps } from "react";
import ItemPhoto from "../../components/ItemPhoto";
import { masonryOptions, downloadPhoto } from "../../utils/config";
import {PhotoContainer, Container, Description, ProfileInfo, ButtonsContainer, CentralPhoto, TagsBlock, Tags, MasonrySimilarPhotos} from "./styles"
const PhotoPageContainer = (props : ComponentProps<any>) => {
  const {photo} = props
  console.log(photo)
    return (
      <>
        <PhotoContainer imageUrl={photo.urls.regular}>
          <Container>
            <Description>
              <img
                src={photo.user.profile_image.medium}
                alt={photo.user.name}
              />
              <ProfileInfo>
                <h2>{photo.user.name}</h2>
                <span>
                  {photo.user.instagram_username
                    ? `@${photo.user.instagram_username}`
                    : ""}
                </span>
              </ProfileInfo>
            </Description>
            <ButtonsContainer>
              <button>
                <img src="/images/favorite_gray.svg" />
              </button>
                <button onClick={downloadPhoto.bind(null, photo.id)}>
                  <img src="/images/download.svg" />
                  <span>Download</span>
                </button>
            </ButtonsContainer>
            <CentralPhoto src={photo.urls.regular}/>
            {photo.tags.length !== 0 ? <TagsBlock>
              <span>Похожие тэги</span>
              <Tags>
                {photo.tags.map((item: any) => {
                  return <span key={item.title}>{item.title}</span>;
                })}
              </Tags>
            </TagsBlock>
            : null }
          </Container>
        </PhotoContainer>
        <Container>
          <h2>Похожие фотографии</h2>
          <MasonrySimilarPhotos options={masonryOptions}>
            {photo.related_collections.results.map((item: any, i: number) => {
              return (
                <ItemPhoto
                  key={item.id}
                  alt={item.cover_photo.description}
                  img={item.cover_photo.urls.small}
                  userAvatar={item.cover_photo.user.profile_image.medium}
                  instagram={item.cover_photo.user.instagram_username}
                  userName={item.cover_photo.user.name}
                  id={item.cover_photo.id}
                />
              );
            })}
          </MasonrySimilarPhotos>
        </Container>
      </>
    ) 
}
export default PhotoPageContainer
