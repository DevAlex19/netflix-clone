import styled from "@emotion/styled";

export const Table = styled("table")({
  borderCollapse: "collapse",
  width: "100%",
});

export const TableRow = styled("tr")({
  borderBottom: "1px solid #e6e6e6",
  width: "100%",
  "&:last-child": {
    borderBottom: "none",
  },
});

export const TableData = styled("td")({
  fontSize: "1rem",
  padding: "1rem",
  width: "20%",
  fontWeight: "bold",
  color: "#737373",
  textAlign: "center",
});
