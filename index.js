const moment = require("moment");
require("moment-timezone");
const luxon = require("luxon");
const datefns = require("date-fns");
const dayjs = require("dayjs");

console.log("↓↓↓↓↓ moment ↓↓↓↓↓");

(function () {
  // 現在時取得
  const now = moment();
  console.log("now", now);

  // 現在は前日より未来か？
  console.log(
    'now.isBefore(moment().subtract(1, "days"))',
    now.isAfter(moment().subtract(1, "days"))
  );

  // ISO-8601表記
  const format = moment().format();
  console.log("format", format);

  // ISO-8601表記からオブジェクトを作る
  const date = moment(format);
  console.log("date", date);

  // 日付だけを表記
  const formatDate = moment().format("YYYY-MM-DD");
  console.log("formatDate", formatDate);

  // 現在に1日追加
  const addNow = now.add(1, "days"); // これをやるとnowそのものが書き換わるから注意！
  console.log("addNow", addNow);

  // UTC表記
  const utc = moment().utc();
  console.log("utc", utc);

  // サモア時間表記
  const samoa = utc.tz("Pacific/Apia");
  console.log("samoa", samoa);
})();

console.log("↓↓↓↓↓ luxon ↓↓↓↓↓");

(function () {
  const { DateTime, Interval } = luxon;

  // 現在時取得
  const now = DateTime.local();
  console.log("now", now);

  // 現在は前日より未来か？
  console.log('now > now.minus(1, "days")', now > now.minus(1, "days"));

  // ISO-8601表記
  const format = now.toISO();
  console.log("format", format);

  // ISO-8601表記からオブジェクトを作る
  const date = DateTime.fromISO(format);
  console.log("date", date);

  // 日付だけを表記
  const formatDate = now.toISODate();
  console.log("formatDate", formatDate);

  // 現在に1日追加
  const addNow = now.plus(1, "days");
  console.log("addNow", addNow);

  // UTC表記
  const utc = now.toUTC();
  console.log("utc", utc);

  // サモア時間表記
  const samoa = now.setZone("Pacific/Apia");
  console.log("samoa", samoa);
})();

console.log("↓↓↓↓↓ date-fns ↓↓↓↓↓");

(function () {
  const { formatISO, sub, isBefore, add } = datefns;
  const { zonedTimeToUtc, utcToZonedTime } = require("date-fns-tz");

  // 現在時取得(date-fnsは独自オブジェクトを作らない)
  const now = formatISO(new Date());
  console.log("now", now);

  // 現在は前日より未来か？
  console.log(
    'now > now.minus(1, "days")',
    isBefore(new Date(), sub(1, "days"))
  );

  // ISO-8601表記
  const formatted = formatISO(new Date());
  console.log("formatted", formatted);

  // ISO-8601表記からオブジェクトを作る
  const date = new Date(formatted);
  console.log("formatted", formatted);

  // 日付だけを表記
  const formatDate = formatISO(new Date(), { representation: "date" });
  console.log("formatDate", formatDate);

  // 現在に1日追加
  const addNow = add(1, "days");
  console.log("addNow", addNow);

  // UTC表記
  const utc = zonedTimeToUtc(now);
  console.log("utc", utc);

  // サモア時間表記
  const samoa = utcToZonedTime(utc, "Pacific/Apia");
  console.log("samoa", samoa);
})();

console.log("↓↓↓↓↓ dayjs ↓↓↓↓↓");
