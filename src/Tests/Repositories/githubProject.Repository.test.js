import ProjectRepository from '../../Repositories/githubProject.Repository';
import GithubRepoData from '../mockInfo/gitHubAPIReturn.json';

describe('Github Repository', () => {

    let ghProjRepo;

    beforeAll(() => {
        ghProjRepo = new ProjectRepository(GithubRepoData);
    })
    
    test('should returns a full list of my github Repos', () => {
        expect(ghProjRepo.returnProjectList().length).toBe(12);
    });

    test('should return a list of highlighted list of projects', () => {
        let highlightProjectsNames = ["profile", "push_swap", "lem-in"];
        let highlightProjects = ghProjRepo.returnHighlightProjectList(highlightProjectsNames);
        expect(highlightProjects.length).toBe(highlightProjectsNames.length);
    });

    test('should add a logo source URL', () => {
        let allRepos = ghProjRepo.returnHighlightProjectList(["filler"])
        let fillerData = allRepos[0];

        //expect(matchaData.logoSourceUrl).toBeNull();
        expect(fillerData.logoSourceUrl).toBe("https://github.com/LungisaNduna/filler/blob/master/logo.png?raw=true")
    })

    test.skip('should add a logo source URL value of null', () => {
        let allRepos = ghProjRepo.returnHighlightProjectList(["matcha"])
        let matchaData = allRepos[0];

        expect(matchaData.logoSourceUrl).toBeNull();
    })

    test.skip('should add pages link if the project has pages', () => {
        let profileData = ghProjRepo.returnHighlightProjectList(['profile'])[0];
        expect(profileData.pagesLink).toBeDefined();
    })
    
    test('should not add pages link if project does not have pages', () => {
        let fillerData = ghProjRepo.returnHighlightProjectList(['filler'])[0];
        expect(fillerData.pagesLink).toBeUndefined();
    })
    
    
    
    
})
