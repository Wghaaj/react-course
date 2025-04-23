const List = ({ data = [], color: backColor }) => {
const tableStyle = {
    background: backColor,
    borderCollapse: "collapse",
    width: "100%",
};

const cellStyle = {
    border: "1px solid black",
    padding: "8px",
    textAlign: "center",
};

const headerStyle = {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "24px",
    marginBottom: "10px",
};

return data.length ? (
    <>
    <div style={headerStyle}>Animal groups</div>
    <table style={tableStyle}>
        <tbody>
        {data.map((group, rowIndex) => (
            <tr key={rowIndex}>
            <td style={{ ...cellStyle, fontWeight: "bold" }}>{group.category}</td>
            {group.animals.map((animal, colIndex) => (
                <td key={colIndex} style={{ ...cellStyle, color: animal.color }}>
                {animal.name}
                </td>
            ))}
            </tr>
        ))}
        </tbody>
    </table>
    </>
) : null;
};

export default List;  