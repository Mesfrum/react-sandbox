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
            <th>Sr. No</th>
            {Object.keys(tableData[0]).map((col) => (
              <th key={col}>
                {col}
                <span className={`${styles.sortCaret}`}>^</span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData?.map((row, index) => {
            return (
              <tr key={row?.id}>
                <td>{index + 1}</td>
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
