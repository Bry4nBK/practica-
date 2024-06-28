import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Buscador from "./Buscador";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';

const MiApi = () => {
  const [holidays, setHolidays] = useState([]);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchHolidays = async (setHolidays, setError) => {
    try {
      const response = await fetch("https://api.boostr.cl/feriados/en.json");
      // Verifica si la respuesta es exitosa 
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const json = await response.json();

      const sortedHolidays = json.data.sort(
        (a, b) => new Date(a.date) - new Date(b.date)
      );

      //  feriados ordenados en `holidays`
      setHolidays(sortedHolidays);
    } catch (error) {
      console.error("Error fetching data: ", error);
      setError(error.message);
    }
  };

  const filterHolidays = (holidays, search) =>
    holidays.filter((holiday) =>
      holiday.title.toLowerCase().includes(search.toLowerCase())
    );
  const handleSearch = (searchTerm) => setSearch(searchTerm);

  const handleSortAlphabetically = () =>
    setHolidays([...holidays].sort((a, b) => a.title.localeCompare(b.title)));
  const filteredHolidays = filterHolidays(holidays, search);

  useEffect(() => {
    fetchHolidays(setHolidays, setError);
    setLoading(false);
  }, []);

  return (
    <div className="container mt-5">
      <Buscador handleSearch={handleSearch} />
       {/* Renderiza de buscador */}
      {loading ? (
        <p className="mt-3">Cargando..</p>
      ) : (
        <Table responsive striped bordered hover variant="primary">
          <thead>
            <tr>
              <th>#</th>
              <th
                onClick={handleSortAlphabetically}
                 /* ornden a-z */
                style={{ cursor: "pointer" }}
              >
                Título <i className="bi bi-sort-alpha-down"></i>
              </th>
              <th>Fecha</th>
              <th>Tipo</th>
              <th>Detalles</th>
            </tr>
          </thead>
          <tbody>
            {filteredHolidays.map((holiday, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{holiday.title}</td>
                <td>{holiday.date}</td>
                <td>{holiday.type}</td>
                <td>{holiday.extra}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
      {error && <p className="mt-3 text-danger">Error: {error}</p>}
    </div>
  );
};

export default MiApi;
