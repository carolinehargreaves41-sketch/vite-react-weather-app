import React from "react";
import { Alert, Spinner, Row, Col } from "react-bootstrap";
import ForecastDay from "./ForecastDay";
import "./ForecastList.css";

const ForecastList = ({ forecastData, isLoading, error, unit }) => {
  if (isLoading) {
    return (
      <div className="text-center my-4" aria-live="polite" aria-busy="true">
        <Spinner animation="grow" variant="light" role="status">
          <span className="visually-hidden">Loading forecast...</span>
        </Spinner>
      </div>
    );
  }

  if (error) {
    return (
      <Alert variant="secondary" className="alert-text" role="alert">
        {error}
      </Alert>
    );
  }

  if (!forecastData) return null;

  if (!Array.isArray(forecastData.daily) || forecastData.daily.length === 0) {
    return (
      <p className="text-center text-muted">No forecast data available.</p>
    );
  }

  const forecastDays = forecastData.daily.slice(0, 5);

  return (
    <section
      className="forecast-list-section"
      aria-labelledby="forecast-heading"
    >
      <h2
        id="forecast-heading"
        className="forecast-list-title text-center mb-3"
      >
        5-Day Forecast
      </h2>

      <ul className="forecast-list-ul p-0" role="list">
        <Row className="g-2 justify-content-center">
          {forecastDays.map((day) => (
            <Col
              key={day.time}
              as="li"
              xs={6} /* Mobile: 2 cards per row (6/12 columns each) */
              sm={4} /* Small tablet: 3 cards per row (4/12 columns each) */
              lg={true} /* Large screens: all 5 cards share the row equally */
              className="forecast-list-item"
            >
              <ForecastDay day={day} unit={unit} />
            </Col>
          ))}
        </Row>
      </ul>
    </section>
  );
};

export default ForecastList;
