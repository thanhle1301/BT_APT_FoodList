export let renderFoodList = (foodArr) => {
  let contenHTML = "";
  foodArr.forEach((food) => {
    let { ma, ten, loai, gia, khuyenMai, hinhAnh, moTa, tinhTrang } = food;
    let trString = `<tr>
                        <td>${ma}</td>
                        <td>${ten}</td>
                        <td>${loai}</td>
                        <td>${gia}</td>
                        <td>${khuyenMai}</td>
                        <td>0</td>
                        <td>${tinhTrang}</td>
                        <td>
                        <button onclick="deleteFood(${ma})" class="btn btn-danger">Xóa</button>
                        </td>
                    </tr>`;
    contenHTML = contenHTML + trString;
  });
  document.getElementById("tbodyFood").innerHTML = contenHTML;
};
