function renderLicenseBadge(license){}
function renderLicenselink(license){}
function renderLicenseSection(license){
    return 'Great Choice of License';
}
function generateMarkdown({title, repository, license}){
    return `# ${title} /n
    repository: ${repository} /n
    license: ${renderLicenseSection(license)}
    `;
}
module.exports = generateMarkdown