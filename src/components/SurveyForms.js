import React from 'react';
import './SurveyForms.css';

function SurveyForms() {
  return (
    <div className='survey-forms-container'>
      <h1>Encuestas de Satisfacción del Cliente</h1>
      <p>La retroalimentación es muy importante en Dead Critters. Por favor diga su opinión.</p>
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfb25R3V09nJuG3sAyaiMcV4hW6f4r8MFiNjO7bIt7XpHEbSA/viewform?embedded=true" width="640" height="1456" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
      
    </div>
  );
}

export default SurveyForms;