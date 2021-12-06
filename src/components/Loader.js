import { Spinner } from "react-bootstrap";


const Loader = () => {
  return (
    <div className="loader mt-5 pt-5">
      <div className="text-center">
          Please Wait   
          <Spinner className="me-2" animation="grow" size="sm" />
          <Spinner className="me-2" animation="grow" size="sm" />
          <Spinner className="me-2" animation="grow" size="sm" variant="success" />
          <Spinner className="me-2" animation="grow" size="sm" variant="light" />
          
        </div>
    </div>
  );
};

export default Loader;
