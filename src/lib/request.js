import { adminsvc } from './api'
// import {rescode} from './consts'
import config from '../config'
import axios from 'axios'

export const reqPost = async (url, token, body, callback) => {
  axios.post(config.server + adminsvc.base + config.sitename + url, body, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Authorization": " Bearer " + token,
    },
  }).then(function (response) {
    callback(response.data);
  })
    .catch(function (error) {
      if (error.response) {
        callback(error.response.data);
      } else {
        // Something happened in setting up the request that triggered an Error
        callback(null);
      }
    })
};

export const reqGet = async (url, token, callback) => {
  axios.get(config.server + adminsvc.base + config.sitename + url, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Authorization": " Bearer " + token,
    },
  }).then(function (response) {
    callback(response.data);
  })
    .catch(function (error) {
      if (error.response) {
        callback(error.response.data);
      } else {
        // Something happened in setting up the request that triggered an Error
        callback(null);
      }
    })
};

 