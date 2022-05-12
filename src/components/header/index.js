import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import useFocus from "../../hooks/use-focus";
import {
  Background,
  ButtonLink,
  Container,
  FixedContainer,
  Logo,
  Feature,
  Text,
  FeatureCallOut,
  Link,
  Group,
  Picture,
  Profile,
  Dropdown,
  Search,
  SearchIcon,
  SearchInput,
  PlayButton,
  InfoButton,
} from "./styles/header";

export default function Header({ bg = true, children, ...restProps }) {
  return bg ? <Background {...restProps}>{children}</Background> : children;
}

Header.Text = function HeaderText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Header.TextLink = function HeaderTextLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};

Header.FeatureCallOut = function HeaderFeatureCallOut({
  children,
  ...restProps
}) {
  return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>;
};

Header.Feature = function HeaderFeature({ children, ...restProps }) {
  return <Feature {...restProps}>{children}</Feature>;
};

Header.Frame = function HeaderFrame({
  isFixed = false,
  children,
  ...restProps
}) {
  return !(isFixed === true) ? (
    <Container {...restProps}>{children}</Container>
  ) : (
    <FixedContainer {...restProps}>{children}</FixedContainer>
  );
};

Header.Group = function HeaderGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};

Header.Logo = function HeaderLogo({ to, ...restProps }) {
  return (
    <ReactRouterLink to={to}>
      <Logo {...restProps} />
    </ReactRouterLink>
  );
};

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
  return <ButtonLink {...restProps}>{children}</ButtonLink>;
};

Header.PlayButton = function HeaderPlayButton({ children, ...restProps }) {
  return (
    <PlayButton {...restProps}>
      <img src="/images/icons/play.svg" />
      {children}
    </PlayButton>
  );
};

Header.InfoButton = function HeaderInfoButton({ children, ...restProps }) {
  return (
    <InfoButton {...restProps}>
      <img src="/images/icons/info.svg" />
      {children}
    </InfoButton>
  );
};

Header.Picture = function HeaderPicture({ src, ...restProps }) {
  return <Picture {...restProps} src={`/images/users/${src}.png`} />;
};

Header.Profile = function HeaderProfile({ children, ...restProps }) {
  return <Profile {...restProps}>{children}</Profile>;
};

Header.Dropdown = function HeaderDropdown({ children, ...restProps }) {
  return <Dropdown {...restProps}>{children}</Dropdown>;
};

Header.Search = function HeaderSearch({
  searchTerm,
  setSearchTerm,
  ...restProps
}) {
  //const [searchActive, setSearchActive] = useState(false);
  const [inputFocus, setInputFocus] = useFocus();

  return (
    <Search {...restProps}>
      <SearchInput
        value={searchTerm}
        onChange={({ target }) => setSearchTerm(target.value)}
        placeholder="Titles, People and Genres"
        //active={searchActive}
        ref={inputFocus}
      />
      <SearchIcon
        onClick={() => {
          //setSearchActive((searchActive) => !searchActive);
          setInputFocus();
        }}
      >
        <img src="/images/icons/search.png" alt="Search" />
      </SearchIcon>
    </Search>
  );
};
