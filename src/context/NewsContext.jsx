import { Children, createContext, useReducer } from "react";
import { NewsReducer } from "./NewsReducer";

const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
  const intialState = {
    articles: [
      {
        title: "MP Income Tax Raid Update; Indore Khargone",
        description:
          "इनकम टैक्स ने मंगलवार को इंदौर और खरगोन के भीकनगांव में छापा मारा है। आईटी अफसर स्थानीय पुलिस के साथ मिलकर छानबीन कर रहे हैं। | Madhya Pradesh Indore Khargone Income Tax (IT) Raid Update; इनकम टैक्स ने मंगलवार को इंदौर और खरगोन के भीकनगांव में छापा मारा है। आईटी अफसर स्थानीय पुलिस के साथ मिलकर छानबीन कर रही है।",
        content:
          "इंदौर और खरगोन के उद्योगपतियों के यहां आईटी ने छापा मारा है।\nइनकम टैक्स ने मंगलवार को इंदौर और खरगोन के भीकनगांव में छापा मारा है। आईटी अफसर स्थानीय पुलिस के साथ मिलकर छानबीन कर रहे हैं।\n.\nइंदौर में बालाजी विहार, महू नाका स्थित मीडिया हाउस मालिक और र... [1355 chars]",
        url: "https://www.bhaskar.com/local/mp/indore/news/income-tax-raids-in-indore-bhikangaon-134495782.html",
        image:
          "https://images.bhaskarassets.com/thumb/730x0/web2images/521/2025/02/18/indore-khargon1_1739856180.gif",
        publishedAt: "2025-02-18T04:45:29Z",
        source: {
          name: "Dainik Bhaskar",
          url: "https://www.bhaskar.com",
        },
      },
      {
        title:
          "Indore girl has sudden cardiac arrest while dancing on stage: What’s the genetic condition that causes it in young people?",
        description:
          "Understanding hypertrophic cardiomyopathy (HCM), where the heart muscles thicken and disrupt heartbeats",
        content:
          "The news of a 23-year-old girl from Indore collapsing while dancing at a wedding and later dying from suspected sudden cardiac arrest reminds me of a 26-year-old patient. This Bengaluru boy was a fitness enthusiast, a non-smoker and a non-alcoholic. ... [3090 chars]",
        url: "https://indianexpress.com/article/health-wellness/cardiac-arrest-indore-girl-dancing-stage-genetic-conditions-9829070/",
        image:
          "https://images.indianexpress.com/2025/02/heart-attack-health.jpg",
        publishedAt: "2025-02-11T04:30:12Z",
        source: {
          name: "The Indian Express",
          url: "https://indianexpress.com",
        },
      },
    ],
  };

  const [state, dispatch] = useReducer(NewsReducer, intialState);

  return (
    <NewsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </NewsContext.Provider>
  );
};

export default NewsContext;
