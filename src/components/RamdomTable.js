import React from 'react';

function generateRandomData(rows, columns) {
    const data = [];
    for (let i = 0; i < rows; i++) {
        const row = [];
        for (let j = 0; j < columns; j++) {
            row.push(Math.floor(Math.random() * 1000)); // Random numbers between 0 and 999
        }
        data.push(row);
    }
    return data;
}

function RandomDataTable() {
    const rows = 5;
    const columns = 5;
    const data = generateRandomData(rows, columns);

    return (
        <table className="my-table">
            <thead>
                <tr>
                    <th>Column 1</th>
                    <th>Column 2</th>
                    <th>Column 3</th>
                    <th>Column 4</th>
                    <th>Column 5</th>
                </tr>
            </thead>
            <tbody>
                {data.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        {row.map((cellData, columnIndex) => (
                            <td key={columnIndex}>{cellData}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default RandomDataTable;
