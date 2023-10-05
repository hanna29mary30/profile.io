import react, { useEffect, useState } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import Newscards from "./components/Newscards";
import wordsToNumbers from 'words-to-numbers';

const AlanKey ='017c8b5c0974a592fd2fe57967e5c7ba2e956eca572e1d8b807a3e2338fdd0dc/stage'
const Newsapp = () => {
    const [activeArticle,setActiveArticle] = useState(-1);
    const [newsArticles, setNewsArticles] = useState([]);
    
    useEffect(() => {
        alanBtn({
          key: AlanKey,
          onCommand :({command , articles,number}) =>{
            if(command == 'newsHeadlines'){
                setNewsArticles(articles);
                console.log(articles);
            }else if(command == 'highlight'){
                setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
            } else if (command === 'open') {
                const parsedNumber = number.length > 2 ? wordsToNumbers((number), { fuzzy: true }) : number;
                const article = articles[parsedNumber - 1];
                window.open(article.url, '_blank');
                  
                } 
              
          }
          
        });
      }, []);
  return(
    <div>
          {/* <h1 className="text-center mt-4">NewsApp</h1> */}
          <Newscards articles={newsArticles} activeArticle={activeArticle}/>
    </div>
  );
};

export default Newsapp;
