import React, { useCallback, useEffect, useState } from "react";

export default function useTableData() {
  const [tableData, setTableData] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(async () => {
    const url =
      "https://67b6243107ba6e59083fe001.mockapi.io/api/pausa/location";

    try {
      setLoading(true);
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Error occurred while fetching your data!");
      }
      const data = await response.json();
      setTableData(data);
    } catch (e) {
      console.error("Error occurred while fetching data", e);
      setError(e);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { tableData, fetchData, error, loading };
}
