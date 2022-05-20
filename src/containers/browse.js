import React, { useContext, useState, useEffect, useRef } from "react";
import { SelectProfileContainer } from "./profiles";
import { FooterContainer } from "./footer";
import { FirebaseContext } from "../context/firebase";
import { Card, Loading, Header, Info } from "../components";
import lockBody from "../state/lockbody";
import logo from "../logo.svg";
import * as ROUTES from "../constants/routes";

export function BrowseContainer(slides) {
  const [category, setCategory] = useState("series");
  const [slideRows, setSlideRows] = useState([]);
  const [profile, setProfile] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [showInfo, setShowInfo] = useState(false);
  const [itemShow, setItemShow] = useState({});
  const [yOffSet, setYOffSet] = useState(0);

  const infoRef = useRef(null);

  const { firebase } = useContext(FirebaseContext);

  const user = firebase.auth().currentUser || {};

  const handleScroll = () => {
    setYOffSet(window.pageYOffset);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [profile.displayName]);

  useEffect(() => {
    setSlideRows(slides["slides"][category]);
  }, [slides, category]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  return profile.displayName ? (
    <>
      {loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}
      <Header src="joker1" dontShowOnSmallViewPort>
        <Header.Frame isFixed={true} yOffSet={yOffSet}>
          <Header.Group>
            <Header.Logo to={ROUTES.HOME} alt="Netflix" src={logo} />
            <Header.TextLink
              active={category === "series" ? "true" : "false"}
              onClick={() => setCategory("series")}
            >
              Series
            </Header.TextLink>
            <Header.TextLink
              active={category === "flims" ? "true" : "false"}
              onClick={() => setCategory("films")}
            >
              Films
            </Header.TextLink>
          </Header.Group>
          <Header.Group>
            <Header.Search
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
            <Header.Profile>
              <Header.Picture src={user.photoURL} />
              <Header.Dropdown>
                <Header.Group>
                  <Header.Picture src={user.photoURL} />
                  <Header.TextLink>{user.displayName}</Header.TextLink>
                </Header.Group>
                <Header.Group>
                  <Header.TextLink onClick={() => firebase.auth().signOut()}>
                    Sign out
                  </Header.TextLink>
                </Header.Group>
              </Header.Dropdown>
            </Header.Profile>
          </Header.Group>
        </Header.Frame>
        <Header.Feature>
          <Header.FeatureCallOut>Watch Joker Now</Header.FeatureCallOut>
          <Header.Text>
            Forever alone in a crowd, failed comedian Arthur Fleck seeks
            connection as he walks the streets of Gotham City. Arthur wears two
            masks -- the one he paints for his day job as a clown, and the guise
            he projects in a futile attempt to feel like he&apos;s part of the
            world around him.
          </Header.Text>
          <Header.Group>
            <Header.PlayButton>Play</Header.PlayButton>
            <Header.InfoButton>More Info</Header.InfoButton>
          </Header.Group>
        </Header.Feature>
      </Header>
      <Card.Group>
        {slideRows.map((slideItem) => (
          <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
            <Card.Title>{slideItem.title}</Card.Title>
            <Card.Entity>
              {slideItem.data.map((item) => (
                <>
                  <Card.ItemContainer>
                    <Card.Item
                      key={item.docId}
                      item={item}
                      onClick={() => {
                        setShowInfo((showInfo) => !showInfo);
                        lockBody(true);
                        item.category = category;
                        setItemShow(item);
                      }}
                    >
                      <Card.Image
                        src={`./images/${category}/${item.genre}/${item.slug}/small.jpg`}
                      />
                      <Card.Info item={item}></Card.Info>
                    </Card.Item>
                  </Card.ItemContainer>
                  <Card.ItemContainer>
                    <Card.Item
                      key={item.docId}
                      item={item}
                      onClick={() => {
                        setShowInfo((showInfo) => !showInfo);
                        lockBody(true);
                        item.category = category;
                        setItemShow(item);
                      }}
                    >
                      <Card.Image
                        src={`./images/${category}/${item.genre}/${item.slug}/small.jpg`}
                      />
                      <Card.Info item={item}></Card.Info>
                    </Card.Item>
                  </Card.ItemContainer>
                </>
              ))}
            </Card.Entity>
          </Card>
        ))}
      </Card.Group>
      <Info active={showInfo} ref={infoRef} yOffSet={yOffSet}>
        <Info.Content active={showInfo}>
          <Info.Background
            src={`/images/${itemShow.category}/${itemShow.genre}/${itemShow.slug}/large.jpg`}
          >
            <Info.CloseButton
              onClick={() => {
                setShowInfo((showInfo) => !showInfo);
                lockBody(false);
              }}
            />
            <Info.Title>{itemShow.title}</Info.Title>
            <Info.Group justifyContent="space-between">
              <Info.Group flexWrap="nowrap">
                <Header.PlayButton marginTop={"0"}>Play</Header.PlayButton>
                <Card.Button
                  isBlack={true}
                  src={"/images/icons/add.svg"}
                  toolTip={"Add to My List"}
                />
                <Card.LikeButtons />
              </Info.Group>
              <Info.Group>
                <Card.Button
                  isBlack={true}
                  src={"/images/icons/mute.svg"}
                  toolTip={""}
                />
              </Info.Group>
            </Info.Group>
          </Info.Background>
          <Info.Group margin={"0 45px"}>
            <Info.Column>
              <Info.Row>
                <Info.Meta />
                <Info.Subtitle>{itemShow.description}</Info.Subtitle>
              </Info.Row>
              <Info.Row>
                <Info.Group>
                  <Info.DetailTitle>Cast:</Info.DetailTitle>
                  &nbsp;
                  <Info.DetailContent>Joaquin Phoenix,</Info.DetailContent>
                  &nbsp;
                  <Info.DetailContent>Robert De Niro,</Info.DetailContent>
                  &nbsp;
                  <Info.DetailContent>Zazie Beets,</Info.DetailContent>
                  &nbsp;
                  <Info.DetailContent>more,</Info.DetailContent>
                </Info.Group>
                <Info.Group margin="5px 0">
                  <Info.DetailTitle>Genres:</Info.DetailTitle>
                  &nbsp;
                  <Info.DetailContent>Social Issue Dramas,</Info.DetailContent>
                  &nbsp;
                  <Info.DetailContent>US Movies,</Info.DetailContent>
                  &nbsp;
                  <Info.DetailContent>Crime Movies</Info.DetailContent>
                </Info.Group>

                <Info.Group margin="5px 0">
                  <Info.DetailTitle>This movie is:</Info.DetailTitle>
                  &nbsp;
                  <Info.DetailContent>Violent,</Info.DetailContent>
                  &nbsp;
                  <Info.DetailContent>Gritty</Info.DetailContent>
                </Info.Group>
              </Info.Row>
            </Info.Column>
          </Info.Group>
        </Info.Content>
      </Info>
      <FooterContainer />
    </>
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  );
}
