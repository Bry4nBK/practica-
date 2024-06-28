import Form from "react-bootstrap/Form";

const Buscador = ({ handleSearch }) => {
  const handleChange = (e) => handleSearch(e.target.value);

  return (
    <Form className="mt-4 mb-3">
      <Form.Group className="mb-3">
        <Form.Control
          type="text"
          placeholder="Buscar días feriados..."
          onChange={handleChange}
          style={{ backgroundColor: "#d9edf7" }}
        />
      </Form.Group>
    </Form>
  );
};

export default Buscador;
