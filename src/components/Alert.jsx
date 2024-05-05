/* eslint-disable react/prop-types */
import { Alert } from "react-bootstrap";

const Alerta = ({
  textoSuccess,
  textoError,
  colorSuccess,
  colorError,
  alert,
}) => {
  let texto = "";
  let color = "";
  if (alert == 0) {
    return <></>;
  } else {
    if (alert == 1) {
      texto = textoError;
      color = colorError;
    } else if (alert == 2) {
      texto = textoSuccess;
      color = colorSuccess;
    }
    return (
      <>
        <Alert className="mt-3 p-1" variant={color}>
          <p>{texto}</p>
        </Alert>
      </>
    );
  }
};

export default Alerta;
