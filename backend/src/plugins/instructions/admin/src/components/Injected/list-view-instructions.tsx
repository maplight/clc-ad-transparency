const ListViewInstructions = () => {
    const headerElement = document.querySelector('[data-strapi-header="true"]');
    const instructionElement = document.createElement('p');
    instructionElement.appendChild(document.createTextNode('hello here are instructions'));
    headerElement?.appendChild(instructionElement);
    return <></>;
};
  
export default ListViewInstructions;
