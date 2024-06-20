"use client"

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Education = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      AOS.init({
        duration: 1200, // Animation duration in milliseconds
      });
    }
  }, []);

  return (
    <div
      className="bg-[#202b35] text-white text-center flex items-center justify-center"
      style={{ padding: "20px" }}
      data-aos="fade-up"
    >
      <table className="border">
        <thead className="border">
          <tr>
            <th>Course</th>
            <th>Institute</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>B.Sc in CSE</td>
            <td>SHEIKH BURHANUDDIN POST GRADUATE COLLEGE</td>
            <td>2021-2025</td>
          </tr>
          <tr>
            <td>Higher Secondary School</td>
            <td>DHAKA UDYAN GOVERNMENT COLLEGE, DHAKA</td>
            <td>2018</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Education;
