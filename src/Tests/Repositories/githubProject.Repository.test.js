import ProjectRepository from '../../Repositories/githubProject.Repository';
import * as GithubRepoData from '../mockInfo/gitHubAPIReturn';

describe('Github Repository', () => {

    let ghProjRepo;

    beforeEach(() => {
        ghProjRepo = new ProjectRepository(GithubRepoData);
    });

    test('should returns a full list of my github Repos', () => {
        expect(ghProjRepo.returnProjectList().length).toBe(9);
    });

    test('should return a list of highlighted list of projects', () => {
        let highlightProjectsNames = [];
        let highlightProjects = ghProjRepo.returnHighlightProjectList(highlightProjectsNames);
        expect(highlightProjects.length).toBe(highlightProjectsNames.length);
    })
    
    
    
})
