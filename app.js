// Tạo ra mảng dữ liệu
let data = [
    {
      id: 1,
      name: "airpods pro",
      price: 1,
      img: "https://www.maccenter.vn/Accessories/AirPods-Pro-A.jpg",
      amount: 0,
    },
    {
      id: 2,
      name: "airpods pro",
      price: 2,
      img: "https://www.maccenter.vn/Accessories/AirPods-Pro-A.jpg",
      amount: 0,
    },
    {
      id: 3,
      name: "airpods pro",
      price: 3,
      img: "https://www.maccenter.vn/Accessories/AirPods-Pro-A.jpg",
      amount: 0,
    },
    {
      id: 4,
      name: "airpods pro",
      price: 4,
      img: "https://www.maccenter.vn/Accessories/AirPods-Pro-A.jpg",
      amount: 0,
    },
    {
      id: 5,
      name: "airpods pro",
      price: 5,
      img: "https://www.maccenter.vn/Accessories/AirPods-Pro-A.jpg",
      amount: 0,
    },
    {
      id: 6,
      name: "airpods pro",
      price: 6,
      img: "https://www.maccenter.vn/Accessories/AirPods-Pro-A.jpg",
      amount: 0,
    },
    {
      id: 7,
      name: "airpods pro",
      price: 7,
      img: "https://www.maccenter.vn/Accessories/AirPods-Pro-A.jpg",
      amount: 10,
    },
    {
      id: 8,
      name: "airpods pro xin",
      price: 8,
      img: "https://www.maccenter.vn/Accessories/AirPods-Pro-A.jpg",
      amount: 10,
    },
];
  
function renderProduct() {
  let product = ""
  for (let i = 0; i < data.length; i++) { 
    console.log(data[i]);
  }
  product = ` <div class="imgcontent" id="1">
  <img class="sp" src="" alt="" />
  <p>Bachs</p>
  <p>USD 1</p>
  <div class="sell-buy">
    <button class="btn sell" id="1">Sell</button>
    <p id="amount">1</p>
    <button class="btn buy" id="1">Buy</button>
  </div>
</div>`
}
renderProduct();