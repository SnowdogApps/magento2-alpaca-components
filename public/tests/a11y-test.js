'use-strict'

const options = {
        resultTypes: ['violations', 'incomplete']
      },
      critical = [
        'background: red',
        'color: white'
      ].join(';'),
      moderate = [
        'background: #d04301',
        'color: white'
      ].join(';'),
      element = [
        'background: green',
        'color: white'
      ].join(';'),
      baseStyles = [
        'background: transparent',
        'color: inherit'
      ].join(';');

function displayResults(results) {
  const violations = results.violations,
        incomplete = results.incomplete;

  if (violations.length) {
    console.warn('Check you accessibility errors')
    violations.forEach((item) => {
      let errorColor = (item.impact === ('critical' || 'serious')) ? critical : moderate;
      console.log(
        '%cImpact %s. %s. %s.\n%cElement: %s.\n%c%s, More information: %s',
        errorColor,
        item.impact,
        item.help,
        item.description,
        element,
        item.nodes[0].html,
        baseStyles,
        item.nodes[0].failureSummary,
        item.helpUrl
      );
    })
  };
  if (incomplete) {
    incomplete.forEach((item) => {
      console.log(item);
    })
  }
}

axe.run(
  document,
  options,
  function (err, results) {
    if (err) throw err;
    displayResults(results);
  }
);
