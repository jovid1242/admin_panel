import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const Router = useNavigate();
const notify = (message: string) => {
  toast.error(message, {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: 0
  });
};

const validationErrorHandler = (res: any) => {
  res.errors.forEach((err: any) => {
    notify(err.message);
  });
};

const http = axios.create({
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json"
  },
  baseURL: process.env.API_URL
});

http.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (!error.response) {
      notify("Нет соединения с интернетом. Перезагрузите страницу!!");
    }
    if (error.response && error.response.status == 422) {
      validationErrorHandler(error.response.data);
    }
    if (error.response && error.response.status == 404) {
      notify(error.response.data.message);
    }
    if (error.response && error.response.status == 403) {
      notify(error.response.data.message);
    }
    if (error.response && error.response.status == 400) {
      notify(error.response.data.message);
    }
    if (error.response && error.response.status == 500) {
      notify(error.response.data.message);
    }
    if (error.response && error.response.status == 401) {
      Router("login");
    }

    return Promise.reject(error);
  }
);
export default http;
