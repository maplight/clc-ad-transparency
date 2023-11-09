import { useSelector } from "react-redux";
import {
    Portal,
    Typography,
} from '@strapi/design-system';

const instructionMap = {
    'ad-disclosure': 'Instructions for Ad Disclosures',
    'filing-period': 'Instructions for filing period',
    'report': 'Instructions for report',
}
const ListViewInstructions = ({ strapi }) => {
    const apiID = useSelector((state : any) => state["content-manager_listView"].contentType.apiID);
    const headerElement = document.querySelector('[data-strapi-header="true"]');
    return <Portal container = { headerElement }>
        <Typography>{ instructionMap[apiID]}</Typography>
    </Portal>;
};
  
export default ListViewInstructions;
