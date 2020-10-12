import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Wish from './component/wish';
import Thirty from './component/30';
var GifPlayer = require('react-gif-player');

let grabinfo = [
  { img:"", person:"Daniel", icon:"/img/icons/card.png", video:'', wish:"Hope you like your gift! It's a compilation of Happy Birthday wishes from Friends (btw if you click on '30 Survival Pack' you'll be taken to another page)" },
  { img:"", person:"Aireen", icon:"/img/icons/balloons.png", video:'', wish:"hahaha you guys are no longer 29! \nWelcome to the club!!! \nCan’t believe I’ve known you two for 15 years, \nwhich is half of the time we’ve lived as of this year. \nIsn’t it crazy? \n\n所有的青春都獻給妳們了 \n無怨無悔💛 \n現在想到高中的一些事還是會忍不住大笑 \n覺得很白癡 同時也覺得那份天真和傻氣格外珍貴！\n雖然30歲很可怕 但還是要說些祝福的話 \n願我們在接下來的15年、30年都可以盡力用自己喜歡的\n方式生活 然後一起美美的變老😘  \n\nLove u girls♥️" },
  { img:"/img/videos/Wendy.jpg", person:"Wendy", icon:"/img/icons/hanging.png", video:'', wish:"To the prettiest, loudest, and funnest twin sisters I know,  may your next 30 years be as fabulous as it has been. Most importantly, may you be surrounded by love, friendship and kindness. Cheers to our 16 years friendship and counting! Love you as always ❤️❤️" },
  { img:"", person:"Athena Part 1", icon:"/img/icons/mask.png", video:'/img/videos/Athena_video_pt1.mp4', wish:"" },
  { img:"", person:"Athena Part 2", icon:"/img/icons/house.png", video:'/img/videos/Athena_video_pt2.mp4', wish:"" },
  { img:"/img/videos/FromAmy.JPG", person:"Amy", icon:"/img/icons/keys.png", video:'', wish:"" },
  { img:"/img/videos/FromJoanna.png", person:"Joanna", icon:"/img/icons/lights.png", video:'', wish:"" },
  { img:"", person:"Yvonne", icon:"/img/icons/cake.png", video:'', wish:"Dear twinzzzy! 生日快樂 TERIRI & TIBBY!! 從十幾歲就認識你們到現在，最喜歡你們那最真誠跟最做自己的靈魂! 祝你們身體健康，心想事成！永遠愛你們！😘👯‍♀️❤️" },
  { img:"", person:"Jenny", icon:"/img/icons/bottle.png", video:'', wish:"親愛的阿婷跟阿媛，生日快樂！邁入人生的18歲有沒有很開心很期待很興奮😂願神祝福你們恩典滿溢，喜樂的靈充滿你們！天天有喜樂，天天越來越多錢😂 " },
  { img:"", person:"Tim", icon:"/img/icons/firework.png", video:'/img/videos/timtotiff.mov', wish:"To Tiffany" },
  { img:"", person:"Tim", icon:"/img/icons/disco.png", video:'/img/videos/timtoter.mov', wish:"To Teresa" },
  
  { img:"", person:"Jonathan", icon:"/img/icons/bubbles.png", video:'', wish:"For Tiffany: Happy Birthday! It seems like just yesterday when Daniel came into the living room with a beaming smile on his face saying he thought he got a girlfriend XD I'm so happy knowing that Daniel has you at home and you have Daniel keeping each other in balance. I know that having such different personalities can be tough, especially when coming to agreements, however always remember the man you fell in love with and pull out that potential in him as I am sure he will do the same with you." },
  { img:"", person:"Daniel", icon:"/img/icons/crown.png", video:'', wish:"For Tiffany: Tiffany I'm truly blessed to be able to call you my wife, I had a bunch of extra stuff that I wrote down in the source code that was super cringe and found that your friends have much better taste then I do when it comes to birthday wishes, the world must have been truly blessed to have you for 30 years as I have been blessed having you for almost 4." },
  { img:"", person:"Daniel", icon:"/img/icons/cupcake.png", video:'', wish:"For Teresa: Happy Birthday Teresa! It's been cool getting to know the fun quirky person that happens to be the twin of the person I'm married to, may you find a future you enjoy and someone to share it with. Sincerly your friendly neighbourhood brother in law." },
  /*{ img:"", person:"Current trends", icon:"/img/icons/crown.png", video:'https://www.youtube.com/watch?v=32si5cfrCNc', wish:"Still trying to get this song out of my head, don't think I'll be able to anytime soon. I think it's really cool that you're trying to learn these dance moves. (Don't give up you can do it!!)" },
  { img:"", person:"Current trends 2", icon:"/img/icons/cupcake.png", video:'https://www.youtube.com/watch?v=2EjxIQXBhlc', wish:"On the dancing note, my own personal project. To Teresa: Thanks for introducing me to this fun song!" },
  { img:"", person:"Future events", icon:"/img/icons/date.png", video:'', wish:"To Tiffany: Wish I could have gotten something more impressive like tickets to Taiwan or Thailand that perfectly fits your schedule, Hoping to one day make that happen though." },
  { img:"", person:"Hmmm tasty food", icon:"/img/icons/cake.png", video:'https://www.youtube.com/watch?v=9nrZ_VP0NcY', wish:" Hmm, while researching I'm finding that there might be something to this ......... Mmmm maybe not still not my thing, but happy to see other people I enjoy being able to enjoy something different from what I would enjoy. Enjoy!!" },
  { img:"", person:"Detective Conan", icon:"/img/icons/disco.png", video:'https://www.youtube.com/watch?v=tiBJUPN1Fxc', wish:"Wish I knew chinese so that I could enjoy this with you. Suppose i'll just have to keep working on it." },
  { img:"", person:"Mojito", icon:"/img/icons/drink.png", video:'https://www.youtube.com/watch?v=-biOGdYiF-I', wish:"Saw the Drink and was reminded of this song which gives me an opportunity to flex. Too bad I havn't been working out :/ Please can you get my girl a cold glass of mojito I’d like to look upon her dazzling tipsy gaze As for my coffee, not too much sugar The worlds already way too sweet just from her face Dont bother tryna sell me just another cigar If it’s not just as lush and full as her bright smile City landscape and painted murals Are colored speechless as she slowly passes by I’ve got no worries And love is never ending When you are with me I know I’m not alone Steel-casted billboards Strung up around me One after one are writing letters to the sky Strolling Havana those street lamps light up And our walk becomes a dance more pretty than the moon Bubble car palm trees Sway aimlessly run away with me on the ocean breeze. Lots of books and antiques you hear the old times speak. I think we may have met in a past life you see. On a attic terrace there’s a, busy lazy poster. But you are the ocean, great authors write about" },
  { img:"/img/videos/camping.jpg", person:"Camping", icon:"/img/icons/flowers.png", video:'', wish:"I'm so glad I got dragged into backpack camping was tons of fun and I was wrong to think it wouldn't be lol" },
  { img:"/img/videos/WebsiteMain-1260x709.jpg", person:"Overcooked", icon:"/img/icons/grill.png", video:'', wish:"I miss playing games as a group. You guys down for some minecraft?" },
  { img:"", person:"Star Wars", icon:"/img/icons/lightsaber.png", video:'https://www.youtube.com/watch?v=EjMNNpIksaI', wish:"To Tiffany: honey thank you for giving me the time of day and willingly watching this movie with me, though I'm sad you didn't enjoy it and even avoid anything Star Wars even more. I'm still hoping you'll one day watch the Empire Strikes Back and hear from you that it was an awesome movie ... One can dream ... To Teresa: Teresa you should totally watch Star Wars even if I got a bad feeling you won't like it ... maybe start with episode 5 though you may be a little lost" },
  { img:"", person:"D&D", icon:"/img/icons/magic.png", video:'https://www.youtube.com/watch?v=SlWt07l_pvI', wish:":D you interested?" },
  { img:"", person:"One Piece", icon:"/img/icons/pizza.png", video:'https://www.youtube.com/watch?v=02l-j9Ghhhw', wish:"For Teresa: I'm sooo sad you don't like One Piece, It's legit my favorate anime/manga but I've legitamitely enjoyed talking to you about anime/games/popculture-gimeemagimicks and hope to contiune having fun discussions about these things in the future." },
  { img:"", person:"Blank Spot", icon:"/img/icons/music.png", video:'', wish:"Here is an extra slot for future entries :)" },
  { img:"", person:"Blank Spot", icon:"/img/icons/partyhat.png", video:'', wish:"Here is an extra slot for future entries :)" },
  { img:"", person:"Blank Spot", icon:"/img/icons/photos.png", video:'', wish:"Here is an extra slot for future entries :)" },
  { img:"", person:"Blank Spot", icon:"/img/icons/popper.png", video:'', wish:"Here is an extra slot for future entries :)" },
  { img:"", person:"Blank Spot", icon:"/img/icons/present.png", video:'', wish:"Here is an extra slot for future entries :)" },
  { img:"", person:"Blank Spot", icon:"/img/icons/recordplayer.png", video:'', wish:"Here is an extra slot for future entries :)" },
  { img:"", person:"Blank Spot", icon:"/img/icons/spraycan.png", video:'', wish:"Here is an extra slot for future entries :)" },
  { img:"", person:"Blank Spot", icon:"/img/icons/stars.png", video:'', wish:"Here is an extra slot for future entries :)" },
  { img:"", person:"Blank Spot", icon:"/img/icons/whistle.png", video:'', wish:"Here is an extra slot for future entries :)" },*/
];

