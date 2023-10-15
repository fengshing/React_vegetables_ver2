import iconFB from '../../public/icon/btn-facebook.svg'
import iconIG from '../../public/icon/btn-instagram.svg'

// const Header = () =>{
function Header() {
  return (
    <>
      <header className="header">
        {/*此區為開頭，有logo與CTA按鈕*/}
        <div className="box-infoandbutton">
          <a className="btn-gotohome">Vegetables</a>
          <div className="box-btngroup">
            <a className="btn-social" href="https://www.facebook.com/xing.feng1/" target="_blank">
              <img className="icon" src={iconFB} alt="facebook"/>
              {/* <img className="icon" alt="facebook" src="../public/icon/btn-facebook.svg" /> */}
            </a>
            <a className="btn-social" href="https://www.instagram.com/gengtian168/" target="_blank">
              <img className="icon" src={iconIG} alt="instagram"/>
              {/* <img className="icon" alt="instagram" src="../public/icon/btn-instagram.svg" /> */}
            </a>
            <div className="divider-a"></div>
            <button className="btn-outline">LOGIN</button>
            <button className="btn-outline">JOIN</button>
          </div>
        </div>
        {/* 此區為navbar，有各子頁面連結 */}
        <nav className="nav">
          <button className="btn-onlytext">Home</button>
          <button className="btn-onlytext">About Us</button>
          <button className="btn-onlytext">Vegetables</button>
          <button className="btn-onlytext">Online</button>
          <button className="btn-onlytext">Contact</button>
        </nav>
      </header>
    </>
  )
}
export default Header;