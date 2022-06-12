import React from 'react'
import Jumbotron from '../../components/jumbotron/Jumbotron'
import JumboData from '../../fixturesJsonData/jumbo.json'
import './devices.scss';
import './JumbotronContainer.scss'
function JumbotronContainer() {
    const Jumbodata = JumboData.map(item=>item);
    function addStr (str , index , StringToAdd){
        return str.substring(0,index) + StringToAdd + str.substring(index, str.length)
        }
    const JumboDataFirstTitle = Jumbodata[0].title;
    const JumboDataLogoTitle = Jumbodata[0].logoTitle;
    const MainTitle = addStr(JumboDataFirstTitle, 6, JumboDataLogoTitle);
    // console.log(MainTitle.substring(6, 13));
    return (
        <Jumbotron.Container>
            {JumboData.map(item => (
            <Jumbotron key={item.id} direction={item.direction}>
                <div>
                {item.id === 1 ?
                    <div className="TitlePare">
                    <Jumbotron.Title>{MainTitle.substring(0, 6)}</Jumbotron.Title>
                    <h2>{MainTitle.substring(6, 13)}</h2>
                    <Jumbotron.Title>{MainTitle.substring(13)}</Jumbotron.Title>
                    </div>
                    :
                    <Jumbotron.Title>{item.title}</Jumbotron.Title>
                }
                <Jumbotron.P>{item.subTitle}</Jumbotron.P>  
                </div>
                { item.id === 1 ? 
                < div className="marvel-device iphone-x">
                    <div className="notch">
                    <div className="camera"></div>
                    <div className="speaker"></div>
                    </div>
                    <div className="top-bar"></div>
                    <div className="sleep"></div>
                    <div className="bottom-bar"></div>
                    <div className="volume"></div>
                    <div className="overflow">
                    <div className="shadow shadow--tr"></div>
                    <div className="shadow shadow--tl"></div>
                    <div className="shadow shadow--br"></div>
                    <div className="shadow shadow--bl"></div>
                    </div>
                    <div className="inner-shadow"></div>
                    <div className="screen">
                    <Jumbotron.Image src={item.image} alt={item.alt} />
                    </div>
                </div> 
                :
                <Jumbotron.Image src={item.image} alt={item.alt} /> 
                }
            </Jumbotron>
            ))}
        </Jumbotron.Container>
    )
}
export default JumbotronContainer
