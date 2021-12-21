import { Card, Row } from "react-bootstrap";
import "./Kartu.css";

const Kartu = (props) => {
  return (
    <>
      <Row>
        <div className="background" onClick={props.onClose}>
          {props.data.map((listData, index) => {
            return (
              <Card className="kartu" key={index}>
                <div className="upper-container">
                  <img className="image-container" src={listData.ava} />
                </div>
                <div className="lower-container">
                  <h1>{listData.nama} </h1>
                  <h4>{listData.job} </h4>
                  <h4>{listData.phone} </h4>
                  <h4>{listData.email} </h4>
                </div>
              </Card>
            );
          })}
        </div>
      </Row>
    </>
  );
};

export default Kartu;
