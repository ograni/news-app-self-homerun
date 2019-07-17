// 1. axios import 하기
import axios from "axios";

// 2. 공통이 되는 주소 함수로 잡기
function createInstance() {
  return axios.create({
    baseURL: "https://api.hnpwa.com/v0/",
    // timeout: 5000,
  });
}

// 3. 함수를 변수로 지정
let instance = createInstance();

// 4. 각각의 컴포넌트에서 받을 데이터를 설정
function fetchNews() {
  return instance.get("/news/1.json");
}
function fetchAsk() {
  return instance.get("/ask/1.json");
}

function fetchJobs() {
  return instance.get("/jobs/1.json");
}

// 5.설정한 데이터들을 export
export { fetchNews, fetchAsk, fetchJobs };

//api 공통설정
// let config = {
//   baseUrl: "https://api.hnpwa.com/v0/",
// };

//api 함수 구현
// function fetchNews() {
//   axios.get("https://api.hnpwa.com/v0/news/1.json");
//   axios.get(config.baseUrl + "news/1.json");
//   return axios.get(`${config.baseUrl}news/1.json`);
// }
