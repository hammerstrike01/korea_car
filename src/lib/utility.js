import moment from 'moment';
const weekname = ["일", "월", "화", "수", "목", "금", "토"];

export const formatPhone = phone => {
  if (phone == null || phone == "") {
    return "";
  }
  let formatNum = '';
  if (phone.length == 11) {
    formatNum = phone.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
  } else if (phone.length == 8) {
    formatNum = phone.replace(/(\d{4})(\d{4})/, '$1-$2');
  } else {
    if (phone.indexOf('02') == 0) {
      formatNum = phone.replace(/(\d{2})(\d{4})(\d{4})/, '$1-$2-$3');
    } else {
      formatNum = phone.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
    }
  }

  return formatNum;
};

export const isPhoneNum = (argtest) => {
  if (argtest.length < 10 || argtest.length > 11) {
    return false;
  }
  var regExp = /^[0-9|.|-|+|\s]+$/;
  if (regExp.test(argtest)) {
    return true;
  } else {
    return false;
  }
};

export const isMobileNum = (argtest) => {
  if (argtest.length != 11) {
    return false;
  }
  var regExp = /^[0-9|.|-|+|\s]+$/
  if (regExp.test(argtest)) {
    return true;
  } else {
    return false;
  }
};

export const DateFormat = (date, frmt, week = false) => {
  if (date == null || date == "") {
    return "";
  }
  var days = moment(date).format(frmt);
  if (week) {
    var wkidx = moment(date).day();
    return days + " (" + weekname[wkidx] + ")";
  } else {
    return days;
  }
}