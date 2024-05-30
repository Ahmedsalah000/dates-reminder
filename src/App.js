import React, { useEffect, useState } from "react";
import { appointments } from "./data";
import { DatesCount } from "./components/DatesCount";

import { Container } from "react-bootstrap";
import Calendar from "./components/Calendar";
import { DatesAction } from "./components/DatesAction";

function App() {
  const [appointment, setAppointment] = useState(appointments)
  useEffect(() => {
    setAppointment([])
  }, [])
  const handleDelete = () => {
    setAppointment([])
  }
  const handleViewData = () => {
    setAppointment(appointment)
  }
  return (
    <div className="font color-body">
      <Container className="py-5">
        <h1 className="mt-4 text-black">مرحبًا بك في تطبيق تذكير بالمواعيد</h1>
        <p className="text-black">
          يساعدك هذا التطبيق في إدارة مواعيدك وتنظيم وقتك بكفاءة.
        </p>
        <DatesCount />
        <Calendar appointments={appointments} />
        <DatesAction deleteData={handleDelete} ViewData={handleViewData} />
      </Container>
    </div>
  );
}

export default App;
