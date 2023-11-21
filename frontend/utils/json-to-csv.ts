// Utility function to convert javascript object to csv
const jsonToCsv = (json: any) => {
  const fields = Object.keys(json[0]);
  const replacer = (key: any, value: any) => (value === null ? "" : value);
  let csv = json.map((row: any) =>
    fields
      .map((fieldName) => JSON.stringify(row[fieldName], replacer))
      .join(",")
  );
  csv.unshift(fields.join(","));
  csv = csv.join("\r\n");
  return csv;
};

export default jsonToCsv;
