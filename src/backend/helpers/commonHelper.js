const moment = require("moment");

export function getCurrentDateTime(extraTime) {
  let min = 0;
  if (extraTime !== undefined) {
    min = extraTime;
  }

  let current_time = moment().add(min, "minutes").format("YYYY-MM-DD HH:mm:ss");

  return current_time;
}
