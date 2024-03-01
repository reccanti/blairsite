/** @type {import('@svgr/babel-plugin-transform-svg-component').Template} */
function template(variables, { tpl }) {
  const customProps = tpl`{ hello }: { hello: string }`;
  console.log(customProps);

  // console.log(variables);
  return tpl`
${variables.imports};

${variables.interfaces};

const ${variables.componentName} = (${variables.props}) => (
  ${variables.jsx}
);

${variables.exports};
  `;
}

export default template;
