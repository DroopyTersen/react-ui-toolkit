import * as dateUtils from "../../utils/dateUtils";
import { DateUnit } from "../../utils/dateUtils";

export const VALUE_FORMAT = "YYYY-MM-DD";

export const formatValue = (d) => dateUtils.formatDate(d, VALUE_FORMAT);

export const prev = (date: string, unit: DateUnit) => dateUtils.prev(date, unit, VALUE_FORMAT);
export const next = (date: string, unit: DateUnit) => dateUtils.next(date, unit, VALUE_FORMAT);
