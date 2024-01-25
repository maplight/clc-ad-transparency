import { useSelector } from "react-redux";
import { useState, useEffect} from 'react';
import { useCMEditViewDataManager } from '@strapi/helper-plugin';


const EditViewButton = () => {
  const { slug } = useCMEditViewDataManager();
    useEffect(() => {
      if (slug === 'api::report.report') {
        const buttonElement = document.querySelector('[data-strapi-header="true"] button span');
        if (buttonElement) {
          buttonElement.textContent = 'Submit';
        }
      }
      return;
    });

    return;
};

export default EditViewButton;
