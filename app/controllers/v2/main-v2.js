import { https } from "../../service/service.js";
import { getDataFrom, renderFoodList } from "./controller-v2.js";
function fetchFoodlist() {
  https
    .get("/food")
    .then((res) => {
      console.log(res.data);
      renderFoodList(res.data.reverse());
    })
    .catch((err) => {
      console.log(err);
    });
}
fetchFoodlist();
function deleteFood(id) {
  https
    .delete(`/food/${id}`)
    .then((res) => {
      alert("Xóa thành công", res);
      fetchFoodlist();
    })
    .catch((err) => {
      alert("Xóa thất bại", err);
    });
}
window.deleteFood = deleteFood;

window.addFood = () => {
  let food = getDataFrom();
  https
    .post("/food", food)
    .then((res) => {
      $("#exampleModal").modal("hide");
    })
    .catch((err) => {
      alert("Thêm thất bại");
    });
};
