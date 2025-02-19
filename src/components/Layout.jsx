import React from "react";
import styles from "./layout.module.css";
import useTableData from "./hooks/useTableData";

export default function Layout() {
  const { tableData, loading, error } = useTableData();

  if (error) {
    return <div>Something went wrong!</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (tableData?.length < 1) {
    return <div>No data Found!</div>;
  }
  return (
    <div className={styles.root}>
      <table>
        <thead>
          <tr>
            {Object.keys(tableData[0]).map((col) => (
              <th key={col}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData?.map((row) => {
            return (
              <tr key={row?.id}>
                {Object.values(row).map((val) => {
                  return <td key={`${val}`}>{val}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
