import { FaTwitter, FaGithub } from 'react-icons/fa';
// 画像をそれぞれimport。
import CoverImage from '../images/react-rails.png';
import ProfileImage from '../images/kobaton.jpeg';

export const Header = () => {
  return (
    <header className="main-cover" style={{ backgroundImage: `url(${CoverImage})` }}>
      <div className="overlay"></div>
      <div className="container">
        <div className="display-table">
          <div className="display-table-contents">
            <div className="profile-thumb" style={{ backgroundImage: `url(${ProfileImage})` }}></div>
            <h1 className="title-text">むらた</h1>
            <h3 className="title-text">エンジニア</h3>
            <ul className="social-icons">
              <li className="icon-link">
                {/* リンク先(href)は任意のURLを設定してください */}
                <a href="https://twitter.com/">
                  <FaTwitter color="white" size="2rem" />
                </a>
              </li>
              <li className="icon-link">
                {/* リンク先(href)は任意のURLを設定してください */}
                <a href="https://github.com/">
                  <FaGithub color="white" size="2rem" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};