let selfies = ["/img/selfie/1_Intro.jpg",
"/img/selfie/20191019_193127_235.jpg",
"/img/selfie/20191019_200155_103.jpg",
"/img/selfie/20191019_222620_512.jpg",
"/img/selfie/20191019_232842_833.jpg",
"/img/selfie/20191228_221943_994.jpg",
"/img/selfie/20200403_131707_830.jpg",
"/img/selfie/20200920_214631_011.jpg",
"/img/selfie/20201010_014418_235.jpg",
"/img/selfie/20201010_015701_154.jpg",
"/img/selfie/1602487539047.jpg",
"/img/selfie/1602487540944.jpg",
"/img/selfie/1602487543263.jpg",
"/img/selfie/1602487545006.jpg",
"/img/selfie/1602487546794.jpg",
"/img/selfie/1602487549946.jpg",
"/img/selfie/1602487551924.jpg",
"/img/selfie/amyyvonne.jpg",
"/img/selfie/FB_IMG_1602487677127.jpg",
"/img/selfie/FB_IMG_1602487729252.jpg",
"/img/selfie/FB_IMG_1602487844461.jpg",
"/img/selfie/FB_IMG_1602487854176.jpg",
"/img/selfie/FB_IMG_1602489985600.jpg",
"/img/selfie/IMG_0543.jpg",
"/img/selfie/IMG_4731.jpg",
"/img/selfie/IMG_5851.jpg",
"/img/selfie/IMG_8340.jpg",
"/img/selfie/IMG_8705.JPG",
"/img/selfie/IMG_20200911_173711.jpg",
"/img/selfie/IMG_20200912_203413.jpg",
"/img/selfie/20201010_213826_383.jpg",
"/img/selfie/20201010_214624_933.jpg",
"/img/selfie/1602527132021.jpg",
"/img/selfie/1602527138294.jpg",
"/img/selfie/1602527141520.jpg",
"/img/selfie/FB_IMG_1602527560460.jpg",
"/img/selfie/FB_IMG_1602527541245.jpg",
"/img/selfie/FB_IMG_1602527499378.jpg",
"/img/selfie/1602527148156.jpg",]
function App() {

  let[list, setList] = useState(grabinfo);
  let[clicked, setClicked] = useState(-1);
  let[display, setDisplay] = useState(false);

  /*function callAPI() {
    fetch("http://localhost:9000/testAPI")
        .then(res => res.text())
        .then(res => console.log(res));
  } callAPI();*/

  function click(index){
    list[index].clicked = true;
    setList(list);
    setClicked(index);
  }

  return (
    <div className="App">
      <header className="App-header">
      
      {display?<GifPlayer gif="/img/gif/cat.gif" autoplay="true" width={'100%'}/>:<GifPlayer gif="/img/gif/pixelcake.gif"  autoplay="true" width={'40%'}/>}
        
        <Thirty feature={display} callback={()=>setDisplay(!display)}/>
        {
          (!display&&clicked>=0)?<Wish icon={list[clicked]['icon']} video={list[clicked]['video']} name={list[clicked]['person']} wish={list[clicked]['wish']} img={list[clicked]['img']} clicked={list[clicked]['clicked']}/>:<div></div>
        }
        <div style={{display:'flex', flexWrap:'wrap', width:'80%', justifyContent:'center'}}>
        {
          display?
          selfies.map((selfie, index)=><div style={{padding:'13px', width:'250px'}}>
            <img src={selfie} style={{width:'100%', borderRadius:'10px', border: '1px solid #fff'}}/>
          </div>):
          list.map((wish, index)=><div style={{padding:'15px', flexGrow: '4'}} onClick={()=>click(index)}>
            <img src={wish.icon} style={{width:'50px', height:'50px', borderRadius:"20%"}} className={wish.clicked?index===clicked?'selected':'shadier':''}/>
          </div>)
          
        }
        </div>
      </header>
      
    </div>
  );
}

export default App;

/* 

*/
