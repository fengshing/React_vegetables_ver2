import imgCarrot from '../../public/img/img-vegetables-carrot@2x.png';
import imgCorn from '../../public/img/img-vegetables-corn@2x.png';
import imgPepper from '../../public/img/img-vegetables-pepper@2x.png';


const Body = () =>{
    return (
        <>
            {/* 此區為body */}
            <div className="body">
                {/* 此區為主要內容，有大南瓜圖 */}
                <main className="box-main-content">
                    <img className="img-main-pumpkin" alt="pumpkin" src="../../public/img/img-main-pumpkin@2x.png" />
                </main>
                {/* 此區為次要內容，有其餘蔬菜與說明文字 */}
                <article className="box-secondary-content">
                    {/* 此區為第三級內容，放置其餘蔬菜 */}
                    <aside className="box-third-content">
                        <div className="box-title">
                            <div className="box-title-text">Vegetables</div>
                        </div>
                        <div className="box-imggroup">
                            <img className="img-vegetables-carrot-icon" src={imgCarrot} alt="carrot"/>
                            <img className="img-vegetables-carrot-icon" src={imgCorn} alt="corn"/>
                            <img className="img-vegetables-carrot-icon" src={imgPepper} alt="pepper"/>
                            {/* <img className="img-vegetables-carrot-icon" alt="carrot" src="../../public/img/img-vegetables-carrot@2x.png" /> */}
                            {/* <img className="img-vegetables-carrot-icon" alt="corn" src="../../public/img/img-vegetables-corn@2x.png" /> */}
                            {/* <img className="img-vegetables-carrot-icon" alt="pepper" src="../../public/img/img-vegetables-pepper@2x.png" /> */}
                        </div>
                    </aside>
                    {/* 此區為第三級內容，放置說明文字 */}
                    <aside className="box-third-content">
                        <div className="box-title">
                            <div className="box-title-text">Contact</div>
                        </div>
                        <div className="box-contactgroup">
                            <div className="expositorytext-style">
                                For any questions or suggestions about Vegetables, Vegetables
                                Club or your online order you can contact Vegetables Customer
                                Service by phone, email or post and we’ll be happy to help.
                            </div>
                            <div className="divider-b"></div>
                            <div className="expositorytext-style">
                                E-mail : Vegetables@aaabbccc.com<br/>
                                PHONE : +886-123-456-789
                            </div>
                        </div>
                    </aside>
                </article>
            </div>
        </>
    )  
}

export default Body;
