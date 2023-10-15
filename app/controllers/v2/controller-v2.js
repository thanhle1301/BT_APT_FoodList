export let renderFoodList = (foodArr) => {
  let contenHTML = "";
  foodArr.forEach((food) => {
    let { ma, ten, loai, gia, khuyenMai, hinhAnh, moTa, tinhTrang } = food;
    let trString = `<tr>
                        <td>${ma}</td>
                        <td>${ten}</td>
                        <td>${loai}</td>
                        <td>${gia} VND</td>
                        <td>${khuyenMai} %</td>
                        <td>0</td>
                        <td>${tinhTrang}</td>
                        <td>
                        <button onclick="deleteFood(${ma})" class="btn btn-danger">Xóa</button>
                        <button onclick='editFood(${ma})' class="btn btn-warning">Sửa</button>
                        </td>
                    </tr>`;
    contenHTML = contenHTML + trString;
  });
  document.getElementById("tbodyFood").innerHTML = contenHTML;
};

export let getDataFrom = () => {
  let ma = document.getElementById("foodID").value;
  let ten = document.getElementById("tenMon").value;
  let loai = document.getElementById("loai").value;
  let gia = document.getElementById("giaMon").value;
  let khuyenMai = document.getElementById("khuyenMai").value;
  let tinhTrang = document.getElementById("tinhTrang").value;
  let hinhAnh = document.getElementById("hinhMon").value;
  let moTa = document.getElementById("moTa").value;
  return {
    ma,
    ten,
    loai,
    gia,
    khuyenMai,
    tinhTrang,
    hinhAnh,
    moTa,
    tinhGKM: function () {
      return this.gia * (1 - this.khuyenMai);
    },
  };
};

const monChay = "loai1";
const monMan = "loai2";
const chay = true;

const tinhTrangCon = "1";
const tinhTrangHet = "0";
const conMon = true;

export let showDataFrom = (food) => {
  let { ma, ten, loai, gia, khuyenMai, hinhMon, moTa, tinhTrang } = food;
  document.getElementById("foodID").value = ma;
  document.getElementById("tenMon").value = ten;
  document.getElementById("loai").value = loai == chay ? monChay : monMan;
  document.getElementById("giaMon").value = gia;
  document.getElementById("khuyenMai").value = khuyenMai;
  document.getElementById("tinhTrang").value =
    tinhTrang == conMon ? tinhTrangCon : tinhTrangHet;
  document.getElementById("hinhMon").value = hinhMon;
  document.getElementById("moTa").value = moTa;
};
