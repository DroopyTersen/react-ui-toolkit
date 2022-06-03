import { useMemo } from "react";
import { isIOS } from "../utils/utils";

const NEW_LINE = "\r\n";

function convertToCsv<T>(items: Array<T>, columns: ColumnsProps) {
  let content = [];
  for (const column in columns) {
    content.push(prepCsvValue(columns[column].title));
  }

  let csv = content.join(",") + NEW_LINE;

  for (const item of items) {
    content = [];

    for (const column in columns) {
      content.push(
        columns[column].format
          ? prepCsvValue(columns[column].format(item[column]))
          : prepCsvValue(item[column])
      );
    }

    csv += content.join(",") + NEW_LINE;
  }

  return csv;
}

function prepCsvValue(value: string) {
  value = value || "";
  const useQuotes =
    value.indexOf(",") >= 0 ||
    value.indexOf('"') >= 0 ||
    value.indexOf("\r") >= 0 ||
    value.indexOf("\n") >= 0;

  if (useQuotes) {
    return `"${value.replaceAll('"', '""')}"`;
  }
  return value;
}

interface ColumnsProps {
  [key: string]: { title: string; format?: (value) => string };
}

export interface DataExportProps {
  columns: ColumnsProps;
  format?: "csv";
  fileName: string;
}

function exportData(data: string, fileName: string) {
  if (!isIOS()) {
    const blob = new Blob([data]);
    const link = document.createElement("a");
    link.download = fileName;
    link.href = URL.createObjectURL(blob);
    link.click();
    URL.revokeObjectURL(link.href);
  } else {
    alert("This feature is not available on this device. Please use another device.");
  }
}

export function useDataExport<T>(items: Array<T>, props: DataExportProps) {
  const exportFn = useMemo(() => {
    if (!items || !props) {
      return () => {};
    }

    let data = "";
    let format = props.format || "csv";
    switch (format) {
      case "csv":
        data = convertToCsv(items, props.columns);
        break;

      default:
        // Shouldn't ever happen with typescript type checking
        break;
    }

    return () => exportData(data, props.fileName);
  }, [items, props]);

  return exportFn;
}
