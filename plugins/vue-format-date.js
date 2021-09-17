// ガイドコンテンツの日付フォーマット(年月日)
import Vue from 'vue'
import moment from 'moment'

Vue.filter('format-date', function (value) {
  const date = moment(value);
  return date.format("YYYY年MM月DD日");
})