import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme'
import GithubProjectCard from '../../Components/ProjectComponents/GithubProjectCard';
import { exportAllDeclaration } from '@babel/types';

describe('The Project Card Component', () => {

    let digiCardsData;
    let fillerData;
    let wrapper;

    beforeAll(() =>{
        digiCardsData = {
            name: "digital-cards",
            language : ["HTML"],
            has_pages : true,
            logoSourceUrl : "https://github.com/LungisaNduna/digital-Cards/blob/master/logo.png?raw=true",
            liveLink : "https://lungisanduna.github.io/digital-cards/",
        };
        fillerData = {
            name : "filler",
            language : ["C"],
            has_pages : false,
            logoSourceUrl : "https://github.com/LungisaNduna/filler/blob/master/logo.png?raw=true",
        }
    })

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<GithubProjectCard projInfo={fillerData} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    test('should show a link if github pages is installed', () => {
        wrapper = shallow(<GithubProjectCard projInfo={digiCardsData} />);
        expect(wrapper.find('.pagesLink').length).toBe(1);
    })

    test('should not show a link if there is no pages on the project repo', () => {
        wrapper = shallow(<GithubProjectCard projInfo={fillerData} />);
        expect(wrapper.find('.pagesLink').length).toBe(0);
    })

    test('should display an image div for each language', () => {
        wrapper = shallow(<GithubProjectCard projInfo={digiCardsData} />);
        expect(wrapper.find('.language').length).toBe(digiCardsData.language.length);
    })
    
    
    

    
})