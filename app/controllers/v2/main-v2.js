import { https } from "../../service/service.js";
import { renderFoodList } from "./controller-v2.js";

https
  .get("/food")
  .then((res) => {
    console.log(res.data);
    renderFoodList(res.data);
  })
  .catch((err) => {
    console.log(err);
  });

function deleteFood(id) {
  console.log("🚀 ~ file: main-v2.js:15 ~ deleteFood ~ id:", id);
}
window.deleteFood = deleteFood;
