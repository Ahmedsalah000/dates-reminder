import React from 'react';
import {  Col, Row } from 'react-bootstrap';


const Calendar = ({ appointments }) => {
    return (
        <Row bg="dark" text="white" className="justify-content-center">
            <Col sm="8" className="">
                <div className="rectangle p-2">
                    {appointments.length ? (appointments.map((appointment) => {
                        return (
                            <div key={appointment.id} className="d-flex border-bottom mx-3 my-2">
                                <img className="img-avatar" src={appointment.image} alt="ahmed salah" />
                                <div className="px-4">
                                    <p className="d-inline fs-5">{appointment.name}</p>
                                    <p className="fs-6"> {appointment.date}</p>
                                </div>
                            </div>
                        )
                    })) : <h2 className="p-5 text-center">لا يوجد مواعيد</h2>}
                </div>
            </Col>
        </Row>
    );
};

export default Calendar;
