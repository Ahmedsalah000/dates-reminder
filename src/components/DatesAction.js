import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'

export const DatesAction = ({ deleteData, ViewData }) => {
    return (

        <Row className="justify-content-center my-2">
            <Col sm="8" className="d-flex justify-content-between">
                <Button onClick={deleteData} className="btn-style p-2 "> مسح الكل</Button>
                
                <Button onClick={ViewData} className="btn-style p-2 "> عرض الكل</Button>
            </Col>
        </Row>
    )
}
