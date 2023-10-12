import { https } from "../../service/service.js";
import { getDataFrom, renderFoodList, showDataFrom } from "./controller-v2.js";
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
var editArr = null;
window.editFood = (id) => {
  editArr = id;
  console.log("🚀 ~ file: main-v2.js:42 ~ editArr:", editArr);
  https
    .get(`/food/${id}`)
    .then((res) => {
      console.log("Sửa thành công", res);
      $("#exampleModal").modal("show");
      showDataFrom(res.data);
    })
    .catch((err) => {
      console.log("Sửa thất bại", err);
    });
};

window.updateFood = () => {
  let update = getDataFrom();
  https
    .put(`/food/${editArr}`, update)
    .then((res) => {
      alert("Update thành công");
      $("#exampleModal").modal("hide");
      fetchFoodlist();
    })
    .catch((err) => {
      alert("Update thất bại");
    });
};
