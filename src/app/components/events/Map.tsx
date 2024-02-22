import React, { Suspense } from "react";
import { motion } from "framer-motion";
function Map() {
  return (
    <>
      <iframe
        style={{
          width: "90vw",
          height: "90vh",
          borderRadius: "40px",
          display: "flex",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "2.5rem",
        }}
        loading="lazy"
        
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d9234.292154755225!2d-1.2826042070464063!3d53.348341620737095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2suk!4v1708575886843!5m2!1sen!2suk"
      ></iframe>
      
    </>
  );
}

export default Map;
