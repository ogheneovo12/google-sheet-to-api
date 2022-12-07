export const extractRowData = (headerKeys: string[], row: any) =>
  headerKeys?.reduce((acc: any, currKey: string) => {
    acc[currKey] = row[currKey];
    return acc;
  }, {});
