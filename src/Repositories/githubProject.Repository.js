import $ from 'jquery';

export default class ProjectRepository{
    constructor(githubRepoData){
        this.projects = this.getProjectsFromGithubAPI(githubRepoData);
    }

    getProjectsFromGithubAPI = (githubRepoData) => {
        let allRepos = [];
        githubRepoData.forEach(repo => {
            repo['logoSourceUrl'] = this.getLogoSource(repo.name);
            if (repo.has_pages) {
                repo["pagesLink"] = this.getPagesLink(repo.name);
            }
            allRepos.push(repo);
        });
        return allRepos;
    }

    /* Need to resolve this issue
    checkResource = (url) =>{ 
        return new Promise(function(resolve, reject){
            $.get(url).done( resolve(url)).fail( reject(null))
        });
    }*/

    getLogoSource = (projName) => {
        // this works because I upload a logo image with each repo
        // my logo is always a .png file named logo.png and sits at the root of the repo
        // one can have local files but that seemed like a lot of maintanance to update and I am lazy
        return `https://github.com/LungisaNduna/${projName}/blob/master/logo.png?raw=true`;
        
    }



    getPagesLink = (projName) => {
        return `lungisanduna/github.io/${projName}/`;
    }

    filterHighlightProjects = (highlightedProjectNames) =>{
        let highlightProjectList = [];

        this.projects.forEach(project => {
            if (highlightedProjectNames.includes(project.name)){
                highlightProjectList.push(project);
            }
        });
        return highlightProjectList;
    }

    returnProjectList = () => this.projects;
    returnHighlightProjectList = (highlightedProjects) => this.filterHighlightProjects(highlightedProjects);
}