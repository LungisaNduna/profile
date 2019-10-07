import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme'
import GithubProjectContainer from '../../Components/ProjectComponents/GithubProjectContainer'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<GithubProjectContainer githubProjects={[]} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('The GithubProjectContainer', () => {

    let projectList;
    var container;

    describe('When API pull succeeds', () => {
        
        beforeEach(() => {
            //mock a list of projects to work with
            projectList = [];
            projectList.push({
                id: 154665803,
                name: "filler",
                html_url: "https://github.com/LungisaNduna/filler",
                description: "42 exercise to create an AI player for the game filler.",
                language: "C",
                has_pages: false,
                archived: false,
            });
            projectList.push({
                id: 136297849,
                name: "lem-in",
                html_url: "https://github.com/LungisaNduna/lem-in",
                description: "my wtc lem-in project",
                language: "C",
                has_pages: false,
                archived: false,

            });
            projectList.push({
                id: 209755858,
                name: "mycv",
                html_url: "https://github.com/LungisaNduna/mycv",
                description: "An online version of my CV built in react",
                language: "JavaScript",
                has_pages: true,
                archived: false,
            });
            projectList.push({
                id: 154667960,
                name: "push_swap",
                html_url: "https://github.com/LungisaNduna/push_swap",
                description: "42 exercise to create an algorithm to play a simple sorting game",
                language: "C",
                has_pages: false,
                archived: false, 
            });
            projectList.push({
                id: 211107109,
                name: "UnityFundementals",
                html_url: "https://github.com/LungisaNduna/UnityFundementals",
                description: "Completing a unity tutorial from Pluralsight",
                language: "C#",
                has_pages: false,
            });
            //create the container we will work with
            container = shallow(<GithubProjectContainer githubProjects={projectList}/>);
        });

        test('should display a list of projects equal to those pulled', () => {
            expect(container.find("projCard").length).toBe(projectList.length);
        })
        
    });

    describe('When no projects exist', () => {
        //this seems like an unnecessary test
        beforeEach(() => {
            container = shallow(<GithubProjectContainer githubProjects={null}/>);
        });
    });

    describe('When API pull fails', () => {
        beforeEach(() => {
            container = shallow(<GithubProjectContainer githubProjects={null}/>);
        });
    });
})
