import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Details = () => {
  const { id } = useParams();

  const [articles, setArticles] = useState(null);

  const getArticles = async () => {
    const { data } = await axios.get(
      `https://abdo121212-fit-nutrition.onrender.com/food/${id}`
    );
    setArticles(data.food);
  };

  useEffect(() => {
    getArticles();
  }, [getArticles]);

  return (
    <div className="h-screen">
      {articles && (
        <>
          <div className="container px-10 py-44 mx-auto">
            <div className="flex justify-center items-center gap-20 ">
              <img
                src={articles.image.url}
                className="rounded-lg w-[650px] h-[500px]"
                alt=""
              />

              <div className="flex flex-col  items-center justify-center space-y-6">
                <h3 className="text-center text-main text-6xl font-bold">
                  {articles.name_en}
                </h3>
                <p className="text-slate-500 text-md ">
                  {articles.article_summary_en}
                </p>

                <h3 className="text-main text-2xl capitalize  font-bold">nutritional benefits per 100 grams :</h3>

                <div className="flex space-x-10 ">
                  <ul >
                    <li className="text-xl font-medium text-main">Calories:</li>
                    <hr />
                    <li className="text-xl font-medium text-main"> Proteins:</li>
                    <hr />

                    <li className="text-xl font-medium text-main"> Carbs:</li>
                    <hr />

                    <li className="text-xl font-medium text-main">Fats:</li>
                    <hr />

                  </ul>

                  <ul >
                    <li className="text-xl font-medium text-main">{articles.calories}</li>
                    <hr />

                    <li className="text-xl font-medium text-main">{articles.proteins}</li>
                    <hr />

                    <li className="text-xl font-medium text-main">{articles.carbs}</li>
                    <hr />

                    <li className="text-xl font-medium text-main">{articles.fats}</li>
                    <hr />

                  </ul>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
