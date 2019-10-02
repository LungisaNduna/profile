export default class ProjectRepository{
    // One can make this project OOP compliant by basing this on models
    // but it is unnecessary.

    constructor(githubRepoData){
        //you can replace this with your username
        //the API does not require any authentication
        this.userName = "LungisaNduna";
        this.projects = this.getProjectsFromGithubAPI(githubRepoData);
    }

    getProjectsFromGithubAPI = (githubRepoData) => {
        let allRepos = new Array();
        githubRepoData.forEach(repo => {
            repo['logoSource'] = this.getLogoSource(repo.name);
            allRepos.push(repo);
        });
        return allRepos;
    }

    getLogoSource = (projName) => {
        // this works because I upload a logo image with each repo
        // my logo is always a .png file named logo.png and sits at the root of the repo
        // one can have local files but that seemed like a lot of maintanance to update and I am lazy
        let logoSource;
        /* if (!some logic to check if the URL exists){
            return null;
        } */
        return logoSource;
    }

    filterHighlightProjects = (highlightedProjectNames) =>{
        let highlightProjectList = [];

        this.projects.forEach(project => {
            if (highlightedProjectNames.contains(project.name)){
                highlightProjectList.push(project);
            }
        });
        return highlightProjectList;
    }

    returnProjectList = () => this.projects;
    returnHighlightProjectList = (highlightedProjects) => this.filterHighlightProjects(highlightedProjects);
}