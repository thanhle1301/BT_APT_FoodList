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
      fetchFoodlist();
    })
    .catch((err) => {
      alert("Thêm thất bại");
    });
};
// var editArr = null;
window.editFood = (id) => {
  // editArr = id;
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
  let food = getDataFrom();
  https
    .put(`/food/${food.ma}`, food)
    .then((res) => {
      $("#exampleModal").modal("hide");
      fetchFoodlist();
    })
    .catch((err) => {
      alert("Update thất bại");
    });
};

function filterByType() {
  const selectElement = document.getElementById("selLoai");
  const selectedType = selectElement.value;

  const rows = document.querySelectorAll(".foodTable tbody tr");

  rows.forEach((row) => {
    const type = row.querySelector("td:nth-child(3)").textContent; // Lấy loại từ cột thứ 3

    if (selectedType === "all" || selectedType === type) {
      row.style.display = "table-row"; // Hiển thị
    } else {
      row.style.display = "none"; // Ẩn
    }
  });
}

// Gọi hàm khi trang web được tải lần đầu
filterByType();
