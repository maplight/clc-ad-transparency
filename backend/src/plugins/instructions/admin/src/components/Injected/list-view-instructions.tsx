import { useSelector } from "react-redux";
import {
    Portal,
    Typography,
} from '@strapi/design-system';

const ListViewInstructions = ({ strapi }) => {
    const apiID = useSelector((state : any) => state["content-manager_listView"].contentType.apiID);
    const headerElement = document.querySelector('[data-strapi-header="true"]');
    return <Portal container = { headerElement }>
        <Typography>hello here are instructions for { apiID } </Typography>
    </Portal>;
};
  
export default ListViewInstructions;
