import dayjs from "dayjs";
import "dayjs/locale/ja";
import "dayjs/plugin/customParseFormat";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";

dayjs.locale("ja");
dayjs.extend(timezone);
dayjs.extend(utc);
dayjs.extend(isSameOrAfter);

export const day = (...params: Parameters<typeof dayjs>) =>
  dayjs(...params).tz("Asia/Tokyo");
