// import imgPumkin from '../../public/img/img-main-pumpkin@2x.png'
// import imgCarrot from '../../public/img/img-vegetables-carrot@2x.png';
// import imgCorn from '../../public/img/img-vegetables-corn@2x.png';
// import imgPepper from '../../public/img/img-vegetables-pepper@2x.png';
// import MainPic from '../json/MainPic.json';
// import OtherVegetables from '../json/OtherVegetables.json';
// import Contact from '../json/Contact.json';

import ImgElememt from "./ImgElement";

// const Body = () =>{
function Body({MainPic,OtherVegetables,Contact}) {
    return (
        <>
            {/* 此區為body */}
            <div className="body">
                {/* 此區為主要內容，有大南瓜圖 */}
                <main className="box-main-content">
                    <img className="img-main-pumpkin" src={MainPic[0].MainPic_img} alt={MainPic[0].MainPic_name}/>
                    {/* <img className="img-main-pumpkin" src={imgPumkin} alt="pumkin"/>--1015刪-- */}
                    {/* <img className="img-main-pumpkin" alt="pumpkin" src="../../public/img/img-main-pumpkin@2x.png" /> */}
                </main>
                {/* 此區為次要內容，有其餘蔬菜與說明文字 */}
                <article className="box-secondary-content">
                    {/* 此區為第三級內容，放置其餘蔬菜 */}
                    <aside className="box-third-content">
                        <div className="box-title">
                            <div className="box-title-text">Vegetables</div>
                        </div>
                        <div className="box-imggroup">
                            {OtherVegetables.map((vegetableItem)=> {
                                return (
                                    <ImgElememt
                                        key={vegetableItem.id}
                                        Vegetable_name={vegetableItem.Vegetable_name}
                                        Vegetable_img={vegetableItem.Vegetable_img}
                                    />
                                )
                            })}
                            {/* <img className="img-other-vegetables" src={OtherVegetables[0].Vegetable_img} alt={OtherVegetables[0].Vegetable_name}/>--10/16-- */}
                            {/* <img className="img-other-vegetables" src={OtherVegetables[1].Vegetable_img} alt={OtherVegetables[1].Vegetable_name}/>--10/16-- */}
                            {/* <img className="img-other-vegetables" src={OtherVegetables[2].Vegetable_img} alt={OtherVegetables[2].Vegetable_name}/>--10/16-- */}
                            {/* <img className="img-other-vegetables" src={imgCarrot} alt="carrot"/>--1015刪-- */}
                            {/* <img className="img-other-vegetables" src={imgCorn} alt="corn"/>--1015刪-- */}
                            {/* <img className="img-other-vegetables" src={imgPepper} alt="pepper"/>--1015刪-- */}
                            {/* <img className="img-other-vegetables" alt="carrot" src="../../public/img/img-vegetables-carrot@2x.png" /> */}
                            {/* <img className="img-other-vegetables" alt="corn" src="../../public/img/img-vegetables-corn@2x.png" /> */}
                            {/* <img className="img-other-vegetables" alt="pepper" src="../../public/img/img-vegetables-pepper@2x.png" /> */}
                        </div>
                    </aside>
                    {/* 此區為第三級內容，放置說明文字 */}
                    <aside className="box-third-content">
                        <div className="box-title">
                            <div className="box-title-text">Contact</div>
                        </div>
                        <div className="box-contactgroup">
                            <div className="expositorytext-style">{Contact[0].Contact}</div>
                            <div className="divider-b"></div>
                            <div className="expositorytext-style">
                                {Contact[0].Email}<br/>
                                {Contact[0].Phone}
                            </div>
                        </div>
                    </aside>
                </article>
            </div>
        </>
    )  
}

export default Body;
