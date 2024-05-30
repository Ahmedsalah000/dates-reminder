import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { appointments } from '../data'

export const DatesCount = () => {
    return (

        <Row className="justify-content-center my-3">
            <Col sm="8" className="">
                لديك {appointments.length} مواعيد
            </Col>
        </Row>
    )
}
