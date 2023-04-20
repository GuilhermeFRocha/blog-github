import styled from "styled-components";

export const Header = styled.header`
  background-color: #0b2137;
  width: 100%;
  text-align: center;

  img {
    padding: 65px 0 134px 0;
  }
`;

export const Main = styled.main`
  width: 100%;
  background-color: #071422;
  height: 100vh;
`;

export const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  left: -50%;
  right: -50%;
  position: absolute;
  top: 208px;
`;
export const ContentUser = styled.div`
  background-color: #0b1b2b;
  display: flex;
  padding: 32px 40px;
  align-items: center;
  gap: 32px;
  border-radius: 10px;
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);
`;

export const ImgUser = styled.div`
  width: 148px;
  height: 148px;
  border-radius: 8px;
`;

export const DescUser = styled.div`
  .nameUser {
    display: flex;
    justify-content: space-between;
    padding-bottom: 8px;

    h2 {
      font-size: 24px;
      color: #e7edf4;
      font-weight: 700;
    }

    a {
      text-transform: uppercase;
      font-weight: 700;
      font-size: 12px;
      color: #3294f8;
      display: flex;
      align-items: center;
      gap: 8px;
    }
  }

  p {
    font-size: 16px;
    font-weight: 400;
    color: #afc2d4;
    padding-bottom: 24px;
  }

  ul {
    display: flex;
    align-items: center;
    gap: 24px;

    li {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 16px;
      font-weight: 400;
      color: #c4d4e3;
    }
  }
`;
