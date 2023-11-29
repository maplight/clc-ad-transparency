import { useSelector } from "react-redux";
import {
    Portal,
    Typography,
} from '@strapi/design-system';
import { useState, useEffect} from 'react';

import { useFetchClient } from '@strapi/helper-plugin';


const ListViewInstructions = () => {
    const [instructions, setInstructions] = useState('loading instructions');
    const { get } = useFetchClient();
    const apiID = useSelector((state : any) => state["content-manager_listView"].contentType.apiID);

    useEffect(() => {
      get(`/clc-ad?component=${apiID}`).then(res => {
        setInstructions(res.data);
      });
    }, [setInstructions]);

    const headerElement = document.querySelector('[data-strapi-header="true"]');

    return <Portal container = { headerElement }>
        <Typography>{ instructions }</Typography>
    </Portal>;
};

export default ListViewInstructions;
